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
