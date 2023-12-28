export type NestedObjectKeys<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}${NestedObjectKeys<T[K]> extends ""
        ? ""
        : `.${NestedObjectKeys<T[K]>}`}`;
    }[keyof T]
  : "";

export type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
