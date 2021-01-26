<template>
    <div class="min-h-screen bg-gray-900">
        <span
            class="absolute top-2 md:top-8 left-2 md:left-8 rounded-full bg-gray-200 hover:bg-gray-300 h-10 w-10 flex justify-center items-center cursor-pointer"
            @click="goBack()"
        >
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
        </span>
        <img
            :src="photoUrl()"
            alt="photo"
            class="object-contain h-screen w-full"
        >
    </div>
</template>

<script>
    export default {
        name: "ViewPhoto",
        props: {
            breed: String,
            subBreed: {
                String,
                default: null
            },
            photo: String
        },
        computed: {
            apiUrl () { return this.$store.state.apiUrl }
        },
        methods: {
            photoUrl () {
                let url = this.apiUrl + this.breed + '/'

                if (this.subBreed) {
                    url += this.subBreed + '/'
                }

                url += this.photo

                return url
            },

            goBack () {
                if (window.history.length === 0) {
                    window.history.back();
                } else {
                    this.$inertia.get('/')
                }
            }
        }
    }
</script>

<style scoped>

</style>
