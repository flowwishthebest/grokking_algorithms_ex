export function findSmallest<T = any>(source: T): number {
    let smallestIdx = 0;
    let smallest = source[smallestIdx];

    for (let i = 0; i < source.length; i++) {
        if (source[i] < smallest) {
            smallest = source[i];
            smallestIdx = i;
        }
    }

    return smallestIdx;
}
