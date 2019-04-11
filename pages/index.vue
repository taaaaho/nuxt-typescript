<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        {{ yourname }}
      </h1>
      <h2 class="subtitle">
        My laudable Nuxt.js project
      </h2>
      <input v-model="inputName" type="text">
      <button @click="setName">Click</button>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
// import { Vue } from 'vue-property-decorator'
// import { mapMutations } from 'vuex'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class HelloVue extends Vue {
  yourname: string = 'takaho'
  inputName: string = ''

  setName() {
    this.yourname = this.inputName
  }

  @Watch('inputName', { immediate: true, deep: true })
  onInputNameChanged(before: string, after: string) {
    this.yourname = after
  }
  // private get todos(): Object {
  //   return this.$store.state.todos.list
  // }

  // addTodo(e: any): void {
  //   this.$store.commit('add', e.target.value)
  //   e.target.value = ''
  // }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
