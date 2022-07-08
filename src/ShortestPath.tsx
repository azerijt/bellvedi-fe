import { useState, useEffect } from "react";
import { createStructure } from "/Users/user/Developer/bellvedi-fe/src/utils/createStructure";
import { populateGraph, calculateShortest } from "./utils/populateGraph.js";

interface ShortestPathProps {
  from_tiploc: string;
  to_tiploc: string;
  distance: number;
}

export default function ShortestPath(): JSX.Element {
  const [allStations, setAllStations] = useState<ShortestPathProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/stations");
      const jsonBody = await response.json();
      setAllStations(jsonBody);
    };
    fetchData();
  }, []);

  const nodes = createStructure(allStations);
  const graph = populateGraph(nodes);

  //const shortest = calculateShortest(graph, start, end)

  return (
    <div>
      <h1>Shortest Routes</h1>
    </div>
  );
}
