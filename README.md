# `create-jmi`

灵感来源于 `umijs` 的微生成器，在 `jmi` 中内置了众多微生成器，协助你在开发中快速地完成一些繁琐的工作。

![](https://img.shields.io/badge/label-MIT-blue) ![](https://badgen.net/badge/jacky/v1.0.0/:color?icon=github)



## 如何安装

```shell
# or pnpm 
$ npm install create-jmi
```



## 如何使用

```shell
jmi g
```

![](https://vblog-img.oss-cn-shanghai.aliyuncs.com/jacky-blog-vuepress/202312141311774.gif)



## 生成器列表

#### Fatherrc 配置

为项目生成 `.fatherrc` 配置，命令执行后，`jmi` 会生成推荐的 `fatherrc` 配置和安装相应的依赖。

```shell
jmi g fatherrc
```



### gitignore 配置

为项目生成 `.gitignore` 配置。

```shell
jmi g gitignore
```



### tsconfig 配置

为项目生成 `.tsconfig` 配置，命令执行后，`jmi` 会生成内置的  `tsconfig` 规则文件及注释。

```shell
jmi g tsconfig
```



### vitest 配置

为项目生成 `.vitest` 配置，命令执行后，`jmi` 会生成推荐的 `vitest` 配置和安装相应的依赖。

```shell
jmi g vitest
```





## LICENSE

MIT

