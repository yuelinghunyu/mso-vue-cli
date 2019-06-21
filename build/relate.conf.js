/**
 * author: jdj
 */
console.log("环境", process.argv[2].replace("--", ""))
module.exports.relate = {
    envs: process.argv[2].replace("--", ""), //从package.json 中获取环境
    rootPath: {
        test: './',
        pro: './pro/'
    }
}