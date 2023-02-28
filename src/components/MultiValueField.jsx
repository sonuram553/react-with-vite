import React from "react";
import { useFieldArray, useWatch } from "react-hook-form";

const MultiValueField = ({ register, control, name, error }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
    rules: {
      minLength: { value: 2, message: "Enter at least one author" },
    },
  });
  const values = useWatch({ name, control });

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addValues(index);
    }
  };

  const handleOnBlur = (index) => {
    if (index < fields.length - 1 && !values[index].value.trim()) {
      remove(index);
      return;
    }
    addValues(index);
  };

  const addValues = (index) => {
    const size = values.length;

    if (index === size - 1) {
      const text = values[size - 1].value.trim();

      if (text) {
        remove(index);
        text
          .split(",")
          .forEach(
            (value) => value && append({ value }, { shouldFocus: false })
          );
        append({ value: "" });
      }
    }
  };

  const styleInput = (index) => {
    if (index !== fields.length - 1) {
      const size = fields[index].value.length;
      return { width: (size < 30 ? size : 30) + "ch" };
    }

    return {};
  };

  const renderError = () => {
    let msg = error?.root?.message;
    if (msg) return <p className="mv-field__error-msg">{msg}</p>;
    return null;
  };

  return (
    <div className="mv-field">
      {fields.map((field, index) => {
        return (
          <input
            type="text"
            key={field.id}
            style={styleInput(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={index === fields.length - 1 ? "0" : "-1"}
            {...register(`${name}.${index}.value`, {
              onBlur: handleOnBlur,
            })}
          />
        );
      })}
      {renderError()}
    </div>
  );
};

export default MultiValueField;
