# st-promise
Node module, a simple class that extends Promise to add Angular-like success and error methods

### success (callback)

**callback** - Function
Called when the promise is resolved, it receives the arguments the promise was resolved with.

### error (callback)

**callback** - Function
Called when the promise is rejected, it receives the arguments the promise was rejected with.

## Example

```javascript
'use strict';
let StPromise = require('st-promise');
function myAsyncMethod(){
    return new StPromise((resolve, reject) => {
        //Do something asynchronous here
        //resolve
        resolve({ foo: 'bar'});
        //reject
        reject({error: "Something went wrong"});
    });
}

myAsyncMethod().success(r => {
    console.log(r.foo); //"bar"
}).error(e => {
    console.log(e.error); //"Something went wrong"
});
```
