<template>
    <!--<div class="block md:flex items-center">-->
        <!--<label id="listbox-label" class="block text-sm font-medium text-gray-700 mr-2">
            Show
        </label>-->
    <div class="mt-1 w-full md:w-52">
        <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            class="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-1 md:py-2 text-left focus:outline-none focus:ring-1 focus:ring-purple-300 focus:border-purple-100 sm:text-sm w-full"
            @click="showMenu = !showMenu"
        >
            <span class="flex items-center">
                <span class="block truncate">
                    Show all breeds
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
            <div v-show="showMenu" class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <!--
                      Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                      Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
                    -->
                    <li v-for="(breed, i) in Object.getOwnPropertyNames(breeds)" :key="i" id="listbox-item-0" role="option" class="text-gray-900 cursor-default select-none relative" :class="[ breed === '__ob__' ? 'hidden' : '' ]">
                        <div class="flex items-center py-1 hover:bg-gray-200 pl-3 cursor-pointer">
                            <span class="ml-3 block font-normal truncate capitalize">
                                {{ breed }}
                            </span>
                        </div>
                        <div v-if="breeds[breed].length">
                            <div class="block px-6 text-xs text-gray-400 capitalize">
                                {{ breed }} Sub Breed<span v-if="breeds[breed].length > 1">s</span>
                            </div>
                            <ul>
                                <li v-for="subBreed in breeds[breed]" class="block pl-6 py-1 capitalize hover:bg-gray-200 flex cursor-pointer">
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
                                    </svg>
                                    <span>
                                        {{ subBreed }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "DropdownFilter",
        data () {
            return {
                showMenu: false,
                breeds: []
            }
        },
        mounted () {
            this.getAllBreeds()
        },
        methods: {
            getAllBreeds () {
                fetch('https://dog.ceo/api/breeds/list/all')
                    .then(response => response.json())
                    .then(response => {
                        this.breeds = response.message
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
