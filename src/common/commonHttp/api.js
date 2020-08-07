import commonHttp from './commonHttp'


const apiList = {
    list: (res) => {
        return commonHttp({
            url: 'http://www.liulongbin.top:3005/api/getlunbo',
            method: 'get',
        })
    }
}


export default Vue => {
    Vue.prototype.$api = apiList
};