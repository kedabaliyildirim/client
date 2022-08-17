#!/usr/bin/env sh
# abort on errors
Set-Variable -e
# build
npm run build
# navigate into the build output directory
Set-Location dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:klavas35/client master:gh-pages
Set-Location -