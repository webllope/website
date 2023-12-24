export type NestedObjectKeys<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}${NestedObjectKeys<T[K]> extends ""
        ? ""
        : `.${NestedObjectKeys<T[K]>}`}`;
    }[keyof T]
  : "";
