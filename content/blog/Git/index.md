---
title: 3年間トラウマと化していたgitにやっとpushできた話
date: "2020-04-01T20:00:03.284Z"
description: "Gitについてトラウマを抱えていたころのお話"
---
![Gitlogo](./Git-Logo-2Color.png)  
## 3年前のある時「あれ?pushされないんだけど???」
その時はハッカソンに出ていて（コードかけないから広報とかそっちで）、GitHubを使って成果物を作成していました。  
一緒に居た人たちは情報系なので知っているはずですが、さっぱりわからないとのこと・・・。  
（ちなみになぜか個人には出来てもチームのリポジトリにはpushできなくて人間gitと化しました）  
以来、若干のトラウマを残しながら放置することとなりました。  

## そうだポートフォリオを作ろう
ポートフォリオをエンジニアが作ることの重要性は理解しているつもりでした。  
普通ならGitHubにページを作ればいいのですが、先のトラウマがあり楽な方法を使いました。
作成したのはWordpressでのブログという実に安易な逃げ道でした。  

配属されたのが運用系、構築するとはいってもノンコーディングでした。  
おまけに業務とは関係ない部署はgitの使用が禁止ということもあり、しばらくの間はこれで逃げていました。  
今は消したとはいえ、AWSを用いたサービスの構築が出来るということは救いでした。  

前の記事に書きましたが、ポートフォリオの移行の際に、JavaScriptのフレームワークを使うことをきめましたが、そうなるとGitHubを使うことが必須となります。  
知識も付いたつもりだし、もう逃げちゃだめかなと思い立って再入門することにしました。  

## Git再入門  
とりあえず、初心者用と同じことから始めます。  
正直何が原因だったのか記憶にないので復習も兼ねています。
リポジトリの名前は安直にtest、ファイル名はindex.txtでやりました  

### 確認とファイルの作成

```
$ git --version //念の為入っているかを確認
$ mkdir test //testフォルダを作成
$ cd test //testフォルダに移動
$ echo "test" > index.txt //index.txtを作成
```
ここまではなんの問題もなし（あったらもうgitの問題じゃないし）  

### ローカルリポジトリへコミット
```
$ git init //Gitリポジトリの作成
$ git add --all //リポジトリに全部登録
$ git commit -m "First" //Firstというコメントをつけてコミット
```
ローカルリポジトリの登録まではOKのようです。ここは問題なさそうです。  

### リモートリポジトリへプッシュする
まずはGitHubのリポジトリ画面からリモートリポジトリを作成をします。  
Repository nameはローカルと同じtestで作成します。  

あとはそこに出てくるコマンドを打ち込むだけ
```
$ git remote add origin git@github.com:username/test.git //リモートにadd
$ git push -u origin master //masterへpush
```
ここで失敗します。こんなエラーを吐きました
```
fatal: Could not read from remote repository
```
どうやら鍵の設定がされていないとのこと。  
昔やったような記憶があったような・・・と思ってGitHubを見てみたら登録されてない・・・。  
当時の記憶はもう無視して新規作成することにしました。  

### 公開鍵・秘密鍵を作成・登録する
#### キーの作成
```
$ cd ~/.ssh //ディレクトリの移動
$ ssh-keygen -t rsa //rsaキーの作成
```
ディレクトリを移動してキーを作成します。以下のようなのが出てくるので入力していきます。

```
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/(username)/.ssh/id_rsa): //名前を決めれる（例：githubkey_rsa）
Enter passphrase (empty for no passphrase): //パスフレーズを入力（例：hogehoge）
Enter same passphrase again: //再入力

$ ls -l //作成されているか確認
```
上の例だとgithubkey_rsa,githubkey_rsa.pubの2つが作成されているのを確認できればOKです。

このままだと接続されないので、configファイルを設定します。
```
$ ~/.ssh/config
Host github github.com
  HostName github.com
  IdentityFile ~/.ssh/githubkey_rsa //作成した鍵の名前に変更する
  IdentitiesOnly yes
```

#### 公開鍵を設定する
[GitHubのぺージ](https://github.com/settings/keys)にアクセスすると登録画面に移ります。  

入力欄のKeyの部分は公開鍵の中身を入力します。
以下のコマンドを叩いてまるまるコピペするほうが早いです
```
$ pbcopy < ~/.ssh/githubkey_rsa.pub
```

これで登録が完了しました。下記コマンドを叩いて、こんな文が帰ってくればOKです。
```
$ ssh -T git@github.com
Hi (GitHubのアカウント名)! You've successfully authenticated, but GitHub does not provide shell access.
```

#### 再度pushする
```
$ git remote add origin git@github.com:username/test.git
$ git push -u origin master
```
最初にパスフレーズを聞かれるので、入力すると無事にpush出来ました！

## やっとスタートラインに立てた
調べれば何とか出来たのですが、なんで当時は出来なかったんだろうか??  
エラーが同じ場所で出たとするとググれば出る内容だったのに、違ったのかなと思います。  

ま、解決したから万事 **ヨシッ！**  

参考  
[GitHub 初心者の最初のプッシュ](https://qiita.com/folivora/items/763d06b26bafd573a456)
[こっそり始めるGit／GitHub超入門](https://www.atmarkit.co.jp/ait/series/3190/)
[GitHubでssh接続する手順 公開鍵・秘密鍵の生成から](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)
