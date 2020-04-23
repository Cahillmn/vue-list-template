<template>
  <div class="pokedex" id="pokedex">
    <!-- div for the pokedex entry and v-for -->
    <div v-for="pokemon in pokedex" :key="pokemon.name"> 
      <h2>{{ pokemon.name }}</h2>
      <!-- Image of the Pokemon -->
      <img v-bind:src="imageSrc + pokemon.index + '.png'">
      <h3>National Index #{{ pokemon.index }}</h3>
      <p>{{ pokemon.description }}</p>
      <ul class="stats">
        <li><strong>Height:</strong> {{ pokemon.height | inchToFeet }}</li>
        <li><strong>Weight:</strong> {{ pokemon.weight }}</li>
      </ul>
      <h3 v-if="pokemon.types.length <= 1">Type:</h3>
      <h3 v-else>Types:</h3>
      <ul class="poketype">
        <li v-for="type in pokemon.types" v-bind:class="type" :key="type">{{ type }}</li>
        
      </ul>
    </div>
  </div>
</template>

<script>
// import data from pokedata.js file
import pokedata from "./assets/pokedata.js";

export default {
  name: "App",
  data: function() {
    return pokedata;
  },
  filters: {
    inchToFeet: function(number) {
      let feet = Math.floor(number/ 12);
      let inches = number % 12;
      return `${feet}' ${inches}"`;
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  background-color: black;
}
ul {
  list-style-type: none;
  padding: 0px;
}

.pokedex {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.pokedex img {
  width: 100%;
}

.pokedex > div {
  padding: 1rem;
  border: solid;
  border-width: 3px;
  border-color: black;
  background-color: white;
}

h2,
h3 {
  font-family: sans-serif;
  text-align: center;
  text-transform: uppercase;
}

.stats {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.stats > li {
  padding: 0.1rem 0.5rem;
}

.poketype {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.poketype li {
  display: inline;
  padding: 0.1rem 0.5rem;
  margin: 0 0.5rem;
}
.poketype li {
  font-family: sans-serif;
  color: white;
  background-color: gray;
  text-transform: uppercase;
}

.poketype .bug {
  background-color: #a8b820;
}

.poketype .dark {
  background-color: #705848;
}

.poketype .dragon {
  background-color: #7038f8;
}

.poketype .electric {
  background-color: #f8d030;
}

.poketype .fairy {
  background-color: #ee99ac;
}

.poketype .fighting {
  background-color: #c03028;
}

.poketype .fire {
  background-color: #f08030;
}

.poketype .flying {
  background-color: #a890f0;
}

.poketype .ghost {
  background-color: #705898;
}

.poketype .grass {
  background-color: #78c850;
}

.poketype .ground {
  background-color: #e0c068;
}

.poketype .ice {
  background-color: #98d8d8;
}

.poketype .normal {
  background-color: #a8a878;
}

.poketype .poison {
  background-color: #a040a0;
}

.poketype .psychic {
  background-color: #f85888;
}

.poketype .rock {
  background-color: #b8a038;
}

.poketype .steel {
  background-color: #b8b8d0;
}

.poketype .water {
  background-color: #6890f0;
}

@media screen and (min-width: 800px) {
  .pokedex {
    margin: 0 auto;
  }
  .pokedex > div {
    max-width: 400px;
  }
}
</style>
