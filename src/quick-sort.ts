function sum(source: number[]): number {
    if (!source.length) {
        return 0;
    }

    return source[0] + sum(source.slice(1));
}

export function quickSort<T = number>(source: T[]): T[] {
    if (source.length < 2) {
        return source;
    }

    const pivot = source[0];

    const less = source.slice(1).filter((x) => x <= pivot);
    const greater = source.slice(1).filter((x) => x > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];
}
