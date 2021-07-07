

const quotes1 = [
{
	quote1: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&fiat=USD&amount=350&address=qqhmgzn32jl9pufhwtald8m67mrwqmvqeujl7mr5es',
	author1: 'qqhmgzn32jl9pufhwtald8m67mrwqmvqeujl7mr5es',
    ordernum1: 'Order #24A4QX6011'
},
    
{
	quote1: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&fiat=USD&amount=350&address=qp4phacgg0p4nvzr9lgmz3qpfl3lhv448s758dcym2',
	author1: 'qp4phacgg0p4nvzr9lgmz3qpfl3lhv448s758dcym2',
    ordernum1: 'Order #55H5QK7896'
},
    
{
	quote1: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&fiat=USD&amount=350&address=qz745v5c4hl4s7xwf4k00z2v2kvuw6k6nygnezpxgg',
	author1: 'qz745v5c4hl4s7xwf4k00z2v2kvuw6k6nygnezpxgg',
    ordernum1: 'Order #44J5QH8795'
},	
	
{
	quote1: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&fiat=USD&amount=350&address=qr8ta64tsgnfgftahy3jslqcslamdjacccg0zcav3c',
	author1: 'qr8ta64tsgnfgftahy3jslqcslamdjacccg0zcav3c',
    ordernum1: 'Order #81U3JR9093'
},	
	
{
	quote1: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&fiat=USD&amount=350&address=qzktgm09tq7dhux2klxwlffyjuy8y90f75elw8x0xn',
	author1: 'qzktgm09tq7dhux2klxwlffyjuy8y90f75elw8x0xn',
    ordernum1: 'Order #30Q4KX1622'
},	
	
{
	quote1: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&fiat=USD&amount=350&address=qzsh7ml5nmm3ly664npyvypkfactpaj02cgvhs3rq7',
	author1: 'qzsh7ml5nmm3ly664npyvypkfactpaj02cgvhs3rq7',
    ordernum1: 'Order #83E9IU9811'
},	
	
	
	
]


const quote1 = document.querySelector('.quote_bitcoincash');
const author1 = document.querySelector('.author_bitcoincash');


function bitcoincashqr() {
	let random = Math.floor(Math.random() * quotes1.length);
	
	quote1.getElementsByTagName("IMG")[0].src = quotes1[random].quote1;
	author1.innerHTML = quotes1[random].author1;
    
}