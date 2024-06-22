<template>
  <div class="container mt-4">
    <h2>회원가입</h2>
    <hr>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3 d-flex align-items-center">
        <div class="flex-grow-1">
          <label for="email" class="form-label">이메일 주소</label>
          <div class="d-flex">
            <input type="email" class="form-control" id="email" v-model="form.email" required>
            <p class="m-2">@</p>
            <select type="" class="form-select" id="email-select" v-model="form.emailDomain" required>
              <option v-for="domain in emailDomains" :key="domain" :value="domain">
              {{ domain }}
              </option>
            </select>
            <button @click="checkEmail" type="button" class="btn btn-light ms-2" style="width: 20%;">중복 확인</button>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">사용자 이름</label>
        <input type="text" class="form-control" id="username" v-model="form.username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input type="password" class="form-control" id="password" v-model="form.password" required minlength="6">
      </div>
      <div class="mb-3">
        <label for="passwordConfirm" class="form-label">비밀번호 확인</label>
        <input type="password" class="form-control" id="passwordConfirm" v-model="passwordConfirm" @input="validatePassword" required>
        <div v-if="passwordError" class="text-danger mt-2">
          비밀번호 확인을 다시 해주세요.
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-light me-2">취소</button>
        <button type="submit" class="btn btn-dark ms-2">다음</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  name: 'SignupPage',
  setup() {
    const emailDomains = ['gmail.com', 'naver.com', 'daum.net', 'yahoo.com'];
    const form = ref({
      email: '',
      emailDomain: 'gmail.com',
      username: '',
      password: ''
    });
    const passwordConfirm = ref('');
    const passwordError = ref(false);

    const fullEmail = computed(() => `${form.value.email}@${form.value.emailDomain}`);
    console.log(fullEmail)
    const handleSubmit = () => {
      if (!passwordError.value) {
        alert(`Welcome, ${form.value.username}!`);
        console.log('Form Data:', form.value);
      } else {
        alert('Please fix the errors before submitting.');
      }
    };

    const checkEmail = () => {
      // 이메일 중복 확인 로직을 여기에 추가하십시오.
      // 예: 서버에 요청을 보내고 응답을 처리합니다.
      alert('이메일 중복 확인 중...');
    };

    const validatePassword = () => {
      passwordError.value = form.value.password !== passwordConfirm.value;
    };

    watch(fullEmail, (newVal, oldVal) => {
      console.log('Updated fullEmail:', newVal, oldVal);
    });

    return {
      form,
      passwordConfirm,
      passwordError,
      handleSubmit,
      checkEmail,
      validatePassword,
      emailDomains
    };
  }
};
</script>
