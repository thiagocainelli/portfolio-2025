import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Thiago Cainelli | Fullstack Developer",
  description = "Portfolio of a Fullstack Developer specializing in TypeScript, Node.js, React.js, and modern web technologies. View my projects, skills, and experience.",
  keywords = "Fullstack Developer, TypeScript, Node.js, React.js, Web Development, Portfolio, Software Engineer, Frontend, Backend",
  author = "Thiago Cainelli",
  image = "/images/thiagocainelli.jpeg",
  url = "https://thiagocainelli.dev",
  type = "website",
  twitterCard = "summary_large_image",
  canonical,
}) => {
  const fullTitle =
    title === "Thiago Cainelli | Fullstack Developer"
      ? title
      : `${title} | Thiago Cainelli`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith("http") ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="available-languages" content="en,pt,es" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Thiago Cainelli Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="pt_BR" />
      <meta property="og:locale:alternate" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@thiagocainelli" />
      <meta name="twitter:creator" content="@thiagocainelli" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Thiago Cainelli" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Thiago Cainelli",
          jobTitle: "Fullstack Developer",
          description: description,
          url: fullUrl,
          image: fullImage,
          sameAs: [
            "https://github.com/thiagocainelli",
            "https://linkedin.com/in/thiagocainelli",
            "https://twitter.com/thiagocainelli",
          ],
          knowsAbout: [
            "TypeScript",
            "Node.js",
            "React.js",
            "Web Development",
            "Software Engineering",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "Brazil",
          },
        })}
      </script>

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/images/thiagocainelli.jpeg" />
    </Helmet>
  );
};

export default SEO;
