
let input=document.querySelector('input');
let btnGenerateQR=document.querySelector('#GenerateQR');
let imgQR=document.querySelector('img');



function generateQR()
{
    if(input.value=='')

        {
            alert('please valid input');
        }
        else{
            imgQR.setAttribute('src',' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ input.value)
        }
        input.value='';
}

btnGenerateQR.addEventListener('click',generateQR );












