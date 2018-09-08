#  批量按文件名生成为html

复制 `file.js`, `filename.bat` 到新照片文件夹下

1. `npm install iconv-lite `
2. 执行 `filename.bat` ，将目录下文件名写入到 `FILE.TXT` 中
3. 修改 `file.js` 中 `src` 地址为图片所在目录
4. 执行 `node file.js` html 将会输出在命令行中，复制粘贴即可

```
<div class="col-md-4 cards">
    <img class="card-scale"src="images/cards_180906/vertical/${name}">
 </div>
```