<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand w-25" to="/">
          <img src="../assets/logo.png" alt="logo" class="w-25" />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarScroll"
        >
          <div class="navbar-nav navbar-nav-scroll align-items-center">
            <div class="nav-item">
              <RouterLink to="/login" class="nav-link"> 로그인 </RouterLink>
            </div>
            <div class="nav-item">
              <RouterLink to="/signup" class="nav-link"> <button class="btn btn-dark rounded-pill">회원가입</button> </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: "로그인",
          href: "/login",
        },
        {
          name: "회원가입",
          href: "/signup",
        },
      ],
    };
  },
};
</script>

<style>
/* 필요에 따라 스타일 추가 */
</style>
