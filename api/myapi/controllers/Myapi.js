'use strict';

/**
 * Myapi.js controller
 *
 * @description: A set of functions called "actions" for managing `Myapi`.
 */

module.exports = {

  /**
   * Retrieve myapi records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.myapi.search(ctx.query);
    } else {
      return strapi.services.myapi.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a myapi record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.myapi.fetch(ctx.params);
  },

  /**
   * Count myapi records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.myapi.count(ctx.query);
  },

  /**
   * Create a/an myapi record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.myapi.add(ctx.request.body);
  },

  /**
   * Update a/an myapi record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.myapi.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an myapi record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.myapi.remove(ctx.params);
  }
};
