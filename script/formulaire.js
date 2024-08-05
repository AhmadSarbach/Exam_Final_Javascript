document.addEventListener("DOMContentLoaded", () => {

    // Récupération du formulaire
    const form = document.querySelector('form');

    // Récupération des champs du formulaire par leur nom
    const { nom_complet, email, statut, adresse } = form.elements;
    const champs = { nom_complet, email, statut, adresse };

    // Création d'un objet pour retenir les erreurs de validation
    const erreur = { 'nom_complet': "", email: "", statut: "", adresse: "" };

    // Expressions régulières utiles pour la validation
    const nameRegex = /^[a-zA-Z]{4,}$/; // Le nom avec au moins 4 lettres
    const postRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/; // Code postal canadien
    const identityRegex = /^\d{4}$/; // Un nombre à 4 chiffres (non utilisé ici, peut être retiré)

    // Fonction pour valider le champ courant
    function validerChamp(champ) {
        const { name, value } = champ;
        switch (name) {
            case "nom_complet":
                if (!nameRegex.test(value)) {
                    erreur['nom_complet'] = "Le nom doit contenir au moins 4 lettres";
                    return false;
                } else {
                    erreur['nom_complet'] = "";
                    return true;
                }
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    erreur.email = "Adresse email invalide";
                    return false;
                } else {
                    erreur.email = "";
                    return true;
                }
            case "statut":
                if (value === "") {
                    erreur.statut = "Le statut marital est requis";
                    return false;
                } else {
                    erreur.statut = "";
                    return true;
                }
            case "adresse":
                if (!postRegex.test(value)) {
                    erreur.adresse = "Code postal invalide";
                    return false;
                } else {
                    erreur.adresse = "";
                    return true;
                }
            default:
                break;
        }
    }

    // Récupération des éléments pour afficher les messages d'erreur
    const errorMessages = {
        'nom_complet': document.querySelector("#nom_complet + .error-message"),
        email: document.querySelector("#email + .error-message"),
        statut: document.querySelector("#statut + .error-message"),
        adresse: document.querySelector("#adresse + .error-message")
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêcher le rafraîchissement de la page

        // Réinitialiser les messages d'erreur
        Object.values(errorMessages).forEach(el => el.innerHTML = "");

        // Vérifier si toutes les valeurs des champs sont valides
        let hasErrors = false;

        for (let champ in champs) {
            let test = validerChamp(champs[champ]);
            if (!test) {
                // Afficher le message d'erreur
                errorMessages[champ].innerHTML = erreur[champ];
                errorMessages[champ].style.color = "red";
                hasErrors = true;
            }
        }

        // Si aucune erreur, afficher un message de succès
        if (!hasErrors) {
            // Récupération des valeurs
            const valeurs = {
                nom: champs['nom_complet'].value,
                email: champs.email.value,
                statut: champs.statut.value,
                adresse: champs.adresse.value
            };

            // Rendre la div visible
            const message = document.querySelector("#thanks_msg");
            message.style.display = "block";

            // Mettre à jour les différentes informations
            document.querySelector("#thanksName").innerHTML = valeurs.nom;
            document.querySelector("#thanksEmail").innerHTML = valeurs.email;
            document.querySelector("#thanksStatus").innerHTML = valeurs.statut;
            document.querySelector("#thanksAddress").innerHTML = valeurs.adresse;

            console.log("Valeurs", valeurs);
        }
    });

    /************** Temps réel **********/

    for (let champ in champs) {
        champs[champ].addEventListener("input", () => {
            // Récupérer la valeur entrée
            const { name, value } = champs[champ];

            // Mettre à jour la variable valeurs
            const valeurs = { [name]: value };

            // Validation en temps réel
            let test = validerChamp(champs[champ]);
            if (!test) {
                errorMessages[name].innerHTML = erreur[name];
                errorMessages[name].style.color = "red";
            } else {
                errorMessages[name].innerHTML = "";
            }
        });
    }

    /************** Communication avec un serveur **********/

    // La variable pour contenir le HTML à afficher
    let html = '<h2>Communication avec un serveur</h2>';

    // La div qui permet d'afficher les données provenant du serveur
    const divServeur = document.querySelector("#serveur");

    // Création du HTML avec le template
    function template(data) {
        return `<div>
            <img src=${data.flags.png} alt=${data.name.common}/> 
            ${data.name.common}
        </div>`;
    }
});
