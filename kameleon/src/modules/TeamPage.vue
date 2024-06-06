<template>
  <div class="team">
    <CenteredContainer>
      <div class="content">
        <h1 class="heading">Ekipi</h1>
        <a v-for="(card, index) in cards" :key="index" class="card" href="#!">
          <div :class="['front', { 'even': index % 2 === 0 }]">
            <img :src="card.image" alt="Card Image" class="card-image"/>
            <p class="name">{{ card.name }}</p>
            <p class="job">{{ card.job }}</p>
          </div>
          <div :class="['back', { 'even': index % 2 === 0 }]">
            <div class="back-content">
              <p class="back-text">{{ card.backText }}</p>
              <div class="buttons">
                <CostumButton @click="handleContactClick(card)">
      <span class="mdi mdi-email"></span> 
      {{ card.contactButtonText }}
    </CostumButton>
    <CostumButton @click="handleProfileClick(card)">
      <span class="mdi mdi-account"></span> 
      {{ card.profileButtonText }}
    </CostumButton>
  </div>
            </div>
          </div>
        </a>
        <PaginationComponent :totalPages="totalPages" :currentPage="currentPage" @pageChange="handlePageChange" />
      </div>
    </CenteredContainer>
  </div>
</template>

<script>
import CostumButton from '@/components/CostumButton.vue';
import CenteredContainer from '@/components/CenteredContainer.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';


export default {
  components: {
    CenteredContainer,
    CostumButton,
    PaginationComponent
  },
  data() {
    return {
      cards: [
        {
          image: require('../assets/person1.jpg'),
          name: 'Leart Bytyqi',
          job: 'Marketing Manager',
          backText: 'Zhvillon strategjitë dhe fushatat e marketingut për të promovuar produkte ose shërbime.',
          contactButtonText: 'Contact',
          profileButtonText: 'Profile'
        },
        {
          image: require('../assets/person2.jpg'),
          name: 'Aleksandra Sopi',
          job: 'Digital Marketing Specialist',
          backText: 'Zhvillon dhe implementon strategjitë e marketingut në rrjetet sociale, përfshirë platformat si Facebook, Instagram, Twitter, dhe LinkedIn.',
          contactButtonText: 'Contact',
          profileButtonText: 'Profile'
        },
        {
          image: require('../assets/person3.jpg'),
          name: 'Helena Gashi',
          job: 'Social Media Manager',
          backText: 'Zhvillon strategji të mediave sociale për të rritur ndjekësit dhe pjesëmarrjen e audiencës në rrjetet sociale.',
          contactButtonText: 'Contact',
          profileButtonText: 'Profile'
        },
        {
          image: require('../assets/person4.jpg'),
          name: 'Eduart Spahiu',
          job: 'Brand Manager',
          backText: 'Zhvillon dhe implementon strategji për të rritur dhe për të promovuar imazhin e markës në treg.',
          contactButtonText: 'Contact',
          profileButtonText: 'Profile'
        },
        {
          image: require('../assets/person5.jpg'),
          name: 'Diana Jaha',
          job: 'Market Research Analyst',
          backText: 'Monitoron veprimtarinë e konkurrencës dhe bën krahasime për të vlerësuar pozicionimin e markës në treg.',
          contactButtonText: 'Contact',
          profileButtonText: 'Profile'
        },
        {
          image: require('../assets/person6.jpg'),
          name: 'Albatros Kryeziu',
          job: 'SEO Specialist',
          backText: 'Krijon dhe monitoron lidhjet e brendshme dhe të jashtme për të rritur autoritetin e faqes në internet.',
          contactButtonText: 'Contact',
          profileButtonText: 'Profile'
        }
      ],
      currentPage: 1,
      assetsPerPage: 3 
    };
  },
  computed: {
    totalAssets() {
      return this.cards.length;
    },
    totalPages() {
      return Math.ceil(this.totalAssets / this.assetsPerPage);
    },
    paginatedAssets() {
      const startIndex = (this.currentPage - 1) * this.assetsPerPage;
      return this.cards.slice(startIndex, startIndex + this.assetsPerPage);
    }
  },
  methods: {
    paginate(page) {
      this.currentPage = page;
    },
    handleLearnMoreClick() {
      this.$router.push({ path: '/teampage' });
    }
  
  }
};
</script>



<style scoped>
.team {
  background-color: #030F16;
  color: #fff;
}

.content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
}

.heading {
  width: 100%;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 1.618rem;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 1;
  padding-bottom: 0.5em;
  margin-bottom: 1rem;
  position: relative;
}

.heading:after {
  display: block;
  content: "";
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  bottom: 0;
}

.description {
  width: 100%;
  margin-top: 0;
  margin-left: 1rem;
  margin-bottom: 3rem;
}

.card {
  color: inherit;
  cursor: pointer;
  width: calc(33.33% - 2rem); 
  min-width: calc(33.33% - 2rem); 
  height: 300px; 
  perspective: 1000px;
  margin: 1rem;
  position: relative;
}

@media screen and (max-width: 800px) {
  .card {
    width: calc(50% - 2rem); 
  }
}

@media screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-color: #061E2C; 
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.front img {
  width: 80px;
  height: 80px; 
  border-radius: 50%;
  margin-bottom: 1rem;
}
.name {
  font-size: 1rem; 
  font-weight: 700;
  margin: 0.5rem 0;
}
.job {
  font-size: 0.875rem;
  font-weight: 400;
}
.card:hover .front {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}

.back-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.back-text {
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff; 
}

.buttons {
  display: flex;
  gap: 0.5rem;
}



.profile {
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
}

.back {
  background: #061E2C; 
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.card:hover .back {
  transform: rotateY(0deg);
}
.card:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card:nth-child(even) .back .button .contact{
  background: linear-gradient(135deg, #51AF98, #51AF98);
}
.card:nth-child(even) .back .button:before {
  box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
  background-color: rgba(230, 26, 60, 0.25);
}

.card:nth-child(even):hover .back {
  transform: rotateY(0deg);
}
</style>