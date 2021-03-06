function stripos (f_haystack, f_needle, f_offset) {
  // From: http://phpjs.org/functions
  // +     original by: Martijn Wieringa
  // +      revised by: Onno Marsman
  // *         example 1: stripos('ABC', 'a');
  // *         returns 1: 0
  var haystack = (f_haystack + '').toLowerCase();
  var needle = (f_needle + '').toLowerCase();
  var index = 0;

  if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
    return index;
  }
  return false;
}
