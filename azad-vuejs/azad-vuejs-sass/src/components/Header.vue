<template>
  <header class="azad-header">
    <div class="azad-container">
      <div class="header-container">
        <div class="azad-logo">
          <h1><router-link to="/">Logo</router-link></h1>
        </div>
        <div class="azad-nav">
          <nav class="azad-nav">
            <ul>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.azad-header {
  padding: 1rem 0;
  background: blue;
}
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
ul li a{
  color: white;
}
</style>