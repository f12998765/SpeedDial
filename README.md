# SpeedDial  一个写给自己用的网址索引

灵感来自 ：[我的索引-程序员垂直导航](http://www.51index.cn/)

Favicon API：[获取网站Favicon | BYI_API](https://api.byi.pw/favicon/)

技术 ：[laytpl.js- 精妙的JavaScript模板引擎](http://laytpl.layui.com/)

##快速开始

- 首先， Fork 这个项目到你的仓库
- 如果不需要自定义域名，请删除 `CNAME` 文件
- 需要自定义域名，请修改`CNAME`，并且修改你域名的解析
- 这样，你打开项目 `setting` 就能看到你网站的地址了
- 之后，就可以根据自己的需求修改

##修改帮助

- 项目的Html模板由 [laytpl.js](http://laytpl.layui.com/) 生成
- 项目的数据放在 `json/url.json` 中
  - tit : 网址分类
  - list ： 网站列表
        - name ：网站名称
        - url : 网站地址

##注意

###可能你会在本地调试的时候出现 json 文件不能加载，你可以

- **推荐：**在chrome中安装 [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
- 在 `js/index.js` 中修改 `$.getJSON()` 参数为 `url.json` 文件远程地址
