import Form from "@/components/Form/Form";
import Tasks from "@/components/Task/Tasks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="todo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-full md:max-w-md">
        <h2 className="mt-20 text-center text-4xl font-extrabold tracking-wide text-teal-300">
          My Task List
        </h2>
        <div className="px-4">
          <Form />
          <Tasks />
        </div>
      </main>
    </>
  );
}
