export const questions = [
	{
		id: "Q1",
		text: "Quelle est la raison de votre présence en gare ?",
		options: [
			{ text: "Je vais prendre le train", next: "Q2" },
			{ text: "Je viens de descendre du train", next: "Q2_d" },
			{ text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q2_nv" },
			{ text: "Autre raison (achat billet, commerces en gare...)", next: "Q2_nv" },
		],
	},
	{
		id: "Q2",
		text: "Quelle est l'origine de votre déplacement ? (D'où êtes-vous parti pour arriver à la gare ?)",
		options: [
			{ text: "Beaugency", next: "Q2a" },
			{ text: "Autre commune", next: "Q2_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q2_precision",
		text: "Préciser le nom de la commune :",
		freeText: true,
		next: "Q3",
	},
	{
		id: "Q2a",
		text: "De quelle rue de Beaugency venez-vous ?",
		streetInput: true,
		freeTextPlaceholder: "Nom de la rue",
		next: "Q3",
	},
	{
		id: "Q3",
		text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
		options: [
			{ text: "A pied", next: "Q4" },
			{ text: "En voiture -- en tant que conducteur", next: "Q3a" },
			{ text: "En voiture -- en tant que passager", next: "Q3b" },
			{ text: "En bus/car", next: "Q4" },
			{ text: "A vélo", next: "Q3c" },
			{ text: "En trottinette", next: "Q3c" },
			{ text: "En Taxi/VTC", next: "Q4" },
			{ text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q3a" },
			{ text: "Autre", next: "Q3_autre", requiresPrecision: true },
		],
	},
	{
		id: "Q3_autre",
		text: "Précisez le mode de transport utilisé :",
		freeText: true,
		next: "Q4",
	},
	{
		id: "Q3a",
		text: "Où avez-vous stationné votre véhicule ?",
		options: [
			{ text: "Sur le parking de la gare", next: "Q4" },
			{ text: "Sur une place en voirie au nord de la gare", next: "Q3a_precision" },
			{ text: "Sur une place en voirie au sud de la gare", next: "Q3a_precision" },
			{ text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q4" },
		],
	},
	{
		id: "Q3a_precision",
		text: "Préciser nom :",
		freeText: true,
		next: "Q4",
	},
	{
		id: "Q3b",
		text: "Où vous êtes-vous fait déposer ?",
		options: [
			{ text: "Au niveau de la dépose-minute devant le bâtiment voyageur au Sud", next: "Q4" },
			{ text: "Sur le parking de la gare", next: "Q4" },
			{ text: "Directement sur la rue de la Gare devant la gare", next: "Q4" },
			{ text: "Autre", next: "Q3b_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q3b_precision",
		text: "Veuillez préciser l'endroit où vous vous êtes fait déposer :",
		freeText: true,
		next: "Q4",
	},
	{
		id: "Q3c",
		text: "Où avez-vous stationné votre vélo/trottinette ?",
		options: [
			{ text: "Sur les arceaux sur le parking de la gare", next: "Q4" },
			{ text: "Dans la consigne sécurisée au sud de la gare", next: "Q4" },
			{ text: "Je le transporte avec moi dans le train", next: "Q4" },
			{ text: "Autre", next: "Q3c_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q3c_precision",
		text: "Veuillez préciser où vous avez stationné votre vélo/trottinette :",
		freeText: true,
		next: "Q4",
	},

	{
		id: "Q4",
		text: "Possédez-vous un abonnement TER ?",
		options: [
			{ text: "Oui", next: "Q5" },
			{ text: "Non", next: "Q5" },
		],
	},
	{
		id: "Q5",
		text: "Pour ce trajet en train, quelle sera votre gare de destination finale ?",
		options: [
			{ text: "Austerlitz", next: "Q6" },
			{ text: "Autre", next: "Q5_stations" },
		],
	},
	{
		id: "Q5_stations",
		text: "Veuillez sélectionner votre gare de destination :",
		freeText: true,
		freeTextPlaceholder: "Nom de la gare",
		next: "Q6",
	},
	{
		id: "Q6",
		text: "Quel est le motif de votre déplacement en train ?",
		options: [
			{ text: "Je me rends sur mon lieu de travail", next: "Q7" },
			{ text: "Je me rends sur mon lieu d'études", next: "Q7" },
			{ text: "Je rentre à mon domicile principal", next: "Q6a" },
			{ text: "Déplacement professionnel", next: "Q7" },
			{ text: "Loisirs, tourisme", next: "Q7" },
			{ text: "(Achats, démarches administratives, RDV médical, visite…)", next: "Q6_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q6_precision",
		text: "Veuillez préciser le motif de votre déplacement :",
		freeText: true,
		next: "Q7",
	},
	{
		id: "Q6a",
		text: "Quel était la raison de votre venue à Beaugency ?",
		options: [
			{ text: "Travail", next: "Q7" },
			{ text: "Etudes", next: "Q7" },
			{ text: "Déplacement professionnel", next: "Q7" },
			{ text: "Loisirs, tourisme", next: "Q7" },
			{ text: "Autres (Achats, démarches administratives, RDV médical, visite…)", next: "Q7" },
		],
	},
	{
		id: "Q7",
		text: "A quelle fréquence réalisez-vous ce déplacement en train ?",
		options: [
			{ text: "Tous les jours de la semaine ou presque (Plus de 3 fois par semaine)", next: "Q8" },
			{ text: "Régulièrement (au moins une fois par mois)", next: "Q8" },
			{ text: "Occasionnellement (moins d'une fois par mois)", next: "Q8" },
		],
	},
	{
		id: "Q8",
		text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
		freeText: true,
		freeTextPlaceholder: "Votre réponse",
		next: "end",
	},
	{
		id: "Q2_d",
		text: "Quelle est la destination de votre déplacement? = Où allez-vous en quittant la gare?",
		options: [
			{ text: "Beaugency", next: "Q2a_d" },
			{ text: "Autre commune", next: "Q2d_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q2d_precision",
		text: "Préciser le nom de la commune :",
		freeText: true,
		next: "Q3_d",
	},
	{
		id: "Q2a_d",
		text: "Vers quelle rue de Beaugency allez-vous ?",
		streetInput: true,
		freeTextPlaceholder: "Nom de la rue",
		next: "Q3_d",
	},
	{
		id: "Q3_d",
		text: "Quel mode de transport avez-vous utilisé pour quitter la gare ?",
		options: [
			{ text: "A pied", next: "Q4_d" },
			{ text: "En voiture -- en tant que conducteur", next: "Q3a_d" },
			{ text: "En voiture -- en tant que passager", next: "Q3b_d" },
			{ text: "En bus/car", next: "Q4_d" },
			{ text: "A vélo", next: "Q3c_d" },
			{ text: "En trottinette", next: "Q3c_d" },
			{ text: "En Taxi/VTC", next: "Q4_d" },
			{ text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q3a_d" },
			{ text: "Autre", next: "Q3d_autre", requiresPrecision: true },
		],
	},
	{
		id: "Q3d_autre",
		text: "Précisez le mode de transport utilisé :",
		freeText: true,
		next: "Q4_d",
	},
	{
		id: "Q3a_d",
		text: "Où avez-vous stationné votre véhicule ?",
		options: [
			{ text: "Sur le parking de la gare", next: "Q4_d" },
			{ text: "Sur une place en voirie au nord de la gare", next: "Q3a_d_precision" },
			{ text: "Sur une place en voirie au sud de la gare", next: "Q3a_d_precision" },
			{ text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q4_d" },
		],
	},
	{
		id: "Q3a_d_precision",
		text: "Préciser nom :",
		freeText: true,
		next: "Q4_d",
	},
	{
		id: "Q3b_d",
		text: "Où allez-vous être récupéré ?",
		options: [
			{ text: "Au niveau de la dépose-minute devant le bâtiment voyageur au Nord", next: "Q4_d" },
			{ text: "Au niveau du parking ou de la rue Beauvais au Nord", next: "Q4_d" },
			{ text: "Au niveau de la dépose-minute devant le parvis au Sud", next: "Q4_d" },
			{ text: "Autre", next: "Q3b_d_precision", requiresPrecision: true },
		],
	},

	{
		id: "Q3b_d_precision",
		text: "Veuillez préciser l'endroit où vous allez être récupéré :",
		freeText: true,
		next: "Q4_d",
	},
	{
		id: "Q3c_d",
		text: "Où avez-vous stationné votre vélo/trottinette ?",
		options: [
			{ text: "Sur les arceaux sur le parking de la gare", next: "Q4_d" },
			{ text: "Dans la consigne sécurisée au sud de la gare", next: "Q4_d" },
			{ text: "Je le transporte avec moi dans le train", next: "Q4_d" },
			{ text: "Autre", next: "Q3c_d_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q3c_d_precision",
		text: "Veuillez préciser où vous avez stationné votre vélo/trottinette :",
		freeText: true,
		next: "Q4_d",
	},

	{
		id: "Q4_d",
		text: "Possédez-vous un abonnement TER ?",
		options: [
			{ text: "Oui", next: "Q5_d" },
			{ text: "Non", next: "Q5_d" },
			{ text: "Non mais j'envisage d'en prendre un dans les mois qui viennent", next: "Q5_d" },
		],
	},


	{
		id: "Q5_d",
		text: "De quelle gare venez-vous ?",
		options: [
			{ text: "Austerlitz", next: "Q6_d" },
			{ text: "Autre", next: "Q5_d_stations" },
		],
	},
	{
		id: "Q5_d_stations",
		text: "Veuillez sélectionner votre gare de départ :",
		freeText: true,
		freeTextPlaceholder: "Nom de la gare",
		next: "Q6_d",
	},
	{
		id: "Q6_d",
		text: "Quel est le motif de votre déplacement en train ?",
		options: [
			{ text: "Je me rends sur mon lieu de travail", next: "Q7_d" },
			{ text: "Je me rends sur mon lieu d'études", next: "Q7_d" },
			{ text: "Je rentre à mon domicile principal", next: "Q7_d" },
			{ text: "Déplacement professionnel", next: "Q7_d" },
			{ text: "Loisirs, tourisme", next: "Q7_d" },
			{ text: "(Achats, démarches administratives, RDV médical, visite…)", next: "Q6_d_precision", requiresPrecision: true },
		],
	},
	{
		id: "Q6_d_precision",
		text: "Veuillez préciser le motif de votre déplacement :",
		freeText: true,
		next: "Q7_d",
	},
	{
		id: "Q7_d",
		text: "A quelle fréquence réalisez-vous ce déplacement en train ?",
		options: [
			{ text: "Tous les jours de la semaine ou presque (Plus de 3 fois par semaine)", next: "Q8_d" },
			{ text: "Régulièrement (au moins une fois par mois)", next: "Q8_d" },
			{ text: "Occasionnellement (moins d'une fois par mois)", next: "Q8_d" },
		],
	},
	{
		id: "Q8_d",
		text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
		freeText: true,
		freeTextPlaceholder: "Votre réponse",
		next: "end",
	},

	{
		id: "Q2_nv",
		text: "Quelle est l'origine de votre déplacement ? (D'où êtes-vous parti pour arriver à la gare ?)",
		options: [
			{ text: "Beaugency", next: "Q2a_nv" },
			{ text: "Autre commune", next: "Q2_precis_nv", requiresPrecision: true },
		],
	},
	{
		id: "Q2_precis_nv",
		text: "Préciser le nom de la commune :",
		freeText: true,
		next: "Q3_nv",
	},
	{
		id: "Q2a_nv",
		text: "De quelle rue de Beaugency venez-vous ?",
		streetInput: true,
		freeTextPlaceholder: "Nom de la rue",
		next: "Q3_nv",
	},
	{
		id: "Q3_nv",
		text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
		options: [
			{ text: "A pied", next: "Q4_nv" },
			{ text: "En voiture -- en tant que conducteur", next: "Q3a_nv" },
			{ text: "En voiture -- en tant que passager", next: "Q3b_nv" },
			{ text: "En bus/car", next: "Q4_nv" },
			{ text: "A vélo", next: "Q3d_nv" },
			{ text: "En trottinette", next: "Q3d_nv" },
			{ text: "En Taxi/VTC", next: "Q4_nv" },
			{ text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q3a_nv" },
			{ text: "En train - je fais une correspondance", next: "Q4_nv" },
			{ text: "Autre", next: "Q3_autre_nv", requiresPrecision: true },
		],
	},
	{
		id: "Q3_autre_nv",
		text: "Précisez le mode de transport utilisé :",
		freeText: true,
		next: "Q4_nv",
	},
	{
		id: "Q3a_nv",
		text: "Où avez-vous stationné votre véhicule ?",
		options: [
			{ text: "Sur le parking de la gare", next: "Q4_nv" },
			{ text: "Sur une place en voirie au nord de la gare", next: "Q3a_precision_nv" },
			{ text: "Sur une place en voirie au sud de la gare", next: "Q3a_precision_nv" },
			{ text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q4_nv" },
		],
	},
	{
		id: "Q3a_precision_nv",
		text: "Préciser nom :",
		freeText: true,
		next: "Q4_nv",
	},
	{
		id: "Q3b_nv",
		text: "Où vous êtes-vous fait déposer ?",
		options: [
			{ text: "Au niveau de la dépose-minute devant le bâtiment voyageur au Nord", next: "Q4_nv" },
			{ text: "Au niveau du parking ou de la rue Beauvais au Nord", next: "Q4_nv" },
			{ text: "Au niveau de la dépose-minute devant le parvis au Sud", next: "Q4_nv" },
			{ text: "Autre", next: "Q3b_precis_nv", requiresPrecision: true },
		],
	},
	{
		id: "Q3b_precis_nv",
		text: "Préciser l'endroit où vous vous êtes fait déposer :",
		freeText: true,
		next: "Q4_nv",
	},
	{
		id: "Q3d_nv",
		text: "Où avez-vous stationné votre vélo/trottinette ?",
		options: [
			{ text: "Sur les arceaux sur le parking de la gare", next: "Q4_nv" },
			{ text: "Dans la consigne sécurisée au sud de la gare", next: "Q4_nv" },
			{ text: "Autre", next: "Q3d_precis_nv", requiresPrecision: true },
		],
	},
	{
		id: "Q3d_precis_nv",
		text: "Préciser l'endroit où vous avez stationné votre vélo/trottinette :",
		freeText: true,
		next: "Q4_nv",
	},
	{
		id: "Q4_nv",
		text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
		freeText: true,
		freeTextPlaceholder: "Votre réponse",
		next: "end",
	},
];



