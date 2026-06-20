// Stub for Lovable platform error reporting.
// reportLovableError is a no-op in self-hosted / local dev environments.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reportLovableError(_error: unknown, _context?: Record<string, any>): void {
  // no-op: error reporting is only active on the Lovable hosted platform
}
