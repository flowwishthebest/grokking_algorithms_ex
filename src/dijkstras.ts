const dijkstrasGraph = new Map<string, Map<string, number>>()
    .set('start', new Map([['a', 6], ['b', 2]]))
    .set('a', new Map([['end', 1]]))
    .set('b', new Map([['a', 3], ['end', 5]]))
    .set('end', new Map())

const costs = new Map<string, number>()
    .set('a', 6)
    .set('b', 2)
    .set('end', Infinity);

const parents = new Map()
    .set('a', 'start')
    .set('b', 'start')
    .set('end', null);

const processed = [];

function findLowestCostNode(costs: Map<string, number>): string {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (const [node, cost] of costs.entries()) {
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }

    return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
    const cost = costs.get(node);
    const neighbors = dijkstrasGraph.get(node);

    for (const [n, c] of neighbors.entries()) {
        const newCost = c + cost;
        if (costs.get(n) > newCost) {
            costs.set(n, newCost);
            parents.set(n, node);
        }
    }

    processed.push(node);
    node = findLowestCostNode(costs);
}

console.log(costs);
