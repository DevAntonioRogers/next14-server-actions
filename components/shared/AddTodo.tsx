import { create } from "@/app/actions";
import Form from "../ui/Form";
import Input from "../ui/Input";

const AddTodo = () => {
  return (
    <Form action={create}>
      <Input
        name="input"
        type="text"
        placeholder="Add Todo"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default AddTodo;
