import Version from './version.vue'
Version.install = function (Vue) {
  Vue.component(Version.name, Version)
}

export default Version
