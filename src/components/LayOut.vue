<template>
  <div class="layout">
    <div class="kotak" :class="className">
      <div class="accesoris">
        <div class="square-down"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="cyrcle-acc"></div>
        <div class="square"></div>
        <div class="square-down"></div>
        <div class="square"></div>
      </div>

      <div class="children">
        <slot name="children"></slot>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LayOut",
  props: [`className`],
};
</script>

<style>
/* Default styles for small screens */

body {
  font-size: 16px;
  line-height: 1.5;
  padding: 0;
  margin: 0;
}
.layout {
  height: 100vh;
  background-color: white;
}
.kotak {
  top: 0;
  height: 73.5%;
  margin: 0;
}

.women {
  background-color: #fde2ff;
}

.men {
  background-color: #d6e6ff;
}

/* Styles for screens larger than 480px */
@media (min-width: 480px) {
  body {
    font-size: 18px;
    background-color: white;
  }
  .layout {
    height: 100vh;
    background-color: white;
  }
  .kotak {
    top: 0;
    height: 73.5%;
    margin: 0;
  }
}

/* Styles for screens larger than 768px */
@media (min-width: 768px) {
  body {
    font-size: 20px;
  }
  .layout {
    height: 100vh;
    background-color: white;
  }
  .kotak {
    top: 0;
    height: 73.5%;
    margin: 0;
  }
}

/* Styles for screens larger than 1024px */
@media (min-width: 1024px) {
  .layout {
    background-color: white;
    height: 100vh;
  }
  .kotak {
    top: 0;
    height: 73.5%;
    margin: 0;
    z-index: -991;
  }
  .children {
    z-index: -1;
  }
  .accesoris {
    background-color: transparent;
    margin: 0;
    width: 100%;
    z-index: 1;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  }
  .square {
    border: 0.1em solid rgba(0, 0, 0, 0.1);
    width: 1em;
    height: 1em;
    border-radius: 0.2em;
    margin: 2em;
  }
  .cyrcle-acc {
    border: 0.1em solid rgba(0, 0, 0, 0.1);
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 0.5em;
  }
  .square-down {
    border: 0.1em solid rgba(0, 0, 0, 0.1);
    width: 1em;
    height: 1em;
    border-radius: 0.2em;
    margin: 1em;
    rotate: 27deg;
  }
  .women {
    background-color: #fde2ff;
  }

  .men {
    background-color: #d6e6ff;
  }
}
</style>
