<div class="smooth-scroll">
  <div class="hero-scroller">
    <div class="section copy">
      <div class="section-wrapper">
        <div class="content">
          <h1 class="hero-header h-1">whatevs</h1>
          <h1 class="hero-header h-2">whatesvs</h1>
          <h1 class="hero-header h-3">whateasdvs</h1>
        </div>
        <div class="pin-wrapper">
          <div class="image-wrapper" id="heroImage">
            <img class="image" src="../../assets/img.jpg" alt="some pic" />
          </div>
        </div>
      </div>
    </div>
    <div class="section copy">
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
    </div>
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
        min-height: 100vh;
        padding: 50px;
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
            max-width: 840px;
            margin-right: auto;
            margin-left: auto;
            color: hsl(0, 0%, 22%);



            
            h1 {
              font-size: 7rem;
              font-weight: 400;
              line-height: 5rem;
              // text-transform: uppercase;
            }
            h2 {
              font-size: 5rem;
              font-weight: 400;
              line-height: 5rem;

              // text-transform: uppercase;
            }
            h3 {
              font-size: 3rem;
              font-weight: 400;
              line-height: 1rem;
              z-index: 1000;


              // text-transform: uppercase;
            }
          }
          .image-wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 50%;

            .image {
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: -1;

            }
          }
        }
      }
    }
  }
</style>
