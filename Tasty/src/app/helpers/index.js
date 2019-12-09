import _ from 'lodash';

export const Helper = {
  isDuplicate: (item, list) => {
    if (_.find(list, { name: item.name })) {
      return true;
    }
  },

  getOrderTotal: (order) => {
    return order.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  } 
};
