'use client'

import { useState } from 'react'
import { Search, Facebook, Youtube, Send, ArrowLeft, AlertTriangle, X } from 'lucide-react'

// Icono personalizado de X (nuevo logo de Twitter)
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Imágenes reales de Unsplash (gratis y de alta calidad)
const imagenes = {
  mundo1: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80",
  mundo2: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
  mundo3: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=800&q=80",
  mundo4: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  america1: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
  america2: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
  america3: "https://images.unsplash.com/photo-1548791083-6223c2eed1b6?w=800&q=80",
  america4: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800&q=80",
  opinion1: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  opinion2: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
  opinion3: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  viral1: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  viral2: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
  viral3: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
}

// Noticia urgente/última hora
const noticiaUrgente = {
  titulo: "ÚLTIMA HORA: Cumbre de líderes mundiales llega a acuerdo histórico sobre cambio climático",
  enlace: 1
}

// Datos de las noticias (15 noticias)
const todasLasNoticias = [
  {
    id: 1,
    titulo: "Cumbre internacional acuerda nuevas medidas para la crisis climática global",
    sumario: "Líderes de más de 150 países alcanzaron un acuerdo histórico para reducir emisiones en un 50% para 2030, marcando un hito en la lucha contra el cambio climático.",
    contenido: `En una reunión histórica sin precedentes, representantes de más de 150 naciones se reunieron esta semana para abordar uno de los desafíos más apremiantes de nuestra era: el cambio climático. Las negociaciones, que se extendieron por cinco días intensivos, culminaron con un acuerdo ambicioso que establece metas concretas para la reducción de emisiones globales.

El acuerdo establece que los países participantes se comprometen a reducir sus emisiones de gases de efecto invernadero en un 50% para el año 2030, utilizando como línea base los niveles registrados en 2015. Esta meta, considerada por muchos expertos como el punto de inflexión necesario para evitar catástrofes climáticas irreversibles, representa un esfuerzo coordinado sin precedentes en la historia de la diplomacia ambiental.

Entre las medidas específicas incluidas en el acuerdo destacan la transición acelerada hacia energías renovables, la implementación de impuestos al carbono, y la creación de un fondo internacional de 100 mil millones de dólares para apoyar a países en desarrollo en sus esfuerzos de descarbonización.`,
    imagen: imagenes.mundo1,
    categoria: "Mundo",
    fecha: "22 de febrero de 2025",
    autor: "Redacción"
  },
  {
    id: 2,
    titulo: "América Latina impulsa nueva alianza comercial regional",
    sumario: "Los países de la región buscan fortalecer la integración económica frente a los desafíos globales del comercio internacional.",
    contenido: `En un esfuerzo por fortalecer la integración económica regional, los líderes de América Latina han anunciado la creación de una nueva alianza comercial que busca facilitar el intercambio de bienes y servicios entre los países miembros.

La iniciativa, que ha sido denominada "Alianza Regional para el Comercio Integrado" (ARCI), tiene como objetivo principal reducir las barreras arancelarias y simplificar los procedimientos aduaneros entre las naciones participantes. Se espera que esta medida impulse significativamente el comercio intrarregional, que actualmente representa solo una pequeña fracción del total de intercambios comerciales de la región.

Los analistas económicos han señalado que esta alianza podría ser un paso crucial hacia la diversificación de las economías latinoamericanas, tradicionalmente dependientes de la exportación de materias primas.`,
    imagen: imagenes.america1,
    categoria: "América Alerta",
    fecha: "21 de febrero de 2025",
    autor: "Corresponsal Regional"
  },
  {
    id: 3,
    titulo: "Avances tecnológicos transforman la comunicación global",
    sumario: "Nuevas plataformas digitales revolucionan la forma en que las personas se conectan e intercambian información a nivel mundial.",
    contenido: `La tecnología continúa transformando radicalmente la manera en que nos comunicamos. Las últimas innovaciones en inteligencia artificial y procesamiento de lenguaje natural están creando nuevas posibilidades para la interacción humana a escala global.

Las plataformas de comunicación han evolucionado más allá de los simples mensajes de texto y llamadas de voz. Ahora ofrecen traducción en tiempo real, asistentes impulsados por IA, y experiencias de realidad aumentada que permiten a las personas sentirse conectadas a pesar de la distancia física.

Los expertos señalan que estos avances tienen implicaciones profundas para la educación, el trabajo remoto y las relaciones interpersonales.`,
    imagen: imagenes.viral1,
    categoria: "Virales",
    fecha: "20 de febrero de 2025",
    autor: "Sección Tecnología"
  },
  {
    id: 4,
    titulo: "El impacto de las redes sociales en la política moderna",
    sumario: "Un análisis sobre cómo las plataformas digitales han transformado la manera en que se hace política en el siglo XXI.",
    contenido: `Las redes sociales han revolucionado el panorama político de maneras que nadie podría haber anticipado hace apenas dos décadas. Lo que comenzó como plataformas para conectar amigos y familiares se ha convertido en herramientas fundamentales para campañas políticas, activismo social y la formación de opinión pública.

Los políticos de todo el espectro ideológico ahora dependen de estas plataformas para comunicarse directamente con sus constituyentes, eludiendo los filtros tradicionales de los medios de comunicación. Esta democratización del discurso político tiene tanto aspectos positivos como negativos, según los analistas.

El desafío para las sociedades democráticas es encontrar el equilibrio entre la libertad de expresión y la necesidad de información veraz y constructiva.`,
    imagen: imagenes.opinion1,
    categoria: "Opinión",
    fecha: "19 de febrero de 2025",
    autor: "Editorial"
  },
  {
    id: 5,
    titulo: "Nuevas tendencias económicas en el mercado latinoamericano",
    sumario: "El crecimiento sostenido y la inversión extranjera marcan un nuevo capítulo en la economía de la región.",
    contenido: `América Latina está experimentando un momento económico particularmente dinámico. Tras años de estancamiento y volatilidad, varios países de la región muestran señales alentadoras de crecimiento económico sostenido.

La inversión extranjera directa ha aumentado significativamente, atraída por las reformas estructurales implementadas en varios países y por el creciente mercado de consumidores de clase media. Sectores como la tecnología, las energías renovables y el comercio electrónico están liderando esta nueva ola de desarrollo económico.

Los economistas señalan que esta tendencia representa una oportunidad histórica para la región.`,
    imagen: imagenes.america2,
    categoria: "América Alerta",
    fecha: "18 de febrero de 2025",
    autor: "Sección Economía"
  },
  {
    id: 6,
    titulo: "La opinión pública ante los cambios globales",
    sumario: "Encuestas internacionales revelan cómo los ciudadanos perciben las transformaciones políticas y sociales del mundo actual.",
    contenido: `Un extenso estudio realizado en más de 40 países revela patrones interesantes sobre cómo la opinión pública está respondiendo a los rápidos cambios que experimenta el mundo contemporáneo.

Los resultados muestran una creciente preocupación por temas como el cambio climático, la desigualdad económica y la inestabilidad geopolítica. Sin embargo, también revelan un optimismo cauteloso sobre el futuro, particularmente entre las generaciones más jóvenes.

Estos hallazgos tienen importantes implicaciones para formuladores de políticas y líderes políticos.`,
    imagen: imagenes.opinion2,
    categoria: "Opinión",
    fecha: "17 de febrero de 2025",
    autor: "Análisis Político"
  },
  {
    id: 7,
    titulo: "Contenido viral que marca tendencia en redes",
    sumario: "Los fenómenos virales más impactantes de la semana y su influencia en la cultura digital contemporánea.",
    contenido: `Cada semana, millones de usuarios de redes sociales participan en fenómenos virales que capturan la atención global. Desde desafíos de baile hasta debates sobre temas sociales, estos contenidos virales han devenido en una forma de expresión cultural que trasciende fronteras.

Lo que hace que un contenido se vuelva viral sigue siendo un misterio parcial para los expertos en marketing digital. Sin embargo, ciertos elementos aparecen de forma recurrente: la emoción auténtica, la relevancia cultural y el momento oportuno parecen ser factores clave.

El impacto de estos fenómenos va más allá del entretenimiento.`,
    imagen: imagenes.viral2,
    categoria: "Virales",
    fecha: "16 de febrero de 2025",
    autor: "Tendencias Digitales"
  },
  {
    id: 8,
    titulo: "Análisis: El futuro de las relaciones internacionales",
    sumario: "Expertos internacionales dialogan sobre los escenarios posibles para el orden mundial en las próximas décadas.",
    contenido: `El orden internacional está experimentando transformaciones profundas. La emergencia de nuevas potencias, los desafíos transnacionales como el cambio climático y la reconfiguración de las alianzas tradicionales plantean interrogantes sobre el futuro de las relaciones entre naciones.

Un grupo de reconocidos expertos en relaciones internacionales se reunió recientemente para analizar estos escenarios. Sus conclusiones, aunque diversas, coinciden en que nos encontramos en un punto de inflexión histórica.

Algunos prevén un mundo multipolar, donde varias potencias compartan la influencia global.`,
    imagen: imagenes.mundo2,
    categoria: "Mundo",
    fecha: "15 de febrero de 2025",
    autor: "Análisis Internacional"
  },
  {
    id: 9,
    titulo: "Desarrollo sostenible: proyectos que marcan la diferencia",
    sumario: "Iniciativas innovadoras alrededor del mundo demuestran que es posible conciliar crecimiento económico con protección ambiental.",
    contenido: `En diferentes rincones del planeta, comunidades y empresas están demostrando que el desarrollo económico y la sostenibilidad ambiental no son objetivos mutuamente excluyentes. Proyectos innovadores en energía renovable, agricultura sostenible y economía circular están generando resultados alentadores.

Uno de los casos más destacados es el de una pequeña ciudad en Europa que ha logrado convertirse en carbono negativo, generando más energía limpia de la que consume.

Estos ejemplos ofrecen lecciones valiosas sobre cómo podemos abordar los desafíos ambientales actuales.`,
    imagen: imagenes.mundo3,
    categoria: "Mundo",
    fecha: "14 de febrero de 2025",
    autor: "Sección Medio Ambiente"
  },
  {
    id: 10,
    titulo: "México impulsa reforma energética sin precedentes",
    sumario: "El país latinoamericano anuncia inversiones millonarias en energías renovables con miras a 2030.",
    contenido: `El gobierno mexicano ha anunciado una ambiciosa reforma energética que contempla inversiones por más de 20 mil millones de dólares en proyectos de energía renovable durante la próxima década.

La iniciativa busca que México genere el 50% de su electricidad a partir de fuentes limpias para 2030, incluyendo parques eólicos, plantas solares y proyectos de energía geotérmica.

Esta reforma representa un cambio significativo en la política energética del país y podría posicionarlo como líder regional en la transición hacia energías sustentables.`,
    imagen: imagenes.america3,
    categoria: "América Alerta",
    fecha: "13 de febrero de 2025",
    autor: "Corresponsal México"
  },
  {
    id: 11,
    titulo: "El papel de los medios en la era de la desinformación",
    sumario: "Periodistas y expertos analizan los retos que enfrentan los medios tradicionales en el ecosistema digital actual.",
    contenido: `La proliferación de noticias falsas y la polarización del discurso público han puesto en el centro del debate el rol de los medios de comunicación tradicionales en la sociedad contemporánea.

Periodistas de reconocidos medios internacionales participaron en un foro sobre el futuro del periodismo, donde discutieron estrategias para combatir la desinformación mientras mantienen los estándares de calidad y objetividad.

El consenso general apunta a la necesidad de mayor transparencia en las fuentes y una mayor inversión en verificación de datos.`,
    imagen: imagenes.opinion3,
    categoria: "Opinión",
    fecha: "12 de febrero de 2025",
    autor: "Foro de Periodismo"
  },
  {
    id: 12,
    titulo: "TikTok supera a Google en búsquedas entre jóvenes",
    sumario: "La plataforma de videos cortos se consolida como la principal fuente de información para la Generación Z.",
    contenido: `Un estudio reciente revela que TikTok ha superado a Google como el motor de búsqueda preferido entre los usuarios menores de 25 años, marcando un cambio paradigmático en la forma en que las nuevas generaciones acceden a la información.

Los expertos señalan que el formato de video corto y el algoritmo de recomendación personalizado han creado una nueva forma de consumir contenido informativo, más visual y directa.

Sin embargo, también alertan sobre los riesgos de confiabilidad de la información que circula en la plataforma.`,
    imagen: imagenes.viral3,
    categoria: "Virales",
    fecha: "11 de febrero de 2025",
    autor: "Tecnología Digital"
  },
  {
    id: 13,
    titulo: "Conflicto en Oriente Medio genera preocupación mundial",
    sumario: "La comunidad internacional hace un llamado al diálogo tras los últimos acontecimientos en la región.",
    contenido: `La escalada de tensiones en Oriente Medio ha generado profunda preocupación en la comunidad internacional, con múltiples países haciendo llamados al diálogo y la moderación.

El Consejo de Seguridad de las Naciones Unidas ha convocado a una sesión de emergencia para analizar la situación y explorar vías diplomáticas que permitan una desescalada del conflicto.

Organizaciones humanitarias han alertado sobre el impacto en la población civil y la necesidad de garantizar corredores humanitarios.`,
    imagen: imagenes.mundo4,
    categoria: "Mundo",
    fecha: "10 de febrero de 2025",
    autor: "Corresponsal Internacional"
  },
  {
    id: 14,
    titulo: "Brasil lidera protección de la Amazonia con nuevo decreto",
    sumario: "El gobierno brasileño anuncia medidas drásticas contra la deforestación ilegal en la selva amazónica.",
    contenido: `El presidente de Brasil firmó un decreto que fortalece la protección de la Amazonia, aumentando las multas por deforestación ilegal y ampliando las áreas protegidas en la región.

Las nuevas medidas incluyen el uso de tecnología satelital para monitoreo en tiempo real y la creación de un cuerpo especializado de agentes ambientales.

Organizaciones ambientalistas han celebrado el anuncio, aunque señalan que la implementación efectiva será clave para el éxito de estas políticas.`,
    imagen: imagenes.america4,
    categoria: "América Alerta",
    fecha: "9 de febrero de 2025",
    autor: "Corresponsal Brasil"
  },
  {
    id: 15,
    titulo: "Influencers digitales: ¿nuevos formadores de opinión?",
    sumario: "El creciente poder de los creadores de contenido en la formación de opinión pública genera debate sobre su responsabilidad social.",
    contenido: `El fenómeno de los influencers ha trascendido el ámbito del entretenimiento y la publicidad para convertirse en un factor determinante en la formación de opinión pública, especialmente entre los jóvenes.

Estudios recientes muestran que un alto porcentaje de usuarios de redes sociales confía más en las recomendaciones de influencers que en la información de medios tradicionales.

Este cambio ha generado un intenso debate sobre la responsabilidad social de estos nuevos actores mediáticos y la necesidad de regular la publicidad encubierta.`,
    imagen: imagenes.viral1,
    categoria: "Virales",
    fecha: "8 de febrero de 2025",
    autor: "Análisis Digital"
  }
]

const pestañas = ["Mundo", "América Alerta", "Opinión", "Virales"]

// Tipos de vista
type VistaTipo = 'home' | 'noticia' | 'seccion'

// Componente del Header reutilizable
function Header({ 
  volverHome, 
  irASeccion, 
  irANoticia, 
  pestañaActiva, 
  fechaActual,
  busquedaAbierta,
  setBusquedaAbierta,
  terminoBusqueda,
  setTerminoBusqueda,
  resultadosBusqueda
}: { 
  volverHome: () => void
  irASeccion: (seccion: string) => void
  irANoticia: (id: number) => void
  pestañaActiva: string
  fechaActual: string
  busquedaAbierta: boolean
  setBusquedaAbierta: (valor: boolean) => void
  terminoBusqueda: string
  setTerminoBusqueda: (valor: string) => void
  resultadosBusqueda: typeof todasLasNoticias
}) {
  return (
    <header className="bg-white">
      {/* Barra superior con fecha, logo y redes */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Izquierda: Fecha y Director */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="capitalize hidden md:inline" suppressHydrationWarning>{fechaActual}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden md:inline">Director: <span className="font-medium">[Por definir]</span></span>
              </div>
            </div>

            {/* Centro: Logo y Nombre */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3 cursor-pointer"
              onClick={volverHome}
            >
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-[10px] text-gray-400">LOGO</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1e3a5f]">
                NOMBRE
              </h1>
            </div>

            {/* Derecha: Búsqueda y Redes Sociales */}
            <div className="flex items-center gap-3">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors" 
                title="Buscar"
                onClick={() => setBusquedaAbierta(true)}
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <div className="hidden sm:flex items-center gap-1">
                <a href="#" className="p-2 hover:bg-blue-50 rounded-full transition-colors" title="Facebook">
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="X">
                  <XIcon className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </a>
                <a href="#" className="p-2 hover:bg-red-50 rounded-full transition-colors" title="YouTube">
                  <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600" />
                </a>
                <a href="#" className="p-2 hover:bg-blue-50 rounded-full transition-colors" title="Telegram">
                  <Send className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Búsqueda */}
      {busquedaAbierta && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20" onClick={() => { setBusquedaAbierta(false); setTerminoBusqueda("") }}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center border-b border-gray-200 p-4">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Buscar noticias..."
                className="flex-1 text-lg outline-none"
                autoFocus
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
              />
              <button 
                onClick={() => { setBusquedaAbierta(false); setTerminoBusqueda("") }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {terminoBusqueda.length > 0 ? (
                resultadosBusqueda.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {resultadosBusqueda.map((noticia) => (
                      <div
                        key={noticia.id}
                        className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => {
                          irANoticia(noticia.id)
                          setBusquedaAbierta(false)
                          setTerminoBusqueda("")
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-[#1e3a5f] font-medium">{noticia.categoria}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-400">{noticia.fecha}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900">{noticia.titulo}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{noticia.sumario}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No se encontraron resultados para "{terminoBusqueda}"</p>
                  </div>
                )
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Escribe para buscar noticias</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Franja de ÚLTIMA HORA */}
      <div 
        className="bg-red-600 text-white cursor-pointer hover:bg-red-700 transition-colors"
        onClick={() => irANoticia(noticiaUrgente.enlace)}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
            <span className="font-bold text-sm uppercase tracking-wider">Última Hora:</span>
            <span className="text-sm font-medium truncate">{noticiaUrgente.titulo}</span>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <nav className="bg-white border-b border-gray-200">
        <div className="w-full">
          <div className="flex items-stretch justify-between">
            {pestañas.map((pestaña) => (
              <button
                key={pestaña}
                onClick={() => irASeccion(pestaña)}
                className={`flex-1 py-3 text-sm font-medium transition-colors relative text-center ${
                  pestañaActiva === pestaña
                    ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]'
                    : 'text-gray-600 hover:text-[#1e3a5f] hover:border-b-2 hover:border-gray-300'
                }`}
              >
                {pestaña}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
export default function Home() {
  const [pestañaActiva, setPestañaActiva] = useState("Mundo")
  const [vistaActual, setVistaActual] = useState<VistaTipo>('home')
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<number | null>(null)
  const [seccionSeleccionada, setSeccionSeleccionada] = useState<string>("")
  const [busquedaAbierta, setBusquedaAbierta] = useState(false)
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [mostrarMas, setMostrarMas] = useState(false)

  const fechaActual = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const obtenerNoticia = (id: number) => todasLasNoticias.find(n => n.id === id)
  const obtenerNoticiasPorCategoria = (categoria: string) => todasLasNoticias.filter(n => n.categoria === categoria)

  const resultadosBusqueda = terminoBusqueda.length > 0 
    ? todasLasNoticias.filter(n => 
        n.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        n.sumario.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        n.contenido.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        n.categoria.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    : []

  const irANoticia = (id: number) => {
    setNoticiaSeleccionada(id)
    setVistaActual('noticia')
  }

  const irASeccion = (seccion: string) => {
    setSeccionSeleccionada(seccion)
    setPestañaActiva(seccion)
    setVistaActual('seccion')
  }

  const volverHome = () => {
    setVistaActual('home')
    setNoticiaSeleccionada(null)
    setSeccionSeleccionada("")
    setPestañaActiva("Mundo")
    setMostrarMas(false)
  }

  const noticiaPrincipal = todasLasNoticias[0]
  const noticiasSecundarias = todasLasNoticias.slice(1, 3)
  const noticiasGrid = todasLasNoticias.slice(3, 9)
  const noticiasExtra = todasLasNoticias.slice(9)

  const headerProps = {
    volverHome,
    irASeccion,
    irANoticia,
    pestañaActiva,
    fechaActual,
    busquedaAbierta,
    setBusquedaAbierta,
    terminoBusqueda,
    setTerminoBusqueda,
    resultadosBusqueda
  }

  // VISTA: NOTICIA INDIVIDUAL
  if (vistaActual === 'noticia' && noticiaSeleccionada) {
    const noticia = obtenerNoticia(noticiaSeleccionada)
    if (!noticia) return null

    return (
      <div className="min-h-screen bg-white">
        <Header {...headerProps} />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <button onClick={volverHome} className="flex items-center gap-2 text-[#1e3a5f] hover:underline mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
          <div className="flex items-center gap-4 mb-4">
            <span onClick={() => irASeccion(noticia.categoria)} className="bg-[#1e3a5f] text-white px-3 py-1 text-xs font-bold uppercase rounded cursor-pointer">
              {noticia.categoria}
            </span>
            <span className="text-sm text-gray-500">{noticia.fecha}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{noticia.titulo}</h1>
          <p className="text-sm text-gray-600 mb-6">Por <span className="font-medium">{noticia.autor}</span></p>
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-auto object-cover" />
          </div>
          <div className="prose prose-lg max-w-none">
            {noticia.contenido.split('\n\n').map((parrafo, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">{parrafo}</p>
            ))}
          </div>
        </main>
        <footer className="border-t border-gray-200 py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">LOGO</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">NOMBRE</h2>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Send className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-gray-400 mt-4">© 2025 NOMBRE. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    )
  }

  // VISTA: SECCIÓN
  if (vistaActual === 'seccion') {
    const noticiasSeccion = obtenerNoticiasPorCategoria(seccionSeleccionada)

    return (
      <div className="min-h-screen bg-white">
        <Header {...headerProps} />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <button onClick={volverHome} className="flex items-center gap-2 text-[#1e3a5f] hover:underline mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-8 border-b-2 border-[#1e3a5f] pb-4">{seccionSeleccionada}</h1>
          <div className="space-y-6">
            {noticiasSeccion.length > 0 ? (
              noticiasSeccion.map((noticia) => (
                <article key={noticia.id} className="flex gap-6 cursor-pointer group border-b border-gray-100 pb-6" onClick={() => irANoticia(noticia.id)}>
                  <div className="flex-shrink-0 w-48 md:w-64">
                    <div className="relative overflow-hidden rounded-lg">
                      <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-500">{noticia.fecha}</span>
                      <span className="text-xs text-[#1e3a5f] font-medium">{noticia.autor}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1e3a5f] transition-colors leading-tight mb-2">{noticia.titulo}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{noticia.sumario}</p>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-gray-500 text-center py-12">No hay noticias en esta sección por el momento.</p>
            )}
          </div>
        </main>
        <footer className="border-t border-gray-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">LOGO</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">NOMBRE</h2>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Send className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-gray-400 mt-4">© 2025 NOMBRE. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    )
  }

  // VISTA: HOME
  return (
    <div className="min-h-screen bg-white">
      <Header {...headerProps} />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Noticias principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <article className="group cursor-pointer">
              <div className="mb-3" onClick={() => irANoticia(noticiaPrincipal.id)}>
                <span onClick={(e) => { e.stopPropagation(); irASeccion(noticiaPrincipal.categoria) }} className="inline-block bg-[#1e3a5f] text-white px-3 py-1 text-xs font-bold uppercase rounded mb-2 cursor-pointer">
                  {noticiaPrincipal.categoria}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#1e3a5f] transition-colors leading-tight">
                  {noticiaPrincipal.titulo}
                </h2>
              </div>
              <div className="relative overflow-hidden rounded-lg" onClick={() => irANoticia(noticiaPrincipal.id)}>
                <img src={noticiaPrincipal.imagen} alt={noticiaPrincipal.titulo} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p onClick={() => irANoticia(noticiaPrincipal.id)} className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed cursor-pointer">
                {noticiaPrincipal.sumario}
              </p>
            </article>
          </div>
          <div className="space-y-6">
            {noticiasSecundarias.map((noticia) => (
              <article key={noticia.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg" onClick={() => irANoticia(noticia.id)}>
                  <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 cursor-pointer" onClick={(e) => { e.stopPropagation(); irASeccion(noticia.categoria) }}>
                    <span className="bg-[#1e3a5f] text-white px-2 py-1 text-xs font-bold uppercase rounded hover:bg-[#2a4a73] transition-colors">
                      {noticia.categoria}
                    </span>
                  </div>
                </div>
                <div className="mt-3" onClick={() => irANoticia(noticia.id)}>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1e3a5f] transition-colors leading-tight">
                    {noticia.titulo}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="border-t-2 border-gray-200 mb-8">
          <div className="flex items-center gap-4 -mt-3">
            <span className="bg-white pr-4 text-lg font-bold text-gray-900">Más Noticias</span>
          </div>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {noticiasGrid.map((noticia) => (
            <article key={noticia.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg" onClick={() => irANoticia(noticia.id)}>
                <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3" onClick={(e) => { e.stopPropagation(); irASeccion(noticia.categoria) }}>
                  <span className="bg-[#1e3a5f]/90 text-white px-2 py-1 text-xs font-bold uppercase rounded cursor-pointer hover:bg-[#2a4a73] transition-colors">
                    {noticia.categoria}
                  </span>
                </div>
              </div>
              <div className="mt-3" onClick={() => irANoticia(noticia.id)}>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#1e3a5f] transition-colors leading-tight">
                  {noticia.titulo}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Botón Ver más */}
        {!mostrarMas && (
          <div className="flex justify-center mt-8 mb-8">
            <button 
              onClick={() => setMostrarMas(true)}
              className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a4a73] transition-colors flex items-center gap-2"
            >
              <span>Ver más noticias</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Grid de noticias extra */}
        {mostrarMas && (
          <>
            <div className="border-t-2 border-gray-200 mb-8">
              <div className="flex items-center gap-4 -mt-3">
                <span className="bg-white pr-4 text-lg font-bold text-gray-900">Más Noticias</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasExtra.map((noticia) => (
                <article key={noticia.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg" onClick={() => irANoticia(noticia.id)}>
                    <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3" onClick={(e) => { e.stopPropagation(); irASeccion(noticia.categoria) }}>
                      <span className="bg-[#1e3a5f]/90 text-white px-2 py-1 text-xs font-bold uppercase rounded cursor-pointer hover:bg-[#2a4a73] transition-colors">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3" onClick={() => irANoticia(noticia.id)}>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#1e3a5f] transition-colors leading-tight">
                      {noticia.titulo}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => setMostrarMas(false)}
                className="text-[#1e3a5f] hover:underline font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span>Ver menos</span>
              </button>
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-200 pt-8 pb-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                <span className="text-xs text-gray-400">LOGO</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">NOMBRE</h2>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Send className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-gray-400 mt-4">© 2025 NOMBRE. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}