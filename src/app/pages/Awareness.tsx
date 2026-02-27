import { Header } from '../components/Header';
import { Leaf, Recycle, ShieldAlert, Book, AlertTriangle, CheckCircle2, XCircle, Scale, FileText } from 'lucide-react';
import { motion } from 'motion/react';

// Using placeholder logo data URLs that work on any hosting platform
const cityOfSydneyLogo = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Crect fill="%230066cc" width="200" height="80"/%3E%3Ctext x="100" y="45" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" font-weight="bold"%3ECity of Sydney%3C/text%3E%3C/svg%3E';
const nswEpaLogo = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Crect fill="%2300a651" width="200" height="80"/%3E%3Ctext x="100" y="45" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" font-weight="bold"%3ENSW EPA%3C/text%3E%3C/svg%3E';
const recyclingNearYouLogo = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"%3E%3Crect fill="%2328a745" width="200" height="80"/%3E%3Ctext x="100" y="40" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" font-weight="bold"%3ERecycling%3C/text%3E%3Ctext x="100" y="58" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" font-weight="bold"%3ENear You%3C/text%3E%3C/svg%3E';

export const Awareness = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header variant="authenticated" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Book className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Waste Management Awareness
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about proper waste disposal, recycling guidelines, and environmental laws in Sydney
          </p>
        </motion.div>

        {/* Proper Waste Disposal Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Recycle className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Proper Waste Disposal</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                DO's
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <span className="text-gray-700">Separate recyclables (paper, cardboard, glass, plastic bottles) into yellow bins</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <span className="text-gray-700">Rinse containers before recycling to prevent contamination</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <span className="text-gray-700">Use green bins for food and garden organic waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <span className="text-gray-700">Dispose of e-waste at designated collection points</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <span className="text-gray-700">Take hazardous waste to Community Recycling Centres</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                  <span className="text-gray-700">Break down cardboard boxes to save space</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                DON'Ts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                  <span className="text-gray-700">Don't put plastic bags in recycling bins (they jam machinery)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                  <span className="text-gray-700">Don't mix different types of waste in the same bin</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                  <span className="text-gray-700">Don't dump waste in public spaces or on private property</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                  <span className="text-gray-700">Don't put batteries in regular bins (fire hazard)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                  <span className="text-gray-700">Don't leave furniture on the street without booking a council pickup</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                  <span className="text-gray-700">Don't put medical waste in household bins</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Bin Types Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Sydney's Bin System</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Red Lid - General Waste</h3>
              <p className="text-sm text-gray-600 mb-3">Non-recyclable items that can't be composted</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Soft plastics & packaging</li>
                <li>• Polystyrene</li>
                <li>• Broken glass & ceramics</li>
                <li>• Disposable nappies</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Yellow Lid - Recycling</h3>
              <p className="text-sm text-gray-600 mb-3">Clean and dry recyclable materials</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Paper & cardboard</li>
                <li>• Glass bottles & jars</li>
                <li>• Plastic bottles & containers</li>
                <li>• Metal cans & tins</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Green Lid - Organics</h3>
              <p className="text-sm text-gray-600 mb-3">Food scraps and garden waste</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Fruit & vegetable scraps</li>
                <li>• Garden clippings & leaves</li>
                <li>• Coffee grounds & tea bags</li>
                <li>• Small amounts of paper towel</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* NSW Environmental Laws Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">NSW Environmental Laws & Penalties</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Illegal Dumping</h3>
              <p className="text-gray-700 mb-2">
                Under the <strong>Protection of the Environment Operations Act 1997</strong>, illegal dumping is a serious offense.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900 font-semibold mb-1">Penalties:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Individuals: Up to <strong>$1 million</strong> fine and/or 7 years imprisonment</li>
                  <li>• Corporations: Up to <strong>$5 million</strong> fine</li>
                  <li>• On-the-spot fines: <strong>$4,000</strong> for smaller offences</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Littering</h3>
              <p className="text-gray-700 mb-2">
                Littering in NSW is covered by the <strong>Protection of the Environment Operations Act 1997</strong>.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900 font-semibold mb-1">Penalties:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• On-the-spot fine: <strong>$500</strong> for individuals</li>
                  <li>• Court-imposed fine: Up to <strong>$2,000</strong></li>
                  <li>• Littering from vehicle: Owner liable even if not the driver</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cigarette Butt Disposal</h3>
              <p className="text-gray-700 mb-2">
                Discarding cigarette butts is considered littering and is strictly prohibited.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900 font-semibold mb-1">Penalties:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• On-the-spot fine: <strong>$500</strong></li>
                  <li>• Fire hazard violations: Additional penalties apply</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Waste Management License Violations</h3>
              <p className="text-gray-700 mb-2">
                Commercial waste transporters must hold appropriate licenses under the POEO Act.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900 font-semibold mb-1">Penalties:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Operating without license: Up to <strong>$250,000</strong> for individuals</li>
                  <li>• Corporations: Up to <strong>$1 million</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reporting Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Report Environmental Violations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Report:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700">Illegal dumping of waste or hazardous materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700">Abandoned vehicles or furniture on public land</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700">Overflowing public bins or large litter accumulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <span className="text-gray-700">Construction debris left on streets</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information:</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">EPA Environment Line</p>
                  <p className="text-lg font-semibold text-green-600">131 555</p>
                  <p className="text-xs text-gray-500">24/7 pollution incident reporting</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">City of Sydney Council</p>
                  <p className="text-lg font-semibold text-green-600">02 9265 9333</p>
                  <p className="text-xs text-gray-500">General waste and recycling inquiries</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Online Reporting</p>
                  <p className="text-sm text-green-600 font-medium">Use this app's Report Rubbish feature!</p>
                  <p className="text-xs text-gray-500">Fast, easy, and trackable</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Additional Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Additional Resources & Partners</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://www.epa.nsw.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all"
            >
              <div className="h-24 mb-4 flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4">
                <img
                  src={nswEpaLogo}
                  alt="NSW EPA"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors text-lg">NSW Environment Protection Authority</h3>
              <p className="text-sm text-gray-600 mb-3">Official government environmental agency</p>
              <p className="text-xs text-gray-500">Access environmental guidelines, regulations, and pollution reporting services</p>
            </a>
            
            <a
              href="https://www.cityofsydney.nsw.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all"
            >
              <div className="h-24 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-4">
                <img
                  src={cityOfSydneyLogo}
                  alt="City of Sydney"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors text-lg">City of Sydney Council</h3>
              <p className="text-sm text-gray-600 mb-3">Local government services</p>
              <p className="text-xs text-gray-500">Council services, waste collection schedules, cleanup programs, and community initiatives</p>
            </a>
            
            <a
              href="https://www.recyclingnearyou.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all"
            >
              <div className="h-24 mb-4 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                <img
                  src={recyclingNearYouLogo}
                  alt="Recycling Near You"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors text-lg">Recycling Near You</h3>
              <p className="text-sm text-gray-600 mb-3">National recycling directory</p>
              <p className="text-xs text-gray-500">Find recycling locations, learn what can be recycled, and access recycling guides</p>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};