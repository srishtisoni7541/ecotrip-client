const OurPartnersSection = () => {
  const partners = [
    {
      name: "National Geographic",
      logo: "https://images.seeklogo.com/logo-png/30/1/goibibo-logo-png_seeklogo-305530.png",
    },
    {
      name: "Discovery",
      logo: "https://images.seeklogo.com/logo-png/41/1/tripadvisor-logo-png_seeklogo-411937.png",
    },
    {
      name: "BBC Wildlife",
      logo: "https://images.seeklogo.com/logo-png/35/1/easemytrip-com-logo-png_seeklogo-351185.png",
    },
    {
      name: "WWF",
      logo: "https://images.seeklogo.com/logo-png/33/1/makemytrip-logo-png_seeklogo-336111.png",
    },
  ];

  // Duplicate list for infinite loop effect
  const duplicated = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Our Partners</h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll whitespace-nowrap">
            {duplicated.map((partner, index) => (
              <div
                key={index}
                className="min-w-[150px] h-20 flex items-center justify-center bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
