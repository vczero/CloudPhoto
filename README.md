# CloudPhoto
CloudPhoto 即云相册。私有相册，在微信内无需要登录使用，直接鉴权。     
有很多美好的回忆，有很多重要的图片，图片管理难很棘手。手机一年换一部，图片传输费劲还经常丢失。经常提示空间不足，删了一遍又一遍。      
于是开发了一款小程序：小小收藏夹，用来管理自己需要收藏的私人图片。现在开源分享出来。

![](https://tuchuang001.oss-cn-hangzhou.aliyuncs.com/111112.png?v1)


## 技术架构
私有.云相册采用 Serverless 技术架构。目前市面 Serverless 服务厂商很多，这里选择「云开发」产品。原因：

- 免费版本基本够个人使用；5G存储/5G流量每月/10000000万次函数调用 （2020/2/23信息）；
- 与微信原生相融，支持微信很多底层能力，例如直接获取 openid；
- 产品能力丰富，可以满足绝大部分场景需求；   

![架构图](https://tuchuang001.oss-cn-hangzhou.aliyuncs.com/111111.png?v1)     


## 部署流程    
第1步：下载微信小程序 IDE；        
第2步：在小程序官网注册账号，拿到 appid
第3步：将 appid 拷贝进 `project.config.json` 文件中的 appid 字段里；    
第4步：使用小程序 IDE 打开项目并点击「云开发」按钮，开通云开发环境；      
第5步：等待 3～5 分钟初始化「云开发」环境；
第6步：在数据库中新建集合，集合名为 `photos`；在存储中新建两个目录`cloud_icons` 和 `pics`；将九宫格的 icon 上传到 `cloud_icons`;         
第7步：将小程序代码目录树 `cloudfunctions` 中的云函数部署到云端；        
第8步：congratulations！可以启动调试看效果。       

备注：
- 如果觉得图片分类不满足自己要求，可以自己手动替换名称和 icon；
- 建议所有 icon 都在云存储 `cloud_icons` 文件夹下存一份；   
- 在 IDE 云开发控制设置存储的权限为 `仅创建者可读写`；确保只有上传的人可以读取图片；          

## 扫码体验
下面小程序均基于云开发构建。       
![](https://tuchuang001.oss-cn-hangzhou.aliyuncs.com/111113.png?v1)      

## 附录
- [云开发产品网址](https://cloudbase.net?ref=vczero)
