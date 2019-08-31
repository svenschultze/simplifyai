<template>
    <label>
        <drop class="drop select-button" @drop="handleDrop">
            DROP IMAGES HERE
            <input type="file" accept="image/png,image/jpeg" @change="handleFileChange" multiple/>
        </drop>
    </label>
</template>

<script>
    export default {
        name: 'EvaluateFileInput',
        methods: {
            handleDrop: function(data, event) {
                event.preventDefault();
                
                this.$emit('fileAdded', event.dataTransfer.files)
            },
            handleFileChange: function(e) {
                this.$emit('fileAdded', e.target.files)
            }
        }
    }
</script>

<style scoped>
    .drop {
        height: 30px;
        border: dashed 3px #49ABFF;
        border-radius: 10px;
        margin-top: 100px;
        background-color: #FFF;
        font-size: 30px;
        font-weight: bold;
        color: #49ABFF;
        padding: 85px;
        text-align: center;
        cursor: pointer;
    }
    
    .drop:hover {
        background-color: #fcfdff;
        border: solid 3px #49ABFF;
    }

    input[type="file"] {
        display: none;
    }
</style>
