/**
 * Created by Administrator on 2016/11/9.
 */

var url = require("url")

console.log(url.parse("https://nodejs.org:8080/dist/?search=socret#sfs") + '\n')

console.log(url.format({
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'nodejs.org:8080',
    port: '8080',
    hostname: 'nodejs.org',
    hash: '#sfs',
    search: '?search=socret',
    query: 'search=socret',
    pathname: '/dist/',
    path: '/dist/?search=socret',
    href: 'https://nodejs.org:8080/dist/?search=socret#sfs' }) + '\n')

console.log(url.resolve('http://imooc.com/', '/list/2343.html') + '\n')


console.log(url.parse("https://nodejs.org:8080/dist/23462.html", true, true) + '\n')