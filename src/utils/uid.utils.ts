export const generateUid = (prefix?: string) => {
	let uid = Math.random().toString(36).substring(7);
	if (prefix) {
		uid = `${prefix}-${uid}`;
	}
	return uid;
};
