'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {

    beforeCreate(data){
        data.images.forEach(image=>{
            image.url = `${strapi.config.get('server.protocol')}://${strapi.config.get('server.host')}:${strapi.config.get('server.port')}${image.formats.large.url}`
        });
    }
}};
