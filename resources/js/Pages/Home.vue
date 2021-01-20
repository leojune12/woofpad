<template>
    <app-layout>
        <template #dropdown-filter>
            <dropdown-filter></dropdown-filter>
        </template>
        <div class="flex justify-center w-full">
            <div
                class="mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 w-full"
                style="max-width: 900px;"
            >
                <div
                    class="md:col-span-5 mb-2 md:mb-0"
                >
                    <about-me></about-me>
                </div>
                <div
                    class="md:col-span-7 mb-2"
                >
                    <dog-cards
                        v-for="url in photoUrls"
                        :key="url"
                        :photo-url="url"
                    ></dog-cards>
                    <infinite-loading @infinite="loadPhotos" spinner="spiral"></infinite-loading>
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

    export default {
        name: "Home",
        components: {
            AppLayout,
            AboutMe,
            DogCards,
            InfiniteLoading,
            DropdownFilter
        },
        data () {
            return {
                photoUrls: [
                    // {
                    //     url: '',
                    //     likes: null,
                    //     comments: null
                    // }
                ],
                bottomOfWindow: null,
                randomBreedUrl: 'https://dog.ceo/api/breeds/image/random/10'
            }
        },
        methods: {
            loadPhotos ($state) {
                fetch(this.randomBreedUrl)
                    .then(response => response.json())
                    .then(response => {
                        this.photoUrls = [...this.photoUrls, ...response.message]
                    })
                    .then(() => $state.loaded())
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        }
    }
</script>

<style scoped>

</style>
