import { Button } from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Form from "@/components/molecules/Form/Form";
import React, { useState } from "react";
import MessageError from "@/components/atoms/MessageError/MessageError";

export default function Login() {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);
  const submit = () => {
    // if (username.trim() !== "") {
    //   axios
    //     .post("/api/login", { username })
    //     .then((res) => {
    //       // redirect to home page
    //     })
    //     .catch((error) => {
    //       setErr(true);
    //     });
    // }
  };

  
  return (
    <div className='w-full h-screen bg-cyan-800 flex justify-center items-center'>
      <div className='w-96 bg-white h-48 p-5 rounded'>
        <Form onSubmit={submit}>
          <Input
            type='text'
            title='Username'
            setValue={(e) => setUsername(e)}
            value={username}
          />
          {err ? <MessageError title='Veuillez mettre un identifiant' /> : null}
          <Button title='Enter' type='submit' />
        </Form>
      </div>
    </div>
  );
}
