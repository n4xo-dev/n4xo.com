<script>
  import { onMount } from 'svelte';
  let isDark = false;

  function updateTheme() {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    isDark = savedTheme === 'dark';
    updateTheme();
  })

  function toggleTheme() {
    isDark = !isDark;
    updateTheme();
  }
</script>


<div class="hidden md:flex gap-2 items-center">
  <div class="relative w-8 h-8">
    <img src="sun.svg" alt="light mode" class="{isDark ? 'opacity-0' : 'opacity-1'} absolute transition-opacity duration-500">
    <img src="dark_sun.svg" alt="light mode" class="{isDark ? 'opacity-1' : 'opacity-0'} absolute transition-opacity duration-500">
  </div>
  <button class="toggle-container {isDark ? 'on' : ''}" on:click={toggleTheme}>
    <div class="toggle-switch"></div>
  </button>
  <div class="relative w-8 h-8">
    <img src="moon.svg" alt="dark mode" class="{isDark ? 'opacity-0' : 'opacity-1'} absolute transition-opacity duration-500">
    <img src="dark_moon.svg" alt="dark mode" class="{isDark ? 'opacity-1' : 'opacity-0'} absolute transition-opacity duration-500">
  </div>
</div>

<style>
  .toggle-container {
      width: 60px;
      height: 30px;
      background-color: #A98D85;
      border-radius: 15px;
      position: relative;
  }

  .toggle-switch {
      width: 24px;
      height: 24px;
      background-color: white;
      position: absolute;
      top: 3px;
      left: 3px;
      border-radius: 50%;
      transition: 0.3s;
  }

  .toggle-container.on .toggle-switch {
      left: 33px;
  }
</style>
