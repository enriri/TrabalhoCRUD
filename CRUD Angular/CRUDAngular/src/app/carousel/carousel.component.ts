import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: '[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function escode_etapas(){
      $("#etapa1").hide();
      $("#etapa2").hide();
      $("#etapa3").hide();
    }

    function progresso(prog){
      $("#progresso").attr("style", "width: "+ prog + "%");
    }

    escode_etapas();
    $("#etapa1").toggle();

    $("#etapa1_prox").click(function() {
      escode_etapas();
      progresso(66);
      $("#etapa2").slideToggle();
      
    });

    $("#etapa2_ant").click(function (){
      escode_etapas();
      progresso(33);
      $("#etapa1").slideToggle();

    });

    $("#etapa2_prox").click(function (){
      escode_etapas();
      progresso(99);
      $("#etapa3").slideToggle();

    });

    $("#etapa3_ant").click(function (){
      escode_etapas();
      progresso(66);
      $("#etapa2").slideToggle();

    });

    

  }

}
