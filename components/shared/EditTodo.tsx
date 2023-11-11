"use client";

import { edit } from "@/app/actions";
import Form from "../ui/Form";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";

const EditTodo = ({ todo }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
  return (
    <div className="flex gap-5">
      <button onClick={handleEdit}>
        <BiEdit />
      </button>
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

          <button type="submit">Save</button>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
