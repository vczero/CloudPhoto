const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
  throwOnNotFound: false
})

const db = cloud.database()
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const count = await db.collection('photos').where({
    _openid: wxContext.OPENID,
    type: event.type
  }).count()
  
  //{"total":7,"errMsg":"collection.count:ok"}}
  let num = 0
  if (count.errMsg == 'collection.count:ok'){
    num = count.total
  }
  //计算分页
  let pagesize = 18
  let total_page = Math.floor((num + pagesize - 1) / pagesize)
  
  return {
    count: num,
    total_page: total_page,
    pagesize: pagesize
  }
}