import request from '@/utils/request'

const BASE_URL = `${process.env.VUE_APP_USER_CENTER_API}`;

export function sendSms(sendData) {
  let data = {
    'phone': sendData.mobile,
    'smsType': 1,
    'platId': 5,
  };
  return request({
    url: `${BASE_URL}/sms/send`,
    method: 'post',
    data
  })
}

export function login(sendData) {
  let data = {
    'phone': sendData.mobile,
    'smsType': 1,
    'verifyCode': sendData.code,
    'platId': 5,
  };
  return request({
    url: `${BASE_URL}/login/smsLogin`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
