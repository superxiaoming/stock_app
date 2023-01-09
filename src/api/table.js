import request from '@/utils/request'

export function getStockList(data) {
  return request({
    url: '/stock/getStockList',
    method: 'post',
    data
  })
}
