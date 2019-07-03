export default {
  name: "my-button",
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
