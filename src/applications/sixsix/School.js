import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/sixsix/Schools'

export default class School extends BaseModel {
  static entity = 'schools'
  //static keyField = 'code'

  static methodConf = conf
}
