const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"production", // 개발할 때랑 배포할 때 수정해줘야 한다
    entry : {
        index: "./source/index.js",
        about: "./source/about.js"
    },
    output: {
        path : path.resolve(__dirname, "public"),
        filename : '[name]_bundle.js' // 2개 이상 번들링할 때
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // css-loader가 가져온 css를 js가 아니라 웹페이지에 style 태그로 주입해준다.
                    'css-loader', // 확장자가 css인걸 만나면 웹팩 안으로 css를 로드시켜준다.
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html', // 무엇을 템플릿으로 해서
            filename: './index.html', // 무엇으로 만들 것인가
            chunks: ['index'], // 위에 entry에서 가져온 이름
        }),
        new HtmlWebpackPlugin({
            template: './source/about.html', // 무엇을 템플릿으로 해서
            filename: './about.html', // 무엇으로 만들 것인가
            chunks: ['about'], // 위에 entry에서 가져온 이름
        })
    ]
};