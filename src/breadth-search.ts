const graph = {};

graph['you'] = ['Alice', 'Bob', 'Claire'];
graph['Bob'] = ['Anuj', 'Peggy'];
graph['Alice'] = ['Peggy']
graph['Claire'] = ['Thom', 'Jonny'];
graph['Anuj'] = [];
graph['Peggy'] = [];
graph['Thom'] = [];
graph['Jonny'] = [];

function isSeller(name: string): boolean {
    return name.endsWith('m');
}

function breadthSearch(): any {
    const searchQueue = [...graph['you']];
    const searched = [];
    while (searchQueue.length) {
        const person = searchQueue.shift();
        const watched = searched.find((n) => n === person);
        if (!watched) {
            if (isSeller(person)) {
                console.log('Found mango seller', person);
                return true;
            } else {
                searchQueue.push(...graph[person]);
                searched.push(person);
            }
        }
    }

    return false;
}

console.log(breadthSearch());