// 总路由管理文件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerList = [] // 路由数组 存放所有路由用的
function importAll (routerArr) {
    // 该函数用于将所有分区路由中的路由添加到路由数组
    routerArr.keys().forEach(key => {
        console.log('key', key)
        routerList.push(routerArr(key).default)
    })
}

let routerArrs = require.context('.', true, /\.routes\.js/)
console.log('requirecontext', routerArrs)
console.log('keys--', routerArrs.keys())
console.log('id--', routerArrs.id)
/**
 * require.context 返回的是 一个函数
 * 函数执行后返回的是一个函数,并且这个函数有3个属性
 * 1. resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
 * 2. keys {Function} -返回匹配成功模块的名字组成的数组
 * 3. id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载
 * 这三个都是作为函数的属性(注意是作为函数的属性,函数也是对象,有对应的属性)
 */
importAll(routerArrs)

console.log(routerList)
const routes = [
	{
		path: '/',
		redirect: '/index'
	},
	...routerList
]

const router = new VueRouter({
	routes
})

export default router
