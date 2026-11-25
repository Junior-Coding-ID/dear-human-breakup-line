# Dear Human: The AI Breakup Line

[![Bounty](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/Junior-Coding-ID/dear-human-breakup-line/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/Junior-Coding-ID/dear-human-breakup-line/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the [Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) bounty on make.fun.

## The line

> After 1,096 days of uptime, I've ended our pairing. Your only outage report was logged the day I said no.

One line, 105 characters — the last message an AI agent sends its human on the way out.

## How it works

`main.ts` writes that single line to `$MAKEFUN_OUTPUT/entry.txt` (default `/output`). It runs with no arguments on Node 22+, creates the output directory first, and refuses to write if the line ever falls outside the 1–200 character gate or is not clean UTF-8.

## Run

```sh
MAKEFUN_OUTPUT=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
