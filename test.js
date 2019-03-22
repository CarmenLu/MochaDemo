it('double done', function (done) {
    //使用两次done()
    setTimeout(done);
    setImmediate(done);
});

describe('异步', function () {
    it('代码测试done', function (done) {
        var x = true
        var test = function () {
            x = false
            done()
        }
        setTimeout(test, 1000)
    })
})

describe('Promise', function()
{
    it('测试', function(){
        const p = new Promise(function (resolve, reject)
        {
            resolve('ok');
        }).then(result => result);
            return p;
    }
    )
}
)

const assert = require('assert');
// antipattern
describe('同时返回done和promise对象',function(){
it('test', function(done) {
    return new Promise(function(resolve) {
        assert.ok(true);
        resolve();
    }).then(done);
})
})

describe('使用async/await',function(){
    it('test',async function(){
        const p = await {
            async function(){
                await 100
            }
        }
        p
    })
})

describe('同步代码',function(){
    describe('用正则表达式测试十六进制值',function(){
        describe('测试#b8b8b8',function(){
            it('test',function(){
                let pattern=/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                let s=pattern.test("#b8b8b8")
                let a=new Array([1,2,3]);
                let b=a.indexOf(0);
               [1,2,3].indexOf(0).should.equal(-1);
            })
        })
    })
})

describe('my suite', () => {
    it('my test', () => {
        // should set the timeout of this test to 1000 ms; instead will fail
        this.timeout(1000);
        assert.ok(true);
    });
});
