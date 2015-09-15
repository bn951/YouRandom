define(['jquery'], function($) {
	var ID = '17';

	function setID(id) {
		if(ID != id) {
			ID = id;
		} 
	}

	function getID() {
		return ID;
	}

	return {
		setID: setID,
		getID: getID
	};
});