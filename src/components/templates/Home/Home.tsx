import React from "react";
import { MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";

export interface HomeTemplateProps {
  id: string;
  user: string;
  pass: string;
}
export default function HomeTemplate({ id, pass, user }: HomeTemplateProps) {
  return (
    <div className="h-screen w-full">
      <MultiChatWindow username={user} />
      <MultiChatSocket projectId={id} username={user} secret={pass} />
    </div>
  );
}
