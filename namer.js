const { Namer } = require('@parcel/plugin');
const { basename } = require('path');

module.exports = new Namer({
  name: function(bundle) {
    var filename = basename(bundle.getMainEntry().filePath);
    if (filename === "collab-vm.js") return "all.min.js";
    return filename;
  }
});
