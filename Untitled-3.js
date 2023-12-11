let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let tablet = window.matchMedia("(max-width: 768px)");
let phone = window.matchMedia("(max-width: 500px)");
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let agee = document.getElementById('age');
let fnn = firstname.value;
let lnn = lastname.value;
let ag = agee.value;
let form = document.getElementById('form');
let picture = document.getElementById('picture');
let textp1 = document.getElementById('textp1');
let picture2 = document.getElementById('picture2');
let textp2 = document.getElementById('textp2');
let i = 0;
let experience = document.getElementById('experience');

function wait(){
    return new Promise((resolve) => {
        setTimeout(resolve,1000);
    })
};

function pctur(){
    if(picture.style.left == '5%'){
        picture.style.left = '50%';
        textp1.style.left = '5%';
        picture2.style.top = '-100%';
    }else if(picture.style.left = '50%'){
        picture2.style.top = '5%';
        picture.style.left = '5%';
        textp1.style.left = '-100%';
    }
}

function pctur2(){
   if(i === 0){
        picture2.style.left = '5%';
        picture.style.top = '-100%';
        i++;
        textp2.style.left = '55%';
   }else{
        i = 0;
        picture2.style.left = '55%';
        textp2.style.left = '-100%';
        picture.style.top = '5%';
   }
}

if(localStorage.getItem('yes','yes') == 'yes'){
    fnn = localStorage.getItem('applied', firstname.value);
    lnn = localStorage.getItem('applied', lastname.value);
    ag = localStorage.getItem('applied', agee.value);
    
    form.style.top = '-100%';
    experience.style.top = '5%';
}

function fname(){
    if(phone.matches){
        p1.style.top = '10%';
        p1.style.fontSize = '60%';
    }else if(tablet.matches){
        p1.style.top = '14%';
        p1.style.fontSize = '70%';
    }
    else{
        p1.style.top = '24%';
        p1.style.fontSize = '80%';
    }
}

function fname1(){
    if(phone.matches){
        p1.style.top = '10%';
        p1.style.fontSize = '60%';
    }else if(tablet.matches){
        p1.style.top = '14%';
        p1.style.fontSize = '70%';
    }
    else{
        p1.style.top = '24%';
        p1.style.fontSize = '80%';
    }
}

function fname2(){
    if(phone.matches){
        p1.style.top = '10%';
        p1.style.fontSize = '60%';
    }else if(tablet.matches){
        p1.style.top = '14%';
        p1.style.fontSize = '70%';
    }
    else{
        p1.style.top = '24%';
        p1.style.fontSize = '80%';
    }
}

function lname(){
    if(phone.matches){
         p2.style.top = '29%';
         p2.style.fontSize = '60%';
    } else if(tablet.matches){
        p2.style.top = '31%';
         p2.style.fontSize = '60%';
    } else{
        p2.style.top = '37%';
        p2.style.fontSize = '80%';
    }
}



function lname1(){
    if(phone.matches){
        p2.style.top = '29%';
        p2.style.fontSize = '60%';
   } else if(tablet.matches){
       p2.style.top = '31%';
        p2.style.fontSize = '60%';
   } else{
       p2.style.top = '37%';
       p2.style.fontSize = '80%';
   }
}


function lname2(){
    if(phone.matches){
         p2.style.top = '29%';
         p2.style.fontSize = '60%';
    } else if(tablet.matches){
        p2.style.top = '31%';
         p2.style.fontSize = '60%';
    } else{
        p2.style.top = '37%';
        p2.style.fontSize = '80%';
    }
}

function age(){
    if(phone.matches){
        p3.style.top = '47%';
        p3.style.fontSize = '60%';
   } else if(tablet.matches){
       p3.style.top = '45%';
        p3.style.fontSize = '60%';
   } else{
       p3.style.top = '50%';
       p3.style.fontSize = '80%';
   }
}

function age1(){
    if(phone.matches){
        p3.style.top = '47%';
        p3.style.fontSize = '60%';
   } else if(tablet.matches){
       p3.style.top = '45%';
        p3.style.fontSize = '60%';
   } else{
       p3.style.top = '50%';
       p3.style.fontSize = '80%';
   }
}

function age2(){
    if(phone.matches){
        p3.style.top = '47%';
        p3.style.fontSize = '60%';
   } else if(tablet.matches){
       p3.style.top = '45%';
        p3.style.fontSize = '60%';
   } else{
       p3.style.top = '50%';
       p3.style.fontSize = '80%';
   }

}


function submt(){
    if(firstname.value === '' || lastname.value === '' || agee.value === ''){
        alert('One of The Inputs Are Blank.');

    }else{
        console.log(typeof agee)
        form.style.top = '-100%';
        experience.style.top = '5%';
        fnn = firstname.value;
        lnn = lastname.value;
        ag = agee.value;
        localStorage.setItem('yes','yes');
        localStorage.setItem('applied', firstname.value);
        localStorage.setItem('applied', lastname.value);
        localStorage.setItem('applied', agee.value);
    }
}

async function cleared(){
    localStorage.clear();
    alert('Done!')
    await wait();
    location.href = '';
}
