<template>
    <div class="text-lg">
        <div class="text-gray-800">
            Welcome to <span class="font-bold">Woofpad</span>, your daily dose of dogs.
        </div>
        <span class="text-gray-800">Kindly </span>
        <inertia-link :href="route('login')" class="underline text-gray-800 hover:text-gray-90 font-bold">
            <span>sign in</span>
        </inertia-link>
        <span class="text-gray-800">
        to filter from a wide variety of breeds below.
    </span>
    </div>
</template>

<script>
    export default {
        name: "WelcomeMessage"
    }
</script>

<style scoped>

</style>
