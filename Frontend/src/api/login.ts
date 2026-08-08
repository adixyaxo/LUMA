import type { LoginResponse } from '../schemas/auth';
import {api} from './api';

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { "email": email, "password": password });
    return response.data as LoginResponse;
  } catch (error) {
    throw error;
  }
};