#!/usr/bin/env bash
set -euo pipefail

start_marker="$(printf '<%.0s' {1..7})"
mid_marker="$(printf '=%.0s' {1..7})"
end_marker="$(printf '>%.0s' {1..7})"

if rg -n --hidden --no-ignore --glob '!.git' -F "$start_marker" .; then
  echo "Merge conflict start markers found."
  exit 1
fi

if rg -n --hidden --no-ignore --glob '!.git' -F "$mid_marker" .; then
  echo "Merge conflict middle markers found."
  exit 1
fi

if rg -n --hidden --no-ignore --glob '!.git' -F "$end_marker" .; then
  echo "Merge conflict end markers found."
  exit 1
fi

echo "No merge conflict markers found."
