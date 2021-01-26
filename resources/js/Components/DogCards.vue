<template>
    <div
        class="bg-white shadow mb-4"
    >
        <div class="p-4">
            <h3 class="text-xl font-bold leading-7 text-gray-900 capitalize">
                {{ getBreed() }}
            </h3>
        </div>
        <inertia-link
            :href="viewPhotoUrl()"
        >
            <div
                class="bg-gray-800"
            >
                <img
                    :src="photoUrl"
                    alt="dog image"
                    class="w-full h-80 object-contain"
                >
            </div>
        </inertia-link>
        <!--<div class="px-4 py-1 flex">
            <button
                class="h-10 px-5 text-gray-500 rounded-lg focus:outline-none flex-grow text-center hover:bg-gray-200 active:bg-gray-300"
                @click="likePhoto"
            >
                <div class="flex justify-center">
                    <div class="flex text-gray-500" :class="{'text-blue-600':is_liked}">
                        <div class="mr-2">
                            <svg v-if="is_liked" style="width:20px;height:20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                            </svg>
                            <svg v-else style="width:20px;height:20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
                            </svg>
                        </div>
                        <div class="font-bold" style="font-size: 15px;">Like</div>
                    </div>
                </div>
            </button>
            <button class="h-10 px-5 text-gray-500 rounded-lg hover:bg-gray-200 hover:text-indigo-100 focus:outline-none flex-grow text-center">
                <div class="flex justify-center">
                    <div class="flex text-gray-500">
                        <div class="mr-2">
                            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                            </svg>
                        </div>
                        <div class="font-bold" style="font-size: 15px;">Comment</div>
                    </div>
                </div>
            </button>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "DogCards",
        data () {
            return {
                is_liked: false
            }
        },
        props: [
            'photoUrl'
        ],
        computed: {
            apiUrl () { return this.$store.state.apiUrl }
        },
        methods: {
            likePhoto () {
                axios.post('/like', {
                    photo_url: this.photoUrl,
                    user_id: this.$page.props.user.id
                })
                    .then(response => {
                        console.log(response.data)
                        this.is_liked = response.data.is_liked
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getBreed () {
                let fullBreed = this.photoUrl.split('/')[4].toString()
                let breed = fullBreed.split('-')
                if (breed.length > 1) {
                    breed = breed[1] + ' ' + breed[0]
                } else {
                  breed = breed[0]
                }
                return breed
            },
            viewPhotoUrl () {
                let photo = this.photoUrl.split('/')

                return '/photos/'+photo[4]+'/'+photo[5]
            }
        }
    }
</script>

<style scoped>

</style>
