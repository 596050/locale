type With<T, D> = T & D

export function hasProperty<T, D>(obj: T, prop: keyof D): obj is With<T, D> {
  return prop in obj
}
