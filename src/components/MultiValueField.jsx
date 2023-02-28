import React from "react";
import { useFieldArray, useWatch } from "react-hook-form";

const MultiValueField = ({ register, control, name }) => {
  const { fields, append, remove } = useFieldArray({ control, name });
  const values = useWatch({ name, control });

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addValues(index);
    }
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

  return (
    <div className="mv-field">
      {fields.map((field, index) => {
        const { onBlur, ...rest } = register(`${name}.${index}.value`);

        return (
          <input
            {...rest}
            type="text"
            key={field.id}
            onBlur={(e) => {
              onBlur(e);
              addValues(index);
            }}
            style={styleInput(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default MultiValueField;
