<template>
  <main>
    <div class="container px-4 py-5">
      <h1>Welcome to the Artistry</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="container px-4 py-5">
      <div class="d-flex d-flex justify-content-between">
        <h2 class="">Up coming event</h2>
        <a class="d-flex align-items-end link link-dark" id="explore" href="/">
          <div class="d-flex align-items-center">
            <font-awesome-icon :icon="['fas', 'compass']" class="px-2"/>
            <span>Explore More</span>
          </div>
        </a>
      </div>
      <hr />
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style="background-image: url('unsplash-photo-1.jpg')"
          >
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            >
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Short title, long jacket
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                  <small>더 현대 서울</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style="background-image: url('unsplash-photo-2.jpg')"
          >
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            >
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Much longer title that wraps to multiple lines
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="d-flex align-items-center me-3">
                  <small>그라운드시소 성수</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style="background-image: url('unsplash-photo-3.jpg')"
          >
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Another longer title belongs here
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="d-flex align-items-center me-3">
                  <small>국립현대미술관</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.link {
  text-decoration: none;
}
#explore {
  transition: color 0.3s ease, transform 0.3s ease; /* 호버 효과에 부드러운 전환을 주기 위한 트랜지션 */
}
#explore:hover {
  color: #6666;      /* 호버 시 글자 색상을 조금 회색으로 변경 */
  transform: scale(1.05); /* 호버 시 글자 크기를 약간 크게 */
}
</style>

<script>
</script>
