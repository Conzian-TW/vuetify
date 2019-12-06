# vuetify

## Update vuetify

1. Update version of package.json
```
  "version": "1.1.12"
```
2. Publish to npm
```
npm login
npm publish --access=public
```
3. Go to `vuetify-docs` repo and update `@conzian/vuetify`
```
yarn upgrade @conzian/vuetify

cat package.json | grep @conzian/vuetify
```
4. Update content of `vuetify-docs` to new version (Get more detail in `vuetify-docs` repository).
5. Go to `project` which uses `@conzian/vuetify` and update it.
```
npm update @conzian/vuetify

cat package.json | grep @conzian/vuetify
```

## Contributing
Please read documentation on vuetify website.
https://v1.vuetifyjs.com/en/getting-started/contributing
