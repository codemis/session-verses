# Claude Session Verses

**Claude Session Verses** is a Claude Code mod that picks one random Bible verse when a session starts and
shows it, with its reference, in the band above the prompt.

- Verses: `data/top-bible-verses.json` (186 commonly cited verses, Berean Standard Bible).
- The list is embedded in `hooks/register.tsx` because a hooks module cannot read
  files. After editing the JSON, run `node scripts/build.mjs`.
- The pick is made once per session and survives hot reloads.

## Install

```
/plugin install session-verses --marketplace <owner>/<repo>
```

## License

The code is MIT licensed (see `LICENSE`). The scripture text is not covered by
that license; it follows the terms of the Berean Standard Bible.

## Text

Scripture text is from the Berean Standard Bible (BSB). Confirm the current
license terms at berean.bible before redistributing.
