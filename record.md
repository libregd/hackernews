## 前期
主要是利用第三方的API，所以参考的教程是官方的using a third party API。

也要考虑制作figma设计稿，虽然一般来说都是清心沐浴后，设计跟产品撕完再搞，但是产品这次不就是我自己吗，程序员也是自己，这就有点突然发蒙怎么搞。

1. 时间只有5天，因此首先解决：确实搞出来了
2. 样式也不能太丑，但是为了保证1，可以考虑先搞个框架用用，时间真的有富裕再考虑替换成自己纯手写的css
3. 不要把太多的精力时间用在设计上，记住这次自己是程序员为主。

## 命令行操作记录
这次优先放到了GitHub上，因此vscode会记录对比和每次变动的文件，记录这一部分是有助于更好的理解这个东西的运作，我估计react /vue 和redwood应该大差不差，写下来总是好的。

|命令|效果|
|---|---|
|```yarn rw setup ui tailwindcss```|更改了yarn.lock,package.json,这两补充的都是一些说明信息，说明这个project需要tailwindcss及其附带的内容，新增了postcss.config.js和tailwind.config.js这两是做了路径的一个转发和桥接，index.css是增加了import信息，从路径来说是从src，但是src实际没有，所以就是那两个cofig.js起的作用了。 |
|```yarn rw g page home /```|直接新增了三个文件：home,home story,home test.都放在web/src下同一个文件下。改变了一个文件：router.js自动追加了一条信息|
|```yarn rw g page about ```|类似同上|
|```yarn rw g page Jobs ```|类似同上|
|```yarn rw g page shows ```|类似同上|
|```yarn rw g layout hacker```| 生成了一个layout文件|


## 行动安排

day1：
1. layout类似固定导航和底部，nav可以先做。footer再说。
      1. ~~nav 基本搞定~~
2. 几个必要页面先把数据搞出来，测试获取api情况，优先 job show，和ask，因为有直接的top 200的id array，这三也能支撑一个nav。长得也很像，基本做1个爽3个。

    1. console.log 可以拿到的东西，怎么放到html里？
    2. 怎么批量放进去？

按道理应该看react，但是react的感觉是，html和js混着写，定成一个节点，反正最后你要render那个节点。



day2:






