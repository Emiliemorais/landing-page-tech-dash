<template>
  <div class="landing">
    <landing-header />
    <div class="landing__page">
      <div class="landing__download">
        <p class="landing__title"> Baixe já o TechDash </p>
        <p class="landing__subtitle"> e comece a gerenciar seu negócios com toda tecnologia e eficiência. </p>

        <p class="landing__text"> Para computador: </p>

        <button class="landing__button is-black">
          <img src="../assets/img/windows.svg">
          <p> Baixe TechDash para </p>
          <p class="button__text"> Windows </p>
        </button>

        <div class="columns">
          <div class="column">
            <button class="landing__button is-black">
              <div>
                <p> Baixe TechDash para </p>
                <p class="button__text"> macOS </p>
              </div>
            </button>
          </div>

          <div class="column">
            <button class="landing__button is-black">
              Baixe TechDash para <p class="button__text"> Linux </p>
            </button>
          </div>
        </div>

        <p class="landing__text"> Para celular: </p>

        <img class="button__image" src="../assets/img/google-play.png">
      </div>

      <div class="landing__mockups">
        <div class="landing__mockup">
          <img src="../assets/img/mockup.png">
          <img src="../assets/img/mobile-mockup.png">
        </div>
      </div>
    </div>

    <div class="landing__footer">
      <p class="landing__text">
        Tem um sistema de gestão ERP e quer integrar com o TechDash?
      </p>

      <button class="landing__button is-primary">
        PORTAL DO DESENVOLVEDOR
      </button>
    </div>
  </div>
</template>

<script>
import LandingHeader from './LandingHeader';

export default {
  name: 'LandingPage',
  components: {
    LandingHeader,
  }
};
</script>
