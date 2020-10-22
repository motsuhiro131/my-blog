---
title: AWS 東京リージョンの被った直近の障害をまとめてみた
date: "2020-10-22T21:45:00.284Z"
description: "最近表に出ることが多くなったAWSの障害ですが、せっかくだしどのぐらいの頻度なのかなと調べてみました。"
tags: ["AWS"]
---
![AWSicon](AWSicon.jpg)

## 実はちょくちょく出てる障害  
AWSのマネジメントコンソールから「Personal Health Dashboard」と検索するとこれまでのイベントが出力されます  
[Personal Health Dashboard](https://aws.amazon.com/jp/premiumsupport/technology/personal-health-dashboard/)  
  
直近の1ヶ月しか見れませんが、表立って出ていないものだとStorage Gatewa VMにて、キャッシュやアップロードなどが出来ない事象が発生していました。  
ただ、Storage Gatewayはオンプレとクラウドを接続するためのツールですので、直接関係のない人は多かったと思います。  
[Storage Gateway](https://aws.amazon.com/jp/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)  

公式で確認する方法もありますので、とりあえずなにか怪しかったらこちらを確認するのが良いですね。  
[ステータスの確認](https://status.aws.amazon.com/)  
  
1週間しかみれないので不便だなあと思っていたら便利な方法も見つけました。  
[【小ネタ】AWSで過去に発生した障害の履歴を確認する方法](https://dev.classmethod.jp/articles/service-health-status-history/)  
  
## 2019/08/23 空調設備の故障でAPNE1-az4のEC2関係が軒並み死亡  
単一AZ（ap-northeast-1a）で冷却装置が故障したことでオーバーヒートを起こし、EC2とEBSの一部が死亡。  
それに伴って、関係サービスであるRDS、Redshift、 ElastiCache および Workspace等も道連れという、東京リージョンでは今の所最大の障害かと思います。  
[東京リージョン (AP-NORTHEAST-1) で発生した Amazon EC2 と Amazon EBS の事象概要](https://aws.amazon.com/jp/message/56489/)  
被害者：結構なゲーム会社とか（多すぎるので・・）  
  
## 2020/04/20 レイテンシの増加により、通知系等がお亡くなりに  
エラーレートの上昇などの複数の要因でCloudWatch、Simple Queue Service、CloudFormation、Lambdaが駄目に。AZ単位じゃないサービスが被害を被ると流石にどうにもなりませんね。
https://xtech.nikkei.com/atcl/nxt/news/18/07639/

## 2020/09/26 CFの断続的なエラーにより、一瞬途絶える
CloudFrontのエッジロケーションが障害を一時的におこし、ちょっと話題になりましたね。  
だいぶ早く解決したので誤報説もでましたが、「またかよ」みたいな声はありましたね。  
https://dev.classmethod.jp/articles/cloudfront-fault-20200926/  
  
## 2020/10/22 ネットワークの接続不良でAPNE1-az2のEC2とEBSのパフォーマンスが低下  
今日（執筆時点）に起きた出来事ですね。AZ（ap-northeast-1d）のネットワーク接続が不調に陥り、EC2とEBSの一部でパフォーマンスが低下し、アクセスができなくなりました。  
前回の障害よりは軽いですが、それでもPayPayがお昼時に死んだので、財布を持たなかった人は危なかったのかもしれません。  
被害者：PayPay、メイプルストーリー等  
  
## どうすればいいのか  
AZの単一構成をなるべく避けるのが一番簡単なのですが、速度重視にするためには出来ない構成なので、Active-Stanbyの構成をとっておくのがいい気がします。（無駄な出費がかかりますが・・・）  
  
ここ最近増えたなという声もあるので、せっかくですしメディアに出たものを調べてみましたが、2020年はちょっと多いですね。  