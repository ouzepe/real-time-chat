import React, { useContext } from "react";
export interface HomeTemplateProps {
  user: string;
  pass: string;
}
export default function HomeTemplate({ pass, user }: HomeTemplateProps) {
  return <div className='h-screen w-full bg-cyan-800'></div>;
}
