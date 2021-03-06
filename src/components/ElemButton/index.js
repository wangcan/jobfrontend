const resultComps = {}
let requireComponent = require.context(
  './', // 在当前目录下查找
  false, // 不遍历子文件夹
  /\.vue$/ // 正则匹配 以 .vue结尾的文件
)
requireComponent.keys().forEach(fileName => {
  let comp = requireComponent(fileName)
  let fileIndex = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');
  fileIndex = fileIndex.charAt(0).toLowerCase() + fileIndex.slice(1);
  resultComps[fileIndex] = comp.default
})
export default resultComps
