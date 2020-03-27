const btn=document.querySelector('form');


const {hash}=window.location;

const message=atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').classList.add('red');
    document.querySelector('h1').innerHTML=message;
}
btn.addEventListener('submit',event=>{
    event.preventDefault(); 

    

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide')

    const input=document.querySelector('#message-input');
    console.log("lawd")

    const encrypted=btoa(input.value)
    const linkinput=document.querySelector('#link-input');
    

    linkinput.value=`${window.location}#${encrypted}`;
    linkinput.select();
})