<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Análisis de la información presupuestal
    br
    br
    br
    .row.align-items-center.fondo-9.p-3.mb-5.d-none.d-lg-block
      .col-lg-10.mb-3.mb-lg-0.d-none.d-lg-block
        p Cuando ya se tienen elaborados los presupuestos es prioritario realizar un análisis de estos, que permita minimizar riesgos y maximizar utilidades a futuro, por ello, se sugiere antes de realizar cualquier análisis, comprender que pueden existir unas variables a la hora de revisar prioridades, como se muestra en la siguiente figura:
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/images/tema1/img_1.png" alt='AvatarTop', style="width:450px; display:block; margin:-313px 46rem;")
    .row.mb-5
      .col-lg-11.d-block.d-lg-none
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/img_1.png" alt='AvatarTop')
          .tarjeta.fondo-14
            .p-4
              p Cuando ya se tienen elaborados los presupuestos es prioritario realizar un análisis de estos, que permita minimizar riesgos y maximizar utilidades a futuro, por ello, se sugiere antes de realizar cualquier análisis, comprender que pueden existir unas variables a la hora de revisar prioridades, como se muestra en la siguiente figura:
      
    p.BorTit.mb-5 Figura 1 Análisis de gastos
  
    .row
      .col-lg-12.d-none.d-lg-block
        .row.d-none.d-lg-block
          .col-lg-4.mb-3.mb-lg-0.d-none.d-lg-block
            img(src="@/assets/curso/images/tema1/img_2.svg" alt="AvatarTop", style="width:470px; display:block; margin:-1rem -1rem;")
        .row.justify-content-right.fondo-13.p-3.mb-5
          .col-lg-3
            p 
          .col-lg-9.mb-3.mb-lg-0
            p Esta diferenciación es propia de cada hogar, negocio o empresa, por ejemplo, los gastos urgentes no importantes, lo serán para una empresa, mientras para otra puede que no; todo depende de la naturaleza del negocio y/o forma de funcionar, de ahí la importancia de analizar con respecto a cada organización o familia. 
    .row.mb-5
      .col-lg-11.d-block.d-lg-none
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/img_2.svg" alt='AvatarTop')
          .tarjeta.fondo-14
            .p-4
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

    p.mb-5 El siguiente recurso presenta qué es el análisis de presupuesto, cuál es su interpretación y lo que se debe tener presente en el momento de comenzar a proyectar un presupuesto.
    
    #t_1_2.titulo-segundo
      .h4 1.2 Análisis e interpretación del presupuesto
    
    SlyderE(indicadores="derecha")
      .row.fondo-10.p-5
        .col-md-6.mb-4.mb-md-0
          p.mb-3 El análisis del presupuesto es un proceso mediante el cual cada cierto periodo de tiempo se evalúa un rubro, ciertos rubros o todo el presupuesto, dependiendo la política financiera implementada por la empresa o negocio, para comprobar que se está ejecutando según lo planeado. 

          h5 Ejemplo de rubros: 

          .row 
            .col-lg-3.mb-3.mb-lg-0
              p.mb-3 <b>Ingresos</b>
                .row
                  ul.lista-ul--color
                    li 
                      i.fab.fa-jira
                      | Ventas de contado
                    li 
                      i.fab.fa-jira
                      | Ventas a crédito
                    li 
                      i.fab.fa-jira
                      | Devoluciones
            .col-lg-3.mb-3.mb-lg-0
              p.mb-3 <b>Gastos</b>
                .row
                  ul.lista-ul--color
                    li 
                      i.fab.fa-jira
                      | Papelería
                    li
                      i.fab.fa-jira
                      | Arriendos

            .col-lg-3.mb-3.mb-lg-0
              p.mb-3  <b>Costos</b>
                  .row
                    ul.lista-ul--color
                      li 
                        i.fab.fa-jira
                        | Nómina operativa
                      li 
                        i.fab.fa-jira
                        | Acero
                      li 
                        i.fab.fa-jira
                        | Plástico 
        .col-md-6.mb-4.mb-md-0
          img(src="@/assets/curso/images/tema1/img_21.svg" alt="", style="width:400px; display:block; margin:0 auto;")

      .row.fondo-10.p-5
        .col-md-6.mb-4.mb-md-0
          p.mb-3 En este proceso se busca las áreas problemáticas para plantear acciones de mejora que minimicen las pérdidas y así subsanar a tiempo, gastos que pueden conllevar a un detrimento patrimonial. 

          p.mb-3 También con el análisis e interpretación se busca el grado de cumplimiento y así verificar una óptima administración de los recursos financieros. 
        .col-md-6.mb-4.mb-md-0
          img(src="@/assets/curso/images/tema1/img_22.svg" alt="", style="width:400px; display:block; margin:0 auto;")

      .row.fondo-10.p-5
        .col-md-6.mb-4.mb-md-0
          p Generalmente al empezar a proyectar un presupuesto se debe proponer los objetivos y metas, para facilitar que la trazabilidad sea medible y así, los análisis realizados de las acciones de mejora sean proporcionales a los resultados del seguimiento realizado. 
        .col-md-6.mb-4.mb-md-0
          img(src="@/assets/curso/images/tema1/img_23.svg" alt="", style="width:400px; display:block; margin:0 auto;")

    p.mb-3 Teniendo clara la información anterior, estudie un ejemplo de presupuesto y realice su respectivo análisis.

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_8.svg",  alt="", style="width:300px; display:block; margin:0 auto;")
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
            img(src="@/assets/curso/images/tema1/img_9.svg",  alt="", style="width:300px; display:block; margin:0 auto;")
          

      .row 
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_10.svg",  alt="", style="width:300px; display:block; margin:0 auto;")
        .col-md-6.mb-4.mb-md-0
          p.mb-3 Al tener unos gastos no previstos por $40.000 se tuvo que sobrepasar el presupuesto inicial en pro de la realización de la fiesta. 

          p Si se traslada esto a un ambiente emprendedor, el proyecto que según el presupuesto se podría realizar con $200.000 terminó realizándose con $240.000. Lo anterior, gracias a problemas que demandaron más recursos, recursos que no se proponían al principio, pero que al final se pudo solucionar. 
      .row
        .col-md-6.mb-4.mb-md-0
          p El paso siguiente es buscar el origen del problema para no volver a cometerlo, para este caso se aprecia que el estudio de mercado no era fiable y fue hecho con recursos casi nulos y en un tiempo precario, lo que llevó a que la información estuviera incompleta y las decisiones que se tomaron con base en esa información fueran equivocadas.
      
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema1/img_11.svg",  alt="", style="width:300px; display:block; margin:0 auto;")

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

      .col-lg-6.mb-5.mb-lg-0.mb-4
          img.my-3(src="@/assets/curso/images/tema1/img_12.svg", alt= "",style="width:400px; display:block; margin:0 auto;") 
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/images/tema1/img_13.svg" alt='AvatarTop', style="width:450px; display:block; margin:0 auto;")
          .tarjeta.color-avatar
            .p-4
              h4 ¿Por qué es importante medir? 
              p Porque permite interpretar lo que está ocurriendo en la organización y tomar las medidas necesarias cuando las variables se salen de los límites, para evaluar las consecuencias en el menor tiempo posible y definir los cambios que conlleven a mejoras inmediatas o mejoras proyectadas en el tiempo.  
    p Los criterios para satisfacer los indicadores deben ser: 
      .row.justify-content-center.align-items-center.p-4
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
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        .jumbotron.p-4
          h4 Indicadores de cumplimiento
            p.mb-4 Están relacionados con la razón que indica el grado de consecución de las tareas y objetivos.

            p <b>Ejemplo:</b> el cumplimiento de los programas encargados.
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        .jumbotron.p-3
          h4 Indicadores de evaluación
            p.mb-3 Aquí se mide el rendimiento que se tiene de una tarea o proceso, se encuentran relacionados con los métodos y ayudan a identificar las fortalezas, debilidades y mejoras.

          p <b>Ejemplo</b> la evaluación durante el proceso de pedidos.
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        .jumbotron.p-3
          h4 Indicadores de eficiencia
            p.mb-3 Se debe tener en cuenta que la eficiencia tiene que ver con la capacidad de cumplimiento  y actitud para llevar a cabo una tarea, con el mínimo de los recursos; los cuales están relacionados con la razón que indican los recursos invertidos en el  logro de tareas.

            p <b>Ejemplo:</b> tiempo de fabricación de un producto u entrega de proyecto.
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        .jumbotron.p-4
          h4 Indicadores de eficacia
            p.mb-4 La eficacia se relaciona en conseguir los resultados esperados de forma satisfactoria, tienen como relación las razones que indican la capacidad o acierto en la consecución de los trabajos.

          p <b>Ejemplo:</b> la satisfacción del cliente con relación a los pedidos.
    .row
      .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
        .jumbotron.p-3
          h4 Indicadores de gestión
            p.mb-3 Está relacionado con las razones que permiten administrar realmente un proceso u operaciones.

            p <b>Ejemplo:</b> gestión en gerencia de proyectos, el costo real del trabajo realizado donde es la métrica la que ayuda a una organización a identificar el costo de las actividades realizadas hasta su terminación.

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

    p.mb-5 La hoja de cálculo más utilizada en la elaboración de presupuestos es Excel. En el siguiente video se hace una presentación de este programa.

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/T8fVG_n23Xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    p.mb-5 Son infinitas las características o atributos de una herramienta digital como Excel, pero solo se mencionan las más utilizadas:
    .row.justify-content-center.align-items-center.mb-5
      .col-12.lg-6.mb-5.mb-lg-0
        .jumbotron-2
          LineaTiempoB.fondo.p-4.mb-5(:datos="datosLineaTiempoB")

        p.mb-3 Del nivel de manejo y experticia de cada usuario dependerá la magnitud y aprovechamiento de esta aplicación, desde presupuestos sencillos en una tabla pequeña hasta modelos financieros mediante programación especializada, una herramienta dispuesta a desarrollar operaciones según la demanda de las personas. 

        p.mb-5 Además de Excel, existen infinidad de herramientas útiles con diferentes modalidades y aplicaciones, según cada necesidad y/o situación empresarial o personal, a continuación se mencionan algunos ejemplos:
        
    .row.justify-content-center.align-items-center.mb-5
      .col-2.lg-4.mb-5.mb-lg-0
        ul.lista-ul--color
          li 
            i.fab.fa-jira
            | AceMoney Lite.
          li 
            i.fab.fa-jira
            | Zureo Home.
          li 
            i.fab.fa-jira
            | Cegit.
          li 
            i.fab.fa-jira
            | PIM Xtreme.
      
      .col-8.mt-5.ms-5
        .tarjeta.color-custom-2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/images/tema1/ico_9.svg", alt= "",style="width:150px; display:block; margin:0 auto;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Documento: Presupuesto familiar
                  p.text-small.text-white  En el presente archivo encontrará una plantilla básica, que le permitirá realizar ejercicios básicos en Excel, sobre la planeación de un presupuesto familiar. 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1_Plantilla_planeador_presupuesto_familiar.xlsx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador 
    #t_1_5.titulo-segundo
      .h4 1.5 Ética y responsabilidad
    p.mb-3 En el mercado financiero el comportamiento moral y ético de un profesional va más allá de la posición individual-personal del ser humano. Por ello, es importante como profesional tener en cuenta algunas características que van ligadas a la realización de actividades laborales dentro de un negocio u organización, como se muestra en la siguiente figura:
      .jumbotron-3
        .row.justify-content-center.align-items-center.fondo-2.p-4.mb-5
          .col-12.col-md-8.col-lg-6.col-xl-6.mb-4
            p.BorTit.mb-5 Figura 4 Etica profesional
            figure
              img(src='@/assets/curso/images/tema1/img_18.svg' alt="", style="width:450px; display:block; margin:auto 0;")
          .col-lg-6.mb-5.mb-lg-0  
            br
            p.mb-3 Para la elaboración de un presupuesto, para realizar el seguimiento y para proponer mejoras, es importante que los responsables tanto de proyectar como de auditar, deben siempre pensar en el bienestar de la organización y del entorno, más del propio como persona. 

            p.mb-3 Por este motivo, la transparencia, la honestidad, el sentido de pertenencia y la buena fe son competencias permanentes en las personas encargadas del presupuesto. De ellos depende que la información, el comportamiento y la tendencia del ejercicio financiero dependa de funciones realizadas con total responsabilidad ético y profesional. 

    .row.justify-content-center.align-items-center.mb-3
      .col-12
        .bloque-texto-a.color-tarjeta-2.p-3.mb-5
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-12
                    p.mb-3 <b> Estas premisas siempre serán primordiales para un profesional encargado del área presupuestal:</b>
              .col-lg-7
                .bloque-texto-a__texto.p-4
                  .col-sm.mt-3   
                     ul.lista-ul--color
                        li 
                          i.fab.fa-jira
                          | Conseguir claridad en todos los actos.
                        li 
                          i.fab.fa-jira
                          | Lograr altos niveles de competencia profesional e integridad profesional.
                        li 
                          i.fab.fa-jira
                          | Evitar, prevenir y gestionar los conflictos de interés.
                        li 
                          i.fab.fa-jira
                          | Revelar conflictos de interés a la dependencia encargada.

    p.mb-3 Aunque no existen normas o reglas morales únicas o estandarizadas, cada organización posee su código de ética y su política financiera y contable, es así que, al asumir ciertos roles profesionales, deben siempre actuar de manera conjunta a las políticas que profesa la organización y el Estado. 

    p.mb-5 Hoy en día, gracias al gran crecimiento de plataformas financieras digitales se ha cuestionado el concepto de ética y responsabilidad global, porque muchas veces prevalece el crecimiento exponencial financiero de un producto, afectando un entorno o comunidad, y es ahí donde el actuar debe ser íntegro y desligado a intereses personales, porque no solo una omisión de información, sino una mala decisión puede llevar a la quiebra a una empresa y/o nación.

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-5.mb-lg-0
            img(src="@/assets/curso/images/tema1/img_20.svg" alt="", style="width:1000px; display:block; margin:0 auto;")








  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '',
        texto:
          'Optimiza el tiempo en el que antes un usuario tenía que registrar en libros físicos.',
        icono: require('@/assets/curso/images/tema1/ico_1.svg'),
      },
      {
        titulo: '',
        texto:
          'Permite almacenar grandes cantidades de información, garantizando un respaldo ante contingencias y riesgos de pérdida de información.Minimiza el tiempo de los resultados de operaciones, para realizar análisis y toma de decisiones.',
        icono: require('@/assets/curso/images/tema1/ico_2.svg'),
      },
      {
        titulo: '',
        texto:
          'Permite personalizar los presupuestos según la manera de trabajo del usuario, negocio o compañía.',
        icono: require('@/assets/curso/images/tema1/ico_3.svg'),
      },
      {
        titulo: '',
        texto:
          'Ofrece utilidades adicionales para facilitar la interpretación de resultados como gráficos estadísticos, imágenes, etc.',
        icono: require('@/assets/curso/images/tema1/ico_4.svg'),
      },
      {
        titulo: '',
        texto:
          'Contiene componentes avanzados como la programación de macros, que robustece el manejo de información más precisa y exacta. Su infinidad de fórmulas permite aplicar operaciones para cada tipo de necesidad. ',
        icono: require('@/assets/curso/images/tema1/ico_5.svg'),
      },
      {
        titulo: '',
        texto:
          'Puede integrar la información de varios usuarios, esto sucede cuando este aplicativo se encuentra en la plataforma de Internet, en la que varios operadores pueden acceder a un mismo archivo.',
        icono: require('@/assets/curso/images/tema1/ico_6.svg'),
      },
      {
        titulo: '',
        texto:
          'Facilita el diseño de presupuestos para  su lectura e interpretación, gracias a formatos de celdas, tablas, tablas dinámicas, bordes, sombreados, etc. Puede contener varias base de datos de presupuestos y otros archivos que pueden ser insumo como datos de ingreso, evitando la duplicidad de información como base datos de ventas, de gastos, etc.',
        icono: require('@/assets/curso/images/tema1/ico_7.svg'),
      },
      {
        titulo: '',
        texto:
          'Garantiza un alto porcentaje de exactitud en los resultados, facilitando el análisis y la aplicación de acciones de mejora y, asegurando que la productividad de los usuarios sea mayor.',
        icono: require('@/assets/curso/images/tema1/ico_8.svg'),
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
