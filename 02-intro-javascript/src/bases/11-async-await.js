
const getImagen = async () => {
    try {
        const apiKey = 'dhRC9i6UrDp4cLWuD5TEplBgn0Te7g3C';
        const res    = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data }   = await res.json();
        console.log(data);

        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(err) {
        // Manejo del error
        console.log(err);
    }
}

getImagen()



