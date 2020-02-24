const validateInput = (str) => {
	if(!Number(str)) {
		return false;
	}
	return true;
}

export default validateInput  