# naive-tofixed

To fix the error of the operator not preserving decimal places

修正运算符小数位的错误

## install

```
npm install naive-compute
```

### import and use

```javascript

import compute from 'naive-compute'


console.log(33.33333, '*', 100000) // 3333332.9999999995 damn it !  (`Д´*)9

console.log(compute(33.33333, '*', 100000).result) // 3333333 got it! ╮(￣▽￣)╭

console.log(compute(1024, '+', 1).compute('-', 1).compute('*', 1).compute('/', 1).result) // 1024 ╮(￣▽￣)╭

```

