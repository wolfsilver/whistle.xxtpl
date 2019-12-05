# whistle.xxtpl

自适应callback返回json/jsonp

匹配方式：

```js
pattern xxtpl://{res.json}
```

> 其中，`pattern` 表示匹配请求url的表达式，可以为域名（如：`www.test.com xxtpl://{res.json}`）、路径，通配符、正则表达式等，具体参见：[whistle的匹配模式](http://wproxy.org/whistle/pattern.html)。

## 安装

1. 首先需要安装最新版[whistle](https://github.com/avwo/whistle)，如果你的机器已经安装了whistle，请确保whistle为最新版本：
    - 安装及如何使用whistle参见[Github](https://github.com/avwo/whistle)
    - 如何升级whistle参见[帮助文档](http://wproxy.org/whistle/update.html)。

2. 安装xxtpl插件，执行npm全局安装即可：

```shell
npm i -g whistle.xxtpl
```

> 如果是Linux或Mac，可能需要用 `sudo npm i -g whistle.xxtpl`，推荐使用[cnpm](https://github.com/cnpm/cnpm)或自己公司提供的npm镜像安装
