<template>
    <div class="container">
        <div class="wrapper">
            <RouterLink :to="{ name: 'characters' }">
                <div class="section">
                    <div class="characters">
                    </div>
                    <h3>Characters</h3>
                </div>
            </RouterLink>
            <div class="section ">
                <div class="episodes">
                </div>
                <h3>Episodes</h3>
            </div>
            <div class="section ">
                <div class="locations">
                </div>
                <h3>Locations</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    height: 100vh;
}
.container .wrapper{
    height: 100%;
    width: 100%;
    position: relative;
}
.container .wrapper .section{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    position: relative;

}
.container .wrapper .section h3{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    color: #fff;
    font-size: 24px;
}
.container .wrapper .section > div{
    background-size: cover;
    background-position: center;
    position: absolute;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    -webkit-filter: brightness(39%) contrast(114%) grayscale(79%) saturate(148%);
    filter: brightness(39%) contrast(114%) grayscale(79%) saturate(148%);
    transform: scale(1);
    transition: 0.3s ease;
}
.container .wrapper .section:hover > div{
    -webkit-filter: unset;
    transform: scale(1.1);
    filter: unset;
}
.container .wrapper .section:nth-child(1){
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0% 100%);
}
.container .wrapper .section:nth-child(2){
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50%;
    width: 100%;
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.container .wrapper .section:nth-child(3){
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%;
    -webkit-clip-path: polygon(100% 0, 0% 0, 0% 50%, 100% 100%);
}
.container .wrapper .section .characters{
    background-image: url('../assets/character3.jpg');
}
.container .wrapper .section .episodes{
    background-image: url('../assets/episodes.jpg');
}
.container .wrapper .section .locations{
    background-image: url('../assets/locations.jpg');
}

</style>