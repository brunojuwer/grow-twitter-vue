import type { ICredentials } from '@/types'
import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json'
  }
})

export async function verifyUsernameOrEmailAvailability(data: string) {
  try {
    return await client.get(`/v1/users/${data}/available`)
  } catch (error: any) {
    return error?.response
  }
}

export async function createUser(formData: FormData) {
  try {
    return await client.post('/v1/users', formData)
  } catch (error: any) {
    return error?.response
  }
}

export async function login(credentials: ICredentials) {
  try {
    return await client.post('/v1/login', credentials)
  } catch (error: any) {
    return error?.response
  }
}
