import { FC } from "react";
import { useForm } from "@mantine/form";
import { ILoginFormValues } from "./helpers";

const Login = () => {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.username) {
        errors.username = "Email is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
  });

  const handleSubmit = async (values: ILoginFormValues) => {
    const res = await fetch("http://localhost:6060/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
    }

    console.log("data", data);
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <input placeholder="username" {...form.getInputProps("username")} />
        <input
          type="password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <button id="signin" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
