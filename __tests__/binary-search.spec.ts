import { binarySearch } from '../src/binary-search';

describe('Binary search testing', () => {
    test('Odd elements test', () => {
        const source = [1, 2, 3, 4, 5];
        const target = 3;

        const index = binarySearch(source, target);

        expect(index).toBe(2);
    });

    test('Event elements Init test', () => {
        const source = [1, 2, 3, 4, 5, 6];
        const target = 3;

        const index = binarySearch(source, target);

        expect(index).toBe(2);
    });

    test('Edges test', () => {
        const source = [1, 2, 3, 4, 5, 6];
        const target = 1;

        const index = binarySearch(source, target);

        expect(index).toBe(0);
    });
});