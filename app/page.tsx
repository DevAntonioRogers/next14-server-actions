import { PrismaClient } from "@prisma/client";

import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import AddTodo from "@/components/shared/AddTodo";
import EditTodo from "@/components/shared/EditTodo";
import DeleteTodo from "@/components/shared/DeleteTodo";
import Todo from "@/components/shared/Todo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center bg-gray-200">
      <span className="text-3xl font-extrabold uppercase">
        To-do-app
      </span>
      <h1 className=" text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2">
          Server Actions
        </span>
      </h1>

      <div className="flex justify-center flex-col items-center w-[800px] ">
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center  mt-10 w-full">
          {data.map((todo) => (
            <Todo todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
