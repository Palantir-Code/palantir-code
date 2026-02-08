import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  jsonLd?: object;
}

const SITE_NAME = "PALANTIR-CODE";
const DEFAULT_TITLE = "PALANTIR-CODE | Spain's First Certified Plane Partner";
const DEFAULT_DESCRIPTION = "PALANTIR-CODE is Spain's first certified Plane partner. Expert implementation, migration, and custom solutions for Plane's unified workspace.";
const DEFAULT_IMAGE = "https://www.palantircode.com/og-image.png";
const SITE_URL = "https://www.palantircode.com";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
