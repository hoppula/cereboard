import {Collection} from 'cerebellum';
import apiConfig from '../config/api';

const Categories = Collection.extend({
  url: function() {
    return apiConfig.url +"/api/categories"
  }
});

export default Categories;