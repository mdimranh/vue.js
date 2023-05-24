<template>
    <div id="sidenav"
        class="fixed left-0 top-[62px] bottom-0 w-44 border-r border-r-gray-200 py-3 flex flex-col transition duration-200 ease">
        <router-link to="/" class="nav-item py-1 pl-4 hover:bg-gray-100">Home</router-link>
        <router-link to="/about" class="nav-item py-1 pl-4 hover:bg-gray-100">About</router-link>
    </div>
</template>
<script>
export default {
    name: "Sidenav",
    props: {
        title: String
    }
}
</script>