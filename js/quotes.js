const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로"
    },
    {
        quotes: "산다는 것 그것은 치열한 전투이다.",
        author: "로망 로랑"
    },
    {
        quotes: "하루에 3시간을 걸으면 7년 후에 지구 한바퀴를 돌 수 있다.",
        author: "사무엘 존슨"
    },
    {
        quotes:"언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author:"파울로 코엘료"
    },
    {
        quotes:"진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 한다.",
        author:"찰리 채플린"
    },
    {
        quotes: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author: "앨버트 하버드"
    },
    {
        quotes: "신은 용기있는 자를 결코 버리지 않는다.",
        author: "켄러"
    },
    {
        quotes: "피할 수 없으면 즐겨라",
        author: "로버트 엘리엇"
    },
    {
        quotes: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author: "엘사 맥스웰"
    },
    {
        quotes: "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
        author: "채근담"
    },
    {
        quotes:"행복한 삶을 살기 위해 필요한 것은 거의 없다.",
        author:"마르쿠스 아렐리우스 안토니우스"
    },
    {
        quotes: "계단을 밟아야 계단 위에 올라설 수 있다.",
        author: "터키 속담"
    },
    {
        quotes: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스 다윈"
    },
    {
        quotes: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹"
    },
    {
        quotes: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡"
    },
    {
        quotes: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다.",
        author: "에디슨"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerHTML = todayQuotes.quotes;
author.innerHTML = todayQuotes.author; 