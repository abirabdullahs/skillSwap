import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, FileText, HelpCircle, Search, Send, Clock, CheckCircle } from 'lucide-react';

export default function Support() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get a response within 24 hours",
      contact: "support@skillswap.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our team instantly",
      contact: "Available 9 AM - 6 PM",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with us",
      contact: "+1 (555) 123-4567",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All' },
    { id: 'account', name: 'Account' },
    { id: 'skills', name: 'Skills' },
    { id: 'matching', name: 'Matching' },
    { id: 'safety', name: 'Safety' }
  ];

  const faqs = [
    {
      category: 'account',
      question: "How do I create an account?",
      answer: "Click on 'Sign Up' button, fill in your details, verify your email, and you're ready to start!"
    },
    {
      category: 'account',
      question: "Can I change my profile information?",
      answer: "Yes! Go to Settings > Profile and update any information you'd like to change."
    },
    {
      category: 'skills',
      question: "How many skills can I add?",
      answer: "You can add up to 10 skills you want to teach and 10 skills you want to learn."
    },
    {
      category: 'skills',
      question: "How do I verify my skills?",
      answer: "You can add certifications, portfolios, or get endorsed by other users who've learned from you."
    },
    {
      category: 'matching',
      question: "How does the matching algorithm work?",
      answer: "We match you based on complementary skills, availability, location, and learning preferences."
    },
    {
      category: 'matching',
      question: "Can I choose who to connect with?",
      answer: "Absolutely! You can browse matches and send connection requests to people you'd like to swap skills with."
    },
    {
      category: 'safety',
      question: "Is SkillSwap safe to use?",
      answer: "Yes! We verify all users, have a rating system, and provide guidelines for safe skill exchanges."
    },
    {
      category: 'safety',
      question: "What if I have a bad experience?",
      answer: "You can report users, leave reviews, and contact our support team immediately for assistance."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchQuery === '' || 
     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Find answers or reach out to our team
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-linear-to-br ${method.color} rounded-xl mb-4 text-white`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="text-blue-600 font-semibold">{method.contact}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Frequently Asked Questions
          </h2>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="cursor-pointer list-none flex items-start gap-4">
                  <FileText className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 group-open:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </summary>
                <p className="mt-4 ml-9 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No results found. Try a different search term.</p>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Still Need Help?
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Send us a message and we'll get back to you as soon as possible
          </p>

          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your issue..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          )}
        </div>

        {/* Response Time Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Average response time: 2-4 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}