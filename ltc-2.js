
const quotes2 = [
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&amount=250&address=Lav3xNomwXvGsESoy2WV7wwAE12K3JKJDu',
	author2: 'Lav3xNomwXvGsESoy2WV7wwAE12K3JKJDu',
    ordernum2: 'Order #24Q0QX3211'
},
    
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&amount=250&address=LbyMv7eWfXqU9TiyAALrhhbxdxNDvdvQha',
	author2: 'LbyMv7eWfXqU9TiyAALrhhbxdxNDvdvQha',
    ordernum2: 'Order #55H9KK7996'
},
    
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&amount=250&address=LR6GniPSzuaKK1tCVzze3Bf7yorjHkeu5x',
	author2: 'LR6GniPSzuaKK1tCVzze3Bf7yorjHkeu5x',
    ordernum2: 'Order #44J5QC1255'
},	
	
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&amount=250&address=LbRwkNYn46S8dUewpGodj5QM6LyMFSgafq',
	author2: 'LbRwkNYn46S8dUewpGodj5QM6LyMFSgafq',
    ordernum2: 'Order #81U3JB6693'
},	
	
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&amount=250&address=LSxCfb6PcMk6r5W3Zg2DGxyF4GJoHfCEJu',
	author2: 'LSxCfb6PcMk6r5W3Zg2DGxyF4GJoHfCEJu',
    ordernum2: 'Order #30Q4QQ6372'
},	
	
{
	quote2: 'https://www.bitcoinqrcodemaker.com/api/?style=litecoin&fiat=USD&amount=250&address=LSz4A7EinbezB1mfE2Yt3tCNyUMmU4LjDA',
	author2: 'LSz4A7EinbezB1mfE2Yt3tCNyUMmU4LjDA',
    ordernum2: 'Order #83E9IM0533'
},
]


const quote2 = document.querySelector('.quote_litecoin');
const author2= document.querySelector('.author_litecoin');


function litecoinqr() {
	let random = Math.floor(Math.random() * quotes2.length);
	
	quote2.getElementsByTagName("IMG")[0].src = quotes2[random].quote2;
	author2.innerHTML = quotes2[random].author2;
}