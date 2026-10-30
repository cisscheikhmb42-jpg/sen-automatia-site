import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Mentions légales",
  "Mentions légales et politique de confidentialité du site Sen AutomatIA.",
  "/mentions-legales",
);

export default function MentionsLegales() {
  const { legal } = site;
  return (
    <Section blanc>
      <article className="mx-auto max-w-3xl space-y-10 text-encre/85 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-encre [&_p]:mt-3 [&_p]:leading-relaxed">
        <header>
          <h1 className="text-4xl font-bold text-encre">Mentions légales</h1>
          <p className="text-encre/60">Dernière mise à jour : {new Date().getFullYear()}</p>
        </header>

        <section>
          <h2>Éditeur du site</h2>
          <p>
            <strong>{legal.raisonSociale}</strong>
            <br />
            Forme juridique : {legal.formeJuridique}
            <br />
            NINEA : {legal.ninea}
            <br />
            RCCM : {legal.rccm}
            <br />
            Adresse : {legal.adresse}
            <br />
            Téléphone / WhatsApp : {site.whatsapp.affichage}
            <br />
            E-mail : {site.email}
            <br />
            Directeur de la publication : {legal.directeurPublication}
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>{legal.hebergeur}</p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, logos, visuels, mise en page) est la
            propriété de {site.nom}, sauf mention contraire. Toute reproduction sans autorisation
            écrite préalable est interdite.
          </p>
        </section>

        <section>
          <h2>Données personnelles</h2>
          <p>
            Les informations envoyées via le formulaire d&apos;audit (nom, entreprise, numéro
            WhatsApp, type d&apos;activité, intérêt et besoin) sont utilisées uniquement pour vous
            recontacter et préparer votre audit. Elles ne sont ni vendues ni cédées à des tiers, et
            sont stockées de façon sécurisée chez notre prestataire Supabase.
          </p>
          <p>
            Conformément à la loi sénégalaise n° 2008-12 du 25 janvier 2008 sur la protection des
            données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;opposition et de suppression de vos données. Pour l&apos;exercer,
            écrivez à {site.email}. Vous pouvez également saisir la Commission de Protection des
            Données Personnelles (CDP).
          </p>
        </section>

        <section>
          <h2>Cookies et mesure d&apos;audience</h2>
          <p>
            Ce site peut utiliser Google Analytics et le pixel Meta afin de mesurer sa fréquentation
            et l&apos;efficacité de nos publicités. Ces outils peuvent déposer des cookies sur votre
            appareil. Vous pouvez les refuser ou les supprimer à tout moment depuis les réglages de
            votre navigateur.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            {site.nom} s&apos;efforce de fournir des informations exactes et à jour. Les tarifs
            affichés sont indicatifs et peuvent être ajustés sur devis. {site.nom} ne saurait être
            tenue responsable des contenus des sites externes vers lesquels ce site renvoie.
          </p>
        </section>
      </article>
    </Section>
  );
}
