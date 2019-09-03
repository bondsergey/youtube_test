import Axios from "axios";

export default {
  async loadList() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // sleep for display loading
    return Axios.get('/mock/list.json').then(response => response.data);
  },
  removeFomList(ids) {
    return new Promise(resolve => setTimeout(resolve, 1000, ids)); // request mock
  },
  async addToList() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // sleep for display loading
    return Axios.get('/mock/add_list.json').then(response => response.data);
  }
}