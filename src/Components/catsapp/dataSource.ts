// //Install  dependencies (Apollo Framework, TSC)  
//     "apollo-datasource-rest": "^0.9.4",
//     "apollo-server": "^2.18.1",
//     "camelcase-keys": "^6.2.2",
//     "graphql": "^15.3.0",
//     "ts-node": "^9.0.0",
//     "typescript": "^4.0.3"
//import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
//import camelCaseKeys from 'camelcase-keys'

//const ACCESS_KEY = '9d8910ead74d9a3e0931ca9881f4b9cd'
//const API_URL = 'https://api.openweathermap.org/data/2.5/'

//export class WeatherAPI extends RESTDataSource {
  //constructor() {
    //super()
    //this.baseURL = API_URL
//  }

//  willSendRequest(request: RequestOptions) {
//    request.params.set('appid', ACCESS_KEY)
//  }

//   async withCoords(lat: number, lon: number) {
//     const data = await this.get('weather', { lat, lon })
//     return camelCaseKeys(data, { deep: true })
//   }

//   async withCity(city: string) {
//     const data = await this.get('weather', { q: city })
//     return camelCaseKeys(data, { deep: true })
//   }
// }

// export const dataSources = () => ({ weatherAPI: new WeatherAPI() }