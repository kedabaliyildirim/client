<template>
  <section>
    <base-login
      :message="finalLogMessage"
      :show="status"
      @close="login"
    ></base-login>
    <header>
      <nav class="navi">
        <h1>
          <base-button link to="/">Home Page</base-button>
        </h1>
        <ul v-if="!hamburgerStatus">
          <li>
            <base-button link to="/about">About</base-button>
          </li>
          <li>
            <base-button v-if="!isLogged" link to="/register"
              >Register</base-button
            >
          </li>
        </ul>
        <div class="nav-mobile">
          <base-button v-if="isLogged" link to="/posting">&#x2b; add post</base-button>
          <base-button
            v-if="!isLogged"
            @click="
              login(
                (logMessage =
                  'please login to post' ||
                  'unidentified error contact support')
              )
            "
            >&#x2b; add post </base-button
          >
          <div class="profile" :class="{ image: isLogged }">
            <base-button navBar v-if="!isLogged" @click="login"
              >Login</base-button
            >
            <img
              v-else
              @click="logout"
              @mouseover="profileHover"
              @mouseout="profileUnHover"
              src="https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg"
              alt=""
            />
            <transition name="profile">
              <div id="hoverProfile" v-if="hoveringProfile">
              </div>
            </transition>
          </div>

          <div class="navOpener" @click="changeNav">
            <div class="bar1" :class="{ openNav: hamburgerStatus }"></div>
            <div class="bar2" :class="{ openNav: hamburgerStatus }"></div>
            <div class="bar3" :class="{ openNav: hamburgerStatus }"></div>
          </div>
        </div>
      </nav>
      <transition name="stir" @before-enter="beforeEnter">
        <div v-if="hamburgerStatus" class="navLoc">
          <ul class="sidenav">
            <li>
              <base-button v-if="!isLogged" link to="/register"
                >Register</base-button
              >
            </li>
            <li>
              <base-button link to="/about">About</base-button>
            </li>
          </ul>
        </div>
      </transition>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      hamburgerStatus: false,
      postingStat: false,
      finalLogMessage: null,
      hoveringProfile: true
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.getAuth;
    }
  },
  methods: {
    beforeEnter() {},
    login(logMessage) {
      if (
        logMessage == "please login to post" ||
        logMessage == "unidentified error contact support"
      ) {
        this.finalLogMessage = logMessage;
      }
      this.status = !this.status;
    },
    posting() {
      this.postingStat = !this.postingStat;
    },
    logout() {
      this.$store.dispatch("logOut");
    },
    changeNav() {
      this.hamburgerStatus = !this.hamburgerStatus;
    },
    profileHover() {
      this.hoveringProfile = true;
    },
    profileUnHover() {
      // this.hoveringProfile = false
    }
  }
};
</script>

<style scoped>
#hoverProfile {
  display: flex;
  position: absolute;
  z-index: 100;
  right: 0%;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
#profileItems {
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
  background-color: #7f5539;
}
#profileItems ul li {
  margin-top: 3%;
  margin-left: 23%;
}
h1 {
  margin: 0;
}

nav {
  width: 100%;
  background-color: #b07d62;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-mobile {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 50%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
}
.profile {
  margin: 3px;
  max-width: 100%;
  max-height: 100%;
}
.image {
  margin: 3%;
  max-width: 13%;
  max-height: 13%;
}

img {
  max-height: 70%;
  max-width: 100%;
  cursor: pointer;
}

@media (max-width: 540px) {
  nav {
    padding: auto;
  }
  .nav-mobile {
    display: flex;
    align-items: center;
  }
  .navOpener {
    display: inline-block;
    cursor: pointer;
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    margin-right: 1rem;
    transition: 0.4s;
  }
  .bar1.openNav {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .bar2.openNav {
    opacity: 0;
  }
  .bar3.openNav {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  nav ul {
    display: none;
  }
  .navLoc {
    display: flex;
    position: absolute;
    z-index: 100;
    right: 0%;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
  .sidenav {
    display: flex;
    flex-direction: column;
    border-radius: 3%;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background-color: #7f5539;
  }
  .sidenav li {
    margin: 3%;
  }
  #hoverProfile {
  display: flex;
  position: absolute;
  z-index: 100;
  right: 0%;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
#profileItems {
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
  background-color: #7f5539;
}
#profileItems ul li {
  margin-top: 3%;
  margin-left: 23%;
}
h1 {
  margin: 0;
}
}
</style>
