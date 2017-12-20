## fetch-default

###### 为web端fetch添加全局默认属性（Add global default properties for the web fetch）

### 安装(install)
	npm i fetch-default --save

### 使用(use)

	require('fetch-default');
	
	//es
	import 'fetch-default';

### 通过default为所有请求添加前缀


		fetch.default({
    		uriPrefix: '/api'
		});
	
		//default request /api/async/get
		
		fetch('/async/get', {
        	method: 'GET'
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));
    		
### 通过default设置默认optoin


		fetch.default({ 
        method: 'GET',
       	headers: myHeaders,
       	mode: 'cors',
       	cache: 'default' 
       	...
    });
		/*
		默认所有请求都配置
      method: 'GET',
			headers: myHeaders,
     	mode: 'cors',
     	cache: 'default'
     	...
    */
        
		fetch('/async/get', {
        	method: 'POST'//覆盖默认设置后请求为post（covering）
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));
    		
    		
    		
## Community

[github](https://github.com/dengbupapapa/fetch-default) 
[npm](https://www.npmjs.com/package/fetch-default) 