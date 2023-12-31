<template>
  <div v-if="loading">
    <LoadingCard />
  </div>
  <div v-else>
    <div class="about" v-if="category === `men` || category === `women`">
      <LayOut :className="category">
        <template v-slot:children>
          <div class="container">
            <CardCatalog :image="data.image" :category="category" :title="data.title" :description="data.description" :price="data.price" :rate="data.rating.rate" :nextValue="nextValue" />
          </div>
        </template>
      </LayOut>
    </div>
    <div v-else>
      <UnavailableProduct :nextValue="nextValue" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CardCatalog from "@/components/CardCatalog.vue";
import UnavailableProduct from "@/components/UnavailableProduct.vue";
import LoadingCard from "@/components/LoadingCard.vue";

export default {
  name: "HomePage",
  components: { CardCatalog, UnavailableProduct, LoadingCard },
  data() {
    return {
      loading: false,
      data: [],
      category: "",
      currentValue: 1,
      maxValue: 20,
    };
  },

  methods: {
    updateAPI() {
      this.loading = true;
      axios
        .get(`https://fakestoreapi.com/products/${this.currentValue}`)
        .then((response) => {
          this.data = response.data;
          if (response.data.category === `men's clothing`) {
            this.category = "men";
          } else if (response.data.category === `women's clothing`) {
            this.category = "women";
          } else {
            this.category = "";
          }
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
    nextValue() {
      if (this.currentValue === this.maxValue) {
        this.currentValue = 1;
      } else {
        this.currentValue++;
      }
      this.updateAPI();
    },
  },

  mounted() {
    this.updateAPI();
  },
};
</script>

<style>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 999;
  position: absolute;
}
.about {
  width: 100%;
  margin: 0;
}
p {
  margin: 0;
}
</style>
