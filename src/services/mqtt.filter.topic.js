import { INIT_DONE_GET_DATA } from '../redux/Store'
let data = ''

const resolve_nested = (k, d, r) => {
  const n = d || data

  for (let key in n) {
    if (n.hasOwnProperty(key)) {
      if (typeof(n[key]) === 'object') {
        if (k !== undefined) {
          if (r !== undefined) {
            console.log(`----- +++++ /${r}/${k}/${key}`)
          } else {
            console.log(`----- /${k}/${key}`)
          }
          resolve_nested(key, n[key], k)
        } else {
          console.log(`/${key}`) // this is root object
          resolve_nested(key, n[key])
        }
      } else {
        if (r !== undefined) {
          console.log(`----- +++++ /${r}/${k}/${key}`) // this is children object
        } else {
          console.log(`----- /${k}/${key}`) // this is children object
        }
      }
    }
  }

}

const _initial = (msg) => {
  data = msg
  resolve_nested()
  console.log('==== function resolve_nested() completed ====')
  //INIT_DONE_GET_DATA(message.payloadString)
}

export default _initial