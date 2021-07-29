import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pastoral-biblica',
  templateUrl: './pastoral-biblica.component.html',
  styleUrls: ['./pastoral-biblica.component.scss']
})
export class PastoralBiblicaComponent implements OnInit {

  parrafo: string;
  download = {
    url:"",
    name: ""
  }

  constructor() { }

  ngOnInit(): void {
    this.parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam dolores in praesentium, deleniti animi nulla explicabo veniam. Consectetur at, laboriosam quos reprehenderit asperiores voluptatem obcaecati voluptatibus unde amet architecto?";
    this.download.url ="./assets/Documentos/pastoral-biblica/genesis.docx";
    this.download.name= "Genesis.docx";
  }

  cambiarTexto(btnId: number){
    if(btnId === 1){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = `GENESIS
      Cuanto más se avanza en la vida, más crece el interés por descubrir las propias raíces: ¿dónde vivían nuestros antepasados? ¿Cómo se conocieron nuestros padres? ¿Qué inspiró nuestras primeras decisiones? Todos los pueblos han tratado de reconstruir su pasado; ciertamente querían salvarlo del olvido, pero mucho más anhelaban encontrar en ese pasado la confirmación de tantas cosas en las que creían. Narrar su historia equivalía a afirmar la propia identidad en medio de los otros pueblos grandes o pequeños que los rodeaban.
      Y esto precisamente es lo que está en el corazón del Génesis. En varias épocas, a lo largo de la histo- ria, el pueblo de Dios sintió la necesidad de recupe- rar su pasado y de expresar cuál había sido desde los orígenes el plan de Dios que lo había escogido.
      Génesis quiere decir “Origen”; pero no hay que buscar en los primeros capítulos un documento científico sobre los orígenes del universo o sobre un pecado que habría cometido el primer hombre; en cambio sí nos toparemos desde las primeras pági- nas, en forma de imágenes, con todo lo que es muy importante para nosotros.
      Recorriendo el Génesis
      El libro del Génesis tiene tres partes principales:
      Los capítulos del 1 al 11 tratan de establecer un nexo a lo largo de los enormes períodos de tiempo que transcurrieron desde la creación hasta los prime- ros “padres de la fe”, cuyos nombres quedaron en la memoria, empezando por supuesto por Abraham. Personajes de leyenda como Caín, Lamec, Henoc, Noé, protagonizan las grandes experiencias de la humanidad. Las “genealogías” (5,1; 10,1; 11,10) nos llevan desde la primera pareja (Adán y Eva) hasta la nueva familia escogida por Dios (Abraham y Sara).
      La segunda sección presenta en dos partes las his- torias de los antepasados de las tribus que formarían un día el pueblo de Israel. Los capítulos 12-14 se refieren a Abraham; los capítulos 25-36 a Isaac y Jacob: eran personajes nómadas que ya creían en un Dios cercano y en el que se podía confiar, el “Dios de mi padre”. Estas historias, que se ubican entre los siglos 18 y 15 antes de Cristo, nos muestran cómo Dios ya había preparado su obra de salvación.
      La tercera parte, la historia de José, proyecta luz sobre las tragedias que entretejen la existencia hu- mana. Los seres humanos necesitan un salvador, y la salvación les vendrá justamente por intermedio de aquellos que han perseguido y rechazado.
      ¿Quién escribió el Génesis? Los primeros  autores
      
      El pueblo de la Biblia se fue constituyendo poco a poco por la aglomeración de tribus nómadas que
       
      INTRODUCCIÓN	4
      no sabían leer ni conocían la escritura. Llevaban consigo el recuerdo de sus antepasados y el recuerdo de signos o señales que Dios había realizado en su favor y sus tradiciones se trans- mitían oralmente. Al establecerse esas tribus en Palestina, poco a poco fueron creando una nueva cultura: entorno al rey los escribas iban fijando por escrito las leyes y las creencias del reino. Y así en el siglo X antes de Cristo, un escritor desconocido, comúnmente llamado el yavista, se propuso redactar una historia del pueblo de Dios, mostrando cómo el plan de Dios se había desarrollado desde los orígenes hasta la monarquía gloriosa de David y de Salomón, en que según parecía, se habían cumplido las promesas de Dios a Abraham.
      Puso por escrito los recuerdos y leyendas referentes a Abraham y su familia que los israeli- tas se habían transmitido de padres a hijos. Para hablar de tiempos anteriores utilizó en parte la literatura de los Babilonios y sus poemas referentes a la primera pareja y al Diluvio, pero los transformó profundamente para que expresaran la visión del mundo que procedía de su fe. Este relato fue completado posteriormente con otras tradiciones, repitiéndose a veces los mismos hechos, que son fácilmente identificables porque nombran a Dios (en hebreo Elohim), mientras que el primer relato habla de Yavé, el nombre revelado a Moisés. Por eso
      se habla de relatos eloístas y yavistas.
      La obra de los sacerdotes
      
      Esta primera obra, que data del tiempo de los reyes, no se ha conservado tal cual. En el siglo V, al conocer el pueblo judío la gran prueba de la destrucción del reino y del destierro de Ba- bilonia, los sacerdotes añadieron muchos párrafos, que en el texto ponemos en letra cursiva. A ellos se debe en especial el poema de la creación en siete días con el que empieza el Géne- sis, y en cierto sentido toda la Biblia.
      En los momentos críticos que vivía Israel a raíz de la desaparición del reino del Sur junto con todas sus instituciones, la figura de Dios y la fe en él estaban seriamente en peligro de desaparecer; mientras que la religión de los nuevos amos del mundo amenazaba con suplan- tar en la mente de los israelitas la religión y la fe yavista, pues hacían ver la debilidad y false- dad de Yavé, incapaz de defender a su rey, su ciudad y su templo, lugar de habitación.
      Como reacción un grupo de sacerdotes, siguiendo la enseñanza del profeta Ezequiel, se dio a la tarea de levantar al pueblo de sus ruinas. Comenzaron de nuevo a reflexionar sobre los orígenes del pueblo y la especial predilección de Dios con ellos; sobre la alianza con sus pa- dres, sus promesas y su paciencia histórica. Trataban así de levantar los ánimos del resto cre- yente de Israel, transmitiéndoles la idea de la fidelidad de Dios, que aunque castiga no aban- dona.
      A esta época corresponde el sentido y mensaje que hay detrás no sólo del libro del Géne- sis, sino de todo el Pentateuco en su configuración actual. Tras esta reordenación, los capítu- los 1-11 del Génesis hacen las veces de portada, de prólogo a la historia de los orígenes de Is- rael. Ubican en la historia del mundo el plan de Dios que quiere salvar a la humanidad y su fidelidad eterna frente a la infidelidad de los hombres, como aparece en la historia de la pri- mera pareja y de las siguientes generaciones.
      Del Génesis al Apocalipsis
      
      En la nota sobre La Escritura, al final del libro, recordamos que la colección y el reconoci- miento oficial de los setenta y tres libros de la Biblia fueron en muchos casos fruto de cir- cunstancias casuales. Sin embargo la familiaridad con el libro sagrado nos enseña con el tiempo que, por ser la Biblia el sacramento de la Palabra de Dios, no faltó la guía del Espíri- tu. La lectura cristiana del Génesis, tal como lo leyeron los apóstoles y los evangelistas, mos- trará que el misterio de Cristo ya se expresaba en él. También habrá que acercar este primer libro al último de toda la Biblia, el Apocalipsis, donde se revela plenamente el plan del Dios que salva y que sus promesas desde Adán hasta Abraham se cumplen más allá de todo lo que se podía esperar.
      `;
      this.download.url ="./assets/Documentos/pastoral-biblica/genesis.docx";
    this.download.name= "Genesis.docx";
    ;
    }else if(btnId === 2){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = "2";
      this.download.url ="./assets/Documentos/pastoral-biblica/antes-de-la-biblia.docx";
    this.download.name= "Antes de la biblia.docx";
    }else if(btnId === 3){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = "3";
      this.download.url ="./assets/Documentos/pastoral-biblica/jesus-ha-resucitado.docx";
    this.download.name= "Jesús ha resucitado.docx";
    }else if(btnId === 4){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = "4";
      this.download.url ="./assets/Documentos/pastoral-biblica/dieciocho-siglos-antes-de-cristo.docx";
    this.download.name= "Dieciocho siglos antes de Cristo.docx";
    }else if(btnId === 5){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = "5";
      this.download.url ="./assets/Documentos/pastoral-biblica/nuevo-testamento.docx";
    this.download.name= "Nuevo Testamento.docx";
    }else if(btnId === 6){
      let active = $('.btn-outline-info').hasClass('active');
      if(active){
        $('.btn-outline-info').removeClass('active');
      }
      this.parrafo = "6";
      this.download.url ="./assets/Documentos/pastoral-biblica/la-biblia-latinoamericana.docx";
    this.download.name= "La Biblia Latinoamericana.docx";
    }
    $(`#${btnId}`).addClass('active');
  }

}
