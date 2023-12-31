<template>
  <div>
    <div class="card">
      <div class="item1">
        <img :src="`${image}`" :alt="`${image}`" />
      </div>
      <div class="item2">
        <div>
          <h3 :class="`${category}-color`">{{ title }}</h3>
          <div class="category-content">
            <p class="category">{{ category }}'s clothing</p>
            <!-- input rate -->
            <div class="rate">
              <p class="rating">{{ rate }}</p>
              <div v-for="i in 5" :key="i" class="rating-circle" :class="{ [category]: i <= Math.round(rate), half: i > Math.round(rate) && i - 0.5 <= rate }"></div>
            </div>
          </div>
          <div class="border-description">
            <p class="description">
              {{ description }}
            </p>
          </div>
          <div>
            <p class="price" :class="`${category}-color`">${{ price }}</p>
          </div>
          <div class="button">
            <button class="button-buy" :class="`${category}-bg`">Buy Now</button>
            <button class="button-next" :class="`${category}-bd ${category}-color`" @click="nextValue">Next Product</button>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "CardCatalog",
  props: [`category`, `title`, `description`, `price`, `image`, `rate`, `nextValue`],
};
</script>
<style>
.rating {
  margin-right: 0.5em;
}

.rating-circle {
  width: 18px;
  height: 18px;
  border-color: #002772;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  margin-right: 2px;
  margin-left: 2px;
}

.rating-circle.men {
  background-color: #002772;
}

.rating-circle.women {
  background-color: #720060;
}

.rating-circle.half::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
}

/* Inisialisasi women */
.women-color {
  color: #720060;
}
.women-bg {
  background-color: #720060;
}
.women-bd {
  border-color: #720060;
}
/* Inisialisasi men */
.men-color {
  color: #002772;
}
.men-bg {
  background-color: #002772;
}
.men-bd {
  border-color: #002772;
}

/* Default styles for small screens */
.card {
  width: 20em;
  height: 100%;
  background-color: #ffff;
  border-radius: 0.5em;
  box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
  padding: 1em;
  box-sizing: border-box;
  z-index: 10;
}

.item1 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 50%;
  height: auto;
  object-fit: contain;
}
.item2 {
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  font-size: 0.8em;
  /* color: #720060; */
  margin: 0;
}
.category-content {
  display: flex;
  justify-content: space-between;
}
p .category {
  font-size: 16px;
  color: #3f3f3f;
}
.rate {
  display: flex;
  align-items: center;
}
.cyrcle {
  width: 10px;
  height: 10px;
  /* background-color: #720060; */
  border-radius: 50%;
  margin-right: 0.5px;
  margin-left: 0.5px;
}
.cyrcle-border {
  width: 10px;
  height: 10px;
  background-color: transparent;
  border-width: 0.7em;
  border-style: solid;
  border-radius: 50%;
  margin-right: 0.5px;
  margin-left: 0.5px;
}
.border-description {
  border-top: 1px solid #3f3f3f;
  border-bottom: 1px solid #3f3f3f;
  padding-top: 13px;
  padding-bottom: 20px;
}
p .description {
  font-size: 16px;
}
.price {
  margin-top: 2px;
  margin-bottom: 2px;
  /* color: #720060; */
  font-size: 20px;
  font-weight: bold;
}
.button {
  display: flex;
  justify-content: space-between;
}
.button-buy {
  border-radius: 4px;
  width: 150px;
  height: 42px;
  /* background-color: #720060; */
  border: none;
  color: white;
  font-size: 16px;
  margin-right: 19px;
  font-weight: bold;
}
.button-next {
  border-radius: 4px;
  width: 150px;
  height: 42px;
  background-color: transparent;
  border-width: 3px;
  border-style: solid;
  /* color: #720060; */
  font-size: 16px;
  font-weight: bold;
}

/* Styles for screens larger than 480px */
@media (min-width: 480px) {
  .card {
    width: 400px;
    height: 100%;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 20px;
    box-sizing: border-box;
  }

  .item1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50%;
    height: auto;
    object-fit: contain;
  }
  .item2 {
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 20px;
    /* color: #720060; */
    margin: 0;
  }
  .category-content {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 6px;
  }
  p .category {
    font-size: 16px;
    color: #3f3f3f;
  }
  .rate {
    display: flex;
    align-items: center;
  }
  .cyrcle {
    width: 14px;
    height: 14px;
    /* background-color: #720060; */
    border-radius: 50%;
    margin-right: 0.5px;
    margin-left: 0.5px;
  }
  .cyrcle-border {
    width: 14px;
    height: 14px;
    background-color: transparent;
    border-width: 0.7px;
    border-style: solid;
    border-radius: 50%;
    margin-right: 0.5px;
    margin-left: 0.5px;
  }
  .border-description {
    border-top: 1px solid #3f3f3f;
    border-bottom: 1px solid #3f3f3f;
    padding-top: 13px;
    padding-bottom: 20px;
  }
  p .description {
    font-size: 16px;
  }
  .price {
    margin-top: 2px;
    margin-bottom: 2px;
    /* color: #720060; */
    font-size: 20px;
    font-weight: bold;
  }
  .button {
    display: flex;
    justify-content: space-between;
  }
  .button-buy {
    border-radius: 4px;
    width: 150px;
    height: 42px;
    /* background-color: #720060; */
    border: none;
    color: white;
    font-size: 16px;
    margin-right: 19px;
    font-weight: bold;
  }
  .button-next {
    border-radius: 4px;
    width: 150px;
    height: 42px;
    background-color: transparent;
    border-width: 3px;
    border-style: solid;

    /* color: #720060; */
    font-size: 16px;
    font-weight: bold;
  }
}

/* Styles for screens larger than 768px */
@media (min-width: 768px) {
  .card {
    width: 700px;
    height: 100%;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 56px;
    box-sizing: border-box;
  }

  .item1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50%;
    height: auto;
    object-fit: contain;
  }
  .item2 {
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 28px;
    /* color: #720060; */
    margin: 0;
  }
  .category-content {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 11px;
  }
  p .category {
    font-size: 18px;
    color: #3f3f3f;
  }
  .rate {
    display: flex;
    align-items: center;
  }
  .cyrcle {
    width: 18px;
    height: 18px;
    /* background-color: #720060; */
    border-radius: 50%;
    margin-right: 2px;
    margin-left: 2px;
  }
  .cyrcle-border {
    width: 18px;
    height: 18px;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    margin-right: 2px;
    margin-left: 2px;
  }
  .border-description {
    border-top: 1px solid #3f3f3f;
    border-bottom: 1px solid #3f3f3f;
    padding-top: 26px;
    padding-bottom: 50px;
  }
  p .description {
    font-size: 20px;
  }
  .price {
    margin-top: 5px;
    margin-bottom: 5px;
    /* color: #720060; */
    font-size: 28px;
    font-weight: bold;
  }
  .button {
    display: flex;
    justify-content: space-between;
  }
  .button-buy {
    border-radius: 4px;
    width: 150px;
    height: 42px;
    /* background-color: #720060; */
    border: none;
    color: white;
    font-size: 20px;
    margin-right: 19px;
    font-weight: bold;
  }
  .button-next {
    border-radius: 4px;
    width: 150px;
    height: 42px;
    background-color: transparent;
    border-width: 3px;
    border-style: solid;
    /* color: #720060; */
    font-size: 20px;
    font-weight: bold;
  }
}

/* Styles for screens larger than 1024px */
@media (min-width: 1024px) {
  .card {
    width: 1034px;
    height: 580px;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 56px;
    box-sizing: border-box;
    z-index: 99999;
  }

  .item1 {
    width: 430px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 301px;
    height: auto;
    object-fit: contain;
  }
  .item2 {
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 67.48px;
  }
  h3 {
    font-size: 28px;
    /* color: #720060; */
    margin: 0;
  }
  .category-content {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 11px;
  }
  p .category {
    font-size: 18px;
    color: #3f3f3f;
  }
  .rate {
    display: flex;
    align-items: center;
  }
  .cyrcle {
    width: 18px;
    height: 18px;
    /* background-color: #720060; */
    border-radius: 50%;
    margin-right: 2px;
    margin-left: 2px;
  }
  .cyrcle-border {
    width: 18px;
    height: 18px;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    margin-right: 2px;
    margin-left: 2px;
  }
  .border-description {
    border-top: 1px solid #3f3f3f;
    border-bottom: 1px solid #3f3f3f;
    padding-top: 26px;
    padding-bottom: 50px;
    height: 10em;
    overflow: auto;
  }
  p .description {
    font-size: 20px;
  }
  .price {
    margin-top: 5px;
    margin-bottom: 5px;
    /* color: #720060; */
    font-size: 28px;
    font-weight: bold;
  }
  .button {
    display: flex;
    justify-content: space-between;
  }
  .button-buy {
    border-radius: 4px;
    width: 259px;
    height: 42px;
    /* background-color: #720060; */
    border: none;
    color: white;
    font-size: 20px;
    margin-right: 19px;
    font-weight: bold;
  }
  .button-next {
    border-radius: 4px;
    width: 259px;
    height: 42px;
    background-color: transparent;
    border-width: 3px;
    border-style: solid;
    /* color: #720060; */
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
