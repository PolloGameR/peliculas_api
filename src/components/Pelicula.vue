<template>
   <div class="movie-card" :style="{'background-image':'url(https://image.tmdb.org/t/p/w500'+ this.Pelicula.poster_path+')'}">
  
  <div class="container">
    
    <div class="hero">
            
      <div class="details">
      
        <div class="title1">{{this.Pelicula.original_title}}</div>

        <div class="title2">{{this.Pelicula.title}}</div>    
        
        <div class="slidecontainer">
          <input type="range" min="1" max="10"  v-bind:value="this.Pelicula.vote_average" class="slider" id="myRange" v-on:input="ValorCalif($event.target.value)">                            
          <h2 v-if="Valorint>0" style="color:black;">{{Valorint}}</h2>
          <h2 v-else style="color:black;">{{this.Pelicula.vote_average}}</h2>
          
        </div>
        
        
      </div> <!-- end details -->
      
    </div> <!-- end hero -->
    
    <div class="description">
      
      <div class="column1">
        <span v-for="item in this.Pelicula.genres" :key="item" class="tag">{{item.name}}</span>        
      </div> <!-- end column1 -->
      
      <div class="column2">
        
        <p>{{this.Pelicula.overview}}</p>
        
        
        
        
        
      </div> <!-- end column2 -->
    </div> <!-- end description -->
    
   
  </div> <!-- end container -->
</div> <!-- end movie-card -->
</template>

<script>


const API_KEY="?api_key=62868d55814d83675f4b2919e4cb55bb";
const BASE_URL="https://api.themoviedb.org/3";
const API_URL_PELICULAS=BASE_URL+"/movie/" ;
const LEANGUAJE="&language=es-MX";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Pelicula',
    data(){
        return{
            id:null,
            user:null,
            url_calif:null,
            url_calif2:null,
            Pelicula:[],
            Valorint:0

        }
    },
    mounted(){        
        this.id=this.$route.params.id
        this.user=this.$route.params.user
        var ulr_final=API_URL_PELICULAS+this.id+API_KEY+LEANGUAJE   
        this.url_calif=BASE_URL+"/movie/"+this.id+"/rating"        
       fetch(ulr_final)
       .then(res => res.json())
       .then(json => this.Pelicula= json)
       console.log(ulr_final)
        
        },
    methods:{      
      ValorCalif( valor)
      {
         const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({value:valor })
        };
        fetch(this.url_calif+API_KEY+"&guest_session_id="+this.user, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
        console.log(this.url_calif)
        console.log(valor)
        console.log(this.id)
        console.log(this.user)
        this.Valorint = valor
      }
    },
     
    
}
</script>
<style>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  background: #43423e;
}

a {
  text-decoration: none;
  color: #5c7fb8;
}

a:hover {
  text-decoration: underline;
}

.movie-card {
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #a9a8a3;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  width: 780px;
  height: 640px;
  background: #f0f0ed;
  border-radius: 5px;
  position: relative;
}

.hero {
  height: 342px;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.hero:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  background: rgba(46, 46, 45, 0.363);  
  z-index: -1;
  transform: skewY(-2.2deg);
  transform-origin: 0 0;
  -webkit-backface-visibility: hidden;
}

.cover {
  position: absolute;
  top: 160px;
  left: 40px;
  z-index: 2;
}

.details {
  padding: 190px 0 0 280px;
}
.details .title1 {
  color: rgb(0, 0, 0);
  font-size: 44px;
  margin-bottom: 13px;
  position: relative;
}
.details .title1 span {
  position: absolute;
  top: 3px;
  margin-left: 12px;
  background: #c4af3d;
  border-radius: 5px;
  color: #544c21;
  font-size: 14px;
  padding: 0px 4px;
}
.details .title2 {
  color: #000000;
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 15px;
}
.details .likes {
  margin-left: 24px;
}
.details .likes:before {
  content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
  position: relative;
  top: 2px;
  padding-right: 7px;
}

.description {
  bottom: 0px;
  height: 200px;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
}

.column1 {
  padding-left: 50px;
  padding-top: 120px;
  width: 220px;
  float: left;
  text-align: center;
}

.tag {
  background: white;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
}

.tag:hover {
  background: #ddd;
}

.column2 {
  padding-left: 41px;
  padding-top: 30px;
  margin-left: 20px;
  width: 480px;
  float: left;
}

.avatars {
  margin-top: 23px;
}
.avatars img {
  cursor: pointer;
}
.avatars img:hover {
  opacity: 0.6;
}
.avatars a:hover {
  text-decoration: none;
}

fieldset,
label {
  margin: 0;
  padding: 0;
}

/****** Style Star Rating Widget *****/
.rating {
  border: none;
  float: left;
}

.rating > input {
  display: none;
}

.rating > label:before {
  margin: 5px;
  margin-top: 0;
  font-size: 1em;
  font-family: FontAwesome;
  display: inline-block;
  content: "";
}

.rating > .half:before {
  content: "";
  position: absolute;
}

.rating > label {
  color: #ddd;
  float: right;
}

/***** CSS Magic to Highlight Stars on Hover *****/
.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ffd700;
}

/* hover previous stars in list */
.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: #ffed85;
}

a[data-tooltip] {
  position: relative;
}

a[data-tooltip]::before,
a[data-tooltip]::after {
  position: absolute;
  display: none;
  opacity: 0.85;
}

a[data-tooltip]::before {
  /*
   * using data-tooltip instead of title so we 
   * don't have the real tooltip overlapping
   */
  content: attr(data-tooltip);
  background: #000;
  color: #fff;
  font-size: 13px;
  padding: 5px;
  border-radius: 5px;
  /* we don't want the text to wrap */
  white-space: nowrap;
  text-decoration: none;
}

a[data-tooltip]::after {
  width: 0;
  height: 0;
  border: 6px solid transparent;
  content: "";
}

a[data-tooltip]:hover::before,
a[data-tooltip]:hover::after {
  display: block;
}

/** positioning **/
/* top tooltip */
a[data-tooltip][data-placement=top]::before {
  bottom: 100%;
  left: 0;
  margin-bottom: 40px;
}

a[data-tooltip][data-placement=top]::after {
  border-top-color: #000;
  border-bottom: none;
  bottom: 50px;
  left: 20px;
  margin-bottom: 4px;
}
</style>