/**
 * MadeByAli — Utility Functions
 */

/**
 * Merges class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Adds a staggered animation delay based on index
 */
export function staggerDelay(index: number, baseMs = 80): string {
  return `${index * baseMs}ms`;
}

/**
 * Formats a number with locale-aware separators
 */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("es-MX").format(n);
}

/**
 * Truncates a string to a max length with ellipsis
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Returns a mailto link with subject
 */
export function mailtoLink(subject: string, email: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
