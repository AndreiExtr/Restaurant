<template>
  <div class="main">
    <div class="container_form">

      <span v-if="!isRegistering" class="container_form-buttonRegistr" id="registrButton" @click="toggleForm">Зарегистрироваться</span>
      <span v-if="isRegistering" class="container_form-buttonAuth" id="authButton" @click="toggleForm">Авторизоваться</span>

      <p class="container_form-title" id="title">
        {{ isRegistering ? 'Регистрация' : 'Вход' }}
      </p>

      <div class="container_form-inputLogin">
        <input type="text" class="login" placeholder="Логин" id="login" v-model="login" />
        <span v-if="loginError" class="loginError">Поле не должно быть пустым</span>
        <span v-if="loginLengthError" class="loginError">Логин должен содержать не менее 4-х символов</span>
      </div>

      <div class="container_form-inputPassword">
        <input type="password" class="password" placeholder="Пароль" id="password" v-model="password" />
        <span v-if="passwordError" class="passwordError">Поле не должно быть пустым</span>
        <span v-if="passwordLengthError" class="passwordError">Пароль должен содержать не менее 4-х символов</span>
      </div>

      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" v-model="subscribe" />
          Я согласен получать обновления на почту
        </label>
        <span v-if="generalError" class="passlogError">Логин или пароль неверен</span>
      </div>

      <button @click="validateForm" class="container_form-login" id="loginButton">
        {{ isRegistering ? 'Зарегистрироваться' : 'Войти' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorizationPage',
  data () {
    return {
      login: '',
      password: '',
      subscribe: false,
      loginError: false,
      loginLengthError: false,
      passwordError: false,
      passwordLengthError: false,
      generalError: false,
      isRegistering: false // состояние для переключения между регистрацией и авторизацией
    }
  },
  methods: {
    toggleForm () {
      this.isRegistering = !this.isRegistering
    },
    validateForm () {
      // Сброс ошибок
      this.loginError = this.login.trim() === ''
      this.passwordError = this.password.trim() === ''

      // Если форма регистрации, проверяем длину логина и пароля
      if (this.isRegistering) {
        this.loginLengthError = !this.loginError && this.login.length < 4
        this.passwordLengthError = !this.passwordError && this.password.length < 4
      } else {
        // При авторизации сбрасываем ошибки длины
        this.loginLengthError = false
        this.passwordLengthError = false
      }

      if (this.loginError || this.passwordError || this.loginLengthError || this.passwordLengthError) {
        // Ошибки валидации
        this.generalError = false
      } else {
        const users = JSON.parse(localStorage.getItem('users')) || []

        if (this.isRegistering) {
          // Регистрация пользователя
          users.push({ login: this.login, password: this.password })
          localStorage.setItem('users', JSON.stringify(users))
          this.generalError = false
          // Переключение на форму авторизации после успешной регистрации
          this.toggleForm()
          // this.$router.push('/home')
        } else {
          // Авторизация пользователя
          const userExists = users.some(user => user.login === this.login && user.password === this.password)
          if (userExists) {
            this.generalError = false
            this.$router.push('/home')
          } else {
            this.generalError = true
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.main{
  background-image: url('../assets/img/background.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
}

.container_form {
  padding: 36px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 340px;
  background-color: #ffffff;
  position: absolute;
  top: 320px;

  &-buttonRegistr {
    margin: 9px 20px 0 0;
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    text-decoration: underline;
    width: auto;
    color: #D58C51;
    border: none;
    font-size: 11px;
    cursor: pointer;

      &:hover {
      color: #131313;
    }
  }

  &-buttonAuth {
    margin: 9px 20px 0 0;
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    text-decoration: underline;
    width: auto;
    color: #D58C51;
    border: none;
    font-size: 11px;
    cursor: pointer;

      &:hover {
      color: #131313;
    }
  }

  &-title{
    color: #131313;
    font-weight: 700;
    font-size: 31px;
    margin-bottom: 36px;
  }

  &-inputLogin,
  &-inputPassword {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 59px;

    .login, .password {
      border: 1px solid #D58C51;
      color: #161516;
      border-radius: 20px;
      width: 420px;
      height: 39px;
      padding: 7px 15px;
      font-weight: 400;
      font-size: 16px;

      &::placeholder {
        color: #cccccc;
      }
    }

    .loginError, .passwordError {
      font-size: 11px;
      color: #FF0B0B;
      margin-left: 18px;
    }
  }

  .checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    position: relative;
    height: 54px;

    .checkbox-label {
      display: flex;
      width: 420px;
      align-items: center;
      font-size: 11px;
      color: #161516;

      .checkbox {
        width: 18px;
        height: 18px;
        margin-right: 10px;
        border: 1px solid #D58C51;
        border-radius: 40px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        position: relative;

        &:checked {
          background-color: #D58C51;
          border: none;
        }

        &:checked::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }

    .passlogError {
      margin: auto;
      font-size: 11px;
      color: #FF0B0B;
    }
  }

  &-login{
    width: 200px;
    height: 42px;
    border: none;
    color: #131313;
    background-color: #D58C51;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;

    &:hover{
      background-color: #ffffff;
      color: #D58C51;
      border: solid 1px #D58C51;
    }
  }
}
</style>
