import VueMarkdownComponent from './VueMarkdown'

export function install(Vue, options) {
  Object.assign({
    tag: 'vue-markdown'
  }, options)

  Vue.component(options.tag, VueMarkdownComponent)
}
