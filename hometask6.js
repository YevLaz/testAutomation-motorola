// let ms = 0;


async function delay (ms) {

    let delayS = await new Promise ((res, rej) => {
        setTimeout(() => {
            res()
        }, ms);

    })

}

delay(3000).then(() => alert('Wykonalo sie po 3 sekundach'));