import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <Input
        name="input"
        type="text"
        placeholder="Add Todo"
      />
      <Button type="submit" text="Add" />
    </Form>
  );
};

export default AddTodo;
