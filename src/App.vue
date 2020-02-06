<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
}

nav {
  background-color: rgb(180, 176, 176);
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1.8rem;
    li {
      font-size: 1.3rem;
      margin: 1rem;
      display: inline;
      text-decoration: none;
    }
    .li-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: #000;
      text-transform: uppercase;
    }
  }
}
</style>
