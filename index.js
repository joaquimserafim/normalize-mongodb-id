'use strict';

module.exports = function normalizeId(document) {
  var _id = document._id && document._id.toString();

  if (_id) {
    document.id = _id;
    delete document._id;
  }

  return document;
};
