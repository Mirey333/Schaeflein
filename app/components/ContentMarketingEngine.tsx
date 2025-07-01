'use client';

import React, { useState } from 'react';
import { ContentMarketing } from '../types';
import { mockContentMarketing } from '../data/mockData';

export default function ContentMarketingEngine() {
  const [content, setContent] = useState<ContentMarketing[]>(mockContentMarketing);
  const [selectedContent, setSelectedContent] = useState<ContentMarketing | null>(null);
  const [filterType, setFilterType] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [showNewContentForm, setShowNewContentForm] = useState(false);

  const filteredContent = content.filter(c => {
    const typeMatch = filterType === 'All' || c.type === filterType;
    const categoryMatch = filterCategory === 'All' || c.category === filterCategory;
    return typeMatch && categoryMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Veröffentlicht': return 'bg-green-100 text-green-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Entwurf': return 'bg-gray-100 text-gray-800';
      case 'Archiviert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post': return '📝';
      case 'Case Study': return '📊';
      case 'Webinar': return '🎥';
      case 'White Paper': return '📄';
      case 'Video': return '🎬';
      case 'Infographic': return '📈';
      default: return '📄';
    }
  };

  const stats = {
    totalContent: content.length,
    publishedContent: content.filter(c => c.status === 'Veröffentlicht').length,
    totalViews: content.reduce((sum, c) => sum + c.viewCount, 0),
    totalLeads: content.reduce((sum, c) => sum + c.leadGenerated, 0),
    avgConversionRate: (content.reduce((sum, c) => sum + c.conversionRate, 0) / content.length).toFixed(1),
    totalSocialShares: content.reduce((sum, c) => sum + c.socialShares, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Content Marketing Engine</h2>
            <p className="text-gray-600">SEO-optimierte Inhalte & Lead-Generation</p>
          </div>
          <button 
            onClick={() => setShowNewContentForm(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            + Neuer Content
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Gesamt Content</h3>
            <p className="text-2xl font-bold text-blue-900">{stats.totalContent}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Veröffentlicht</h3>
            <p className="text-2xl font-bold text-green-900">{stats.publishedContent}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600">Views</h3>
            <p className="text-2xl font-bold text-purple-900">{(stats.totalViews / 1000).toFixed(1)}k</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-600">Leads generiert</h3>
            <p className="text-2xl font-bold text-yellow-900">{stats.totalLeads}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-orange-600">Ø Conversion</h3>
            <p className="text-2xl font-bold text-orange-900">{stats.avgConversionRate}%</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-indigo-600">Social Shares</h3>
            <p className="text-2xl font-bold text-indigo-900">{stats.totalSocialShares}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex gap-2">
            <label className="text-sm font-medium text-gray-700">Typ:</label>
            {['All', 'Blog Post', 'Case Study', 'Webinar', 'White Paper', 'Video', 'Infographic'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  filterType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <label className="text-sm font-medium text-gray-700">Kategorie:</label>
          {['All', 'Spedition', 'Logistik', 'Industriemontage', 'Sprintbox', 'Truckwerkstatt', 'Ausland'].map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                filterCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedContent(item)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{getTypeIcon(item.type)}</span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium mr-2">{item.type}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{item.category}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Views:</span>
                  <span className="font-medium">{item.viewCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Leads:</span>
                  <span className="font-medium text-green-600">{item.leadGenerated}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conversion:</span>
                  <span className="font-medium text-purple-600">{item.conversionRate}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Social Shares:</span>
                  <span className="font-medium text-blue-600">{item.socialShares}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>von {item.author}</span>
                <span>{new Date(item.publishDate).toLocaleDateString('de-DE')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Detail Modal */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedContent.title}</h3>
                  <p className="text-sm text-gray-500">von {selectedContent.author} • {new Date(selectedContent.publishDate).toLocaleDateString('de-DE')}</p>
                </div>
                <button 
                  onClick={() => setSelectedContent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Content Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Typ:</span>
                      <span className="font-medium">{getTypeIcon(selectedContent.type)} {selectedContent.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kategorie:</span>
                      <span className="font-medium">{selectedContent.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedContent.status)}`}>
                        {selectedContent.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Metriken</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-blue-600">Views</div>
                      <div className="text-lg font-bold text-blue-900">{selectedContent.viewCount.toLocaleString()}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-green-600">Leads</div>
                      <div className="text-lg font-bold text-green-900">{selectedContent.leadGenerated}</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-sm text-purple-600">Conversion</div>
                      <div className="text-lg font-bold text-purple-900">{selectedContent.conversionRate}%</div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <div className="text-sm text-yellow-600">Engagement</div>
                      <div className="text-lg font-bold text-yellow-900">{selectedContent.engagementRate}%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Social Media Performance</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Total Shares</div>
                    <div className="text-xl font-bold text-gray-900">{selectedContent.socialShares}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-600">LinkedIn Shares</div>
                    <div className="text-xl font-bold text-blue-900">{selectedContent.linkedInShares}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-600">CTA Clicks</div>
                    <div className="text-xl font-bold text-green-900">{selectedContent.ctaClicks}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">SEO Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedContent.seoKeywords.map((keyword, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Zielgruppen</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedContent.targetAudience.map((audience, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Call-to-Action</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-purple-900 font-medium">{selectedContent.cta}</div>
                  <div className="text-sm text-purple-600 mt-1">{selectedContent.ctaClicks} Clicks</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Content bearbeiten
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Performance analysieren
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Auf Social Media teilen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Content Form Modal */}
      {showNewContentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Neuen Content erstellen</h3>
                <button 
                  onClick={() => setShowNewContentForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Content Titel eingeben..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Typ</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Blog Post</option>
                    <option>Case Study</option>
                    <option>Webinar</option>
                    <option>White Paper</option>
                    <option>Video</option>
                    <option>Infographic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategorie</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Spedition</option>
                    <option>Logistik</option>
                    <option>Industriemontage</option>
                    <option>Sprintbox</option>
                    <option>Truckwerkstatt</option>
                    <option>Ausland</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords (kommagetrennt)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zielgruppen (kommagetrennt)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Automobilindustrie, Maschinenbau"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Call-to-Action</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="z.B. Jetzt kostenlose Beratung anfordern"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={6}
                  placeholder="Content hier eingeben..."
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button 
                  onClick={() => setShowNewContentForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Abbrechen
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  Als Entwurf speichern
                </button>
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Veröffentlichen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 