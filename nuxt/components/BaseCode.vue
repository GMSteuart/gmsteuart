<template>
  <div>
    <!-- If your source-code lives in a variable called 'sourcecode' -->
    <!-- <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre> -->

    <!-- If you want to highlight hardcoded source-code -->
    <pre v-highlightjs class="shadow-large">
        <code class="typescript font-mono text-grey-lighter">
          return new Listr([
            {
              title: 'Destroying Nuxt Lando Service',
              task: async () => {
                try {
                  const {stdout} = await execa('lando', ['destroy', '-y'], {
                    cwd: nuxtDir
                  })
                  return stdout
                } catch (err) {
                  throw new Error(err)
                }
              }
            }
        </code>
      </pre>
  </div>
</template>
<script>
export default {
  name: 'BaseCode'
}
</script>

<style lang="styl">
code
  &.hljs
    background-color #1d1f28

  .hljs-built_in
    color #f2a272
  .hljs-comment
    color #414458
  .hljs-function
    color #8897f4
  .hljs-keyword
    color #3fdcee
  .hljs-number
    color #ff4971
  .hljs-string
    color #5adecd
  /* .hljs-type
    color #f2a272 */
  /* .hljs-params,
  .hljs-attr
    color #bebec1 */
</style>
