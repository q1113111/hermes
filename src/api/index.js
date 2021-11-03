import axios from 'axios'

const getApi = {
  activity: '/api/v1/data/activity',
  scenic: '/api/v1/data/scenic_spot', // 兩筆
  show: '/api/v1/data/show', // 縣市資料
  search: '/api/v1/data/search' // 景點資料
}

export default function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(getApi[url], params, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.response)
    })
  })
}
