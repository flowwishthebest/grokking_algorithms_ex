import { quickSort } from '../src/quick-sort';

describe('Quick sort testing', () => {
    test('Typical test', () => {
        const source = [3, 4, 1, 5, 2];

        const sorted = quickSort(source);

        expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });
});