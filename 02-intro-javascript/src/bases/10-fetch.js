const apiKey = 'dhRC9i6UrDp4cLWuD5TEplBgn0Te7g3C';

const peticionHttp = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//promesas en cadena
peticionHttp
    .then( resp => resp.json() )
    .then( ({data}) => {
        const {url} = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    //este catch atrapa todo
    .catch(console.warn)
