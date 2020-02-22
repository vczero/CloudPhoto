const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
  throwOnNotFound: false
})

const db = cloud.database()

//分页，每页取48条记录
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let num = 18
  let page = event.page
  let skip = (page - 1) * num
  if (!page || page <= 0) { 
    skip = 0
  }
  return await db.collection('photos').where({
    _openid: wxContext.OPENID,
    type: event.type
  }).field({
    _openid: false
    }).orderBy('due', 'desc').skip(skip).limit(num).get()
}