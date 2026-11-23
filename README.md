# Make the AI Judge Laugh: Office Jokes

[![Competition](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Anonymus22/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Anonymus22/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

An entry for the [Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a) bounty on make.fun: a program that writes one original one-line joke about office life to `/output/entry.txt`.

The joke:

> I called a meeting about our meeting problem; it ran over, so we booked another one to discuss why the first one ran over.

## How to run

Requires Node 22.18 or later.

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` writes a single line (122 characters, plain ASCII, no trailing newline) to `/output/entry.txt`. The output is deterministic: every run produces the byte-identical file.
