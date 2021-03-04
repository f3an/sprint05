exports.firstUpper = (str) => {
    if (str) {
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        return str;
    } else {
        return (str = " ");
    }
}