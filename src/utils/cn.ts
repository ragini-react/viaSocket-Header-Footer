/**
 * Tiny className joiner. Filters falsy values and joins with spaces.
 * Kept dependency-free so the library stays lean.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
