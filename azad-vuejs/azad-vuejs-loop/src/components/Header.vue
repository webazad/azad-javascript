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
              <li><router-link to="/contact">Services</router-link></li>
              <li><router-link to="/about">Blog</router-link></li>
              <li><router-link to="/contact">Cart</router-link></li>
              <li><router-link to="/about">TOS</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.azad-header {
  background: white;

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    ul {
      display: flex;
      flex-direction: row;
      li {
        a{
          color: black;
          display: block;
          padding: 1rem;
          align-items: center;
        }
      }
    }
  }
}

</style>