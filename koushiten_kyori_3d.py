# xy平面上の格子点距離を求める(1辺の長さが1~30までの整数値で、可変。)
lx = [c for c in range(31) if c != 0] # 平面の三角形の底辺を求める(1〜30までの数列)
ly = [c for c in range(31) if c != 0] # 平面の三角形の高さを求める(1〜30までの数列)
lz = [c for c in range(31) if c != 0] # 平面の三角形の高さを求める(1〜30までの数列)

a1 = [] # 答えのリスト
for i in lx:
    for j in ly:
        for k in lz:
            a1.append((i ** 2 + j ** 2) + k ** 2)
a1 = sorted(a1)
a1 = list(set(a1))
print(a1)
