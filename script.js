const term = document.querySelector('.term')
const accent = document.querySelector('.accent')
const checkAccent = document.querySelector('.checkAccent')
const nextButton = document.querySelector('.nextButton')

let item = {
    上がる: 'Heiban',
    下がる: 'Nakadaka',
    教える: 'Heiban',
    売る: 'Heiban',
    置く: 'Heiban',
    押す: 'Heiban',
    貸す: 'Heiban',
    消す: 'Heiban',
    吸う: 'Heiban',
    乗る: 'Heiban',
    履く: 'Heiban',
    貼る: 'Heiban',
    弾く: 'Heiban', 
    引く: 'Heiban',
    呼ぶ: 'Heiban',
    いる: 'Heiban',
    着る: 'Heiban',
    寝る: 'Heiban',
    する: 'Heiban',
    遊ぶ: 'Heiban',
    歌う: 'Heiban',
    送る: 'Heiban',
    贈る: 'Heiban',
    踊る: 'Heiban',
    終わる: 'Heiban',
    暮らす: 'Heiban',
    触る: 'Heiban',
    座る: 'Heiban',
    足りる: 'Heiban',
    違う: 'Heiban',
    使う: 'Heiban',
    止まる: 'Heiban',
    失くす: 'Heiban',
    登る: 'Heiban',
    上る: 'Heiban',
    曲がる: 'Heiban',
    回す: 'Heiban',
    磨く: 'Heiban',
    もらう: 'Heiban',
    渡る: 'Heiban',
    開ける: 'Heiban',
    あげる: 'Heiban',
    浴びる: 'Heiban',
    入れる: 'Heiban',
    植える: 'Heiban',
    変える: 'Heiban',
    くれる: 'Heiban',
    捨てる: 'Heiban',
    止める: 'Heiban',
    負ける: 'Heiban',
    辞める: 'Heiban',
    止める: 'Heiban',
    借りる: 'Heiban',
    伺う: 'Heiban',
    始まる: 'Heiban',
    はたらく: 'Heiban',
    虐める: 'Heiban',
    生まれる: 'Heiban',
    産まれる: 'Heiban',
    遅れる: 'Heiban',
    教える: 'Heiban',
    始める: 'Heiban',
    迎える: 'Heiban',
    送りに行く: 'Heiban',
    会う: 'Atamadaka',
    合う: 'Atamadaka',
    ある: 'Atamadaka',
    書く: 'Atamadaka',
    切る: 'Atamadaka',
    着る: 'Heiban',
    住む: 'Atamadaka',
    取る: 'Atamadaka',
    なる: 'Atamadaka',
    脱ぐ: 'Atamadaka',
    飲む: 'Atamadaka',
    吐く: 'Atamadaka',
    降る: 'Atamadaka',
    持つ: 'Atamadaka',
    読む: 'Atamadaka',
    出る: 'Atamadaka',
    出す: 'Atamadaka',
    見る: 'Atamadaka',
    来る: 'Atamadaka',
    返す: 'Atamadaka',
    帰る: 'Atamadaka',
    通る: 'Atamadaka',
    入る: 'Atamadaka',
    余る: 'Nakadaka',
    歩く: 'Nakadaka',
    急ぐ: 'Nakadaka',
    動く: 'Nakadaka',
    移す: 'Nakadaka',
    映す: 'Nakadaka',
    写す: 'Nakadaka',
    起こす: 'Nakadaka',
    思う: 'Nakadaka',
    泳ぐ: 'Nakadaka',
    かかる: 'Nakadaka',
    乾く: 'Nakadaka',
    作る: 'Nakadaka',
    直す: 'Nakadaka',
    治す: 'Nakadaka',
    習う: 'Nakadaka',
    話す: 'Nakadaka',
    払う: 'Nakadaka',
    休む: 'Nakadaka',
    わかる: 'Nakadaka',
    飢える: 'Nakadaka',
    起きる: 'Nakadaka',
    落ちる: 'Nakadaka',
    降りる: 'Nakadaka',
    下りる: 'Nakadaka',
    かける: 'Nakadaka',
    閉める: 'Nakadaka',
    食べる: 'Nakadaka',
    付ける: 'Nakadaka',
    できる: 'Nakadaka',
    驚く: 'Nakadaka',
    頑張る: 'Nakadaka',
    手伝う: 'Nakadaka',
    覚える: 'Nakadaka',
    答える: 'Nakadaka',
    調べる: 'Nakadaka',
    疲れる: 'Nakadaka',
    思い出す: 'Nakadaka',
    入れ替える: 'Nakadaka',
    考える: 'Nakadaka',
    乗り換える: 'Nakadaka',
    
}

data = Object.entries(item);

function getRandomTerm() {
    let randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `${randomTerm[0]}`
    accent.innerHTML = `${randomTerm[1]}`
}


term.addEventListener('click', function() {
  getRandomTerm();
    accent.style.display = 'none';
})

checkAccent.addEventListener('click', function() {
  accent.style.display = 'block';
})

nextButton.addEventListener('click', function() {
    getRandomTerm();
    accent.style.display = 'none';
  })

