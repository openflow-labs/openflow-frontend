import Head from "next/head";

interface MetadataProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  keywords,
  author,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {/* Agrega más etiquetas meta según sea necesario */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/path-to-your-image.jpg" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Metadata;
