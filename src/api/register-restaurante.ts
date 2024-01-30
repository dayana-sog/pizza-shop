import { api } from '../lib/axios'

export interface RegisteRestauranteBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisteRestauranteBody) {
  await api.post('/restaurants', { email, managerName, phone, restaurantName })
}
