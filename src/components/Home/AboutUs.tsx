import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <section className="w-full px-4 lg:px-10 " id="about-us ">
      <div className="mt-12 poster md:py-16 md:rounded-3xl md:bg-quinary text-septenary md:text-white flex flex-col-reverse md:flex-row items-center justify-between gap-6 xl:gap-24 lg:pr-24">
        <div className="flex flex-col justify-center md:max-w-[300px] lg:max-w-[380px] xl:max-w-[600px] font-semibold">
          <h2 className="text-5xl lg:text-6xl mb-3">Sobre nosotros</h2>
          <p className="text-lg lg:text-xl">
            ECOUT surge de un proyecto del Grupo de Estudios sobre Desarrollo
            Local y Gestión Territorial de la Institución Universitaria Colegio
            Mayor de Antioquia, enfocado en los conflictos urbanos generados por
            las intervenciones y decisiones sobre el ordenamiento territorial de
            Medellín, Colombia. Iniciado en 2018, la investigación caracterizó,
            mediante el análisis de prensa, las tensiones asociadas al
            ordenamiento territorial en Medellín entre 1999 y 2014, resultando
            en un sistema de información que organiza dicha conflictividad.
          </p>
        </div>
        <div className="w-full md:max-w-[317px] lg:max-w-[634px] flex flex-col items-center text-lg lg:text-xl font-semibold ">
          <img
            src="video.avif"
            alt="video"
            className="object-cover cursor-pointer h-[250px] md:h-auto w-full"
            onClick={() => navigate("?watchVideo=true")}
          />
          <p className="text-lg">Dar clic para ver el video</p>
        </div>
      </div>
    </section>
  );
}
