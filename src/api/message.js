import request from '@/utils/request'

const api = {
  getSendNameIsExist: 'http://localhost:8443/manager/message/send/name',
  getAllReceiverTemplateName: 'http://localhost:8443/manager/template/receiver/getAllTemplateName',
  getReceiverTemplateNameLike: 'http://localhost:8443/manager/template/receiver/getTemplateNameLike',
  getAllMessageTemplateName: 'http://localhost:8443/manager/template/message/getAllTemplateName',
  getMessageTemplateNameLike: 'http://localhost:8443/manager/template/message/getTemplateNameLike',
  getAllMessageSendHistory: 'http://localhost:8443//manager/message/send/history/all',
  sendMessage: 'http://localhost:8443/manager/message/send'
}

export default api

export function getAllMessageSendHistory(parameter, data) {
  return request({
    url: api.getAllMessageSendHistory,
    method: 'post',
    params: parameter,
    data: data
  })
}

export function sendMessage(parameter) {
  return request({
    url: api.sendMessage,
    method: 'post',
    data: parameter
  })
}

export function getSendNameIsExist(parameter) {
  return request({
    url: api.getSendNameIsExist + '/' + parameter,
    method: 'get'
  })
}

export function getAllReceiverTemplateName() {
  return request({
    url: api.getAllReceiverTemplateName,
    method: 'get'
  })
}

export function getReceiverTemplateNameLike(parameter) {
  return request({
    url: api.getReceiverTemplateNameLike,
    method: 'get',
    param: parameter
  })
}

export function getAllMessageTemplateName() {
  return request({
    url: api.getAllMessageTemplateName,
    method: 'get'
  })
}

export function getMessageTemplateNameLike(parameter) {
  return request({
    url: api.getMessageTemplateNameLike,
    method: 'get',
    param: parameter
  })
}