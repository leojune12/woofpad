<template>
    <!--<div class="block md:flex items-center">
        <label id="listbox-label" class="block text-sm font-medium text-gray-700 mr-2">
            Show
        </label>-->
    <div class="w-full">
        <label id="listbox-label" class="block text-sm font-medium text-gray-700 mr-2">
            Filter by
        </label>
        <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            class="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-1 md:py-2 text-left focus:outline-none focus:ring-1 focus:ring-purple-300 focus:border-purple-100 sm:text-sm w-full"
            @click="showMenu = !showMenu"
        >
            <span class="flex items-center">
                <span class="block truncate capitalize">
                    {{ currentBreed }}
                </span>
            </span>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <!-- Heroicon name: selector -->
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
        <transition
            enter-active-class=""
            enter-class=""
            enter-to-class=""
            leave-active-class="transition ease-in duration-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-show="showMenu" class="absolute mt-1 w-80 rounded-md bg-white shadow-lg">
                <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <li
                        role="option"
                        class="text-gray-900 cursor-default select-none relative"
                    >
                        <div
                            class="flex items-center py-1 hover:bg-gray-200 pl-3 cursor-pointer"
                            @click="changeCurrentUrl(randomBreedUrl, 'Random Breeds')"
                        >
                            <span class="ml-3 block font-normal truncate capitalize">
                                Random Breeds
                            </span>
                        </div>
                        <span
                            v-if="currentBreed === 'Random Breeds'"
                            class="absolute inset-y-0 right-0 flex items-center pr-4"
                        >
                            <!-- Heroicon name: check -->
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </li>
                    <li v-for="(breed, i) in Object.getOwnPropertyNames(breeds)"
                        :key="i"
                        id="listbox-item-0"
                        role="option"
                        class="text-gray-900 cursor-default select-none relative"
                        :class="[ breed === '__ob__' ? 'hidden' : '' ]"
                    >
                        <div
                            class="flex items-center py-1 hover:bg-gray-200 pl-3 cursor-pointer"
                            @click="changeCurrentUrl('https://dog.ceo/api/breed/'+breed+'/images/random/10', breed)"
                        >
                            <span class="ml-3 block font-normal truncate capitalize">
                                {{ breed }}
                            </span>
                        </div>
                        <div v-if="breeds[breed].length">
                            <div class="block px-6 text-xs text-gray-400 capitalize">
                                {{ breed }} Sub Breed<span v-if="breeds[breed].length > 1">s</span>
                            </div>
                            <ul>
                                <li
                                    v-for="subBreed in breeds[breed]"
                                    class="pl-6 py-1 capitalize hover:bg-gray-200 flex cursor-pointer"
                                    @click="changeCurrentUrl('https://dog.ceo/api/breed/'+breed+'/'+subBreed+'/images/random/10', subBreed+' '+breed)"
                                >
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
                                    </svg>
                                    <div>
                                        <span>
                                            {{ subBreed+' '+breed }}
                                        </span>
                                    </div>
                                    <span
                                        v-if="currentBreed === subBreed+' '+breed"
                                        class="items-center pr-4 ml-auto"
                                    >
                                        <!-- Heroicon name: check -->
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                </li>
                            </ul>
                        </div>
                        <span
                            v-if="currentBreed === breed"
                            class="absolute inset-y-0 right-0 flex items-center pr-4"
                        >
                            <!-- Heroicon name: check -->
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "DropdownFilter",
        data () {
            return {
                showMenu: false,
                breeds: {},
                randomBreedUrl: 'https://dog.ceo/api/breeds/image/random/10',
                allBreedsUrl: 'https://dog.ceo/api/breeds/list/all',
                currentBreed: 'Random Breeds'
            }
        },
        mounted () {
            this.getAllBreeds()
        },
        computed: {
            currentUrl: {
                get () { return this.$store.state.currentUrl },
                set (url) { this.setCurrentUrl(url) }
            },
            previousUrl: {
                get () { return this.$store.state.previousUrl },
                set (url) { this.setPreviousUrl(url) }
            },
            photoUrls: {
                get () { return this.$store.state.photoUrls },
                set: function(payload) { this.setPhotoUrls(payload) }
            },
        },
        methods: {
            ...mapActions([
                'incrementInfiniteId',
                'setPhotoUrls',
                'setPreviousUrl',
                'setCurrentUrl'
            ]),
            getAllBreeds () {
                fetch(this.allBreedsUrl)
                    .then(response => response.json())
                    .then(response => this.breeds =response.message)
                    .catch(error => console.log(error))
            },
            changeCurrentUrl (newUrl, breed) {
                if (this.previousUrl !== newUrl) {
                    this.previousUrl = newUrl
                    this.photoUrls = []
                }
                this.currentUrl = newUrl
                this.currentBreed = breed
                this.showMenu = false
                this.incrementInfiniteId(1)
            }
        }
    }
</script>

<style scoped>

</style>
