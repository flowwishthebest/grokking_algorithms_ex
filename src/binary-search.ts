export function binarySearch<T = number>(source: T[], target: T): number | null {
    let low = 0;
    let high = source.length - 1;

    while (low <= high) {
        const mid = Math.trunc(low + high / 2);

        if (source[mid] === target) {
            return mid;
        } else if (source[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}
