import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/api/'
})

export async function verifyUsernameOrEmailAvailability(data: string) {
  try {
    return await client.get(`v1/users/${data}/available`)
  } catch (error) {
    return error?.response
  }
}

export async function createUser(formData: FormData) {
  try {
    return await client.post('v1/users', formData)
  } catch (error) {
    return error?.response
  }
}
