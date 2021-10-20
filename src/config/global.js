export default {
  global: {
    componenteFormativo: 'Análisis financiero y plan de mejora',
    descripcionCurso:
      'Para poder tomar las mejores decisiones sobre presupuestos proyectados es importante realizar el análisis financiero y así conocer las buenas prácticas y los errores cometidos, si los hay. Para estos últimos, se deben proponer planes de mejora con la finalidad de alcanzar la mejor rentabilidad y eficiencia financiera para la organización o negocio.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de la información presupuestal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis del ciclo contable',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis e interpretación del presupuesto',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: ' Indicadores de gestión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Excel y otras herramientas para la elaboración del presupuesto',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ética y responsabilidad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Informes y mejoras',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis de posibles escenarios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Seguimiento y control',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angulo, J. A. (2003). Principales cambios que suponen las Normas Internacionales de Información Financiera (NIIF) respecto al Plan General de Contabilidad (PGC). Universidad de Alcalá.',
    },
    {
      referencia:
        'Llorente, J. M. (2016). El presupuesto personal o familiar. Tipos de ingresos. InbestMe.  ',
      link: 'https://www.inbestme.com/blog/el-presupuesto-ingresos/',
    },
    {
      referencia:
        'Nubox. (s.f.). Flujo de efectivo versus flujo de caja: ¿cuál es la diferencia? Nubox.  ',
      link:
        'https://blog.nubox.com/empresas/flujo-de-efectivo-vs-flujo-de-caja',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'Se refiere al estudio y evaluación contable de una empresa.',
    },
    {
      termino: 'Balance',
      significado:
        'Es el documento que presenta la situación financiera de una empresa.',
    },
    {
      termino: 'Ciclo contable',
      significado:
        'Es un determinado tiempo en el cual la empresa realiza operaciones que deben ser contabilizadas.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Es la manera de organización para lograr objetivos en un cierto tiempo.',
    },
    {
      termino: 'Eficiencia',
      significado: 'Son los resultados de los objetivos en una empresa.',
    },
    {
      termino: 'Flujo de efectivo',
      significado:
        'La entrada y salida de dinero en un cierto tiempo de la empresa.',
    },
    {
      termino: 'Gastos',
      significado: 'Es la salida del dinero de la empresa.',
    },
    {
      termino: 'Indicadores',
      significado:
        'Son datos usados para comparar el rendimiento de la empresa.',
    },
    {
      termino: 'Ingresos',
      significado:
        'Es el aumento de la entrada económica por la actividad de la empresa.',
    },
    {
      termino: 'Periodificación',
      significado:
        'Es asignar cada ingreso o egreso a los ejercicios económicos.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Es un plan que se presenta a la empresa para lograr unos objetivos en cierto tiempo.',
    },
    {
      termino: 'Utilidad bruta',
      significado:
        'Es la ganancia que genera la empresa al vender un producto.',
    },
    {
      termino: 'Utilidad neta',
      significado: 'Son las ganancias que obtienen los dueños de las empresas.',
    },
  ],
  complementario: [
    {
      texto:
        'Análisis de la información presupuesta - BCR El Salvador. (2015). Presupuesto familiar [video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uihClLnsteU&ab_channel=BCRElSalvador',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático',
        centro: 'Centro de la Industria, la Empresa y los Servicios - CIES.',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arevalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
