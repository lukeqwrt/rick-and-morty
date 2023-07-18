<script setup>

const props = defineProps({
    singleChar: null,
})


</script>


<template>
    <div class="char">
        <img :src="singleChar.image" alt="no image">
        <div class="char-content">
            <h3>{{ singleChar.name }}</h3>
            <h5><span class="label">Species: </span> {{singleChar.species}}</h5>
            <h5><span class="label">Location: </span> {{singleChar.location}}</h5>
            <h5 v-show="singleChar.type"><span class="label">Type: </span> {{singleChar.type}}</h5>

        </div>

        <div class="status">
            <span class="indicator-status"
            :class="singleChar.status"></span>
            {{singleChar.status}}
        </div>
        
    </div>

</template>

<style>
.char{
    display: grid;
    grid-template-columns:1fr 1fr;
    position: relative;

    width: 550px;
}
.char .char-content{
    /* height: 180px; */
    padding: 10px;
}
.char .char-content h5{
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 17px;
}
.char .char-content h3{
    margin-bottom: 10px;
    font-size: 22px;
    color: rgb(27, 44, 46);
}
.char img{
    border-radius: 6px;
    height: 100%;
    width: 100%;
}
/* status */
.status {
    background: rgba(0, 0,0,0.5);
    border-radius: 80px;
    padding: 2px 8px;
    position: absolute;
    left: 5px;
    top: 5px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 13px;
}
.indicator-status{
    margin-right: 5px;
    height: 10px;
    width: 10px;
    border-radius: 100px;
}
.indicator-status.Alive{
    background: rgb(109, 209, 109);
}
.indicator-status.Dead{
    background: rgb(255, 64, 64);
}
.indicator-status.unknown{
    background: rgb(255, 225, 127);
}
.label{
    font-size: 15px;
    color: #595959;
}
@media screen and (max-width: 768px) {
    .char{
    display: grid;
    grid-auto-flow: column;
    grid-template-rows:1fr auto;
    grid-template-columns: 1fr;
    position: relative;
    max-width: 296px;
    width: 100%;
}
}
</style>