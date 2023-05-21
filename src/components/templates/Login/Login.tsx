import { Button } from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Form from "@/components/molecules/Form/Form";
import React, { useState } from "react";
import MessageError from "@/components/atoms/MessageError/MessageError";
import { POST } from "@/utils";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(false);
  const submit = () => {
    if (username.trim() !== "") {
      try {
        const body = {
          username: username,
        };
        const result = POST({ url: "login", params: body });
        console.log("result", result);
      } catch (error: any) {
          setErr(error)
      }
    }
  };

  return (
    <div className='w-full h-screen bg-cyan-800 flex justify-center items-center'>
      <div className='w-96 bg-white h-64 p-5 rounded'>
        <Form onSubmit={submit}>
          <Input
            type='text'
            title='Username'
            setValue={(e) => setUsername(e)}
            value={username}
          />
          <Input
            type='password'
            title='Password'
            setValue={(e) => setPassword(e)}
            value={password}
          />
          {err ? <MessageError title='Veuillez mettre un identifiant' /> : null}
          <Button title='Enter' type='submit' />
        </Form>
      </div>
    </div>
  );
}
