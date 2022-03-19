<template>

    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Registrarse</h1>    
    <div class="registro">
        <!-- <button v-on:click="signUp()">Registrarse </button> -->
        
            <button v-on:click="signUp()" class="btn btn-default">
                Inicia sesión como invitado
            </button>
        
    </div>
</template>

<script>
var API_KEY="api_key=62868d55814d83675f4b2919e4cb55bb";
var APILink="https://api.themoviedb.org/3/authentication/guest_session/new?"+API_KEY;
export default {
    name:'SignUp',
    data(){
        return{
            user:'',
            nombre:'',
            correo:'',
            contraseña:''
        }
    },
    methods:{
        signUp()
        {
            fetch(APILink)
            .then(res => res.json())
            .then(json => this.user= json.guest_session_id)
            if(this.user != '')
            {
                window.location.href = "/ventana/"+this.user
            }
        }
    }
}
</script>
<style>
    .registro input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid;
    }
    .registro button{
        width: 320px;
        height: 40px;
        border: 1px solid;
        background: lightgray;
        color: #fff;
        cursor: pointer;
    }
    .registro button:hover
    {
        background: rgb(85, 84, 84);        
    };
</style>