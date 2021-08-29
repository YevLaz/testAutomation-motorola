const postList = [];

//1
const btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    const authorInput = document.getElementById('authorInput');
    const author = authorInput.value;
    
    const post = new Post(message, author);
    postList.push(post);

    render();
});
//2
function render() {
    const contentElemnt = document.getElementById('content');
    contentElemnt.innerHTML = '';
    for(let i=0; i< postList.length; i++) {
        const html = postList[i].generateHTML();
        contentElemnt.appendChild(html);
    }
}

// 3
class Post {
    constructor(message, author) {
        this.message = message;
        this.author = author;
        this.date = new Date();
        this.index = Date.now();
    }

    generateHTML() {
        const container = document.createElement('div');
        const mainP = document.createElement('p');
        const bottomP = document.createElement('p');
        const clearBtn = document.createElement('button')

        clearBtn.value = this.index;
        clearBtn.value1 = this.index;
        // const clearBtn1 = +(clearBtn.value);

        mainP.innerText = this.message;
        bottomP.innerText = this.author + ' ' + this.date;
        clearBtn.innerText = 'clear'
        container.appendChild(mainP);
        container.appendChild(bottomP);
        container.appendChild(clearBtn);

        // console.log(this.index, clearBtn.value, clearBtn1);
        // console.log(typeof(this.index), typeof(clearBtn.value), typeof(clearBtn1));

        // clearBtn.addEventListener('click', () => {
        //     debugger;
        //     for(let i=0; i< postList.length; i++) {
        //         if (this.index = clearBtn.value) {
        //             postList.splice(i, 1);
        //             return render();
        //     }
        // }
        // })

        clearBtn.addEventListener('click', () => {
            debugger;
            let i = postList.findIndex(function(findI) {
                return findI.index === +(clearBtn.value);
            })
            postList.splice(i,1);
            i = undefined;
            return render();
        })

        return container;
        
    }
}

