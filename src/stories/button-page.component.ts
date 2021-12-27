import { Component } from '@angular/core';

@Component({
  selector: 'sb-button-page',
  template: `
  <h2>Ativo</h2>
  <div class='row grey justify-content-around'>
    <div class='row'>
      <sb-button type="primary">Botão primario</sb-button>
      <sb-button type="primary">Botão primario</sb-button>
    </div>
    <div class='row'>
      <sb-button type="secondary">Botão secundário</sb-button>
      <sb-button type="secondary">Botão secundário</sb-button>
    </div>
    <div class='row'>
      <sb-button type="tertiary">Botão terciário</sb-button>
      <sb-button type="tertiary">Botão terciário</sb-button>
    </div>
  </div>
  <div class='row grey justify-content-around'>
    <div class='row'>
      <sb-button type="primary" theme="dark">Botão primario</sb-button>
      <sb-button type="primary" theme="dark">Botão primario</sb-button>
    </div>
    <div class='row'>
      <sb-button type="secondary" theme="dark">Botão secundário</sb-button>
      <sb-button type="secondary" theme="dark">Botão secundário</sb-button>
    </div>
    <div class='row'>
      <sb-button type="tertiary" theme="dark">Botão terciário</sb-button>
      <sb-button type="tertiary" theme="dark">Botão terciário</sb-button>
    </div>
  </div>
  <h2>Inativo</h2>

  <div class='row grey justify-content-around'>
    <div class='row'>
      <sb-button type="primary" disabled="true">Botão primario</sb-button>
      <sb-button type="primary" disabled="true">Botão primario</sb-button>
    </div>
    <div class='row'>
      <sb-button type="secondary" disabled="true">Botão secundário</sb-button>
      <sb-button type="secondary" disabled="true">Botão secundário</sb-button>
    </div>
    <div class='row'>
      <sb-button type="tertiary" disabled="true">Botão terciário</sb-button>
      <sb-button type="tertiary" disabled="true">Botão terciário</sb-button>
    </div>
  </div>
  <div class='row grey justify-content-around'>
    <div class='row'>
      <sb-button type="primary" theme="dark" disabled="true">Botão primario</sb-button>
      <sb-button type="primary" theme="dark" disabled="true">Botão primario</sb-button>
    </div>
    <div class='row'>
      <sb-button type="secondary" theme="dark" disabled="true">Botão secundário</sb-button>
      <sb-button type="secondary" theme="dark" disabled="true">Botão secundário</sb-button>
    </div>
    <div class='row'>
      <sb-button type="tertiary" theme="dark" disabled="true">Botão terciário</sb-button>
      <sb-button type="tertiary" theme="dark" disabled="true">Botão terciário</sb-button>
    </div>
  </div>`,
  styleUrls: ['./page.css']
})
export default class ButtonPageComponent {

}
