export const pushIfNewOrExcludeEl = <T>(arr: T[], element: T): T[] => {
    if (!arr.includes(element)) {
        return [...arr, element]
    }
    return arr.filter(el => el !== element)
}
