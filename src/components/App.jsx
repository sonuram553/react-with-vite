import React from "react";
import { useForm } from "react-hook-form";
import MultiValueField from "./MultiValueField";

const App = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      authors: [{ value: "" }],
    },
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <MultiValueField name="authors" control={control} register={register} />
    </form>
  );
};

export default App;
