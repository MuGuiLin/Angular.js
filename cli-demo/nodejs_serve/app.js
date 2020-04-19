


var express = require('express');
var urllib = require('url');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*express允许跨域*/

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);
    else next();
});




//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {

    res.send('首页');

});

app.post('/login', function (req, res) {

    console.log(req.body);

    res.json({ "msg": 'post成功', data: req.body });



});

app.get('/news', function (req, res) {

    //console.log(req.body);
    res.jsonp({ "msg": '这是新闻数据' });

});


//JSONP（只有get方法支持）
app.get('/list', function (req, res) {

    var params = urllib.parse(req.url, true);
    console.log(params);

    var data = {
        name: '沐枫',
        age: 29,
        sex: '男',
        job: 'Web全栈开发'
    }

    if (params.query && params.query.callback || params.query && params.query.cb) {
        //console.log(params.query.callback);

        var str = params.query.callback + '(' + JSON.stringify(data) + ')'; //jsonp
        res.end(str);
    } else {
        res.end(JSON.stringify(data)); //普通的json
    }
});




app.listen(3000, '127.0.0.1');