"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Button from "../ui/Button";

const EditTodo = ({ todo }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
  return (
    <div className="flex gap-5">
      <Button
        onClick={handleEdit}
        text={<BiEdit />}
        actionButton
      />

      {editTodo ? (
        <Form action={edit}>
          <input
            name="inputId"
            value={todo.id}
            className="border-gray-700 border"
            type="hidden"
          />

          <input
            type="text"
            name="newTitle"
            placeholder="Edit Todo..."
            className="border-gray-700 border"
          />

          <Button
            type="submit"
            classname="bg-orange-700"
            text="Save"
          />
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
