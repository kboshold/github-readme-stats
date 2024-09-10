const whitelist = process.env.WHITELIST?.split(/\s*,\s*/) ?? false
const verifyWhitelist = (username) => {
    if (!whitelist) {
        return true;
    }
    return whitelist.includes(username);
};

export { verifyWhitelist };
export default verifyWhitelist;
