import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const ProfileGalleryApp = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%234a5568" width="400" height="400"/%3E%3Ctext fill="%23cbd5e0" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EGallery 1%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%234a5568" width="400" height="400"/%3E%3Ctext fill="%23cbd5e0" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EGallery 2%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%234a5568" width="400" height="400"/%3E%3Ctext fill="%23cbd5e0" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EGallery 3%3C/text%3E%3C/svg%3E'
  ]);

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="flex min-h-screen">
        <div className="hidden md:block md:w-1/2"></div>

        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col gap-6 justify-center">
          <div className="bg-gray-800/90 backdrop-blur rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              <button className="w-9 h-9 rounded-full bg-gray-700/80 flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors mb-6">
                <span className="text-xl font-semibold">?</span>
              </button>

              <div className="flex gap-2 bg-black/60 rounded-2xl p-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gray-700 text-white shadow-lg scale-105'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="text-gray-300 space-y-5 max-h-56 overflow-y-auto pr-3 text-base leading-relaxed">
                {activeTab === 'About Me' && (
                  <>
                    <p>
                      Hello! I'm Dave, your sales rep here from Salesforce. I've been
                      working at this awesome company for 3 years now.
                    </p>
                    <p>
                      I was born and raised in Albany, NY & have been living in Santa
                      Carla for the past 10 years my wife Tiffany and my 4 year old twin
                      daughters- Emma and Ella. Both of them are just starting school,
                      so my calender is usually blocked between 9-10 AM. This is a...
                    </p>
                  </>
                )}
                {activeTab === 'Experiences' && (
                  <p>
                    Experience content goes here. This section would typically contain
                    work history, achievements, and professional milestones.
                  </p>
                )}
                {activeTab === 'Recommended' && (
                  <p>
                    Recommended content goes here. This could include testimonials,
                    endorsements, or suggested connections.
                  </p>
                )}
              </div>
            </div>

            <div className="px-6 md:px-8 pb-8">
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-8">
            <button className="w-9 h-9 rounded-full bg-gray-700/80 flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors mb-6">
              <span className="text-xl font-semibold">?</span>
            </button>

            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="bg-black/60 rounded-2xl px-10 py-3.5">
                <h2 className="text-white font-bold text-xl tracking-wide">Gallery</h2>
              </div>

              <div className="flex items-center gap-3">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="bg-gray-700/80 hover:bg-gray-600 rounded-full px-7 py-3 flex items-center gap-2.5 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105">
                    <Plus size={22} />
                    <span className="text-sm uppercase tracking-wider">Add Image</span>
                  </div>
                </label>

                <button className="w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-105">
                  <ChevronLeft size={22} />
                </button>

                <button className="w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-105">
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group"
                  style={{
                    transition: 'all 0.5s ease-out',
                    transform: 'scale(1)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.6)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.5s ease-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGalleryApp;