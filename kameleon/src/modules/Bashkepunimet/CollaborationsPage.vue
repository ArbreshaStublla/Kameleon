<template>
  <div class="collab">
    <CenteredContainer>
      <div>
        <h2 class="text-center mb-4">BASHKEPUNIMET</h2>
      </div>
      <v-card flat class="custom-card">
        <v-card-title class="d-flex align-center pe-2">
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-card-title>
        <v-divider></v-divider>
        <v-data-table v-model:search="search" :items="companies" class="custom-table">
          <template v-slot:item="{ item }">
            <tr>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                {{ item.name }}
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                <v-card class="my-2" elevation="2" rounded>
                  <v-img :src="`${item.image}`" height="64" cover></v-img>
                </v-card>
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                {{ item.director }}
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                {{ item.email }}
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                {{ item.phone }}
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                {{ item.collaborationDate }}
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                {{ item.rating }}
              </td>
              <td @mouseenter="hoveredItem = item" @mouseleave="hoveredItem = null" :class="{ 'hovered-row': item === hoveredItem }">
                <v-chip :color="item.active ? 'green' : 'red'" :text="item.active ? 'Active' : 'Inactive'" class="text-uppercase" size="small" label></v-chip>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </CenteredContainer>
  </div>
</template>

<script>
import CenteredContainer from '@/components/CenteredContainer.vue';

export default {
  components: {
    CenteredContainer,
  },
  data() {
    return {
      search: '',
      hoveredItem: null,
      companies: [
        {
          name: 'CreativeMinds',
          image: require('../../assets/logo1.jpg'),
          director: 'John Smith',
          email: 'john.smith@creativeminds.com',
          phone: '+1234567890',
          collaborationDate: '2023-05-20',
          rating: 4,
          active: true,
        },
        {
          name: 'DigitalWorks',
          image: require('../../assets/logo2.jpg'),
          director: 'Alice Johnson',
          email: 'alice.johnson@digitalworks.com',
          phone: '+1987654321',
          collaborationDate: '2022-10-15',
          rating: 5,
          active: true,
        },
        {
          name: 'MarketingGenius',
          image: require('../../assets/logo3.png'),
          director: 'Robert Brown',
          email: 'robert.brown@marketinggenius.com',
          phone: '+1555123456',
          collaborationDate: '2023-01-10',
          rating: 3,
          active: false,
        },
        {
          name: 'TechSavvy',
          image: require('../../assets/logo4.png'),
          director: 'Emily Taylor',
          email: 'emily.taylor@techsavvy.com',
          phone: '+1444333222',
          collaborationDate: '2022-08-05',
          rating: 4,
          active: true,
        },
        {
          name: 'InnovateDigital',
          image: require('../../assets/logo5.jpg'),
          director: 'Michael Wilson',
          email: 'michael.wilson@innovatedigital.com',
          phone: '+1777888999',
          collaborationDate: '2023-03-18',
          rating: 4,
          active: false,
        },
        {
          name: 'DigitalDreams',
          image: require('../../assets/logo2.jpg'),
          director: 'Sarah Martinez',
          email: 'sarah.martinez@digitaldreams.com',
          phone: '+1666999888',
          collaborationDate: '2022-11-25',
          rating: 5,
          active: true,
        },
        {
          name: 'PixelPerfect',
          image: require('../../assets/logo1.jpg'),
          director: 'David Clark',
          email: 'david.clark@pixelperfect.com',
          phone: '+1888999000',
          collaborationDate: '2023-02-12',
          rating: 3,
          active: false,
        },
        {
          name: 'WebWizards',
          image: require('../../assets/logo4.png'),
          director: 'Jessica Brown',
          email: 'jessica.brown@webwizards.com',
          phone: '+1222333444',
          collaborationDate: '2022-09-30',
          rating: 4,
          active: true,
        },
        {
          name: 'BrandBuilders',
          image: require('../../assets/logo5.jpg'),
          director: 'Daniel Johnson',
          email: 'daniel.johnson@brandbuilders.com',
          phone: '+1333444555',
          collaborationDate: '2023-04-05',
          rating: 5,
          active: true,
        },
        {
          name: 'MarketMasters',
          image: require('../../assets/logo3.png'),
          director: 'Jennifer Miller',
          email: 'jennifer.miller@marketmasters.com',
          phone: '+1111222333',
          collaborationDate: '2022-12-08',
          rating: 3,
          active: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
.collab {
  background-color: #030f16;
}

.custom-card {
  background-color: #061E2C;
  color: #fff;
}

.custom-table {
  background-color: #061E2C;
  color: #fff;
}

h2 {
  color: #fff;
}

.hovered-row {
  background-color: blue; 
  cursor: pointer;
}
</style>
  