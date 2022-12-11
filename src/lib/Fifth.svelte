<section class={$$props.class}>
  <h3 class="one">cho0se your ideation</h3>
  <div class="two">
    <a href="http://"><div /></a>
  </div>
  <h5 class="three">design resources for the people</h5>
  <h5 class="four">design resources for the people</h5>
</section>

<style lang="scss">
  .section {
    color-scheme: light dark;

    position: relative;
    &__5 {
      overflow: hidden;

      gap: 3rem;
      flex-flow: column;
      .one {
        max-width: 10ch;
        // text-align: center;

        z-index: 99;
      }
      .two {
        display: flex;
        gap: 1rem;
        & > * {
          height: var(--medium);
          width: var(--big);
          &:nth-child(1) {
            background: center/ contain no-repeat #eee url("../../assets/6.png");
          }
        }
      }
    }
    h5 {
      max-width: 15ch;
    }
    .three {
      position: absolute;
      bottom: 10%;
      left: 10%;
    }
    .four {
      position: absolute;
      bottom: 10%;
      right: 10%;
    }
  }
</style>
