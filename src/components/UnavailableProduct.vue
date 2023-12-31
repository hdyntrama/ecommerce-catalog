<template>
  <div class="layout">
    <div class="kotak-unvailable">
      <div class="container">
        <div class="card">
          <div class="muka">
            <div class="mata">
              <div>
                <h1 class="alis-satu">)</h1>
                <div class="bola"></div>
              </div>
              <div>
                <h1 class="alis-dua">)</h1>
                <div class="bola"></div>
              </div>
            </div>
            <div class="muka-bawah">
              <h1 class="mulut">)</h1>
            </div>
          </div>
          <div class="navigasi">
            <p>This product is unavailable to show</p>

            <button class="next" @click="nextValue">Next product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnavailableProduct",
  props: [`nextValue`],
};
</script>

<style>
.muka {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.card {
  width: 1034px;
  height: 580px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 56px;
  box-sizing: border-box;
}

.mata {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bola {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d8d7d7;
  z-index: 5;
  margin-top: -120px;
}

.alis-satu {
  color: #d8d7d7;
  rotate: 80deg;
  z-index: 3;
  font-size: 100px;
}

.alis-dua {
  color: #d8d7d7;
  rotate: 90deg;
  z-index: 3;
  font-size: 100px;
}

.muka-bawah {
  rotate: -90deg;
  display: flex;
  margin-top: -850px;
  margin-left: -100px;
  z-index: 99;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
}

.mulut {
  font-size: 700px;
  color: #d8d7d7;
  z-index: 2;
  overflow-y: hidden;
  text-align: center;
  word-spacing: 0;
  width: fit-content;
  height: fit-content;
}

.navigasi {
  z-index: 100;
  margin-left: -900px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-size: 20px;
  font-weight: 400;
}

.next {
  background-color: transparent;
  width: 465px;
  height: 42px;
  border: 3px solid #000;
  border-radius: 4px;
  font-size: 20px;
  color: #3f3f3f;
  font-weight: 600;
  cursor: pointer;
}

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
  overflow: hidden;
}
.kotak-unvailable {
  top: 0;
  height: 73.5%;
  margin: 0;
  background-color: #d8d7d7;
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
  }
}
</style>
