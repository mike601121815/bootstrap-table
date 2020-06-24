const firefox = require('geckodriver')
const selenium = require('selenium-server')
console.log(selenium.path)
module.exports = {
  'src_folders': ['tests'],

  'selenium': {
    'start_process': true,
    'server_path': selenium.path,
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.firefox.driver': firefox.path
    }
  },

  'test_settings': {
    'default': {
      'launch_url': 'http://0.0.0.0:8080/tests/html/',
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent': true,

      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'moz:firefoxOptions': {
          'args': [
            '-headless'
          ]
        }
      }
    }
  }
}