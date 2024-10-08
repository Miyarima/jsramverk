import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllDocuments() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://dida-jogo19-dv1677-h24-lp1-aga5c6ctgsc5h3fj.northeurope-01.azurewebsites.net/docs"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("An Error has occured");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="docs-container">
      {data.data.map((item) => (
        <Link className="doc-link" to={`document/${item._id}`} key={item._id}>
          <div>
            <div className="doc"></div>
            <h3>{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AllDocuments;
