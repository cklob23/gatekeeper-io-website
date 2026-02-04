// Helper to format form data into a readable email message
export function formatEmailBody(fields: Record<string, string | undefined>): string {
  return Object.entries(fields)
    .filter(([, value]) => value && value.trim() !== "")
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
      return `${label}: ${value}`
    })
    .join("\n")
}
