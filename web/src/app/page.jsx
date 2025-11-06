import {
  ArrowRight,
  BarChart3,
  Database,
  TrendingUp,
  CheckCircle,
  Mail,
  Phone,
  ClipboardList,
  PieChart,
  Filter,
} from "lucide-react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Tableau Dashboard Loading Script - using the exact working method
    const loadTableauDashboard = () => {
      const divElement = document.getElementById("viz1753618374084");
      if (divElement && !divElement.hasAttribute("data-tableau-loaded")) {
        const vizElement = divElement.getElementsByTagName("object")[0];
        if (vizElement) {
          // Set dimensions based on container width
          if (divElement.offsetWidth > 800) {
            vizElement.style.width = "100%";
            vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
          } else if (divElement.offsetWidth > 500) {
            vizElement.style.width = "100%";
            vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
          } else {
            vizElement.style.width = "100%";
            vizElement.style.height = "1977px";
          }

          // Create and insert script element
          const scriptElement = document.createElement("script");
          scriptElement.src =
            "https://public.tableau.com/javascripts/api/viz_v1.js";
          vizElement.parentNode.insertBefore(scriptElement, vizElement);

          // Mark as loaded to prevent multiple initializations
          divElement.setAttribute("data-tableau-loaded", "true");
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(loadTableauDashboard, 500);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="https://ucarecdn.com/293c0052-54db-41f1-baaa-c6e9584db862/-/format/auto/"
                alt="Cho&Co Logo"
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                About
              </a>
              <a
                href="#showcase"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Showcase
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Raw Data Into
              <span className="text-teal-600"> Smart Decisions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              We help businesses clean, analyze, and visualize their data. We
              turn raw data into insights you can act on.
            </p>
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-orange-800">
                <strong>Messy data = Missed opportunities.</strong>
              </p>
              <p className="text-orange-700">
                If your data isn't clean or structured, you're likely missing
                key trends, patterns, and cost-saving insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center">
                Unlock Your Data's Value <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive data solutions to help your business make informed
              decisions and unlock hidden value in your data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Filter className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Data Cleaning
              </h3>
              <p className="text-gray-600 mb-6">
                Transform messy, inconsistent data into clean, structured
                information that's ready for analysis and decision-making.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Remove duplicates & inconsistencies
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Standardize formats & structures
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Validate & verify data accuracy
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Analytics Dashboards
              </h3>
              <p className="text-gray-600 mb-6">
                Interactive, real-time dashboards that make complex data easy to
                understand and act upon for your entire team.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time data visualization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Custom KPI tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Interactive filtering & drill-down
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ClipboardList className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ad-Hoc Reporting
              </h3>
              <p className="text-gray-600 mb-6">
                Custom reports tailored to your specific business questions and
                decision-making needs, delivered when you need them.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Custom analysis & insights
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Rapid turnaround times
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Actionable recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Cho&Co?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We unlock your data's value accurately, efficiently, and
                affordably. Our customizable solutions work with any business,
                helping you discover the insights that drive real results.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="font-semibold text-gray-900">Efficient</div>
                  <div className="text-sm text-gray-600">Fast turnaround</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="font-semibold text-gray-900">Accurate</div>
                  <div className="text-sm text-gray-600">Reliable insights</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="font-semibold text-gray-900">Flexible</div>
                  <div className="text-sm text-gray-600">Works with anyone</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <PieChart className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="font-semibold text-gray-900">
                    Customizable
                  </div>
                  <div className="text-sm text-gray-600">
                    Tailored solutions
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Data Assessment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We analyze your current data structure and identify
                      opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Cleaning & Processing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Transform messy data into clean, structured information
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Analysis & Visualization
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Create insights through advanced analytics and clear
                      visualizations
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Actionable Results
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Deliver insights you can act on to drive business
                      decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our interactive King County House Sales dashboard - a real
              example of how we transform raw data into actionable insights.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Sample Dashboard
              </h3>

              {/* Tableau Dashboard Embed - Using exact working structure */}
              <div className="w-full">
                <div
                  className="tableauPlaceholder"
                  id="viz1753618374084"
                  style={{ position: "relative" }}
                >
                  <noscript>
                    <a href="#">
                      <img
                        alt="King County House Sales "
                        src="https://public.tableau.com/static/images/Ki/KingCountyHouseSalesProject_17065373870200/KingCountyHouseSales/1_rss.png"
                        style={{ border: "none" }}
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz" style={{ display: "none" }}>
                    <param
                      name="host_url"
                      value="https%3A%2F%2Fpublic.tableau.com%2F"
                    />
                    <param name="embed_code_version" value="3" />
                    <param name="site_root" value="" />
                    <param
                      name="name"
                      value="KingCountyHouseSalesProject_17065373870200/KingCountyHouseSales"
                    />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                    <param
                      name="static_image"
                      value="https://public.tableau.com/static/images/Ki/KingCountyHouseSalesProject_17065373870200/KingCountyHouseSales/1.png"
                    />
                    <param name="animate_transition" value="yes" />
                    <param name="display_static_image" value="yes" />
                    <param name="display_spinner" value="yes" />
                    <param name="display_overlay" value="yes" />
                    <param name="display_count" value="yes" />
                    <param name="language" value="en-US" />
                  </object>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 italic">
                  Interactive features • Real-time filtering • Professional
                  visualizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Unlock Your Data's Value?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help you transform your data into
              actionable insights that drive real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-teal-400 mr-4" />
                  <a
                    href="mailto:choandcopty@gmail.com"
                    className="hover:text-teal-400 transition-colors"
                  >
                    choandcopty@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-teal-400 mr-4" />
                  <a
                    href="tel:+27710602976"
                    className="hover:text-teal-400 transition-colors"
                  >
                    +27 71 060 2976
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-3">Why Work With Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-sm">
                      Quick turnaround on projects
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-sm">
                      Affordable, transparent pricing
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-sm">
                      Customized solutions for any industry
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    <span className="text-sm">
                      Proven track record of results
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about your data challenge
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                    placeholder="What kind of data analysis do you need help with?"
                  ></textarea>
                </div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://ucarecdn.com/293c0052-54db-41f1-baaa-c6e9584db862/-/format/auto/"
                  alt="Cho&Co Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Transforming raw data into smart decisions. Accurate, efficient,
                and affordable data analysis solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics Dashboards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ad-Hoc Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Visualization
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#showcase"
                    className="hover:text-white transition-colors"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:choandcopty@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    choandcopty@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+27710602976"
                    className="hover:text-white transition-colors"
                  >
                    +27 71 060 2976
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Cho&Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
