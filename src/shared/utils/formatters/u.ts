/**
 * Convert undefined -> '' or return the same string
 */
export const u = (str: string | undefined) => (typeof str === 'undefined' ? '' : str)
