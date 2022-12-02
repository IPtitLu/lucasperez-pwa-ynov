<template>
  <header class="header">
    <h4 class="title">Dashboard</h4>
    <div class="logo">
      <img src="../assets/Vector.png" />
    </div>
  </header>
  <body>
    <h4 class="home-title">Bonjour, Tom Dupont ! 👋</h4>
    <container class="card">
      <q-card class="my-card">
        <q-card-section class="bg-grey text-white">
          <div class="text-h6">Courses</div>
        </q-card-section>
        <br />
        <div class="text-subtitle2">
          Cette liste ne contient aucune tâches ajoutez en une depuis la liste
        </div>
        <q-card-actions align="around">
          <q-btn flat>Voir la liste complète</q-btn>
        </q-card-actions>
      </q-card>
    </container>
    <container class="card">
      <q-card class="my-card">
        <q-card-section class="bg-grey text-white">
          <div class="text-h6">Courses</div>
        </q-card-section>
        <br />
        <div class="text-subtitle2">
          Cette liste ne contient aucune tâches ajoutez en une depuis la liste
        </div>
        <q-card-actions align="around">
          <q-btn flat>Voir la liste complète</q-btn>
        </q-card-actions>
      </q-card>
    </container>
  </body>
  <footer class="footer">
    <img src="../assets/menu-left.png" />
    <div class="menu-center">
      <img id="pic1" class="navbar" src="../assets/menu-center.png" />
      <img id="pic2" class="navbar" src="../assets/menu-center-plus.png" />
    </div>
    <img src="../assets/menu-right.png" />
  </footer>
</template>
