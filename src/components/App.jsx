import React from "react";
import { useForm } from "react-hook-form";
import MultiValueField from "./MultiValueField";

const App = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      authors: [{ value: "sonu ram" }, { value: "sonu ram" }, { value: "" }],
    },
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <MultiValueField
        name="authors"
        control={control}
        register={register}
        error={errors["authors"]}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
