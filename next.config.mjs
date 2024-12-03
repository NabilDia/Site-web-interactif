const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Désactiver ESLint durant le build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Autorise les images de via.placeholder.com
      },
      // Vous pouvez ajouter d'autres domaines si nécessaire :
      // {
      //   protocol: 'https',
      //   hostname: 'autre-domaine.com',
      // },
    ],
  },
};

export default nextConfig;

  