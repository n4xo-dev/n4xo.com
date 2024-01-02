<script>
  let isOpen = false;
</script>

<div class="relative md:hidden">
  <button on:click={() => isOpen = !isOpen} class="focus:outline-none">
    <!-- Hamburger icon -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>

  {#if isOpen}
    <div class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <!-- Navigation links and theme switch here -->
        <nav class="flex flex-col gap-4 p-4">
          <a href="#about" class="font-medium">About</a>
          <u class="no-underline text-n4xo-brown dark:text-n4xo-beige font-extrabold">&gt;&gt;</u>
          <a href="#projects" class="font-medium">Projects</a>
          <u class="no-underline text-n4xo-brown dark:text-n4xo-beige font-extrabold">&gt;&gt;</u>
          <a href="#resume" class="font-medium">Resume</a>
          <u class="no-underline text-n4xo-brown dark:text-n4xo-beige font-extrabold">&gt;&gt;</u>
          <a href="#blog" class="font-medium">Blog</a>
          <u class="no-underline text-n4xo-brown dark:text-n4xo-beige font-extrabold">&gt;&gt;</u>
          <a href="#contact" class="font-medium">Contact</a>
          <ThemeSwitch client:load/>
        </nav>
      </div>
    </div>
  {/if}
</div>