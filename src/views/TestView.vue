<template>
    <div class="flex flex-col items-center gap-2">
        <input class="p-2 border-2 border-gray-300 rounded-md" type="text" placeholder="Enter your name">
        <LoadingButton @click="submit" :isLoading="isSubmitting" class="text-white w-28 bg-black hover:bg-black/80">
            Save changes
        </LoadingButton>
    </div>
</template>

<script>
import LoadingButton from "../components/basic/LoadingButton.vue";
export default {
    name: "test",
    components: {
        LoadingButton
    },
    data() {
        return {
            isSubmitting: false
        }
    }
    ,
    methods: {
        submit() {
            this.isSubmitting = true;
        }
    }
}
</script>