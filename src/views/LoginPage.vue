<template>
  <div class="container w-50 mt-4">
    <h1>로그인</h1>
    <!-- 로그인 폼 -->
    <hr />
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">이메일</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <div class="mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="rememberEmail"
        />
        <label class="form-check-label mx-2" for="rememberEmail">
          이메일 저장
        </label>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button type="submit" class="btn btn-dark w-100">로그인</button>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <a href="" class="link link-dark mx-2">아이디(이메일 찾기)</a>
        <a href="" class="link link-dark mx-2">비밀번호 찾기</a>
        <a href="/signup" class="link link-dark mx-2">회원가입</a>
      </div>
    </form>
  </div>
</template>

<style>
.link {
  text-decoration: none;
}
.form-control:focus {
  border-color: #bbbbbb;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(134, 134, 134, 0.6);
}
.form-check-input:checked {
  background-color: black;
  border-color: black;
}
.form-check-input:focus {
  border-color: black;
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}
</style>

<script>
export default {
  name: "LoginPage",
};
</script>
