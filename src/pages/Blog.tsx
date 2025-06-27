
import React, { useState } from 'react';
import { Search, Calendar, User, Tag, ArrowRight, Clock, Heart, Brain, Shield } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Health Tips', 'Medical News', 'Prevention', 'Nutrition', 'Mental Health', 'Technology'];

  const blogPosts = [
    {
      id: 1,
      title: 'Heart-Healthy Diet: 10 Foods That Protect Your Cardiovascular System',
      excerpt: 'Discover the top foods that can help prevent heart disease and maintain optimal cardiovascular health.',
      content: 'Learn about omega-3 rich fish, leafy greens, berries, and other superfoods that support heart health.',
      category: 'Health Tips',
      author: 'Dr. Michael Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
      featured: true,
      tags: ['heart health', 'nutrition', 'prevention']
    },
    {
      id: 2,
      title: 'Understanding Mental Health: Breaking the Stigma in 2024',
      excerpt: 'Mental health awareness is crucial for community wellbeing. Learn how to support yourself and others.',
      content: 'Explore common mental health conditions, treatment options, and how to create supportive environments.',
      category: 'Mental Health',
      author: 'Dr. Sarah Williams',
      date: '2024-01-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      featured: false,
      tags: ['mental health', 'wellness', 'support']
    },
    {
      id: 3,
      title: 'Revolutionary Robotic Surgery: The Future of Minimally Invasive Procedures',
      excerpt: 'Our new robotic surgery system offers unprecedented precision and faster recovery times for patients.',
      content: 'Discover how robotic-assisted surgery is transforming patient outcomes across various specialties.',
      category: 'Technology',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      featured: false,
      tags: ['surgery', 'technology', 'innovation']
    },
    {
      id: 4,
      title: 'Flu Season 2024: Prevention Tips and Vaccination Information',
      excerpt: 'Stay healthy this flu season with expert advice on prevention, vaccination, and treatment options.',
      content: 'Get the latest information on flu vaccines, prevention strategies, and when to seek medical care.',
      category: 'Prevention',
      author: 'Dr. Maria Garcia',
      date: '2024-01-08',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1584817344827-d21fa4b56cea?w=600&h=400&fit=crop',
      featured: false,
      tags: ['flu', 'vaccination', 'prevention']
    },
    {
      id: 5,
      title: 'Pediatric Care Excellence: New Children\'s Wing Opening This Spring',
      excerpt: 'Our expanded pediatric facility will offer state-of-the-art care for children and adolescents.',
      content: 'Learn about our new pediatric services, specialized equipment, and child-friendly environment.',
      category: 'Medical News',
      author: 'Dr. David Kim',
      date: '2024-01-05',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      featured: false,
      tags: ['pediatrics', 'facility', 'announcement']
    },
    {
      id: 6,
      title: 'Brain Health: Exercises to Keep Your Mind Sharp at Any Age',
      excerpt: 'Discover cognitive exercises and lifestyle changes that can help maintain brain health throughout life.',
      content: 'Research-backed strategies for maintaining cognitive function and preventing age-related decline.',
      category: 'Health Tips',
      author: 'Dr. Lisa Anderson',
      date: '2024-01-03',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop',
      featured: false,
      tags: ['brain health', 'cognitive', 'aging']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Health Tips': return Heart;
      case 'Mental Health': return Brain;
      case 'Prevention': return Shield;
      default: return Tag;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Blog & News</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest health tips, medical news, and expert insights from our healthcare professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="ml-4 text-gray-500 text-sm">Featured</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'Latest Articles'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <CategoryIcon className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Health News</h3>
          <p className="mb-6">Subscribe to our newsletter for the latest health tips and medical insights.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
