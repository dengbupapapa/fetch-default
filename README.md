## fetch-default(1.0.6)

#### 为fetch添加全局默认属性

* ###### 通过default为所有请求添加前缀


		fetch.default({
    		uriPrefix: '/api'
		});
	
		//default request /api/async/get
		fetch('/async/get', {
        	method: 'GET'
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));
    		
* ###### 通过default设置默认optoin


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
        
		fetch('/async/get', {//覆盖默认设置后请求为post
        	method: 'POST'
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));
    		
    		
    		
## Community

[github](https://github.com/dengbupapapa/fetch-default) 
[npm](https://www.npmjs.com/package/fetch-default) 