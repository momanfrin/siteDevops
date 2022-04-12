function  validaUsername(username) {
    var validcharacters = '1234567890-_.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0, l = username.length; i < l; ++i) {
        if (validcharacters.indexOf(username.substr(i, 1)) == -1) {
            return false;
        }
        return true;
    }
}