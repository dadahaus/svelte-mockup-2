<script>
  import "./dist/style.css";
  import Hero from "./lib/Hero.svelte";
  import Second from "./lib/Second.svelte";
  import Third from "./lib/Third.svelte";
  import Fourth from "./lib/Fourth.svelte";
  import Fifth from "./lib/Fifth.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<Hero />
<Second class="section section__2" />
<Third class="section section__3 grid" />
<Fourth class="section section__4" />
<Fifth class="section section__5" />
<Footer class="section section__3" />

<style lang="scss">
  //   section {
  //   height: 100vh;
  //   display: flex;
  //   flex-flow: column;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 1rem;
  // }
</style>
