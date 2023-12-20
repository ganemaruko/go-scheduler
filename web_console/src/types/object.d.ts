/**
 * override Object.keys and Object.entries to return typed keys and entries
 * @link https://chaika.hatenablog.com/entry/2023/08/08/083000
 */

type ObjectKeys<T> = T extends { [key: string]: unknown } ? (keyof T)[] : never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>;
}

type ObjectEntries<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: [K, T[K]];
    }[keyof T][]
  : never;

interface ObjectConstructor {
  entries<T>(o: T): ObjectEntries<T>;
}
