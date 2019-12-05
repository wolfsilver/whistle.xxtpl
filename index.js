/**
 * 自适应json/jsonp
 */

function getUrlParam (name, url) {
  if (!url) {
    return '';
  }
  url = url.replace(/#.*$/, '');
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = url.substr(url.indexOf('?') + 1).match(reg);
  return r != null ? r[2] : '';
}

exports.server = (server) => {
  server.on('request', (req, res) => {
    let {
      url,
      ruleValue,
    } = req.originalReq;

    if (!ruleValue) {
      return res.end('Please make sure xxtpl rule is right.');
    }
    const callbackName = getUrlParam('callback', url);
    if (callbackName) {
      ruleValue = `${callbackName}(${ruleValue})`;
    }

    return res.end(ruleValue);
  });
};
