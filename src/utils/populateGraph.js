// eslint-disable-next-line
import Graph from "node-dijkstra";

//const Graph = require('node-dijkstra')

export function populateGraph(data) {
  const route = new Graph(data);
  return route;
}

export function calculateShortest(route, start, end) {
  const shortest = route.path(start, end, { cost: true });
  return shortest;
}
