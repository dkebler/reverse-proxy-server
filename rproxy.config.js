module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // Start Reverse Proxy
    {
      name      : 'reverse-proxy',
      cwd       : '/opt/rproxy',
      script    : './index.js',
      watch     : true
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */

}
