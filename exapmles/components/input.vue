<template>
    <div>
        <input :type="type" :placeholder="placeholder" class="l-input" :name="name" :disabled="disabled" :value="value" @input="handleInput"/>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: "text",
            },
            value: {
                type: String,
                defalut: "",
            },
            name: {
                type: String,
                defalut: "",
            },
            disabled: {
                type: Boolean,
                defalut: false,
            },
        },
        methods: {
            handleInput(e) {
                this.$emit('input',e.target.value)
            },
        },
    };
</script>

<style lang="scss" scoped>
    .l-input{
        font-size:14px;
        line-height:1.5;
        padding:4px;
        min-width:200px;
        border-radius:4px;
        border:1px solid #ddd;
        color:#666;
        background:#fff;
        outline:none;
    &
    :focus{
        border:1px solid #409eff;
    }
    }
    input:disabled{
        background:#eee;
        cursor:not-allowed;
    }
</style>