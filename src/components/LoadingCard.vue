<template>
  <div>
    <div class="loading">
      <div>
        <div class="loader"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LoadingCard",
};
</script>
<style>
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 16px solid #ffff;
  border-radius: 50%;
  border-top: 16px solid #d8d7d7;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
