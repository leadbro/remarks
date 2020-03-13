export default el => {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(el, 1);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
};
