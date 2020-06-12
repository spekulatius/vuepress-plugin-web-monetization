# Vuepress Plugin Web-Monetization

Adds a web-monetization meta tag to your VuePress website. This allows you to monetize your content using the [web-monetization standard](https://webmonetization.org/).

## Installation

```bash
npm i vuepress-plugin-web-monetization
```

## Usage

You will need to register the plugin with your VuePress website:

```js
plugins: {
    'web-monetization': {
        'address': '$ilp.uphold.com/DrRw6MnEEqBB'
    }
}
```

This includes the address as an optional parameter (here: `$ilp.uphold.com/DrRw6MnEEqBB`). You can also define the address as part of the frontmatter:

```
---
monetization: "$ilp.uphold.com/DrRw6MnEEqBB"
---
```

## License

This package is release under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).