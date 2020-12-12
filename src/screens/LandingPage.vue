<template>
  <div class="landing">
    <landing-header />
    <div class="landing__page">
      <div class="landing__download">
        <p class="landing__title"> Baixe já o TechDash </p>
        <p class="landing__subtitle"> e comece a gerenciar seu negócios com toda tecnologia e eficiência. </p>

        <p class="landing__text"> Para computador: </p>

        <div class="landing__buttons">
          <button class="landing__button is-black">
            <img class="button__icon" src="../assets/img/windows.svg">
            <div>
              <p> Baixe TechDash para </p>
              <p class="button__text"> Windows </p>
            </div>
          </button>
        </div>

        <div class="landing__buttons--oneline">
          <button class="landing__button is-black">
            <div>
              <p class="is-size-7"> Baixe TechDash para </p>
              <p class="button__text"> macOS </p>
            </div>
          </button>

          <button class="landing__button is-black">
            <div>
              <p class="is-size-7"> Baixe TechDash para </p>
              <p class="button__text"> Linux </p>
            </div>
          </button>
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
