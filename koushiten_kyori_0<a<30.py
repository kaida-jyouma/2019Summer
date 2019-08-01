# xy平面上の格子点距離を求める(1辺の長さが1~30までの整数値で、可変。)
lx = [c for c in range(31) if c != 0] # 三角形の底辺を求める
ly = [c for c in range(31) if c != 0] # 三角形の高さを求める
a1 = [] # 答えのリスト
for i in lx:
    for j in ly:
        a1.append(i ** 2 + j ** 2)
a1 = sorted(a1) # a1をソート
a1 = list(set(a1)) # a1の重複を除去
print(a1 if a1 <= 30) # 30以下の格子点間距離を表示
