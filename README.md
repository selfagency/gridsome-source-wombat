<h1 align="center">Welcome to gridsome-source-wombat 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/selfagency_llc">
    <img alt="Twitter: selfagency_llc" src="https://img.shields.io/twitter/follow/selfagency_llc.svg?style=social" target="_blank" />
  </a>
</p>

> Gridsome source plugin for [Wombat](https://github.com/SnowdogApps/wombat), the flat-file headless CMS

### 🏠 [Homepage](https://gitlab.com/selfagency/gridsome-source-wombat#readme)

## Install

```sh
yarn add gridsome-source-wombat
```

## Usage

```sh
export default {
  plugins: [
    {
      use: 'gridsome-source-wombat',
      options: {
        apiUrl: 'http://localhost:3000',
        contentTypes: [
          { name: 'home', type: 'entity' },
          { name: 'el-blogo', type: 'collection', lang: 'es' }
        ]
      }
    }
  ]
}
```

## Run tests

```sh
yarn test
```

## Author

👤 **Daniel Sieradski <hello@self.agency>**

* Twitter: [@selfagency_llc](https://twitter.com/selfagency_llc)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://gitlab.com/selfagency/gridsome-source-wombat/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
