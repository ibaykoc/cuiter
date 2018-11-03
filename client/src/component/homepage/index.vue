<template lang="pug">
  div.uk-width-1-2
      div.
      span#icon(uk-icon="icon: pencil; ratio: 2;", style="color:#00aced;")
      span.uk-text-capitalize.uk-text-bold.uk-button.uk-button-default.uk-align-right.uk-border-pill(
        style="padding: 3px 10px 3px 10px;border-color: #00aced;color:#00aced;font-size:12px;") masuk
      h1.uk-text-bold Lihat apa yang sedang terjadi di seluruh dunia
      p.uk-text-bold(style="color:black;") Bergabunglah dengan Cuiter sekarang juga.
      router-link.uk-text-bold.uk-button.uk-button-primary.uk-border-pill.uk-width-1-1(to="/signup" tag="button" style="background-color: #00aced;") daftar
      router-link.uk-text-bold.uk-margin-top.uk-button.uk-button-default.uk-border-pill.uk-width-1-1(to="/login" tag="button" style="border-color: #00aced; color:#00aced;") masuk
</template>

<script>
export default {
  name: 'homepage'
}
</script>
