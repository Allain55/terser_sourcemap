class SourceMapExample {
	constructor() {
		this.test1();
		this.test2();
		this.test3();
		this.test4();
		
		console.log('done')
	}
	
	test1() {
		document.body.innerHTML = document.body.innerHTML + '1';
	}
	test2() {
		document.body.innerHTML = document.body.innerHTML + '1';
	}
	test3() {
		document.body.innerHTML = document.body.innerHTML + '1';
	}
	test4() {
		document.body.innerHTML = document.body.innerHTML + '1';
	}
}

new SourceMapExample();