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

### Known issue: another mod hides the verse

Claude Session Verses draws in the band directly above the prompt. That band
has room for one drawing: when a mod there draws its own band and does not
hand the render down (token-weather does this), anything loaded after it is
never drawn. If you install both and see only the other mod's band, this is
why. Nothing is broken.

Mods in the same tier run in the order they are listed in `enabledPlugins` in
`~/.claude/settings.json`, the first one outermost. To show the verse beneath
the other band, list `session-verses` above it:

```json
"enabledPlugins": {
  "session-verses@session-verses-mods": true,
  "token-weather@claude-code-playground-mods": true
}
```

Start a new session after changing it. Installing or reinstalling plugins can
rewrite that list, so if the verse disappears later, check the order again.
Other mods that draw in the same band may need the same treatment.

## License

The code is MIT licensed (see `LICENSE`). The scripture text is not covered by
that license; it follows the terms of the Berean Standard Bible.

## Text

Scripture text is from the Berean Standard Bible (BSB). Confirm the current
license terms at berean.bible before redistributing.
