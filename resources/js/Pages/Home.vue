<template>
    <app-layout>
        <template #dropdown-filter>
            <dropdown-filter></dropdown-filter>
        </template>
        <div class="flex justify-center w-full">
            <div
                class="mt-2 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-x-8 md:gap-y-8 w-full"
                style="max-width: 900px;"
            >
                <div
                    class="md:col-span-5 mb-2 md:mb-0 hidden md:block"
                >
                    <div class="bg-white md:rounded-lg rounded-none shadow p-4 sticky top-24">
                        <dropdown-filter></dropdown-filter>
                    </div>
                </div>
                <div
                    class="md:col-span-7 mb-2"
                >
                    <dog-cards
                        v-if="photoUrls"
                        v-for="(url, i) in photoUrls"
                        :key="i"
                        :photo-url="url"
                    ></dog-cards>
                    <infinite-loading :identifier="infiniteId" @infinite="loadPhotos" spinner="spiral"></infinite-loading>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from "../Layouts/AppLayout";
    import AboutMe from "../Components/AboutMe";
    import DogCards from "../Components/DogCards";
    import InfiniteLoading from 'vue-infinite-loading';
    import DropdownFilter from "@/Components/DropdownFilter";
    import { mapActions } from 'vuex'

    export default {
        name: "Home",
        components: {
            AppLayout,
            AboutMe,
            DogCards,
            InfiniteLoading,
            DropdownFilter
        },
        computed: {
            photoUrls: {
                get: function() { return this.$store.state.photoUrls },
                set: function(payload) { this.$store.dispatch('setPhotoUrls', payload) }
            },
            randomBreedUrl () { return this.$store.state.randomBreedUrl },
            currentUrl () { return this.$store.state.currentUrl },
            infiniteId () { return this.$store.state.infiniteId },
        },
        methods: {
            ...mapActions([
                'loadCustomBreedPhotos'
            ]),

            loadPhotos ($state) {
                fetch(this.currentUrl)
                    .then(response => response.json())
                    .then(response => this.photoUrls.push(...response.message))
                    .then(() => $state.loaded())
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>
