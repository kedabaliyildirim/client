npm run build;
git add dist -f;
git commit -m "$1";
git subtree push --prefix dist origin gh-pages;