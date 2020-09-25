---
title: AtCoder ABCの179-170のA問題をやってみた
date: "2020-09-25T22:30:00.284Z"
description: "AtCoder ABC 179をやってみましたついでに復習をします"
tags: ["AtCoder", "Python"]
---
![AtCoder](atcoder.png)  
AtCoder ABC 179を思い出したようにやりました。実はAtCoderはほとんどやっておらず（大体時間を忘れていた・・・）、まともにやろうとしたのは今回が初めてです。。。  
しかもコードなんて書いたのは本当に久しぶりなのでボロボロでしたが、この後見返して笑い話にできるように記録はつけたいとおもいます。  
せっかくなので直近のA問題もやりました~業務中に~  
## [179-Plural Form](https://atcoder.jp/contests/abc179/tasks/abc179_a)  
```
S = input()  
print(S+'es' if S.endswith('s') else S+'s')
```
print(S+'es' if S[-1] == s else S +'s')でこれで良かったんですね・・・
  


## [178-Not](https://atcoder.jp/contests/abc178/tasks/abc178_a)  
```
x = int(input())
print(0 if x == 1 else 1)
```

## [177-Don't be late](https://atcoder.jp/contests/abc177/tasks/abc177_a)  
```
d, t, s = map(int, input().split())
print('Yes' if d / t <= s else 'No')
```

## [176-Takoyaki](https://atcoder.jp/contests/abc176/tasks/abc176_a)  
```
n, x, t = map(int, input().split())
a = ( n + x - 1) // x
print(a * t)
```
何回焼くかはn/xを切り上げたもの
( n + x - 1) // x　の形式はちょうど割り切れる以外は１増える式として暗記すると良い

## [175-Rainy Season](https://atcoder.jp/contests/abc175/tasks/abc175_a)  
```
s = input()
ans = 0

for i in range(1, 4):
    p =  'R' * i
    if p in s:
        ans = i

print(ans)
```
RRR,RR,Rの出力が出るものをカウントして出力させればいい

## [174-Air Conditioner](https://atcoder.jp/contests/abc174/tasks/abc174_a)  
```
x = int(input())
print('Yes' if 30 <= x else 'No')
```

## [173-Payment](https://atcoder.jp/contests/abc173/tasks/abc173_a)  
```
n = int(input())
ans = (1000 - ( n % 1000)) % 1000
print(ans)
```

## [172-Calc](https://atcoder.jp/contests/abc172/tasks/abc172_a)  
```
a = int(input())
print(a + a ** 2 + a ** 3)
```
最初　a*a, a*a*aと書いてました。。。

## [171-αlphabet](https://atcoder.jp/contests/abc171/tasks/abc171_a)  
```
a = str(input())
print('a' if a.islower() == True else 'A')
```
入力したものと同じということで　a == a.upper() でAを出すでも可能

## [170-Five Variables](https://atcoder.jp/contests/abc170/tasks/abc170_a)  
```
x = list(map(int,input().split()))
print(x.index(0) + 1)
```
  
## なんもんもやると慣れてきますね
AtCoderの最初の難関は標準入力かなって勝手に思っています。ここにさえ慣れてしまえばA問題は肩慣らしぐらいにできるかなって感じですよね。  
（業務でコードを書くことは皆無の人並みの感想です
）