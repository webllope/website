/** */
export const getFormattedDate = (date?: string | Date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export const get = (obj: Object = {}, keys: string): any => {
  const nested = keys.split(".");
  while (nested.length > 0) {
    const key = nested.shift() as string;
    obj = obj[key];
    if (obj == undefined) return undefined;
  }
  return obj;
};
