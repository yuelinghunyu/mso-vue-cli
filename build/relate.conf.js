/**
 * author: jdj
 */
module.exports.relate = {
    envs: process.env.NODE_ENV, //从package.json 中获取环境
    rootPath: {
        test: './',
        pro: './pro/'
    }
}