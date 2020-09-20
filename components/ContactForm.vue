<template>
    <section>
        <div class="container my-5 mx-5 px-5">
            <h2 class="title is-2">Prendre contact avec nous</h2>
            <form action="" method="post">
                <div class="field">
                    <label for="name" class="label is-size-4">
                        Votre nom:
                    </label>
                    <input type="text" name="name" id="name" class="input" autofocus>
                </div>
                <div class="field">
                    <label for="email" class="label is-size-4">
                        Adresse email:
                    </label>
                    <input type="email" name="email" id="email" class="input">
                </div>
                <div class="field">
                    <label for="message" class="label is-size-4">
                        Votre message:
                    </label>
                    <textarea name="message" id="message" rows="4" class="textarea is-large"></textarea>
                </div>
                <button type="submit" class="button is-success is-size-5">Envoyer</button>
            </form>
        </div>
    </section>
</template>