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

    $("#senhaNaoBate").hide();
    $("#emailNaoBate").hide();

    function confereEmail(){
      var x = $("#email").val();
      var y = $("#confirmEmail").val();

      if (x != y){
        $("#emailNaoBate").show();
      }else{
        $("#emailNaoBate").hide();
      }
   }

    function confereSenha(){
       var x = $("#senha").val();
       var y = $("#confirmSenha").val();

       if (x != y){
         $("#senhaNaoBate").show();
       }else{
         $("#senhaNaoBate").hide();
       }
    }
    
    $("#confirmSenha, #senha").change(function(){
      confereSenha();
    });

    $("#confirmEmail, #email").change(function(){
      confereEmail();
    });
    

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

    
    $("#sexo").change(function (){
      var x =  $("#sexo").val();

      if( x == "S"){
        $("#optSelecione").show();
      }
      else{
        $("#optSelecione").hide();
      }
    });

  }

}
