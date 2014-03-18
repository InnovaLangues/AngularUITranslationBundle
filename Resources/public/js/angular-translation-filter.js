function TranslationFilter() {
    return function (text, placeholder, domain) {
    	if (typeof text !== 'string') {
    		console.error('Translation filter only works on strings.');

    		return text;
    	}

    	if (typeof Translator !== 'object') {
    		console.error('Translator object not found.');

    		return text;
    	}

		if (typeof placeholder !== 'object') {
			placeholder = {};
		}

		var search = text;
		if (typeof domain === 'string' && domain.length !== 0) {
			search = domain + ':' + text;
		}

        return Translator.get(search, placeholder);
    };
}

function TranslationChoiceFilter() {
    return function (text, count, placeholder, domain) {
    	if (typeof text !== 'string') {
    		console.error('Translation filter only works on strings.');

    		return text;
    	}
    	
    	if (typeof Translator !== 'object') {
    		console.error('Translator object not found.');

    		return text;
    	}

    	if (typeof count !== 'number' && parseInt(count) != count) {
    		count = 0
    	}

		if (typeof placeholder !== 'object') {
			placeholder = {};
		}

		var search = text;
		if (typeof domain === 'string' && domain.length !== 0) {
			search = domain + ':' + text;
		}

        return Translator.get(search, placeholder, count);
    };
}