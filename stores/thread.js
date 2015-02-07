import {Model} from 'cerebellum';
import apiConfig from '../config/api';

const Thread = Model.extend({
  url: function() {
    return apiConfig.url +"/api/threads/"+ this.storeOptions.id;
  }
});

export default Thread;