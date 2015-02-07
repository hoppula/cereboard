import {Model} from 'cerebellum';
import apiConfig from '../config/api';

const Board = Model.extend({
  url: function() {
    return apiConfig.url +"/api/boards/"+ this.storeOptions.id;
  }
});

export default Board;