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
    <!-- first section -->

    <section class="section copy">
      <div class="section-wrapper">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            nostrum consectetur omnis totam et consequatur sint sit molestiae!
            Voluptate fugit libero dignissimos totam placeat, voluptates animi
            ut necessitatibus praesentium corporis?
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

<style lang="scss">
  .smooth-scroll {
    overflow: hidden;

    .hero-scroller {
      height: 250vh;
      overflow: hidden;

      .section {
        position: relative;
        display: flex;
        // min-height: 100vh;

        justify-content: center;
      }

      .copy {
        background: hsl(0, 100%, 97%), 0%, 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .section-wrapper {
          max-width: 1400px;

          .content {
            width: 100%;

            margin-right: auto;
            margin-left: auto;
            color: hsl(0, 0%, 22%);
            z-index: 99;
            margin-bottom: 4rem;
            .hero-header {
              text-transform: uppercase;
              max-width: 20ch;
            }
          }

          .pin-wrapper{
            display: flex;
            flex-flow: row nowrap;
            gap: 3rem;
            justify-content: center;
            align-items: center;
            // overflow: hidden;
          }
          .image-wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 50%;
            padding-bottom: 50%;
            z-index: -1;
            border-radius: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;

            .image {
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
