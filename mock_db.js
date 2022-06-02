let url_table = [];

function add(long, short) {
	url_table.push({ site: [long, short] });
}

function get(short) {
	for (const website of url_table) {
		const shorta = website.site[1];
		if (shorta == short) {
			return website.site[0];
		}
	}
	return null;
}

module.exports = {
	add: add,
	get: get,
};
