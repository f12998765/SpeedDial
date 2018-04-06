# SpeedDial  一个简单的网址索引

## 感谢

- [我的索引-程序员垂直导航](http://www.51index.cn/)
- [The Favicon Finder](https://icons.better-idea.org/)
- [vue.js](https://vuejs.org/)


## 快速开始

1. 首先 Fork 这个项目到你的仓库
2. 在项目 `setting` 可以查看该项目的网址
3. 在 json 文件中自定义网址

## 修改帮助

- 项目的网站数据放在 `json/url.json` 中，结构如下
  - tit : 网站分类
  - list ： 网站列表
      - name ：网站名称
      - url : 网站地址
      - img : 可选属性，自定义网址图标，会覆盖自动获取的

## 提示

### 可能在本地调试的时候出现 json 文件不能加载，可以尝试

在chrome中安装 [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)

### 网站图标获取不到时，请判断

- 是否网站被墙，无法访问
- 更多信息，请看 [https://icons.better-idea.org/](https://icons.better-idea.org/)

## 将 Chrome 导出书签生成 url.json

### 注意

- 仅测试了chrome 浏览器
- 支持多级目录，但是每个目录都会独立成一个分类

### 脚本地址
- [Github Gist](https://gist.github.com/f12998765/77c509ed409fdab288ddd0bf9ccdeb47)
- [ShowTXT.cn](http://showtxt.cn/s/d4e421url)  -- Gist 国内打不开可以用这个

### 使用帮助
- 打开导出的书签，并打开 开发者工具（快捷键 F12）
- 把js脚本粘贴到在console中运行，复制新打开的窗口中的内容
- 选择一个json在线编辑器，打开修改
