// let ms = 0;


function delay (ms) {

        return new Promise ((res, rej) => {
        setTimeout(() => {

            res()
        }, ms);

    })
}


delay(3000).then(() => alert('Wykonalo sie po 3 sekundach'));