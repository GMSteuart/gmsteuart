import jsonapiParse from 'jsonapi-parse'
import Qs from 'qs'

export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable */
      console.log('-- Axios onRequest --')
      console.log(config)
      /* eslint-enable */
    }

    config.paramsSerializer = params => {
      return Qs.stringify(params, { indices: false })
    }
  })

  $axios.onResponse(response => {
    // eslint-disable-next-line
    // console.log('-- Axios onResponse --')
    // eslint-disable-next-line
    // console.log('Starting Request', response)
    const parsedResponse = jsonapiParse.parse(response.data)
    if (parsedResponse === undefined) {
      return response
    }
    return parsedResponse.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
