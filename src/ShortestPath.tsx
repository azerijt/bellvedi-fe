import { useState, useEffect } from "react";



interface ShortestPathProps {
  from_tiploc: string;
  to_tiploc: string;
  distance: number;
}


const start = "ABCWM";
const end = "CMBH";


export default function ShortestPath(): JSX.Element {
  const [allStations, setAllStations] = useState<ShortestPathProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/stations');
      const jsonBody = await response.json();
      setAllStations(jsonBody)
      
    };
    fetchData();
  }, []);


  return (
    <div>
        <p>help</p>
    </div>
  )
}
