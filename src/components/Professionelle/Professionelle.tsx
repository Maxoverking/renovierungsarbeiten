import css from "./Professionelle.module.css";
import gips from "/Trockenbau.png";
import malerarbeiten from "/Malerarbeiten.png";
import abrissarbeiten from "/Abrissarbeiten.png";
import fliesenverlegung from "/Fliesenverlegung.png";
import { FaCheck } from "react-icons/fa6";
import Statistics from "../Statistics/Statistics";
import { GoDotFill } from "react-icons/go";
import Feedback from "../Feedback/Feedback";

export default function Professionelle() {
  return (
    <div className={css.gradient}>
      <div className={css.container} id="uberUns">
        <h2 className={css.title}> PROFESSIONELLE ALTBAUSANIERUNG</h2>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Für Sie realisieren wir Wohnungen
          und Altbauten mit hoher Qualität und Zuverlässigkeit
        </p>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Sanierungen von Altbauwohnungen in
          Berlin{" "}
        </p>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Alle Leistungen aus einer Hand
        </p>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Professionelle Ausführung der
          Handwerksgewerke von erfahrenen und festangestellten Mitarbeitern
        </p>

        <Statistics />
        <Feedback />

        <div className={css.Leistungen} id="leistungen">
          <h2 className={css.title}> UNSERE LEISTUNGEN</h2>

          <div className={css.leistungenContainer}>
            <div className={css.leistungenLeft}>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Trockenbau
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Malerarbeiten
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Abrissarbeiten
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Maurer / Putzarbeiten
              </p>
            </div>

            <div className={css.leistungenRight}>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Fliesenverlegung
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Altbausanierung
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Fußboden-Sanierung
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Bodenlegearbeiten
              </p>
            </div>
          </div>

          <div className={css.gipsCard}>
            <div className={css.gipsTop}>
              <p className={css.gipsTitle}>
                <img className={css.gipsImg} src={gips} alt="Trockenbau" />
                Trockenbau
              </p>
            </div>
            <p className={css.gipsText}>
              Trockenbau eignet sich ideal für den Ausbau von Wohn- und
              Gewerberäumen, da er flexibel, kostengünstig und zeitsparend ist.
              Von der Errichtung von Trennwänden über die Deckenverkleidung bis
              hin zur Gestaltung von Oberflächen ermöglicht der Trockenbau
              vielfältige architektonische Lösungen
            </p>
          </div>

          <div className={css.malerarbeitenCard}>
            <div className={css.malerarbeitenTop}>
              <p className={css.malerarbeitenTitle}>
                <img
                  className={css.malerarbeitenImg}
                  src={malerarbeiten}
                  alt="Malerarbeiten"
                />
                Malerarbeiten
              </p>
            </div>
            <p className={css.malerarbeitenText}>
              "Malerarbeiten" umfassen eine breite Palette von Dienstleistungen
              im Bereich der Malerei und Dekoration. Dazu gehören das Streichen
              von Innen- und Außenwänden, das Lackieren von Türen und Fenstern,
              Tapezierarbeiten sowie das Anbringen von dekorativen
              Wandbeschichtungen. Malerarbeiten verleihen Räumen nicht nur ein
              ästhetisches Erscheinungsbild, sondern dienen auch dem Schutz von
              Oberflächen vor Witterungseinflüssen. Professionelle Maler bieten
              kreative Lösungen und hochwertige Arbeit, um den individuellen
              Anforderungen und Vorlieben ihrer Kunden gerecht zu werden.
            </p>
          </div>

          <div className={css.abrissarbeitenCard}>
            <div className={css.abrissarbeitenTop}>
              <p className={css.abrissarbeitenTitle}>
                <img
                  className={css.abrissarbeitenImg}
                  src={abrissarbeiten}
                  alt="Abrissarbeiten"
                />
                Abrissarbeiten
              </p>
            </div>
            <p className={css.abrissarbeitenText}>
              "Abrissarbeiten" beziehen sich auf den Prozess des Abbruchs oder
              der Demontage von Gebäuden, Strukturen oder anderen Bauwerken.
              Diese Arbeiten umfassen das Entfernen von Wänden, Decken, Böden
              und anderen Bauteilen, um Platz für Neubauten oder andere
              Entwicklungen zu schaffen.
            </p>
          </div>

          <div className={css.fliesenverlegungCard}>
            <div className={css.fliesenverlegungTop}>
              <p className={css.fliesenverlegungTitle}>
                <img
                  className={css.fliesenverlegungImg}
                  src={fliesenverlegung}
                  alt="Fliesenverlegung"
                />
                Fliesenverlegung
              </p>
            </div>
            <p className={css.fliesenverlegungText}>
              "Fliesenverlegung" bezieht sich auf das professionelle Verlegen
              von Fliesen auf Böden, Wänden oder anderen Oberflächen. Dieser
              Prozess erfordert präzise Fähigkeiten, um die Fliesen gleichmäßig
              und ästhetisch ansprechend zu platzieren. Fliesenverlegung kann in
              verschiedenen Räumen wie Badezimmern, Küchen, Fluren und anderen
              Wohn- oder Gewerbebereichen durchgeführt werden. Sie umfasst
              typischerweise die Vorbereitung der Untergrundoberfläche, das
              Auftragen von Fliesenkleber, das Platzieren der Fliesen in einem
              bestimmten Muster oder Design und das abschließende Verfugen der
              Fugen zwischen den Fliesen. Qualifizierte Fliesenleger sorgen
              dafür, dass die Fliesen sowohl funktional als auch ästhetisch den
              Anforderungen entsprechen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
