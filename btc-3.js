
const quotes0 = [
{
	quote0: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=350&address=12iAb68C414u53AL5f7PtMBCFK5ezZxJc4',
	author0: '12iAb68C414u53AL5f7PtMBCFK5ezZxJc4',
    ordernum0: 'Order #23A4CY0029'
},
    
{
	quote0: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=350&address=18moqDiA1GWPP7mT2Pjakpu8Utsh7UPk5m',
	author0: '18moqDiA1GWPP7mT2Pjakpu8Utsh7UPk5m',
    ordernum0: 'Order #45H5AK8466'
},
    
{
	quote0: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=350&address=18PeVryLewhtRb8rZg3RqgD8YRFxt9kQCk',
	author0: '18PeVryLewhtRb8rZg3RqgD8YRFxt9kQCk',
    ordernum0: 'Order #69J5BS1055'
},	
	
{
	quote0: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=350&address=1ADzJmYpWzge4fwq3ykhgV3qwLjDW1rZaJ',
	author0: '1ADzJmYpWzge4fwq3ykhgV3qwLjDW1rZaJ',
    ordernum0: 'Order #83U3MU0033'
},	
	
{
	quote0: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=350&address=12x5xbpP9rScetL9rUX2aP35nzUmy7wf69',
	author0: '12x5xbpP9rScetL9rUX2aP35nzUmy7wf69',
    ordernum0: 'Order #32Q4QB0902'
},	
	
{
	quote0: 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=350&address=16gwBQ4RCzQnnMLoyZYS9SDVzZoGDv77GL',
	author0: '16gwBQ4RCzQnnMLoyZYS9SDVzZoGDv77GL',
    ordernum0: 'Order #83E5XX9129'
},	
		
]

const quote0 = document.querySelector(".quote_bitcoin");
const author0 = document.querySelector(".author_bitcoin");
const ordernum = document.querySelector('.ordernum');

function bitcoinqr() {
	let random = Math.floor(Math.random() * quotes0.length);
	
	quote0.getElementsByTagName("IMG")[0].src = quotes0[random].quote0;
	author0.innerHTML = quotes0[random].author0;
    ordernum.innerHTML = quotes0[random].ordernum0;
}