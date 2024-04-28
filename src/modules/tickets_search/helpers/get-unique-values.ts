const sortStrings = (arr: string[], order: 'asc' | 'desc'): void => {
    order === 'asc' ? arr.sort((a, b) => a.localeCompare(b)) : arr.sort((a, b) => b.localeCompare(a))
}

const sortNumbers = (arr: number[], order: 'asc' | 'desc'): void => {
    order === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)
}

/**
 * Returns an array of unique values for a given key in an array of objects.
 * If the values are strings, sorts them using localCompare;
 * if they are numbers, sorts them from smallest to largest.
 * @param arr The array of objects to process.
 * @param key The key in the objects to extract unique values from.
 * @param order Optional. Set to 'asc' to sort in ascending order, 'desc' to sort in descending order. Default is 'asc'.
 * @returns An array of unique values sorted accordingly.
 */
export const getUniqueValues = <T, K extends keyof T>(arr: T[], key: K, order: 'asc' | 'desc' = 'asc'): T[K][] => {
    const uniqueValues = [...new Set(arr.map(obj => obj[key]))]

    if (typeof arr[0][key] === 'string') {
        sortStrings(uniqueValues as string[], order)
    }
    if (typeof arr[0][key] === 'number') {
        sortNumbers(uniqueValues as number[], order)
    }

    return uniqueValues
}
