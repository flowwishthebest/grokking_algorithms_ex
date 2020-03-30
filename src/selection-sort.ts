import { findSmallest } from './helpers/find-smallest.util';

export function selectionSort<T = any[]>(source: T): T {
    const result = [];

    for (let i = 0; i < source.length; i++) {
        const smallest = findSmallest(source);
        result.push(source.pop(smallest));
    }

    return result;
}