# CloudPhoto
CloudPhoto 即云相册。私有相册，在微信内无需要登录使用，直接鉴权。     
有很多美好的回忆，有很多重要的图片，图片管理难很棘手。手机一年换一部，图片传输费劲还经常丢失。经常提示空间不足，删了一遍又一遍。      
于是开发了一款小程序：小小收藏夹，用来管理自己需要收藏的私人图片。现在开源分享出来。

![](https://tuchuang001.oss-cn-hangzhou.aliyuncs.com/111112.png)


## 技术架构
私有.云相册采用 Serverless 技术架构。目前市面 Serverless 服务厂商很多，这里选择「云开发」产品。原因：

- 免费版本基本够个人使用；5G存储/5G流量每月/10000000万次函数调用 （2020/2/23信息）；
- 与微信原生相融，支持微信很多底层能力，例如直接获取 openid；
- 产品能力丰富，可以满足绝大部分场景需求；   

![架构图](https://tuchuang001.oss-cn-hangzhou.aliyuncs.com/111111.png)

## 扫码体验
下面小程序均基于云开发构建。       
![](https://tuchuang001.oss-cn-hangzhou.aliyuncs.com/111113.png)  
## 附录
- [云开发产品网址](https://cloud.tencent.com/product/tcb)
