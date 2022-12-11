<section class={$$props.class}>
  <a href="#"><h2 class="hr-lines">Design resources</h2></a>
  <a href="#"><h2 class="hr-lines">some other strategy</h2></a>
  <a href="#"><h2 class="hr-lines">project number three</h2></a>
</section>

<style lang="scss">
  .section {
    // text-align: center;

    &__4 {
      text-transform: uppercase;
      margin-top: 6rem;
      &:after {
        content: " ";
        display: block;
        height: 1px;
        width: 100%;
        position: relative;
        bottom: 0%;
        left: 0;
        background-color: whitesmoke;
      }
      .hr-lines {
        position: relative;

        &:before {
          content: " ";
          display: block;
          height: 1px;
          width: 100%;
          position: absolute;
          top: 0%;
          left: 0;
          background-color: whitesmoke;
        }
   
      }
    }
  }
</style>
