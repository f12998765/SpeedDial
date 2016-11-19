# SpeedDial  一个简单的网址索引

## 感谢

- [我的索引-程序员垂直导航](http://www.51index.cn/)
- [获取网站Favicon | BYI_API](https://api.byi.pw/favicon/)
- [vue.js](https://vuejs.org/)


## 快速开始

- 首先 Fork 这个项目到你的仓库
- 关于自定义域名
  - 不需要自定义域名，请删除 `CNAME` 文件
  - 需要自定义域名，请修改 `CNAME` 文件，并修改域名解析
- 在项目 `setting` 可以查看该项目的网址
- 之后根据自己的需求修改

## 修改帮助

- 项目的网站数据放在 `json/url.json` 中，结构如下
  - tit : 网站分类
  - list ： 网站列表
      - name ：网站名称
      - url : 网站地址

## 提示

### 可能在本地调试的时候出现 json 文件不能加载，可以尝试

- **推 荐 -->**  在chrome中安装 [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
- 在 `js/index.js` 中修改 `$.getJSON()` 参数为 `url.json` 文件远程地址

## js 脚本 - Chrome导出书签生成 url.json

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
