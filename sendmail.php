<?php
if (isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])) {
	$nom = $_POST['nom'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = 'support@justetheo.ch';
	$subject = 'Nouveau message de '.$nom.' ('.$email.')';
	$body = "Nom: $nom\nEmail: $email\n\n$message";

	if (mail($to, $subject, $body)) {
		echo 'Votre message a été envoyé avec succès.';
	} else {
		echo 'Il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
	}
} else {
	echo 'Tous les champs sont requis.';
}
?>
