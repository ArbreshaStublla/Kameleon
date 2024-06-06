<template>
    <div class="collab">
      <CenteredContainer>
        <v-card flat>
          <v-card-title class="d-flex align-center pe-2">
            Bashkepunimet
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
          <v-data-table v-model:search="search" :items="companies">
            <template v-slot:[`item.image`]="{ item }">
              <v-card class="my-2" elevation="2" rounded>
                <v-img :src="`assets/companies/${item.image}`" height="64" cover></v-img>
              </v-card>
            </template>
  
            <template v-slot:[`item.rating`]="{ item }">
              <v-rating
                :model-value="item.rating"
                color="orange-darken-2"
                density="compact"
                size="small"
                readonly
              ></v-rating>
            </template>
  
            <template v-slot:[`item.active`]="{ item }">
              <div class="text-end">
                <v-chip
                  :color="item.active ? 'green' : 'red'"
                  :text="item.active ? 'Active' : 'Inactive'"
                  class="text-uppercase"
                  size="small"
                  label
                ></v-chip>
              </div>
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
      companies: [
        {
          name: 'CreativeMinds',
          image: 'creativeminds.png',
          director: 'John Smith',
          email: 'john.smith@creativeminds.com',
          phone: '+1234567890',
          collaborationDate: '2023-05-20',
          rating: 4,
          active: true,
        },
        {
          name: 'DigitalWorks',
          image: 'digitalworks.png',
          director: 'Alice Johnson',
          email: 'alice.johnson@digitalworks.com',
          phone: '+1987654321',
          collaborationDate: '2022-10-15',
          rating: 5,
          active: true,
        },
        {
          name: 'MarketingGenius',
          image: 'marketinggenius.png',
          director: 'Robert Brown',
          email: 'robert.brown@marketinggenius.com',
          phone: '+1555123456',
          collaborationDate: '2023-01-10',
          rating: 3,
          active: false,
        },
        {
          name: 'TechSavvy',
          image: 'techsavvy.png',
          director: 'Emily Taylor',
          email: 'emily.taylor@techsavvy.com',
          phone: '+1444333222',
          collaborationDate: '2022-08-05',
          rating: 4,
          active: true,
        },
        {
          name: 'InnovateDigital',
          image: 'innovatedigital.png',
          director: 'Michael Wilson',
          email: 'michael.wilson@innovatedigital.com',
          phone: '+1777888999',
          collaborationDate: '2023-03-18',
          rating: 4,
          active: false,
        },
        {
          name: 'DigitalDreams',
          image: 'digitaldreams.png',
          director: 'Sarah Martinez',
          email: 'sarah.martinez@digitaldreams.com',
          phone: '+1666999888',
          collaborationDate: '2022-11-25',
          rating: 5,
          active: true,
        },
        {
          name: 'PixelPerfect',
          image: 'pixelperfect.png',
          director: 'David Clark',
          email: 'david.clark@pixelperfect.com',
          phone: '+1888999000',
          collaborationDate: '2023-02-12',
          rating: 3,
          active: false,
        },
        {
          name: 'WebWizards',
          image: 'webwizards.png',
          director: 'Jessica Brown',
          email: 'jessica.brown@webwizards.com',
          phone: '+1222333444',
          collaborationDate: '2022-09-30',
          rating: 4,
          active: true,
        },
        {
          name: 'BrandBuilders',
          image: 'brandbuilders.png',
          director: 'Daniel Johnson',
          email: 'daniel.johnson@brandbuilders.com',
          phone: '+1333444555',
          collaborationDate: '2023-04-05',
          rating: 5,
          active: true,
        },
        {
          name: 'MarketMasters',
          image: 'marketmasters.png',
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
</style>
  