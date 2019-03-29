<template>
    <div>
        <h1 v-if="Globals.user">{{Globals.user.name}}Friends Page</h1> <!-- user starts as null in api -->
        <ul>
            <li v-for="friend in friends" :key="friend.id">{{friend.FirstName}}}</li>               
            <li>Friend 2</li>
            <li>Friend 3</li>
            <li>Friend 4</li>
            <li>Friend 5</li>
        </ul>
    </div>
</template>

<script>
import { Globals } from "@/models/api";
import { MyFriends } from "../models/users.js";

//GetFriends();

export default {
    data: () => ({
        Globals: Globals,
        friends: []
    })//,
    //async mounted(){
    //   this.friends = await GetFriends();
    //}
}
</script>

<style>

</style>
