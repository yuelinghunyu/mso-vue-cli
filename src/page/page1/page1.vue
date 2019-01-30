<template>
    <div class="page1-container">
        {{getInitMso}}
    </div>
</template>
<script>
export default {
    computed: {
        getInitMso() {
            return this.$store.state.initMoudle.initMso.textContent
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
