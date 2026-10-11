# Brightside Voice Desk

The voice actors' recording page for the game *Agent Of Something*. Each actor opens their own link (for example
`/#diner-manager`), then records or uploads every line. Takes are saved as WAV (mono, 48 kHz, 16-bit) to Supabase
Storage.

- `index.html`: the page (no build step, no libraries).
- `lines.js`: the lines. Made from the game's recording scripts; do not edit by hand.
- `config.js`: the Supabase project URL and public anon key. The anon key is meant to be public: the storage
  policies only let it list, save, replace and delete WAV files in the `voice` bucket.

The source lives in the game's own (private) repo at `docs/voice/site/`; changes are copied here from there.
