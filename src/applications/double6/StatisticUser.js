import BaseModel from './BaseModel';
let conf = BaseModel.getMethodConf();
conf.http.url = '/double6/statistic-users'

export default class StatisticUser extends BaseModel {
  static entity = 'statistic-users'
  //static keyField = 'code'

  static methodConf = conf
}
