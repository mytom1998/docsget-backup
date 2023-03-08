### Cloudflare缓存配置

### 原理
> 全站文件缓存有利于在源服务器高并发或者被攻击的时候由Cloudflare缓存源站的内容传递给客户端。

### 设置
登陆[Cloidflare](https://www.cloudflare.com); 左菜单点入 `规则` 选择 `页面规则`。

可参考我的配置图进行设置

![cloudflare-cache](https://raw.githubusercontent.com/docsget/docsget/main/usr/uploads/img/cache.png)

由于该配置是在之前博客系统的环境下所设置的所以目前已经是闭关状态，然而有需求的话可以设置此功能让源服务器遭受CC攻击的时候也能让客户端浏览到站点内容，并不会直接出现5xx错误。

同时请点入 `缓存` 选择 `配置`，开启 `Always Online`。


这部分应该都能明白是什么意思，不多赘述。
