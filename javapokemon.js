const btn = document.getElementById("btn");
btn.addEventListener("click",function()
{
    const input= document.getElementById("nomPoke").value


        fetch ("https://pokeapi.co/api/v2/pokemon/"+input)
            .then(Response => Response.json() )
            .then((pokemon)=> 
        {
                console.log(pokemon.name)
                console.log(pokemon.stats[0].stat.name)
                console.log(pokemon.types[0].type.name)
        })
})




/*
fetch ("https://pokeapi.co/api/v2/pokemon/30")
    .then(Response => Response.json())
    .then((pokemon)=>{
        console.log(pokemon.name)
        console.log(pokemon.stats[0].stat.name)
        console.log(pokemon.stats[1].stat.name)
        console.log(pokemon.stats[2].stat.name)
        console.log(pokemon.stats[3].stat.name)
        console.log(pokemon.stats[4].stat.name)
        console.log(pokemon.stats[5].stat.name)
        

        console.log(pokemon.moves[0].move.name)

        console.log(pokemon.abilities[0].ability.name)

        //alert(pokemon.name)
        
    })
    */
    