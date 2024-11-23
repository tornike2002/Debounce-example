import React, { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  console.log(debouncedSearchTerm);

  const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Mango"];

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 2000)
    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm])

  useEffect(() => {
    if (searchTerm) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(items);
    }
  }, [debouncedSearchTerm]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <ul>
        {results.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
