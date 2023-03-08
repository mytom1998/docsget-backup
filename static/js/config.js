// 离线模式
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js')
}

// 文档配置
window.$docsify = {
    repo: 'https://github.com/insoyi',
    coverpage: true,		// 封面
    loadSidebar: true,		// 侧边栏
    loadNavbar: true,       // 导航栏
    subMaxLevel: 4,			// 副标题等级
    auto2top: false,		// 自动跳转到页面顶部
	
	/* tab 选择卡 */
    tabs: {
        persist: true,		// default
        sync: true,			// default
        theme: 'material',	// tag主题
        tabComments: true,	// default
		tabHeadings: true   // default
    },
	
	/* 搜索 */
    search: {
        paths: 'auto',
        placeholder: '输入关键字，快速寻找答案 ',
        noData: '没有结果！',
        depth: 6,
    },
	
	/* 复制代码 */
	copyCode: {
	    buttonText : '<svg t=\"1608709090998\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"20197\" width=\"16\" height=\"16\"><path d=\"M336.681427 336.457143m-336.457143 0a336.457143 336.457143 0 1 0 672.914286 0 336.457143 336.457143 0 1 0-672.914286 0Z\" fill=\"#8CF6FB\" p-id=\"20198\"></path><path d=\"M1011.05857 501.76c16.091429 17.554286 16.091429 45.348571 0 61.44L563.424284 1010.834286c-17.554286 17.554286-45.348571 17.554286-61.44 0L13.389998 529.554286c-8.777143-8.777143-14.628571-20.48-13.165714-32.182857L49.961427 92.16c1.462857-23.405714 19.017143-40.96 42.422857-42.422857L497.595712 0c13.165714 0 24.868571 4.388571 33.645715 13.165714l479.817143 488.594286zM120.17857 119.954286L74.829998 488.594286l456.411429 450.56 406.674285-406.674286L488.81857 74.605714 120.17857 119.954286z\" fill=\"#3C2DCB\" p-id=\"20199\"></path><path d=\"M342.532855 342.308571c-23.405714 23.405714-59.977143 23.405714-83.382857 0s-23.405714-59.977143 0-83.382857c23.405714-23.405714 59.977143-23.405714 83.382857 0 21.942857 23.405714 21.942857 59.977143 0 83.382857z\" fill=\"#D098FF\" p-id=\"20200\"></path></svg> Copy',
	    errorText  : 'error!',
	    successText: 'success!'
	},
}
