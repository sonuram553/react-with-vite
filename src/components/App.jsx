import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import MultiValueField from "./MultiValueField";

const App = () => {
  const { register, setValue, control, handleSubmit } = useForm({
    defaultValues: {
      authors: [{ value: "" }],
    },
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <MultiValueField
        name="authors"
        control={control}
        register={register}
        setValue={setValue}
      />
    </form>
  );
};

export default App;
