'use strict';

class StPromise extends Promise {
    success(fn) {
        this.then(fn);
        return this;
    }
    error(fn) {
        this.then(null, fn);
        return this;
    }
}

module.exports = StPromise;
