import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import MultiValueField from "./MultiValueField";

const App = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      authors: [{ value: "" }],
    },
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <MultiValueField register={register} control={control} name="authors" />
    </form>
  );
};

export default App;
