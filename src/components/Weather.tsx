import { useEffect, useState } from "react";
import { Period } from "../types/types";

export default function Weather() {
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    getPeriod();
  }, []);

  function getPeriod() {
    forecastDetroit().then((response: { data: any }) => {
      console.log(response.data);
      setPeriods(response.data.properties.periods);
    });
  }

  return (
    <div>
      <h1>Weather Forecast</h1>

      <div>
        <ul>
          {periods.map((period) => (
            <li key={period.name}>
              <div>{period.name}</div>
              <div>{period.temperature}</div>

              <img src={period.icon}></img>
              <div>{period.detailedForecast}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function forecastDetroit() {
  throw new Error("Function not implemented.");
}
