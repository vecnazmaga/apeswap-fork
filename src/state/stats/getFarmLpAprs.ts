// import { apiBaseUrl } from 'hooks/api'
const apiBaseUrl = 'https://apeswap-api-development.herokuapp.com'

const getFarmLpAprs = async (chainId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/stats/network/lpAprs/${chainId}`)
    const farmLpAprs = await response.json()
    if (farmLpAprs.statusCode === 500) {
      return null
    }
    return farmLpAprs
  } catch (error) {
    return null
  }
}

export default getFarmLpAprs
