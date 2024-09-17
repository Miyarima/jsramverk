import React, { useState, useEffect } from "react";

function AllDocuments() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://dida-jogo19-dv1677-h24-lp1-aga5c6ctgsc5h3fj.northeurope-01.azurewebsites.net/"
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
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        {data.data.map((item) => (
          <a className="doc-link" href={`/${item._id}`} key={item._id}>
            <div>
              <div className="doc"></div>
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AllDocuments;
