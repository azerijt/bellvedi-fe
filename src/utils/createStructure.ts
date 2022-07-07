

interface ShortestPathProps {
  from_tiploc: string;
  to_tiploc: string;
  distance: number;
}
interface StationRoutesProps {
  from_tiploc: string;
  neighbors: {
    to_tiploc: string;
    distance: number;
  };
}

function createObject(allStations: ShortestPathProps[]): {} {
  let stations = {};
  const start = allStations[0].from_tiploc;

  allStations.forEach((station) => {
    const pair = { [station.to_tiploc]: station.distance };
    stations = { ...stations, ...pair };
  });
  const stationObject = { [start]: stations };

  return stationObject;
}

export function createStructure(allStations: ShortestPathProps[]): {} {
  const unique = [
    ...new Set(allStations.map((station) => station.from_tiploc)),
  ];
  let nodes = [];
  for (const i of unique) {
    const startStationRoutes = allStations.filter(
      (station) => station.from_tiploc === i
    );
    const stationAndRoutes = createObject(startStationRoutes);
    nodes.push(stationAndRoutes);
  }

  return nodes;
}
