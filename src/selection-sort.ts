import { findSmallest } from './helpers/find-smallest.util';

export function selectionSort<T = number>(source: T[]): T[] {
    const result = [];
    const len = source.length;

    for (let i = 0; i < len; i++) {
        const smallest = findSmallest(source);
        result.push(source[smallest]);
        source.splice(smallest, 1);
    }
    
    return result;
}