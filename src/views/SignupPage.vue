<template>
  <div class="container mt-4">
    <h2>회원가입</h2>
    <hr />
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="terms" class="form-label">이용 약관</label>
        <textarea class="form-control px-4" rows="7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        </textarea>
        <div class="py-2">
          <input
            class="form-check-input mx-2"
            type="checkbox"
            name="termsAgree"
            id="termsAgree"
            v-model="isTermsAgreed"
          />
          <label class="form-check-label mx-2" for="termsAgree">
            상기 이용약관에 동의합니다.
          </label>
        </div>
      </div>
      <!-- 동의하면 노출 -->
      <div v-if="isTermsAgreed">
        <div class="mb-3 d-flex align-items-center">
          <div class="flex-grow-1">
            <label for="email" class="form-label">이메일 주소</label>
            <div class="d-flex">
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="form.email"
                required
              />
              <p class="m-2">@</p>
              <select
                type=""
                class="form-select"
                id="email-select"
                v-model="form.emailDomain"
                required
              >
                <option
                  v-for="domain in emailDomains"
                  :key="domain"
                  :value="domain"
                >
                  {{ domain }}
                </option>
              </select>
              <button
                @click="checkEmail"
                type="button"
                class="btn btn-light ms-2"
                style="width: 20%"
              >
                중복 확인
              </button>
            </div>
            <div class="mt-4" v-if="isCheckedEmail !== null">
                <div
                  class="alert"
                  :class="isCheckedEmail ? 'alert-success' : 'alert-danger'"
                  role="alert"
                >
                  {{
                    isCheckedEmail
                      ? "사용가능한 이메일입니다."
                      : "이미 사용중인 이메일입니다."
                  }}
                </div>
              </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">사용자 이름</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="form.username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">비밀번호</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="form.password"
            required
            minlength="6"
          />
        </div>
        <div class="mb-3">
          <label for="passwordConfirm" class="form-label">비밀번호 확인</label>
          <input
            type="password"
            class="form-control"
            id="passwordConfirm"
            v-model="passwordConfirm"
            @input="validatePassword"
            required
          />
          <div v-if="passwordError" class="text-danger mt-2">
            비밀번호 확인을 다시 해주세요.
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-light me-2">취소</button>
          <button type="submit" class="btn btn-dark ms-2">다음</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import axios from 'axios';

export default {
  name: "SignupPage",
  setup() {
    const emailDomains = ["gmail.com", "naver.com", "daum.net", "yahoo.com"];

    const isTermsAgreed = ref(false);
    const isCheckedEmail = ref(null);

    const form = ref({
      email: "",
      emailDomain: "gmail.com",
      username: "",
      password: "",
    });
    const passwordConfirm = ref("");
    const passwordError = ref(false);

    const fullEmail = computed(
      () => `${form.value.email}@${form.value.emailDomain}`
    );
    
    // 다음 버튼 클릭
    const handleSubmit = () => {
      if (!passwordError.value) {
        alert(`Welcome, ${form.value.username}!`);
        console.log("Form Data:", form.value);
      } else {
        alert("Please fix the errors before submitting.");
      }
    };

    const checkEmail = async () => {
      try {
        const res = await axios.post("https://api.com")
        if (res.data.success) {
          isCheckedEmail.value = true;
        } else {
          isCheckedEmail.value = false;
        }
      } catch (e) {
        console.error(e);
        isCheckedEmail.value = false;
      }
    };

    const validatePassword = () => {
      passwordError.value = form.value.password !== passwordConfirm.value;
    };

    watch(fullEmail, (newVal, oldVal) => {
      console.log("Updated fullEmail:", newVal, oldVal);
    });

    return {
      form,
      passwordConfirm,
      passwordError,
      handleSubmit,
      checkEmail,
      validatePassword,
      emailDomains,
      isTermsAgreed,
      isCheckedEmail,
    };
  },
};
</script>
