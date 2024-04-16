import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={`main-container ${styles["home-container"]}`}>
      <section>
        <h1>We offer camper service for your next adventure</h1>
        <p>
          We specialize in providing camper vans and caravans for rent for
          people who want to explore the great outdoors. Our fleet of vehicles
          is clean, well-maintained and equipped with everything you need for
          your next adventure.
        </p>
        <p>
          In addition to our fleet of vehicles, we also offer a wide range of
          camping equipment such as tents, sleeping bags, stoves and cooking
          gear to make your next adventure even more enjoyable. We also offer
          guided camping trips and holidays, so you can let us handle all the
          planning and arrangements, leaving you to just enjoy the great
          outdoors.
        </p>
        <p>
          Our team is fully qualified and experienced, with a passion for
          providing excellent service to our customers. We pride ourselves on
          being flexible and able to cater to all of your needs, whether you are
          a seasoned camper or just looking for a fun and affordable way to
          explore the great outdoors.
        </p>
        <p>
          Contact us today to discuss all of your options and to get the perfect
          campervan or equipment for your next adventure.
        </p>
      </section>
    </main>
  );
}
