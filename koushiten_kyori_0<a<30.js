/*lx = [c for c in range(31) if c != 0] # 三角形の底辺を求める(1〜30までの数列)
ly = [c for c in range(31) if c != 0] # 三角形の高さを求める(1〜30までの数列)
a1 = [] # 答えのリスト
for i in lx:
    for j in ly:
        a1.append(i ** 2 + j ** 2) # a1にlx, lyそれぞれの要素の2乗の和を追加していく
a1 = sorted(a1) # a1をソート
a1 = list(set(a1)) # a1の重複を除去
print("50まで\n", "\rn = {", ", ".join(list(map(str, [c for c in a1 if c <= 50]))), "}\n", end="\n\n") # n<51(nは整数)の格子点間距離を表示
print("全リスト\n", "\rn = {", ", ".join(list(map(str, a1))), "}",end="\n\n") # 求まったnをすべて表示
*/
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
