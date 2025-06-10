#!/bin/bash

# Load .env file
set -o allexport
source .env
set +o allexport

# Konfigurasi
BASE_BRANCH="main"
FEATURE_BRANCH="feature/auto-pr"
PR_TITLE="Auto PR: Update something"
PR_BODY="PR ini dibuat otomatis via script setelah push."

# Checkout ke branch tujuan
git checkout $FEATURE_BRANCH

# Sync dengan branch utama
git fetch origin
git pull origin $BASE_BRANCH

# Push ke remote
git push -u origin $FEATURE_BRANCH

# Cek apakah PR udah ada
EXISTING_PR=$(gh pr list --head "$FEATURE_BRANCH" --json url -q '.[0].url')

if [ -z "$EXISTING_PR" ]; then
  gh pr create \
    --title "$PR_TITLE" \
    --body "$PR_BODY" \
    --base "$BASE_BRANCH" \
    --head "$FEATURE_BRANCH"
else
  echo "PR sudah ada: $EXISTING_PR"
fi
