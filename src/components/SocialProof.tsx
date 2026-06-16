export default function SocialProof() {
  const logos = [
    { name: "Acme Corp", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", width: 100 },
    { name: "GlobalTech", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", width: 90 },
    { name: "Nexus AI", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", width: 90 },
    { name: "Starlight", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_without_text.svg", width: 40 },
    { name: "Vanguard", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg", width: 100 },
  ];

  return (
    <section className="py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
          Trusted by innovative marketing teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.url} 
              alt={logo.name} 
              width={logo.width} 
              className="object-contain max-h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
