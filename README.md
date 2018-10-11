## fetch-default

###### Add global default properties for the web fetch

### install
	npm i fetch-default --save

### use

	require('fetch-default');
	
	//es
	import 'fetch-default';
    		
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
        	method: 'POST'//covering to post
    		})
    		.then((response) => response.json())
    		.then((json) => console.log(json));

### default setting beforeSend
 		
	fetch.default({ 
		beforeSend() {
			if(example)this.uri=this.uri+'/example';
    	}
    });

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

### A complete example
	fetch.default({
    	method: 'POST',
    	headers: {
        	'Accept': 'application/json',
        	'Content-Type': ' application/json',
    	},
    	credentials: 'include',
    	beforeSend() {
        	//excludes serviceWorker
        	if (!/http:\/\//.test(this.uri)&&process.env.HOME_PAGE) this.uri = `${process.env.FETCH_PREFIX}${this.uri}`;
    	},
    	async dataFilter(response) {

        	//excludes serviceWorker request flies
        	if(!/^((ht|f)tps?):\/\/[\s\S]+\/[\s\S]+\.[\s\S]+$/.test(response.url)){

            	if (response.ok===false) {
                	message.error(`${response.status}\n${response.statusText}`);
                	return {}
            	}

            	let data = await response.json();

            	let {code,message:messageDes,messageBody} = data;

            	//not login
            	// if(code === 5000){
            	//     message.error(messageDes);
            	//     store.dispatch(actiontor.loginFlag(false));
            	// }

            	if(code !== '9000'){
                	message.error(messageDes);
            	}

            	return data;

        	}else{
            	return response
        	}

    	},
    	fail(e) {
        	message.error(e.toString());
        	return e
    	}
	});        		
## Community

[github](https://github.com/dengbupapapa/fetch-default) 
[npm](https://www.npmjs.com/package/fetch-default) 