import React from "react";
import "./covidList.css";

export default function WithCovidList({ data }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="trRender">
            <th className="th">Countries</th>
            <th className="th">New Confirmed</th>
            <th className="th">New Deaths</th>
            <th className="th">New Recovered</th>
            <th className="th">Total Confirmed</th>
            <th className="th">TotalDeaths</th>
            <th className="th">TotalRecovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.Country}
                </span>
              ))}
            </td>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.NewConfirmed}
                </span>
              ))}
            </td>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.NewDeaths}
                </span>
              ))}
            </td>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.NewRecovered}
                </span>
              ))}
            </td>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.TotalConfirmed}
                </span>
              ))}
            </td>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.TotalDeaths}
                </span>
              ))}
            </td>
            <td>
              {data.map((item, index) => (
                <span key={index} className="item">
                  {item.TotalRecovered}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
