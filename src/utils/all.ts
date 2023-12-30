export const getFormattedDate = (
  locales: Intl.LocalesArgument,
  format: "default" | "short" = "default",
  date?: string | Date,
) => {
  if (!date) {
    return "";
  }

  const options = getFormatOptions(format);

  return new Date(date).toLocaleDateString(locales, options);
};

export const get = (obj: Object = {}, keys: string): any => {
  const nested = keys.split(".");
  while (nested.length > 0) {
    const key = nested.shift() as string;
    obj = obj[key];
    if (obj == undefined) return undefined;
  }
  return obj;
};

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const getFormatOptions = (
  format: "default" | "short",
): Intl.DateTimeFormatOptions => {
  if (format === "short") {
    return {
      year: "numeric",
      month: "long",
    };
  }

  return {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
};
