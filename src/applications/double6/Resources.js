import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/double6/resources'

export default class Resources extends BaseModel {
  static entity = 'resources'
  //static keyField = 'code'

  static methodConf = conf
}
