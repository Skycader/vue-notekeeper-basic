const App = {
  data() {
    return {
      counter: 0,
      placeholder: "Введите название заметки...",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
      if (this.inputValue === "") return;
      this.notes.push({
        id: Date.now(),
        title: this.inputValue,
      });
      this.inputValue = "";
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
  computed: {
    doubleNotesComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) this.inputValue = this.inputValue.slice(0, 10);
    },
  },
};

const app = Vue.createApp(App);
app.mount("#app");
