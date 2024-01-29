const messageOpening = ['Embrace', 'Seize', 'Radiate', 'Ignite', 'Lightup']
const messageMid = ['overcome obstacles', 'face challenges', 'achieve your dreams', 'inspire greatness', 'cultivate positivity']
const messageEnd = ['Never give up', 'You are capable', 'Believe in yourself', 'Brighter path awaits', 'Your future shines']
const messageRef = ['Fellow', 'Friend', 'Buddy', 'Cheers', 'Legend' ]

function messageGenerator () {

    let a = Math.floor(Math.random() * 4) + 0;
    let b = Math.floor(Math.random() * 4) + 0;
    let c = Math.floor(Math.random() * 4) + 0;
    let d = Math.floor(Math.random() * 4) + 0;

    console.log('Hello, its working');
    document.getElementById('message').innerHTML = `"${messageOpening[a]}, ${messageMid[b]}, ${messageEnd[c]}, ${messageRef[d]}"`;
    console.log(`${messageOpening[a]}, ${messageMid[b]}, ${messageEnd[c]}, ${messageRef[d]}`);
}