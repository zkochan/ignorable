export = ignorable

declare function ignorable (filename: string): boolean

declare namespace ignorable {
  export function safe (filename: string): boolean
}
