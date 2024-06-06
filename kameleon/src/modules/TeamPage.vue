<template>
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
import CustomButton from '@/components/CostumButton.vue';
  import CenteredContainer from '@/components/CenteredContainer.vue';
  export default {
    components: {
      CenteredContainer,
      CustomButton
    },
    data() {
      return {
        cards: [
          {
            image: '//source.unsplash.com/300x401',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText1: 'Consectetur adipisicing elit. Possimus, praesentium?',
            backText2: 'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.'
          },
          {
            image: '//source.unsplash.com/300x402',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText1: 'Consectetur adipisicing elit. Possimus, praesentium?',
            backText2: 'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.'
          },
          {
            image: '//source.unsplash.com/300x403',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText1: 'Consectetur adipisicing elit. Possimus, praesentium?',
            backText2: 'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.'
          },
          {
            image: '//source.unsplash.com/300x404',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText1: 'Consectetur adipisicing elit. Possimus, praesentium?',
            backText2: 'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.'
          },
          {
            image: '//source.unsplash.com/300x405',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText1: 'Consectetur adipisicing elit. Possimus, praesentium?',
            backText2: 'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.'
          },
          {
            image: '//source.unsplash.com/300x406',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText1: 'Consectetur adipisicing elit. Possimus, praesentium?',
            backText2: 'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.'
          }
        ]
      };
    }
  };
  </script>
  
 
  
  <style scoped>
.team{
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
  width: calc(33% - 2rem);
  min-width: calc(33% - 2rem);
  height: 300px;
  min-height: 400px;
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