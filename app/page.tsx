"use client";
import { usePlayersData } from "@/hooks/usePlayersData";

export default function Home() {
  const { data } = usePlayersData();
  console.log(data);
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
