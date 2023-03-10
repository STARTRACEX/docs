# 在go中使用markdown

2022-09-30
2022-10-30
[STARTRACE](/)

## 开始使用

### 目录

写入目录文件（保存在./posts/zh/.yml）
首项为去除后缀的文件名，次项为标题

```yaml
index: "文档"
func: -
```

文件夹不需要标题名,由其下的.yml写入的index决定,但需要在此明确位置

不存在的首项会被忽略

### 渲染

go应用程序会解析出转换为标记语言的文档和目录结构

javaScript将执行页面的其他功能

*代码高亮和主题颜色*
使用了第三方javascript插件(Highlight.js)和样式解析器(Less.js)

### 文档规则

| 属性      | 行 |类型|
| :---:    | :----: |:---:|
|窗口标题   |1|字符串,去除“# ”|
|居中标题   |1|字符串,去除“# ”|
|描述/概要  |2|原始字符串|
|创建日期   |3|原始字符串|
|更新日期   |4|原始字符串|
|文档作者   |5|标记语言|
|文档正文   |1∩[6,∞)|标记语言|
