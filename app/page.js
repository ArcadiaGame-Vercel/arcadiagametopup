"use client";

import { useState } from "react";

const products = [
  { name: "86 Diamonds", price: "₱49" },
  { name: "172 Diamonds", price: "₱95" },
  { name: "257 Diamonds", price: "₱140" },
];

export default function Home() {
  const [userId, setUserId] = useState("");
  const [server, setServer] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <main style={{ padding: 20 }}>
      <h1>ARCHEL TOP-UP</h1>

      <input placeholder="User ID" onChange={(e)=>setUserId(e.target.value)} />
      <input placeholder="Server" onChange={(e)=>setServer(e.target.value)} />

      <h3>Select Diamonds</h3>
      {products.map((p,i)=>(
        <button key={i} onClick={()=>setSelected(p)}>
          {p.name} - {p.price}
        </button>
      ))}

      <h3>Summary</h3>
      <p>{userId}</p>
      <p>{server}</p>
      <p>{selected?.name}</p>

      <button onClick={()=>alert("Order Submitted!")}>
        Confirm Order
      </button>
    </main>
  );
}
