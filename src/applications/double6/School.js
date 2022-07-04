import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/double6/Schools'

export default class School extends BaseModel {
  static entity = 'schools'
  //static keyField = 'code'

  static methodConf = conf
}
