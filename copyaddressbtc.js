




function copyaddressbtc() {
  var copyElement = document.getElementsByClassName("author_bitcoin")[0];
  var range = document.createRange();
  range.selectNode(copyElement);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  alert("Bitcoin address has been copied to the clipboard.");
}