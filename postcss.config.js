module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度
            viewportHeight: 667, //视窗的宽度，对应的是我们设计稿的宽度
            unitPrecision: 5, //指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['nav-bar', 'wrapper', 'bottom-bar', 'cart-list', 'category-content'], //指定不需要转换的类
            minPixelValue: 1, //小于或等于1px不转换为视窗单位
            exclude: [/TabBar/, /DetailBottomBar/, /CartBottomBar/],
            // unitToConvert: 'px',
            // propList: ['*'],
            // fontViewportUnit: 'vw',
            // mediaQuery: false,
            // replace: true,
            // exclude: undefined,
            // include: undefined,
            // landscape: false,
            // landscapeUnit: 'vw',
            // landscapeWidth: 568

        }
    }
}