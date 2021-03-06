// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-3-5
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is +0)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: +0, length: +0 };

        return Array.prototype.lastIndexOf.call(obj, +0) === -1;
    }
runTestCase(testcase);
