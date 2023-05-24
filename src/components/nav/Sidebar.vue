<template>
    <div id="sidenav"
        class="h-[calc(100vh-74px)] w-44 border-r border-r-gray-200 py-3 px-2 hidden md:flex flex-col transition duration-400 ease">
        <router-link v-for="item in menu" :key="item.title" :to="item.route"
            class="nav-item py-2 px-1 hover:bg-gray-100 rounded-lg text-gray-600">
            <i :class="'px-2 ' + item.icon"></i><span class="sidebar-title font-bold">{{
                item.title }}</span>
        </router-link>
    </div>
    <div id="sidenav"
        class="h-[calc(100vh-74px)] w-16 border-r border-r-gray-200 py-3 px-2 md:hidden flex flex-col transition duration-400 ease">
        <router-link v-for="item in menu" :key="item.title" :to="item.route"
            class="nav-item py-2 px-1 hover:bg-gray-100 rounded-lg text-gray-600">
            <i :class="'px-2 ' + item.icon"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: ['menu']
}
</script>