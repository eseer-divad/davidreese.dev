<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <img src="/floorspaces.png" alt="Floorspaces.io Image" class="welcome-image" />
    <template #heading>Floorspaces.io</template>

    <span style="color: white; font-size: 1.4rem">
      Enable any business to create "floorspaces" with their data, allowing employees and customers
      a dynamic experience in your venue.
    </span>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <img src="/damask.png" alt="Damask Image" class="welcome-image" />
    <template #heading>Damask HR & Payroll</template>
    <span style="color: white; font-size: 1.4rem"
      >Human resources management application, being rewritten to integrate into Floorspaces in the
      future.</span
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <!-- EcosystemIcon along with an image for Ecosystem -->
      <EcosystemIcon />
    </template>
    <img src="/plannerCLI.png" alt="plannerCLI Image" class="welcome-image" />
    <template #heading>plannerCLI</template>
    <span style="color: white; font-size: 1.4rem"
      >Day planner / task list Node.js CLI application made with the Open CLI Framework, SQLite, and
      Chalk.</span
    >
  </WelcomeItem>
</template>

<style>
a {
  color: rgb(255, 227, 203);
}

.welcome-image {
  width: 100%;
  object-fit: cover;
  margin-right: 8px;
}
</style>
