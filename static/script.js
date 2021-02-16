window.onload = () => { //onload makes sure the content is loaded o page first
    document.getElementById('myButton').addEventListener('click', () => {
        console.log('Button was clicked!');
        const userText = document.getElementById('search').value;
        alert(userText + ' was typed in');

        const url = '/search/' + userText;
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
            .then(data => { // .then will only run the function *once* the data is fetched from the internet
                console.log(data); // See what this logs!
                const newDiv = document.createElement('div');
                for(let x = 0; x < 10; x++) {
                    var text = document.createTextNode(data['headlines'][x]);
                    newDiv.appendChild(text);
                    document.getElementById('headlines').appendChild(newDiv);
                }
            });
            
    });
};

// after console.log(data)
// const container = document.getElementsByClassName('container')[0];
// data['headlines'].forEach(headline => {
//     const newHeadline = document.createElement("div");
//     newHeadline.textContent = headline;
//     container.appendChild(newHeadline);
// })