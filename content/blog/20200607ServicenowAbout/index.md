---
title: ServiceNow入門1:そもそもServiceNowとは？
date: "2020-06-06T23:45:03.284Z"
description: "ServiceNowについてイントロ的なまとめをしてみました"
---
![SN_Logo](./SNowLogo.png)  
お勉強も兼ねますが、日本ではあまり聞かないServiceNowというツールについて書いていこうと思います。 

## ServiceNowとは?
「ServiceNowの開発をしています」というとほぼ間違いなく「知らない」という回答をもらえます。
こうなってしまうと、どう回答していいものなのか結構困ります。
![SN_Qiita](./SN_Qiita.jpg)  
みんな大好きQiitaの検索をみてもそんなに引っかかりませんし、更新日付も中々古いのが多いです。
こうなるとナニソレ感が高まりますね。。。それでは公式サイトを見てみましょう。  
  
>ServiceNowは、企業の働き方をより良くします。古い手動の働き方を、最新のデジタルワークフローに変革することによって、
>従業員とお客様は、速く、シンプルかつ簡単に必要なものを必要なときに得ることができます。
  
おわかりいただけたでしょうか？多分これでもどういうツールなのかわからない人も多いと思います。気持ちはわかりますよ、だってみんな開発といってもこういうのに興味ないでしょうし。
  
ざっくりとわかりやすく言うと「問題管理やインシデントの管理、各種申請につかうワークフローをひとまとめにしてしまおう」というSaaSのサービスです。
  
少なくとも会社では何らかの申請をするためのサービスをつかっているとは思うのですが（EXCEL申請書は別として・・・）、申請経路によってバラバラのツールを使うよりも一本化したほうがいいし、他のサービスとの連携も可能になるというものになります。
  
クラウド上で動作するため、オンプレのようなものを構築せずとも必要なアプリ側を自分たちで開発できることにメリットがあります。

  
## 日本であまり聞かないけど、なぜ？
[事例紹介](https://www.servicenow.co.jp/customers.html)  
一応、名前の聞くような企業でも導入されています。載っているのがほんの一例なので、どれだけの規模なのかはわからないですけど。海外ではかなり有名なサービスです。
  
ではなんで日本ではそんなに導入されなかったのでしょうか。  
主な理由は（覚えている限りでは）２つほどあります。 

### 日本にリージョンが存在しなかった
[Region](https://cloud.watch.impress.co.jp/docs/news/1148800.html)  
この記事を見るように、2019年まで日本にデータセンターが存在しませんでした。  
日本国内では、日本にデータセンターがないという理由で安全上アウト、みたいな企業も多く、導入ができなかったり、サービスとして提案しづらいという状況でした。知名度の低さも加わって、なかなか広まらなかったのだと思います。


### ２：海外と日本の運用事情
これも大きな理由になるかと思います。海外ではベストプラクティスというものを定義された場合、ユーザー側はそちらに合わせることを正として、制度も変えてしまします。そのため、そのサービスを導入してから運用も1本化されることになります。
  
一方で日本はそれまでの企業文化を捨てることがなく（特に大手）、各種サービスを自社文化に合わせようとやりがちです。AWSのように汎用性の高いものならまだしも、ServiceNowはどちらかというと合わせてほしいという立場なので、文化の乖離はかなり大きいと思います。
  
ただ、やっぱり変われる企業は導入していくことがしやすいのと、それまでのサービスを1本化できることからなんとかして導入しようという流れになっているようにも見えます。弊社の顧客もそんな感じですね。
  

## 開発は何をすることをさすのか
まあ、これに関してはこっちが聞きたいよ・・・という内容ですが、ごりごりコーディングをする感じではないですね。一部Javascriptとかも使いますけど、どちらかというとGUIでいじる印象ですね。
  
そのへんはこれから書いていこうと思いますが、各種フローの作成の設定を行ったり、フローチャートを作成したりと、Web系エンジニアとの開発とは少し違ったものになるかと思います。
  
あらゆるツールを一本化できること、外部連携をすることで管理が楽になれるなら導入する会社もふえていくのではとおもいます。現状では英語のドキュメントしかなく、企業の開発ブログなどもかなり少ないので、今後開発していく人が参考になるような記事を書ければなーと思います。