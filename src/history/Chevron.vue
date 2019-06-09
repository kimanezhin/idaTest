<template>
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="284.929px"
    height="284.929px"
    viewBox="0 0 284.929 284.929"
    style="enable-background:new 0 0 284.929 284.929;"
    xml:space="preserve"
  >
    <g>
      <path
        d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
		C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
		c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
		c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
		C284.929,199.378,283.984,197.188,282.082,195.285z"
      ></path>
    </g>
  </svg>
</template>
<script>
export default {
  data: () => ({
    domNode: "",
    flag: true,
    parentNode:""
  }),
  mounted() {
    this.parentNode = document.getElementsByClassName(this.node)[0];
    this.domNode = this.parentNode.querySelector('svg')
    this.parentNode.addEventListener("click", this.rotate);
  },
  methods: {
    rotate() {
      if (this.flag) this.domNode.classList.add("svgDown");
      else this.domNode.classList.remove("svgDown");
      this.flag = !this.flag;
    }
  },
  props: {
    node: {
      type: String,
      default: "Date"
    }
  },
  beforeDestroy() {
    this.parentNode.removeEventListener("click", this.rotate);
  }
};
</script>
<style scoped>
svg {
  fill: white;
  height: 15px;
  width: 15px;
  margin-left: 3px;
  margin-top: 3px;
  transition: transform 0.5s ease;  
}
.svgDown {
  transition: transform 0.5s ease;
  transform: rotateX(180deg);
}
</style>

