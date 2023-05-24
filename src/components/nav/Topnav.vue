<template>
    <nav class="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between mx-auto py-2 px-4">
            <div class="flex gap-4 items-center">
                <img id="menu-icon" @click="sidenav_collapse()" class="w-6 h-6 cursor-pointer"
                    src="/src/assets/icon/menu.svg" alt="" srcset="">
                <router-link to="/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </router-link>
                <Spinner size="8" />
            </div>
            <div class="flex items-center md:order-2">
                <UserDropdown />
            </div>
        </div>
    </nav>
</template>

<script>
import { Spinner } from 'flowbite-vue';
import UserDropdown from '../UserDropdown.vue';

export default {
    name: "Topnav",
    methods: {
        sidenav_collapse: function () {
            document.getElementById("menu-icon").classList.toggle("rotate-180");
            let side_nav = document.getElementById("sidenav");
            side_nav.classList.toggle("expand");
            if (side_nav.classList.contains("expand")) {
                side_nav.style.width = "4rem";
            } else {
                side_nav.style.width = "11rem";
            }
            document.querySelectorAll(".sidebar-title").forEach(function (element) {
                element.classList.toggle("hidden");
            });
        }
    },
    components: { UserDropdown }
}
</script>