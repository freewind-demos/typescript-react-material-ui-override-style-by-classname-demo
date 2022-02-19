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

更新：
我发现这种办法也不好，因为当我们给某个组件设置了某些属性，比如`<Table size='small`/>之后，
material-ui可能会在原来的classNames后面再加上一些新的className，再次覆盖我们定义的内容

最靠谱的方式还是得这样：https://v4.mui.com/styles/basics/#hook-api

```
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}
```

这样才能保证我们提供的样式位于最后一个className

```
npm install
npm run demo
```
