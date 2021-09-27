<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Análisis de la información presupuestal
    .row
      .col-10.mb-5
        .jumbotron
          .row.justify-content-center.align-items-center
            .col-6
                p Cuando ya se tienen elaborados los presupuestos es prioritario realizar un análisis de estos, que permita minimizar riesgos y maximizar utilidades a futuro, por ello, se sugiere antes de realizar cualquier análisis, comprender que pueden existir unas variables a la hora de revisar prioridades, como se muestra en la siguiente figura:
            .col-12.col-md-8.col-lg-2.col-xl-4
              img(src="@/assets/curso/images/tema1/img_1.png" alt="", style="width:350px; display:block; margin:-6rem 15rem;")
    p.BorTit.mb-5 Figura 1 Análisis de gastos
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-10.mb-5
        .jumbotron
          .row.justify-content-center.align-items-center
            .col-12.col-md-8.col-lg-2.col-xl-4
              img(src="@/assets/curso/images/tema1/img_2.svg" alt="", style="width:350px; display:block; margin:-6rem -7rem;")
            .col-6
                p Esta diferenciación es propia de cada hogar, negocio o empresa, por ejemplo, los gastos urgentes no importantes, lo serán para una empresa, mientras para otra puede que no; todo depende de la naturaleza del negocio y/o forma de funcionar, de ahí la importancia de analizar con respecto a cada organización o familia. 
    Separador 
    #t_1_1.titulo-segundo
      .h4 1.1 Análisis del ciclo contable

    p.mb-3 El proceso contable dentro de una organización es de vital importancia porque conlleva a un propósito de organizar, registrar y analizar los movimientos realizados por un periodo determinado, suministrando la información veraz, confiable y oportuna, que permita determinar utilidades y pérdidas. Este proceso es de suma rigurosidad porque asegura que los datos en los estados financieros fueron realizados correctamente y que los errores están totalmente corregidos, lo cual se consigue realizando los pasos del ciclo.

    p.mb-3 Al comprender el ciclo contable se puede facilitar su lectura y análisis para la óptima toma de decisiones. Un ciclo contable puede tener las siguientes fases:

    p.BorTit.mb-5 Figura 2 Ciclo contable

    .row.justify-content-center.align-items-center.fondo-1.mb-5
      .col-lg-12.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema1/img_3.svg" alt="", style="width:1000px; display:block; margin:0 auto;")

    p.mb-3 Una vez realizado un ciclo contable, teniendo en cuenta la correcta ejecución de las fases mencionadas se podrán apreciar las utilidades y/o pérdidas, como también los movimientos atípicos o usuales que se han hecho a lo largo del periodo. Estos resultados se convierten en insumos importantes para realizar los análisis y la toma de decisiones. 

    p.mb-3 Un ejemplo muy básico de un ciclo contable en una empresa sería como se muestra en la siguiente figura:

    .jumbotron-1.p-5
      .row.justify-content-center.align-items-center.fondo-1.mb-5
        .col-lg-12.mb-5.mb-lg-0
            img(src="@/assets/curso/images/tema1/img_4.svg" alt="", style="width:1000px; display:block; margin:0 auto;")

      p.mb-3 Luego de hacer el cierre se puede apreciar que del valor inicial se usaron $200.000 para compras, a su vez, vendimos lo comprado por $250.000, obteniendo así una utilidad bruta de $50.000, pero como se presentaron unos gastos de $10.000, la utilidad neta es de $40.000, iniciando así el siguiente ciclo.

      p.mb-3 Gracias a lo anterior, se pudo verificar que existió utilidad entre el producto comprado y vendido; es así que las decisiones tomadas ya parten con base en los resultados positivos, que serán punto de partida para el siguiente ciclo contable.

    Separador 
    #t_1_2.titulo-segundo
      .h4 1.2 Análisis e interpretación del presupuesto
    
    SlyderD.mb-5(:datos="datosSlyder")

    p.mb-3 Teniendo clara la información anterior, estudie un ejemplo de presupuesto y realice su respectivo análisis.

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_8.svg",  alt="", style="width:200px; display:block; margin:0 auto;")
        .col-md-6.mb-4.mb-md-0
          p Se tiene ideado hacer una fiesta, por lo que hay unos valores que se han ido recogiendo gracias a una investigación de mercado, tales como:
          ul.lista-ul--color
            li 
              i.fab.fa-jira
              | Productos para servir la comida (platos, cubiertos, manteles, mesas, etc.): $50.000
            li 
              i.fab.fa-jira
              | Comida y bebida: $20.000
            li 
              i.fab.fa-jira
              | Iluminación y decoración: $80.000
            li 
              i.fab.fa-jira
              | Demás cosas necesarias para la realización de la fiesta: $50.000

      .row
        .col-md-6.mb-4.mb-md-0
          p Gracias a la anterior investigación se tiene pronosticado (presupuestado) que en la fiesta se tendrán que gastar $200.000 para su realización. Ahora, a medida que se van comprando las cosas y se va organizando el evento, surgen imprevistos que no se estimó al inicio del ejercicio, tales como:
          ul.lista-ul--color
              li 
                i.fab.fa-jira
                | Arreglo del equipo de sonido: $20.000
              li 
                i.fab.fa-jira
                | Manufactura de las invitaciones: $15.000
              li 
                i.fab.fa-jira
                | Logística: $5.000
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_9.svg",  alt="", style="width:200px; display:block; margin:0 auto;")
          

      .row 
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_10.svg",  alt="", style="width:200px; display:block; margin:0 auto;")
        .col-md-6.mb-4.mb-md-0
          p.mb-3 Al tener unos gastos no previstos por $40.000 se tuvo que sobrepasar el presupuesto inicial en pro de la realización de la fiesta. 

          p Si se traslada esto a un ambiente emprendedor, el proyecto que según el presupuesto se podría realizar con $200.000 terminó realizándose con $240.000. Lo anterior, gracias a problemas que demandaron más recursos, recursos que no se proponían al principio, pero que al final se pudo solucionar. 
      .row
        .col-md-6.mb-4.mb-md-0
          p El paso siguiente es buscar el origen del problema para no volver a cometerlo, para este caso se aprecia que el estudio de mercado no era fiable y fue hecho con recursos casi nulos y en un tiempo precario, lo que llevó a que la información estuviera incompleta y las decisiones que se tomaron con base en esa información fueran equivocadas.
      
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_11.svg",  alt="", style="width:200px; display:block; margin:0 auto;")

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-8.col-xl-10
        .cajon.color-custom.p-4.mb-4
          p.mb-0 Para concluir, es importante resaltar que construir y analizar un presupuesto ayuda de manera eficiente a manejar los recursos disponibles para alcanzar metas y/o proyectos y, para saber controlar lo que se debe tener con cada una de las fases en la realización de estos. Para los casos en los cuales, desde el principio se proyecta y se conoce el valor faltante para alguna ejecución, se tendrá un tiempo para gestionar o replantear su ejecución de manera sostenible.  

    Separador 
    #t_1_3.titulo-segundo
      .h4 1.3 Indicadores de gestión
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-5.mb-lg-0
        p.mb-3 Cuando se habla de indicadores de gestión se hace referencia a la forma de medir si una empresa, proyecto o persona está cumpliendo y/o logrando las metas u objetivos propuestos.

        p.mb-3 La idea es que estos indicadores sean la base para acciones a tomar en el ahora y futuros periodos de ejecución.
            
        p.mb-3 Los indicadores ayudan a reflejar datos veraces y confiables, permitiendo medir y hacer seguimiento de los cumplimientos y así no solo controlar, sino intervenir en el momento correcto para realizar las mejoras a tiempo, logrando el éxito de la gestión, con cifras y porcentajes. 

      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
          img.my-3(src="@/assets/curso/images/tema1/img_12.svg", alt= "",style="width:400px; display:block; margin:0 auto;") 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.mb-5
        .jumbotron
          .row.justify-content-center.align-items-center
            .col-12.col-md-8.col-lg-2.col-xl-4
              img(src="@/assets/curso/images/tema1/img_13.svg" alt="", style="width:350px; display:block; margin:-2rem -10rem;")
            .col-6
              p.mb-3 ¿Por qué es importante medir? 

              p Porque permite interpretar lo que está ocurriendo en la organización y tomar las medidas necesarias cuando las variables se salen de los límites, para evaluar las consecuencias en el menor tiempo posible y definir los cambios que conlleven a mejoras inmediatas o mejoras proyectadas en el tiempo.  

    p.mb-3 Los criterios para satisfacer los indicadores deben ser: 

      ul.lista-ul--color
        li 
          i.fab.fa-jira
          | Medibles.
        li 
          i.fab.fa-jira
          | Entendibles.
        li 
          i.fab.fa-jira
          | Controlables. 

        p.mb-3 Los tipos de indicadores de gestión son:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        img.my-3(src="@/assets/curso/images/tema1/img_14.svg", alt= "",style="width:400px; display:block; margin:0 auto;")
      .col-lg-6.mb-5.mb-lg-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Indicadores de cumplimiento") Están relacionados con la razón que indica el grado de consecución de las tareas y objetivos. #[BR] <b>Ejemplo:</b> el cumplimiento de los programas encargados.
          
          p.text-small(numero="2" titulo="Indicadores de evaluación") Aquí se mide el rendimiento que se tiene de una tarea o proceso, se encuentran relacionados con los métodos y ayudan a identificar las fortalezas, debilidades y mejoras. #[BR] <b> Ejemplo:</b> la evaluación durante el proceso de pedidos.
          
          p.text-small(numero="3" titulo="Indicadores de eficiencia") Se debe tener en cuenta que la eficiencia tiene que ver con la capacidad de cumplimiento  y actitud para llevar a cabo una tarea, con el mínimo de los recursos; los cuales están relacionados con la razón que indican los recursos invertidos en el  logro de tareas.#[BR] <b> Ejemplo:</b> tiempo de fabricación de un producto u entrega de proyecto.
          
          p.text-small(numero="4" titulo="Indicadores de eficacia") La eficacia se relaciona en conseguir los resultados esperados de forma satisfactoria, tienen como relación las razones que indican la capacidad o acierto en la consecución de los trabajos.#[BR] <b> Ejemplo: </b>la satisfacción del cliente con relación a los pedidos.

          p.text-small(numero="5" titulo="Indicadores de gestión") Está relacionado con las razones que permiten administrar realmente un proceso u operaciones.#[BR] <b>Ejemplo:</b> Gestión en gerencia de proyectos, el costo real del trabajo realizado donde es la métrica la que ayuda a una organización a identificar el costo de las actividades realizadas hasta su terminación.

    p.mb-5 Algunos ejemplos de aplicación de indicadores de gestión serían en:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_10.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta
            .text-white.p-4
              h2.text-center Flujo de efectivo
              p Es el ingreso o salida de dinero en efectivo (que está disponible en un momento dado).

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_11.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta1
            .p-4
              h2.text-center Volumen de ventas
              p Magnitud contable sobre las ventas realizadas en un periodo dado.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/ico_12.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
          .tarjeta.color-tarjeta
            .text-white.p-4
              h2.text-center Utilidad de la operación
              p Es el resultado de tomar los ingresos operacionales y restarle los costos y gastos operacionales, la diferencia será la utilidad, siempre y cuando sea positiva. 
    
    p.mb-3 Estos indican por ejemplo, si el flujo de efectivo, volumen de ventas y la utilidad obtenida en el periodo que se prevé en el presupuesto es acorde con la realidad, y dependiendo de si lo es o no, tomar decisiones para cumplir objetivos y metas.

    Separador 
    #t_1_4.titulo-segundo
      .h4 1.4 Excel y otras herramientas para la elaboración del presupuesto

    
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 
    br 

    
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El análisis del presupuesto es un proceso mediante el cual cada cierto periodo de tiempo se evalúa un rubro, ciertos rubros o todo el presupuesto, dependiendo la política financiera implementada por la empresa o negocio, para comprobar que se está ejecutando según lo planeado. <br></br> <b>Ejemplo de Rubros</b><br></br><b> Ingresos </b><br></br><ol class="lista-ol--cuadro"> <li><div class="lista-ol--cuadro__vineta"><span>1</span></div>Ventas de contado</li><li><div class="lista-ol--cuadro__vineta"><span>2</span></div>Ventas a crédito.</li></ul>',
        imagen: require('@/assets/curso/images/tema1/img_5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En este proceso se busca las áreas problemáticas para plantear acciones de mejora que minimicen las pérdidas y así subsanar a tiempo, gastos que pueden conllevar a un detrimento patrimonial. <br>También con el análisis e interpretación se busca el grado de cumplimiento y así verificar una óptima administración de los recursos financieros.',
        imagen: require('@/assets/curso/images/tema1/img_6.svg'),
      },
      {
        titulo: '',
        texto:
          'Generalmente al empezar a proyectar un presupuesto se debe proponer los objetivos y metas, para facilitar que la trazabilidad sea medible y así, los análisis realizados de las acciones de mejora sean proporcionales a los resultados del seguimiento realizado.',
        imagen: require('@/assets/curso/images/tema1/img_7.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
