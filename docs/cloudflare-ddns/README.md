### RouterOS DDNS For CloudFlare

### 原理

> 将ROS的DDNS更新到托管在Cloudflare的域名，方便远程维护ROS。

### 脚本示例

```
/system scheduler
add interval=3m name=DDNS on-event=":global email \"$email\"\r\
    \n\r\
    \n:global key \"$key\"\r\
    \n\r\
    \n:global domain \"$domain\"\r\
    \n\r\
    \n/tool fetch url=(\"https://docsget.com/\\?email=\$email&key=\$key&domain=\$domain\") mode=https dst-path=ddns.txt" \
    policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive start-date=jan/01/1970 start-time=00:00:00
    #6.x以上使用
                
```
### 注意事项

- 需要修改脚本内的邮箱、key及域名再运行！脚本设置的是3分钟更新一次足以满足日常使用。
- $key：API密钥，用于访问Cloudflare API的密钥。你可以从“我的帐户”页面底部获取您的API密钥，如下所示：[转到我的帐户](https://dash.cloudflare.com/profile)。
- $email：与你的帐户关联的电子邮件地址，如：xxxx@gmail.com。
- $domain：域名，可顶级域名（如docsget.com）或二级域名（如test.docsget.com），二级域名必须是已经添加过的，如果是顶级域名则会修改@名称的A记录值！
- 脚本执行后会在ros文件里生成一个ddns.txt，更好的调试脚本，发现错误！如果没更新之类的可以先下载查看该文件内容。
- 多线情况下，接口会自动选择DDNS线路！
