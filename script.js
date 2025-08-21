

const monFormulaire = document.getElementById('mon_formulaire_magique');
monFormulaire.addEventListener('submit', function (evenement) {
    evenement.preventDefault();

    div = document.createElement('div');
    monFormulaire.appendChild(div);

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    nomVide = document.getElementById('nom');
    monFormulaire.appendChild(document.createElement('div'));



    if (nom === '') {
        alert('veuillez remplir le champ nom svp');
    }
    if (email === '') {
        alert('veuillez remplir le champ email svp');
    }
    else {


        alert(`Congradulations ${nom}, votre formulaire a été envoyé avec succès`);
        document.body.removeChild(monFormulaire);


    }
});
