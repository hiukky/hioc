export const uncapitalize = (value: string): string =>
  value.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toLowerCase()))
