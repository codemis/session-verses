export type Verse = { reference: string; text: string }

declare module 'claude-code' {
  interface PluginState {
    'session-verses': { verse: Verse | null }
  }
}
