import { instance } from "../Instance/instance"

export interface PropsPut{
    url: string;
    params: object;
}

export const PUT = async ({ url, params }: PropsPut) => {
  try {
    const response = await instance.put(url, params);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};