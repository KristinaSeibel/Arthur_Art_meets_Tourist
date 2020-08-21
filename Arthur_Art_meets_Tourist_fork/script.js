var counter = {};

function manageClicks(url) {
	if (! counter[url]) counter[url] = 0;
	counter[url] ++;
	console.log('you clicked '+counter[url]);
 
    // return location.href = url;
	return false;
}

