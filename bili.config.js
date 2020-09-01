module.exports = {
    banner: true,
    output: {
        extractCSS: false,
        minify:true,
        format:["cjs","esm"]
    },
    plugins: {
        vue: {
            css: false
        }
    }
};