// src/components/AboutUs.jsx
import aboutData from '/src/assets/AboutUsData.json';

function AboutUs() {
  const [mainCard, ...otherCards] = aboutData;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          About Our Restaurant
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main / Featured Card */}
          <div className="lg:col-span-2 bg-white shadow rounded-lg overflow-hidden">
            <img
              src={mainCard.image}
              alt={mainCard.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                {mainCard.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-yellow-400 text-white px-2 py-1 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{mainCard.title}</h3>
              <p className="text-gray-600 text-sm">{mainCard.description}</p>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-6">
            {otherCards.map((card) => (
              <div key={card.id} className="flex gap-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex gap-2 mb-1">
                    {card.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-400 text-white px-2 py-0.5 rounded-full uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{card.title}</h4>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
