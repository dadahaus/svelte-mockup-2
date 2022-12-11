<section class={$$props.class}>
  <div class="one">
    <a href="http://"><div /></a>
  </div>
</section>

<style lang="scss">
  .section {
    &__3 {
      margin-top: -5%;
      height: 50vh;

      place-content: center;


      .one {
        display: flex;
        gap: 1rem;

        & > * {
          height: var(--small);
          width: var(--big);
          &:nth-child(1) {
            background: center/ cover no-repeat #eee url("../../assets/25.png");
          }
        }
      }
    }
  }
</style>
