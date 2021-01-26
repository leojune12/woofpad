<template>
    <app-layout>
        <template #dropdown-filter>
            <div class="mb-3" v-if="!$page.props.user">
                <welcome-message></welcome-message>
            </div>
            <div>
                <dropdown-filter></dropdown-filter>
            </div>
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
                        <div class="mb-3" v-if="!$page.props.user">
                            <welcome-message></welcome-message>
                        </div>
                        <div class="">
                            <dropdown-filter></dropdown-filter>
                        </div>
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
                    <infinite-loading
                        @infinite="loadPhotos" spinner="spiral"></infinite-loading>
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
    import WelcomeMessage from "@/Components/WelcomeMessage";
    import { mapActions } from 'vuex'

    export default {
        name: "Home",
        components: {
            AppLayout,
            AboutMe,
            DogCards,
            InfiniteLoading,
            DropdownFilter,
            WelcomeMessage
        },
        metaInfo() {
            return {
                title: 'Woofpad',
                meta: [
                    {
                        vmid: 'og:title',
                        name: 'og:title',
                        content: 'Woofpad',
                    },
                    {
                        vmid: 'og:description',
                        name: 'og:description',
                        content: 'Woofpad offers random photos of man\'s bestfriend, dogs.',
                    },
                    {
                        vmid: 'og:image',
                        name: 'og:image',
                        content: 'https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg',
                    },
                    {
                        vmid: 'og:url',
                        name: 'og:url',
                        content: 'https://woofpad.herokuapp.com',
                    },
                ]
            }
        },
        props: {
            breed: {
                type: String,
                default: null
            }
        },
        computed: {
            photoUrls: {
                get: function() { return this.$store.state.photoUrls },
                set: function(payload) { this.$store.dispatch('setPhotoUrls', payload) }
            },
            randomBreedUrl () { return this.$store.state.randomBreedUrl },
            currentBreed: {
                get () { return this.$store.state.currentBreed },
                set (breed) { this.setCurrentBreed(breed) }
            },
        },
        methods: {
            ...mapActions([
                'setCurrentBreed'
            ]),

            loadPhotos ($state) {
                let breedUrl = ''
                if (this.breed !== null) {
                    let breedArray = this.breed.split('-')

                    if (breedArray.length > 1) {
                        breedUrl = 'https://dog.ceo/api/breed/'+breedArray[1]+'/'+breedArray[0]+'/images/random/10'
                        this.currentBreed = breedArray[0]+' '+breedArray[1]
                    } else {
                        breedUrl = 'https://dog.ceo/api/breed/' + this.breed + '/images/random/10'
                        this.currentBreed = this.breed
                    }

                } else {
                    breedUrl = this.randomBreedUrl
                }

                fetch(breedUrl)
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
