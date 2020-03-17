<template>
<div>
  <body
    class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default"
  >
    <!-- begin:: Page -->
    <div class="m-grid m-grid--hor m-grid--root m-page">
      <div
        class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin"
        id="m_login"
      >
        <div class="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
          <div class="m-stack m-stack--hor m-stack--desktop">
            <div class="m-stack__item m-stack__item--fluid">
              <div class="m-login__wrapper">
                <div class="m-login__logo">
                  <a href="#">
                    <img src="./../assets/logo-2.png" />
                  </a>
                </div>
                <div class="m-login__signin">
                  <div class="m-login__head">
                    <h3 class="m-login__title">Sign In To Admin</h3>
                  </div>
                  <form class="m-login__form m-form" action>
                    <div class="form-group m-form__group">
                      <div v-if="error"
                        class="alert alert-danger"
                        role="alert"
                      >Erreur d'identification!</div>
                      <input
                        class="form-control m-input"
                        type="text"
                        v-model="identifiant"
                        placeholder="Username"
                        name="username"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group m-form__group">
                      <input
                        v-model="password"
                        class="form-control m-input m-login__form-input--last"
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div class="row m-login__form-sub">
                      <div class="col m--align-left">
                        <label class="m-checkbox m-checkbox--focus">
                          <input type="checkbox" name="remember" /> Remember me
                          <span></span>
                        </label>
                      </div>
                      <div class="col m--align-right">
                        <a
                          href="javascript:;"
                          id="m_login_forget_password"
                          class="m-link"
                        >Forget Password ?</a>
                      </div>
                    </div>
                    <div class="m-login__form-action">
                      <button
                        v-on:click="identification"
                        id="m_login_signin_submit"
                        class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                      >Sign In</button>
                    </div>
                  </form>
                </div>

                <div class="m-login__forget-password">
                  <div class="m-login__head">
                    <h3 class="m-login__title">Forgotten Password ?</h3>
                    <div class="m-login__desc">Enter your email to reset your password:</div>
                  </div>
                  <form class="m-login__form m-form" action>
                    <div class="form-group m-form__group">
                      <input
                        class="form-control m-input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="m_email"
                        autocomplete="off"
                      />
                    </div>
                    <div class="m-login__form-action">
                      <button
                        id="m_login_forget_password_submit"
                        class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                      >Request</button>
                      <button
                        id="m_login_forget_password_cancel"
                        class="btn btn-outline-focus m-btn m-btn--pill m-btn--custom"
                      >Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-logo m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1 m-login__content m-grid-item--center"
        >
          <div class="m-grid__item">
            <h3 class="m-login__welcome">Join Our Community</h3>
            <p class="m-login__msg">
              Lorem ipsum dolor sit amet, coectetuer adipiscing
              <br />elit sed diam nonummy et nibh euismod
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--end::Page Scripts -->
  </body>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      identifiant: "",
      password: "",
      error: false
    };
  },
  mounted() {
  
  },
  created() {
	    import("./../assets/css/style.bundle.min.css");
  },

  methods: {
    identification: function(e) {
      e.preventDefault();

      axios
        .post(process.env.VUE_APP_URLAPI + "api/login_check", {
          username: this.identifiant,
          password: this.password
        })
        .then(response => {
			this.error = false;
          console.log(response.data.token);
        })
        .catch(error => {
			this.error = true;
        });
    }
  }
};
</script>

<style scoped>
.bg-logo {
  background-image: url(./../assets/bg-4.jpg);
}
</style>