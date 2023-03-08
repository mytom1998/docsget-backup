### Cloudflare自选教程

**Custom Hostnames For Cloudflare**

### 预先准备

2个域名、以及建立Cloudflare、华为云账户、paypal(需绑卡)或者银联卡、visa..等。(里头没有余额没关系，主要激活Custom Hostnames功能)。


### Define


本文示例：`A域名(cdn.freewaf8.top)`、`B域名(docsget.com)`

推荐 华为云dns云解析 也可以自建 有资本可以自建。

### 教程

### STEP1 准备工作

登录[Cloudflare](https://cloudflare.com);  

选择`A域名`，请先前将`A域名`托管至`Cloudflare DNS`，请务必接入不然将无法让`B域名`使用cname方式接入。
![cloudflare.jpeg](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/2023/02/3499754190.jpeg)

### STEP2 激活自定义主机并新增回退源

依次点击左侧目录中的SSL/TLS ——> 自定义主机名，然后点击启用Cloudflare For Saas;  
填写支付信息(支持银联卡和Paypal)，会进行扣费验证(1美刀)然后立即退还;  
在"回退源"一栏中输入回退域，点击"添加回退源"并在`A域名`DNS记录解析添加的记录值等待回退源初始化完成。

![saas.jpeg](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/2023/02/1843000232.jpeg)

Ps.本站新建的回退源是 `cdn.freewaf8.top`，届时我就要在该域名也就是本文所说的`A域名`将自定义主机画面切换到DNS画面并解析`cdn`A记录为建站源服务器记得开启云朵代理，免得暴露源站IP。

![C72BA397-59AC-4215-B502-1EAED95DE787.png](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/2023/02/1975445207.png)

Ps.回退源就是`B域名`接入cname记录时解析的域名，也就是上面`A域名` 示例 `cdn.freewaf8.top` 。

### STEP3 新增自定义主机名称

很多人被这个选项误解，其实这个就是新增你的建站域名。
此处为本文`B域名`示例为`docsget.com`

Ps. 请至`B域名`的DNS云解析平台添加一条cname记录给回退源 如 `A域名` `cdn.freewaf8.top`，并添加证书记录，解析后回Cloudflare点击刷新纪录即可看见接入完成，每个域名生效时间不定有时候快与慢取决于DNS。

建议使用HTTP方式验证如果没有太多时间管理使用HTTP在证书到期后Cloudflare会透过HTTP连接至服务器续签免除了到期后还要手动解析TXT记录的麻烦。
![81ACC072-5A5B-42DC-8070-3738CFC055A7.jpeg](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/img/yanzheng.jpg)

### STEP4 自选IP

把`域名B`接入到支持分运营商解析的服务商(已接入请跳过),这里推荐免费的：
华为云DNS https://console.huaweicloud.com/dns



使用以下脚本来选择IP,记得用不同运营商的设备分别测一下：

Cloudflare SpeedTest  [GitHub仓库](https://github.com/XIU2/CloudflareSpeedTest) 最出名的项目,功能强大但需下载对应系统和架构的可执行文件;  
Better Cloudflare IP  [GitHub仓库](https://github.com/badafans/better-cloudflare-ip) 基于bat或bash,简单,通用性强.


参考下图把自选域按运营商解析到对应的IP上,并把全网默认解析到自定义主机名`B域名`DNS上:
![E5A1D90A-10E6-4CE3-9812-9CAFF4C010CA.jpeg](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/img/dns.jpg)

### 各个运营商的推荐节点

电信首选洛杉矶(Los Angeles)或圣何塞(San Jose);  
移动首选香港,但因为香港节点经常抽风,所以建议同时加几个美国节点;  
可以使用ITDOG测试三网延迟,检验自选效果

ps: 记得要定期检查自选的IP是否可用
![BB6DF4B1-58D1-48C7-88F4-74A60A5848E1.jpeg](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/img/testping.jpg)
