#normalize-mongodb-id

replace within a document the field `_id` by the `id`

[![Build Status](https://travis-ci.org/joaquimserafim/normalize-mongodb-id.png?branch=master)](https://travis-ci.org/joaquimserafim/normalize-mongodb-id)

###Example

    var normalizeId = require('normalize-mongodb-id');

    var doc = {
        '_id' : ObjectId('53d98f133bb604791249ca99'),
        'item' : 'ABC1',
        'category' : 'clothing'
    };

    console.log(normalizeId(doc));// now the doc have the id


### Development

**this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit**

to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
