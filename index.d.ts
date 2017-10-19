export = ignorable

declare function ignorable (filename: string): Boolean

declare namespace ignorable {
  export function safe (filename: string): Boolean
}
