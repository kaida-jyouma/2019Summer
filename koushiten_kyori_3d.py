l = [1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 17, 18, 20, 25, 26, 29, 32, 34, 37, 40, 41, 45, 50] # 平面上の格子点間距離
m = [c for c in range(0, 9, 1)]
al01 = []
for i in l:
    for j in m:
        al01.append(i + j ** 2)
print([c for c in list(set(sorted(al01))) if c <= 30], len([c for c in list(set(sorted(al01))) if c <= 30]))

# 以下 出力を記載

# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] 30
