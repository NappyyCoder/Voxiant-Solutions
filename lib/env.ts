function stripQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1).trim()
  }
  return value
}

export function readEnv(name: string): string | undefined {
  const raw = process.env[name]
  if (typeof raw !== 'string') return undefined

  let value = stripQuotes(raw.trim())
  if (!value) return undefined

  if (name === 'RESEND_API_KEY' && value.includes('=')) {
    const candidate = value.split('=').pop()?.trim()
    if (candidate?.startsWith('re_')) value = candidate
  }

  return value
}
