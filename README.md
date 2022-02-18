TypeScript React Material UI Override Style by Class Name Demo
===================================

material-ui 生成的DOM中包括预定义的classNames，我们可以override

需要注意的是，要给自己的组件外面放一个root class，然后再:

```
.rootClass .MuiAutocomplete-input {
  // override
}
```

否则的话，我们定义的`.MuiAutocomplete-input`由于被页面先load，反而会被material-ui自己的样式覆盖。

```
npm install
npm run demo
```
