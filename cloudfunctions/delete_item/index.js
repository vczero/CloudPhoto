const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_NEW,
  throwOnNotFound: false
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //从存储上删除文件
  const result = await cloud.deleteFile({
    fileList: [event.fileID],
  })
  return await db.collection('photos').doc(event._id).remove()
}