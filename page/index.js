
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState({
    title: "",
    tags: "",
    description: "",
  });

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>CraftFlow Hub</h1>
      <h2>Create Product</h2>

      <input
        placeholder="Product Title"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
      />

      <input
        placeholder="Tags (comma separated)"
        value={product.tags}
        onChange={(e) => setProduct({ ...product, tags: e.target.value })}
        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
      />

      <textarea
        placeholder="Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px", height: "100px" }}
      />

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Save Product
      </button>
    </div>
  );

