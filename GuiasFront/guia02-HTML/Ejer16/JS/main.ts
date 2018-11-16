
     function Click():void {
        let nombre : string = (<HTMLInputElement> document.getElementById("name")).value;
        let email : string = (<HTMLInputElement> document.getElementById("email")).value;
        let dni : string = (<HTMLInputElement> document.getElementById("dni")).value;
        let cv : string = (<HTMLInputElement> document.getElementById("cv")).value;
        console.log(`Nombre: ${nombre}\nEmail: ${email} \nDni: ${dni}\nCV: ${cv}`);
    }
