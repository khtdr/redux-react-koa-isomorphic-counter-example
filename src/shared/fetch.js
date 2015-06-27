import fetch from 'isomorphic-fetch';
import methods from 'methods';

methods.forEach(function(method){
  exports[method] = function (path) {
    const url = __SERVER__? `http://localhost:3000${path}`: path;
    return fetch(url, {method}).then(res => res.json());
  }
});
