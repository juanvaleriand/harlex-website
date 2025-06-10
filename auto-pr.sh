#!/bin/bash

# === CONFIGURATION ===
BASE_BRANCH="main"
FEATURE_BRANCH=$(git branch --show-current)
LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%s)
PR_TITLE="${LAST_COMMIT_MESSAGE}"
PR_BODY="PR ini dibuat otomatis via script setelah push."

# === VALIDASI GH_TOKEN ===
if [ -z "$GH_TOKEN" ]; then
  echo "❌ GH_TOKEN belum diset. Jalankan dengan: GH_TOKEN=your_token ./auto-pr.sh"
  exit 1
fi

# === Export token supaya bisa dipakai oleh gh CLI ===
export GH_TOKEN

# === Sync dan Push Branch ===
echo "📦 Push branch $FEATURE_BRANCH ke remote..."
git fetch origin
git pull origin $BASE_BRANCH --rebase
git push -u origin "$FEATURE_BRANCH"

# === Cek PR Sudah Ada atau Belum ===
EXISTING_PR=$(gh pr list --head "$FEATURE_BRANCH" --json url -q '.[0].url')

if [ -z "$EXISTING_PR" ]; then
  echo "✨ Membuat PR dari $FEATURE_BRANCH ke $BASE_BRANCH..."
  gh pr create \
    --title "$PR_TITLE" \
    --body "$PR_BODY" \
    --base "$BASE_BRANCH" \
    --head "$FEATURE_BRANCH"
else
  echo "✅ PR sudah ada: $EXISTING_PR"
fi
