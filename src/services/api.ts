import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/api/'
})

export async function verifyUsernameOrEmailAvailability(data: string) {
  try {
    const response = await client.get(`v1/users/${data}/available`)
    return response
  } catch (error) {
    return error?.response
  }
}
