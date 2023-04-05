/**
 * UIController
 *
 */
const path = require('path');

module.exports = async function uiAction (req, res) {
  if (req.originalUrl !== '/' && req.originalUrl.length > 0) {
    return res.redirect(`/${req.originalUrl}`);
  }
  return res.sendFile(path.join(__dirname, '../../.tmp/public/index.html'));
};