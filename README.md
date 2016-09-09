# SpeedDial  一个简单的网址索引

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

##提示

###可能你会在本地调试的时候出现 json 文件不能加载，你可以

- **推荐：**在chrome中安装 [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
- 在 `js/index.js` 中修改 `$.getJSON()` 参数为 `url.json` 文件远程地址

##撸了一个把导出书签生成本项目使用的json的js小脚本

###注意

- 仅测试了chrome 浏览器
- 支持多级目录，但是每个目录都会独立成一个分类

###脚本地址
- [Github Gist](https://gist.github.com/f12998765/77c509ed409fdab288ddd0bf9ccdeb47)
- [ShowTXT.cn](http://showtxt.cn/s/d4e421url)  -- Gist 国内打不开可以用这个

###使用帮助
- 首先，将书签导出到本地
- 在chrome 中打开导出书签，按F12打开开发者工具
- 把js脚本粘贴到在console中运行，复制新打开的窗口中的内容
- 在json在线编辑器中打开修改
- 推荐一个编辑器 [Json Editor Online](http://www.jsoneditoronline.org/)
- 点击右上角 `Save`可以直接保存到本地，或者复制内容，保持到本地
- json的文件名应为 `url.json` ，更换其他名字可以在 `index.js` 中修改

![Json Editor Online](http://ob4kd8p3g.bkt.clouddn.com/jsone.png)
