<div class="smooth-scroll">
  <div class="hero-scroller">
    <!-- first section -->
    <section class="section copy">
      <div class="section-wrapper">
        <div class="content">
          <h3 class="hero-header h-2">
            dada haus achieves through detailed research
          </h3>
        </div>
        <div class="pin-wrapper">
          <div class="image-wrapper" id="heroImage">
            <img class="image" src="../../assets/img.jpg" alt="some pic" />
          </div>
          <div class="image-wrapper" id="heroImage">
            <img class="image" src="../../assets/1.png" alt="some pic" />
          </div>
          <div class="image-wrapper" id="heroImage">
            <img class="image" src="../../assets/2.png" alt="some pic" />
          </div>
          <div class="image-wrapper" id="heroImage">
            <img class="image" src="../../assets/3.png" alt="some pic" />
          </div>
        </div>
      </div>
    </section>
    <!-- second section -->
  </div>
</div>

<style lang="scss">
  .smooth-scroll {
    overflow: hidden;
    margin-bottom: -35%;



    .hero-scroller {
      min-height: 100vh;
      
      // overflow: hidden;

      .section {
        position: relative;
        display: flex;
        // min-height: 100vh;

        justify-content: center;
      }

      .copy {
        padding: 1rem;
        // margin-bottom: -2rem;
        
        display: flex;
        justify-content: flex-start;

        .section-wrapper {

          min-height: 80vh;

          .content {
            width: 100%;

            margin-right: auto;
            margin-left: auto;

            z-index: 99;
            margin-bottom: 4rem;
            .hero-header {
              text-transform: uppercase;
              max-width: 20ch;
              margin-top: 2rem;
            }
          }

          .pin-wrapper {
            // margin-top: -3rem;
            min-height: 50vh;
            display: flex;
            flex-flow: row nowrap;
            gap: 2rem;
            justify-content: center;
            width: 100vw;
            // align-items: flex-end;
            // overflow: hidden;
          }
          .image-wrapper {
            position: relative;
            // overflow: hidden;
            width: 180%;

            z-index: -1;
            display: flex;
            align-items: center;
            justify-content: center;

            .image {
              border-radius: 2rem;

              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 50%;
              object-fit: cover;
              z-index: -1;
            }
          }
        }
      }
    }
  }
</style>
