<template>
    <Topnav />
    <div class="flex">
        <SideBar :menu="menu" />
        <router-view class="p-2" />
    </div>
</template>

<script lang="ts">
import SideBar from '../components/nav/SideBar.vue';
import Topnav from '../components/nav/Topnav.vue';
export default {
    components: {
        SideBar,
        Topnav
    },
    data() {
        return {
            menu: [
                {
                    title: "Home",
                    route: "/home",
                    icon: "fas fa-home",
                },
                {
                    title: "Test",
                    route: "/about",
                    icon: "fas fa-info-circle"
                }
            ]
        }
    }
}
</script>