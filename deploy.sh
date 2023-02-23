#!/usr/bin/env sh

set -e
cd website && yarn run build
cd build

# Publish to custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# Publish to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# Publish to https://<USERNAME>.github.io/<REPO>
git push -f https://${TOKEN}@github.com:danalites/autoo.git master:gh-pages

cd -