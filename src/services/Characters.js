import axiosInstance from '.';

export default class {
  constructor() {
    this.instance = axiosInstance();
  }

  getAll = () =>
    this.instance({
      url: '/characters',
      method: 'GET',
    });

  getById = (id) =>
    this.instance({
      url: `/characters?${id}`,
      method: 'GET',
    });
}
