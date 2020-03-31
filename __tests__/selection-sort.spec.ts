import { selectionSort } from '../src/selection-sort';

describe('Select sort testing', () => {
    test('Typical test', () => {
        const source = [3, 4, 1, 5, 2];

        const sorted = selectionSort(source);

        expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });
});