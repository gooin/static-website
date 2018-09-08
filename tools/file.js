var fs = require("fs");
var iconv = require('iconv-lite');

// 同步读取
fs.readFile('LIST.TXT', {encoding:'binary'},function (err, data) {
    if (err) {
        return console.error(err);
    }
    var name= iconv.decode(data, 'gbk');
    var content = name.replace("\r","");
    var nameArr = content.split('\r\n');
    // console.log('nameArr :', nameArr);

    for (const name of nameArr) {
        console.log(
            `
            <div class="col-md-4 cards">
                        <img class="card-scale" src="images/cards_180906/vertical/${name}">
                    </div>
            `
        )
    }

    // console.log("异步读取: " + name);
 });