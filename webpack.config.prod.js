const path = require('path');

module.exports = {
    mode:"development", // 개발할 때랑 배포할 때 수정해줘야 한다
    entry : "./source/index.js",
    output: {
        path : path.resolve(__dirname, "public"),
        filename : 'main.js'
    }

}
