## fetch-default(1.0.3)

#### 为fetch添加全局默认属性

* ###### 通过default为所有请求添加前缀


		fetch.default({
    		uriPrefix: '/api'
		});
	
		fetch('/async/get', {
        	method: 'GET'
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));