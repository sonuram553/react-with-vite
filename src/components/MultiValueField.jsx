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

  return (
    <div className="mv-field">
      {fields.map((field, index) => (
        <input
          type="text"
          key={field.id}
          {...register(`authors.${index}.name`)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default MultiValueField;
