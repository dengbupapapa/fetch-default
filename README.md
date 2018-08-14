## fetch-default

###### Add global default properties for the web fetch

### install
	npm i fetch-default --save

### use

	require('fetch-default');
	
	//es
	import 'fetch-default';

### default setting uri prefix


		fetch.default({
    		uriPrefix: '/api'
		});
	
		//default request /api/async/get
		
		fetch('/async/get', {
        	method: 'GET'
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));
    		
### default setting optoin


	fetch.default({ 
        method: 'GET',
       	headers: myHeaders,
       	mode: 'cors',
       	cache: 'default' 
       	...
    });
	/*
		//default
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
    		
### default setting dataFilter
 		
	fetch.default({ 
		dataFilter(response) {

        	if (!response.ok) {
        		//if you use fetch-abort (https://www.npmjs.com/package/fetch-abort)
        		this.abort()
            	message.error(`${response.status}\n${response.statusText}`);
        	}

        	return response.json();

    	}
    });
    
### default setting fail

	fetch.default({ 
		fail(e) {
			//if you use fetch-abort (https://www.npmjs.com/package/fetch-abort)
			this.abort()
        	message.error(e.toString());
    	}
    });
        		
## Community

[github](https://github.com/dengbupapapa/fetch-default) 
[npm](https://www.npmjs.com/package/fetch-default) 