# safe-get-plus
## Install
``` sh
npm install safe-get-plus --save
```
## Start

``` javascript
const safeGet = require('safe-get-plus')

const response = {
  data: {
    user: {
      name: 'eryou',
      age: 18,
      friends: ['xiaoming', 'xiaohong'],
    },
    list: [1, 2, 3],
  }
}

const data = safeGet(response, 'data.user.friends', []) // ['xiaoming', 'xiaohong']

const data = safeGet(response, 'data.user.address', '') // ''

```

## API
``` javascript
const safeGet = require('safe-get-plus')
safeGet(Object, [Property dot string], [Default Value])
```
**Arguments**  

`Object`: The object to be valued.  
`[Property dot string]`: A string that gets a value with a point.  
`[Default Value]|null`: Default value when no value is taken.