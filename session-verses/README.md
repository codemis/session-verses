# Claude Session Verses

**Claude Session Verses** is a Claude Code mod that picks one random Bible verse when a session starts and
shows it, with its reference, in the band above the prompt.

- Verses: `data/top-bible-verses.json` (186 commonly cited verses, Berean Standard Bible).
- The list is embedded in `hooks/register.tsx` because a hooks module cannot read
  files. After editing the JSON, run `node scripts/build.mjs`.
- The pick is made once per session and survives hot reloads.

## Install

Requires Claude Code 2.1.275 or later. From any Claude Code session:

```
/plugin marketplace add codemis/session-verses
/plugin install session-verses@session-verses-mods
```

Choose the **user** scope when asked and the mod loads in every new session.
Start a new session (or run `/reload-plugins`) to see the verse above the prompt.

To update later:

```
/plugin marketplace update session-verses-mods
```

### Try it without installing

```
git clone git@github.com:codemis/session-verses.git
claude --plugin-dir ./session-verses/session-verses
```

### Using it with token-weather

Both mods draw in the band above the prompt. Claude Session Verses shows its
verse beneath whatever the hooks below it draw, so it stacks under
token-weather only when it loads first. If only one of the two appears, that is
load order, not a bug.

## License

The code is MIT licensed (see `LICENSE`). The scripture text is not covered by
that license; it follows the terms of the Berean Standard Bible.

## Text

Scripture text is from the Berean Standard Bible (BSB). Confirm the current
license terms at berean.bible before redistributing.
