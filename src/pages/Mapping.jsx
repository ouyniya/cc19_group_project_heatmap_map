import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function Mapping() {

    const [data, setData] = useState([]);

  useEffect(() => {
    const rows = [
      { COUNTRY: "United States", CODE: "USA", "GDP (BILLIONS)": "17348" },
      { COUNTRY: "China", CODE: "CHN", "GDP (BILLIONS)": "10360" },
      { COUNTRY: "Japan", CODE: "JPN", "GDP (BILLIONS)": "4601" },
      { COUNTRY: "Germany", CODE: "DEU", "GDP (BILLIONS)": "3861" }
    ];

    const unpack = (rows, key) => rows.map(row => row[key]);

    setData([
      {
        type: "choropleth",
        locations: unpack(rows, "CODE"),
        z: unpack(rows, "GDP (BILLIONS)").map(Number), // Convert GDP to numbers
        text: unpack(rows, "COUNTRY"),
        colorscale: [
          [0, "rgb(5, 10, 172)"],
          [0.35, "rgb(40, 60, 190)"],
          [0.5, "rgb(70, 100, 245)"],
          [0.6, "rgb(90, 120, 245)"],
          [0.7, "rgb(106, 137, 247)"],
          [1, "rgb(220, 220, 220)"]
        ],
        autocolorscale: false,
        reversescale: true,
        marker: {
          line: {
            color: "rgb(180,180,180)",
            width: 0.5
          }
        },
        colorbar: {
          autotic: false,
          tickprefix: "$",
          title: { text: "GDP<br>Billions US$" }
        }
      }
    ]);
  }, []);

  const layout = {
    title: {
      text: '2014 Global GDP<br>Source: <a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html"> CIA World Factbook</a>'
    },
    geo: {
      showframe: false,
      showcoastlines: false,
      projection: {
        type: "mercator"
      }
    }
  };


  return (
    <div>
      Mapping
      <Plot data={data} layout={layout} style={{ width: "700px", height: "700px" }} />
    </div>
  );
}

export default Mapping;
