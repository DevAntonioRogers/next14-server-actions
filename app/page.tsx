import { PrismaClient } from "@prisma/client";

import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import AddTodo from "@/components/shared/AddTodo";
import EditTodo from "@/components/shared/EditTodo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
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
    <div className="w-screen h-screen flex justify-center flex-col items-center">
      <AddTodo />
      {data.map((todo) => (
        <div className="flex gap-1">
          <h1>{todo.title}</h1>
          <EditTodo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default Home;
