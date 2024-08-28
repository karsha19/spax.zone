/* for use when developing to make my life easier */
const fs = require('fs');
const { targetPage, readPage, clearBelow } = require("./buildDEPdialogue.js");

const unbuild = async () => {
  const dom = await readPage(targetPage);
  const document = dom.window.document;
  clearBelow(document);
  document.body.innerHTML += "\n";
  fs.writeFileSync(targetPage, dom.serialize());
};

if (require.main === module)
  unbuild();