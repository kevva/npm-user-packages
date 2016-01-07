# npm-user-packages [![Build Status](https://travis-ci.org/kevva/npm-user-packages.svg?branch=master)](https://travis-ci.org/kevva/npm-user-packages)

> Get packages by a npm user


## Install

```
$ npm install --save npm-user-packages
```


## Usage

```js
const npmUserPackages = require('npm-user-packages');

npmUserPackages('kevva').then(data => {
	console.log(data);
	//=> [{name: 'advpng-bin', description: '...', ...}, ...]
});
```


## API

### npmUserPackages(username)

#### username

*Required*  
Type: `string`

User to fetch packages from.


## Related

* [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of a npm user
* [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of a npm user
* [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword


## License

MIT © [Kevin Martensson](http://github.com/kevva)
