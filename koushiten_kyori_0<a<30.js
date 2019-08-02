var lx = [];
var ly = [];
for (var h=0;h<30;h++){
    lx.push(h + 1);
    ly.push(h + 1);
}
var a1 = [];
for (var i=0;i<lx.length;i++){
    for (var j=0;j<ly.length;j++){
        a1.push(Math.pow(lx[i], 2) + Math.pow(ly[j], 2));
    }
}
var a2 = a1.sort(function (a, b) {return a - b});
var a3 = [];
var ct1 = 0;
while (a2[ct1] <= 50){
    a3.push(a2[ct1]);
    ct1 ++;
}
var a4 = a3.filter(function (x, i, self) {return self.indexOf(x) === i}); //重複を除去
console.log(a4); //重複なしのリスト
console.log(a3); //重複ありのリスト
/*
参考:
20行目:Qiita, 配列の重複をはじく、もしくは重複を取り出す 2016年2月2日更新
*/
