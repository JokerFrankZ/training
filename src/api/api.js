import service from '@/utils/request'

export const getData = (url, param) => {
  return service.request({
    method: 'get',
    url,
    param
  })
}

export const postData = (url, param) => {
  return service.request({
    method: 'post',
    url,
    data: param,
    transformRequest: [
      //将post转换成get  把data拆包拼接处url
      function(data) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
