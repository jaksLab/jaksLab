#!/usr/bin/env bash
set -euo pipefail

start_marker="$(printf '<%.0s' {1..7})"
mid_marker="$(printf '=%.0s' {1..7})"
end_marker="$(printf '>%.0s' {1..7})"
tracked_files=()

while IFS= read -r file; do
  tracked_files+=("$file")
done < <(git ls-files)

if rg -n -F "$start_marker" "${tracked_files[@]}"; then
  echo "Merge conflict start markers found."
  exit 1
fi

if rg -n -F "$mid_marker" "${tracked_files[@]}"; then
  echo "Merge conflict middle markers found."
  exit 1
fi

if rg -n -F "$end_marker" "${tracked_files[@]}"; then
  echo "Merge conflict end markers found."
  exit 1
fi

echo "No merge conflict markers found."
