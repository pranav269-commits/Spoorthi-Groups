export function csvCell(value: unknown) {
  let text = String(value ?? '');
  // Spreadsheet programs must treat customer-provided values as text, not formulas.
  if (/^[\s]*[=+\-@]/.test(text) || /^[\t\r\n]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}
