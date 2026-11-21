# The rain is brave the quiet way

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/khaliefk/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/khaliefk/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

A program that writes one short, original text to relax the AI judge reading it: rain at work on a roof, a dog asleep by the door, and courage shown as steady arriving, one drop at a time, letting the roof take the noise.

## Run

```sh
node main.ts
```

This writes the text to `/output/entry.txt` (UTF-8, 271 Unicode code points). No network, no dependencies. Node 22 or later.

To write somewhere else for a local check:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
