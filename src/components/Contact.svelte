<script>
  let submitted = false;

  function handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const body = {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
      };
      fetch(event.target.action, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }).then(response => {console.log(response);
          if (response.ok) {
              submitted = true;
          } else {
              response.json().then(data => {
                  if (Object.hasOwn(data, 'errors')) {
                      alert(data["errors"].map(error => error["message"]).join(", "));
                  } else {
                      alert("Oops! There was a problem sending the email");
                  }
              });
          }
      }).catch(error => {
        console.error(error);
          alert("Oops! There was a problem submitting your form");
      });
  }
</script>

<div class="flex flex-col xl:flex-row gap-5">
  <div class="flex-1">
    <p class="leading-tight text-xl sm:text-2xl md:text-3xl 2xl:text-4xl mb-[20px]">Let's get in touch!</p>
    <p class="leading-relaxed text-l 2xl:text-xl mb-[20px]">I'm always looking for new opportunities to learn and grow. If you'd like to collaborate or have a project in mind, feel free to reach out!</p>
    <p class="leading-relaxed text-l 2xl:text-xl mb-[20px]">
      <a href="mailto:me@n4xo.com" class="text-n4xo-beige hover:text-n4xo-brown dark:text-n4xo-beige-dark dark:hover:text-n4xo-brown-dark font-bold inline-flex">
        <img src="email.svg" alt="email" class="w-6 h-6 dark:hidden relative transition-opacity duration-500 mx-1 -z-10">
        <img src="email-white.svg" alt="email" class="w-6 h-6 hidden dark:block relative transition-opacity duration-500 mx-1 -z-10">
        me@n4xo.com
      </a>
    </p>
    <p class="leading-relaxed text-l 2xl:text-xl mb-[20px]">
      <a href="https://github.com/n4xo-dev" class="text-n4xo-beige hover:text-n4xo-brown dark:text-n4xo-beige-dark dark:hover:text-n4xo-brown-dark font-bold inline-flex">
        <img src="github-mark.svg" alt="GitHub" class="w-6 h-6 dark:hidden relative transition-opacity duration-500 mx-1 -z-10">
        <img src="github-mark-white.svg" alt="GitHub" class="w-6 h-6 hidden dark:block relative transition-opacity duration-500 mx-1 -z-10">
        @n4xo-dev
      </a>
    </p>
    <p class="leading-relaxed text-l 2xl:text-xl mb-[20px]">
      <a href="https://www.linkedin.com/in/n4xo/" class="text-n4xo-beige hover:text-n4xo-brown dark:text-n4xo-beige-dark dark:hover:text-n4xo-brown-dark font-bold inline-flex">
        <img src="linkedin.svg" alt="LinkedIn" class="w-6 h-6 dark:hidden relative transition-opacity duration-500 mx-1 -z-10">
        <img src="linkedin-white.svg" alt="LinkedIn" class="w-6 h-6 hidden dark:block relative transition-opacity duration-500 mx-1 -z-10">
        @n4xo
      </a>
    </p>
    <p class="leading-relaxed text-l 2xl:text-xl mb-[20px]">
      <a href="https://x.com/n4xo_dev" class="text-n4xo-beige hover:text-n4xo-brown dark:text-n4xo-beige-dark dark:hover:text-n4xo-brown-dark font-bold inline-flex">
        <img src="x.svg" alt="X former twitter" class="w-6 h-6 dark:hidden relative transition-opacity duration-500 mx-1 -z-10">
        <img src="x-white.svg" alt="X former twitter" class="w-6 h-6 hidden dark:block relative transition-opacity duration-500 mx-1 -z-10">
        @n4xo_dev
      </a>
    </p>
  </div>
  <div class="flex-1 flex items-center justify-center">
    <div class="w-full">
      {#if submitted}
        <p class="bg-neutral-200 dark:bg-neutral-600 rounded-md p-4 text-center leading-tight text-xl sm:text-2xl md:text-3xl 2xl:text-4xl mb-[20px]">Thank you for reaching out! I'll get back to you as soon as possible.</p>
      {:else}
        <form on:submit|preventDefault={handleSubmit} action="https://n4xo-mailer.vercel.app/api/contact" method="POST" class="flex flex-col gap-5">
          <label for="name" class="text-l 2xl:text-xl">Name</label>
          <input required type="text" name="name" id="name" class="p-2 text-l 2xl:text-xl rounded-md border-2 border-gray-300 dark:text-black" placeholder="Your name here">
          <label for="email" class="text-l 2xl:text-xl">Email</label>
          <input required type="email" name="email" id="email" class="p-2 text-l 2xl:text-xl rounded-md border-2 border-gray-300 dark:text-black" placeholder="Your email here">
          <label for="message" class="text-l 2xl:text-xl">Message</label>
          <textarea required name="message" id="message" class="p-2 text-l 2xl:text-xl rounded-md border-2 border-gray-300 dark:text-black" placeholder="Your message here..."></textarea>
          <button type="submit" class="bg-n4xo-beige dark:bg-n4xo-beige-dark text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-n4xo-beige dark:focus:ring-n4xo-beige-dark hover:bg-n4xo-brown dark:hover:bg-n4xo-brown-dark">Send</button>
        </form>
      {/if}
    </div>
  </div>
</div>