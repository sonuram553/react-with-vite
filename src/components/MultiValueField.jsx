import React from "react";
import { useFieldArray } from "react-hook-form";

const MultiValueField = ({ register, control, name }) => {
  const { fields, append } = useFieldArray({ control, name });

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index === fields.length - 1) {
        append({ name: "" });
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
      {fields.map((field, index) => (
        <input
          type="text"
          key={field.id}
          style={styleInput(index)}
          {...register(`authors.${index}.value`)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default MultiValueField;
