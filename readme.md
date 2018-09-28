# ApiClient

[![Latest Version on npm][ico-version]][link-version]
[![Total Downloads][ico-downloads]][link-downloads]

Client for the  REST API at [developers portal](http://developers.iaip.iw.sv/docs) of IAIP.

**Note:** This package is **under development** and **should not be used in production sites**, until version **1.0.0 or above** is released.


## Dependencies

* [axios](https://github.com/axios/axios)
* [qs](https://github.com/ljharb/qs)

## Installation

Via npm

``` bash
$ npm install @iaipes/apiclient
```


### Configuration

Configure the object

```js
const Config = require('@iaipes/apiclient').Config
Config.baseURL = "http://developers.iaip.iw.sv"
Config.headers['Authorization'] = 'Bearer ' + '{token}'
```

**Note:** replace `{token}` with your developer access token.

## Usage

```js
const ApiV1InformationRequestClient = require('@iaipes/apiclient').ApiV1InformationRequestClient
const request = async function(){
   try {
    let response = await informationRequest.index({
      include: 'institution',
      filter: {
        profession_cont: 'Desarrollador'
      },
      sort: 'created_at desc'
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

request()

```

**Note:** For more information about classes and methods, please check the [documentation](http://developers.iaip.iw.sv/docs)

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

Create a `.dot`  file inside the `test` folder

``` bash
IAIPES_API_TOKEN={token}
IAIPES_API_URL=http://developers.iaip.iw.sv
```
**Note:** Replace `{token}` with your developer access token

Run the rest with the next command

``` bash
$ yarn test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [IAIP][link-author]
- [All Contributors][link-contributors]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/npm/v/@iaipes/apiclient.svg
[ico-downloads]: https://img.shields.io/npm/dt/@iaipes/apiclient.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/iaipes/apiclient/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-author]: https://github.com/iaipes
[link-contributors]: ./contributors.md
[link-version]: https://www.npmjs.com/package/@iaipes/apiclient[link-downloads]: https://www.npmjs.com/package/@iaipes/apiclient