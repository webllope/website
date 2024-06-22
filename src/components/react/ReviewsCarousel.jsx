import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GoogleIcon from "@/assets/icons/google.png";

import danielximenez from "@assets/reviewsImages/danielximenez.png";
import noelia from "@assets/reviewsImages/noelia.png";
import mariajesus from "@assets/reviewsImages/mariajesus.png";
import javierramos from "@assets/reviewsImages/javierramos.png";
import gonzalodiaz from "@assets/reviewsImages/gonzalodiaz.png";
import tonigarcia from "@assets/reviewsImages/tonigarcia.png";
import miguelgimeno from "@assets/reviewsImages/miguelgimeno.png";
import davidsantos from "@assets/reviewsImages/davidsantos.png";

function truncate(str) {
  return str.substring(0, 100) + "...";
}

const reviews = [
  {
    url: "https://maps.app.goo.gl/JttKwsbioT4yF2sx7",
    pfp: danielximenez.src,
    name: "Daniel Ximénez S.",
    opinion:
      "Gracias por la página web chicos sois los mejores. Un trato espectacular y siempre atentos a que nos gustase la página y hasta que no estaba todo perfecto no la dieron por terminada",
  },
  {
    url: "https://maps.app.goo.gl/yh5KWrS8Fi2BN5BcA",
    pfp: noelia.src,
    name: "Noelia",
    opinion:
      "Aproveché una promoción que incluía página web y optimización SEO juntos, y además de hacerme una página web bonita, me sale la primera-segunda en varios resultados en Google. Daniel fue muy agradable y atento conmigo, lo recomiendo, volvería a contratarle",
  },
  {
    url: "https://maps.app.goo.gl/z6LTuyP6LVeVZq8t8",
    pfp: mariajesus.src,
    name: "Maria Jesús MR",
    opinion:
      "Estuve buscando agencias de diseño web en Murcia para que me ayudasen con un problemita que tenía en mi página web ya que no posicionaba muy bien, y algo hicieron con el SEO que ahora la página vuelve a tener el tráfico mensual que solía tener incluso lo ha mejorado, han vuelto a contactar clientes nuevos desde la página web. Muchas gracias a Daniel que fue muy amable conmigo",
  },
  {
    url: "https://maps.app.goo.gl/J9R5QhviEuhjJoZ18",
    pfp: javierramos.src,
    name: "F Javier Ramos",
    opinion:
      "Conozco a Dani, diseñador web en Webllope, hemos colaborado juntos en algunos proyectos y sé que es un muy buen profesional. Se centra en satisfacer las necesidades de sus clientes y no solo crea páginas web excelentes si no que son eficaces y consiguen nuevos clientes. Lo recomiendo y animo a que contactéis con él para futuros proyectos.",
  },
  {
    url: "https://maps.app.goo.gl/Ddf2VDCXPQDAF54E9",
    pfp: gonzalodiaz.src,
    name: "Gonzalo Díaz Cañavate",
    opinion:
      "Hacen un servicio excelente, la pagina web de mi negocio quedo genial y solo me costo 150€.",
  },
  {
    url: "https://maps.app.goo.gl/HjiUud9rzNB3FZZw7",
    pfp: tonigarcia.src,
    name: "Toni García San F",
    opinion:
      "Me hicieron el diseño web de mi salón y sale nuestra página de las primeras cuando la buscas en google",
  },
  {
    url: "https://maps.app.goo.gl/3bN76zUyzXcz7aDK9",
    pfp: miguelgimeno.src,
    name: "miguel gimeno garcia",
    opinion:
      "Los recomiendo totalmente , cercanos super profesionales , facilitan muchisimo todo y aportan ideas novedosas aparte de su constancia y profesionalidad !!",
  },
  {
    url: "https://maps.app.goo.gl/kydc5fYFArbRTfSw6",
    pfp: davidsantos.src,
    name: "David Santos Lopez",
    opinion:
      "El mejor diseño web de Murcia, segunda vez que contrato sus servicios de página web y SEO 🎉",
  },
];

const ReviewsCarousel = () => {
  return (
    <Carousel className="mt-10 lg:mt-0 lg:ml-40 w-full">
      <CarouselContent className="-ml-1">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="pl-1 lg:basis-3/12">
            <a
              href={review.url}
              key={index}
              target="_blank"
              rel="noopener"
              className="p-2 bg-white relative flex flex-col gap-4 h-[200px] w-[300px] mx-auto rounded">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px]">
                  <img
                    alt="Google Profile Image"
                    className="rounded-full"
                    loading="lazy"
                    width="50"
                    height="50"
                    src={review.pfp}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="mt-1 font-semibold text-sm">
                    {review.name}
                  </span>
                  <span className="mt-1 text-xs text-gray-500">
                    Hace una semana
                  </span>
                </div>
              </div>
              <FiveStars />
              <p className="text-sm">{truncate(review.opinion)}</p>
              <img
                alt="Icono de Google"
                className="absolute top-1 right-2 w-auto h-4"
                src={GoogleIcon.src}
              />
            </a>
          </CarouselItem>
        ))}
        <CarouselItem className="pl-1 lg:basis-3/12">
          <a className="p-2 bg-neutral-950 relative flex flex-col gap-4 w-[50px] mx-auto"></a>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const FiveStars = () => (
  <div className="flex">
    <span className="text-2xl text-amber-500">&#9733;</span>
    <span className="text-2xl text-amber-500">&#9733;</span>
    <span className="text-2xl text-amber-500">&#9733;</span>
    <span className="text-2xl text-amber-500">&#9733;</span>
    <span className="text-2xl text-amber-500">&#9733;</span>
  </div>
);

export default ReviewsCarousel;
