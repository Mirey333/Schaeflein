'use client';

import React, { useState } from 'react';
import LinkedInSocialSellingDashboard from './LinkedInSocialSelling';
import ReferralProgramDashboard from './ReferralProgram';
import ContentMarketingEngine from './ContentMarketingEngine';
import { 
  mockLinkedInSocialSelling, 
  mockReferralProgram, 
  mockContentMarketing,
  mockVideoPersonalization,
  mockEventMarketing,
  mockSalesEnablement,
  mockIntentData,
  mockCompetitiveIntelligence,
  mockAttributionModel,
  mockAdvancedLeadNurturing,
  mockSalesAnalytics
} from '../data/mockData';

export default function AdvancedLeadGenerationHub() {
  const [activeTab, setActiveTab] = useState('overview');

  // Calculate overall metrics
  const overallMetrics = {
    totalLeads: 127,
    qualifiedLeads: 45,
    conversionRate: 26.7,
    revenue: 2800000,
    socialConnections: mockLinkedInSocialSelling.length,
    activeReferrals: mockReferralProgram.filter(r => r.status !== 'Verloren').length,
    publishedContent: mockContentMarketing.filter(c => c.status === 'Veröffentlicht').length,
    videoResponseRate: 68,
    eventLeads: 187,
    intentSignals: mockIntentData.length,
    nurtureSequences: mockAdvancedLeadNurturing.length
  };

  const quickStats = [
    { title: 'LinkedIn Prospects', value: overallMetrics.socialConnections, color: 'blue', icon: '💼' },
    { title: 'Aktive Empfehlungen', value: overallMetrics.activeReferrals, color: 'green', icon: '🤝' },
    { title: 'Content Pieces', value: overallMetrics.publishedContent, color: 'purple', icon: '📝' },
    { title: 'Video Response Rate', value: `${overallMetrics.videoResponseRate}%`, color: 'orange', icon: '🎥' },
    { title: 'Event Leads', value: overallMetrics.eventLeads, color: 'indigo', icon: '🏢' },
    { title: 'Intent Signals', value: overallMetrics.intentSignals, color: 'yellow', icon: '🎯' },
    { title: 'Nurture Sequences', value: overallMetrics.nurtureSequences, color: 'red', icon: '🔄' },
            { title: 'Gesamtumsatz', value: `${(overallMetrics.revenue / 1000000).toFixed(1)}M €`, color: 'green', icon: '💰' }
  ];

  const getTabStyle = (tabName: string) => {
    return `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      activeTab === tabName
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'linkedin':
        return <LinkedInSocialSellingDashboard />;
      case 'referrals':
        return <ReferralProgramDashboard />;
      case 'content':
        return <ContentMarketingEngine />;
      case 'video':
        return <VideoPersonalizationCenter />;
      case 'events':
        return <EventMarketingCenter />;
      case 'enablement':
        return <SalesEnablementCenter />;
      case 'intent':
        return <IntentDataCenter />;
      case 'competitive':
        return <CompetitiveIntelligenceCenter />;
      case 'attribution':
        return <AttributionCenter />;
      case 'nurturing':
        return <AdvancedNurturingCenter />;
      default:
        return <OverviewDashboard />;
    }
  };

  const OverviewDashboard = () => (
    <div className="space-y-6">
      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
          <h3 className="text-sm font-medium opacity-90">Gesamt Leads</h3>
          <p className="text-3xl font-bold">{overallMetrics.totalLeads}</p>
          <p className="text-sm opacity-90">+15% vs. letzter Monat</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
          <h3 className="text-sm font-medium opacity-90">Qualifizierte Leads</h3>
          <p className="text-3xl font-bold">{overallMetrics.qualifiedLeads}</p>
          <p className="text-sm opacity-90">+22% vs. letzter Monat</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
          <h3 className="text-sm font-medium opacity-90">Conversion Rate</h3>
          <p className="text-3xl font-bold">{overallMetrics.conversionRate}%</p>
          <p className="text-sm opacity-90">+5.2% vs. letzter Monat</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
                          <h3 className="text-sm font-medium opacity-90">Umsatz</h3>
                <p className="text-3xl font-bold">{(overallMetrics.revenue / 1000000).toFixed(1)}M €</p>
          <p className="text-sm opacity-90">+18% vs. letzter Monat</p>
        </div>
      </div>

      {/* Feature Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className={`bg-${stat.color}-50 p-4 rounded-lg border border-${stat.color}-100`}>
            <div className="flex items-center justify-between">
              <div>
                <h4 className={`text-sm font-medium text-${stat.color}-600`}>{stat.title}</h4>
                <p className={`text-xl font-bold text-${stat.color}-900`}>{stat.value}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Neueste Aktivitäten</h3>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-600 mr-3">💼</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Neue LinkedIn Connection: Dr. Andreas Müller (VW)</p>
              <p className="text-xs text-gray-500">vor 2 Stunden</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <span className="text-green-600 mr-3">🤝</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Referral gewonnen: Continental AG (2.5M € Deal)</p>
              <p className="text-xs text-gray-500">vor 4 Stunden</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-purple-50 rounded-lg">
            <span className="text-purple-600 mr-3">📝</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Content veröffentlicht: "BMW Logistik-Optimierung Case Study"</p>
              <p className="text-xs text-gray-500">vor 6 Stunden</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-orange-50 rounded-lg">
            <span className="text-orange-600 mr-3">🎥</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Video Response: Mercedes-Benz Proposal angeschaut</p>
              <p className="text-xs text-gray-500">vor 8 Stunden</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveTab('linkedin')}
            className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <span className="text-2xl block mb-2">💼</span>
            <span className="text-sm font-medium text-blue-900">LinkedIn Prospect hinzufügen</span>
          </button>
          <button 
            onClick={() => setActiveTab('referrals')}
            className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <span className="text-2xl block mb-2">🤝</span>
            <span className="text-sm font-medium text-green-900">Empfehlung erfassen</span>
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
          >
            <span className="text-2xl block mb-2">📝</span>
            <span className="text-sm font-medium text-purple-900">Content erstellen</span>
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
          >
            <span className="text-2xl block mb-2">🎥</span>
            <span className="text-sm font-medium text-orange-900">Video personalisieren</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Placeholder components for other features
  const VideoPersonalizationCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🎥 Video Personalization Center</h2>
      <p className="text-gray-600 mb-4">Personalisierte Videos für maximale Engagement</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockVideoPersonalization.map((video) => (
          <div key={video.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{video.recipientName}</h3>
            <p className="text-sm text-gray-600">{video.recipientCompany}</p>
            <p className="text-sm text-blue-600">{video.videoType}</p>
            <div className="mt-2 text-sm">
              <span className="text-green-600">Views: {video.viewCount}</span>
              <span className="ml-4 text-purple-600">Watch Time: {Math.round(video.watchTime/60)}min</span>
            </div>
            {video.responded && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Responded</span>}
          </div>
        ))}
      </div>
    </div>
  );

  const EventMarketingCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🏢 Event Marketing Center</h2>
      <p className="text-gray-600 mb-4">Messen, Webinare & Networking Events</p>
      <div className="space-y-4">
        {mockEventMarketing.map((event) => (
          <div key={event.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{event.eventName}</h3>
            <p className="text-sm text-gray-600">{event.eventType} • {event.location}</p>
            <div className="mt-2 grid grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Leads:</span>
                <span className="ml-2 font-medium text-green-600">{event.leadsGenerated}</span>
              </div>
              <div>
                <span className="text-gray-600">Qualified:</span>
                <span className="ml-2 font-medium text-blue-600">{event.qualifiedLeads}</span>
              </div>
              <div>
                <span className="text-gray-600">Umsatz:</span>
                <span className="ml-2 font-medium text-purple-600">{(event.revenue / 1000000).toFixed(1)}M €</span>
              </div>
              <div>
                <span className="text-gray-600">ROI:</span>
                <span className="ml-2 font-medium text-orange-600">{event.roi}x</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SalesEnablementCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Sales Enablement Center</h2>
      <p className="text-gray-600 mb-4">Templates, Battle Cards & Sales Tools</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockSalesEnablement.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.type} • {item.category}</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-blue-600">Usage: {item.usageCount}x</span>
              <span className="text-green-600">Rating: {item.effectiveness}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const IntentDataCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Intent Data Center</h2>
      <p className="text-gray-600 mb-4">Buying Signals & Predictive Analytics</p>
      <div className="space-y-4">
        {mockIntentData.map((intent) => (
          <div key={intent.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{intent.companyName}</h3>
                <p className="text-sm text-gray-600">{intent.industry} • {intent.employees.toLocaleString()} Mitarbeiter</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                Score: {intent.intentScore}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">Buying Stage: <span className="font-medium">{intent.buyingStage}</span></p>
              <p className="text-sm text-gray-600">Timeline: <span className="font-medium">{intent.timeline}</span></p>
              <p className="text-sm text-gray-600">Budget: <span className="font-medium">{intent.budget}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CompetitiveIntelligenceCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">⚔️ Competitive Intelligence</h2>
      <p className="text-gray-600 mb-4">Win/Loss Analysis & Competitor Tracking</p>
      <div className="space-y-4">
        {mockCompetitiveIntelligence.map((comp) => (
          <div key={comp.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">vs. {comp.competitor}</h3>
                <p className="text-sm text-gray-600">{comp.industry}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                comp.winLoss === 'Win' ? 'bg-green-100 text-green-800' : 
                comp.winLoss === 'Loss' ? 'bg-red-100 text-red-800' : 
                'bg-yellow-100 text-yellow-800'
              }`}>
                {comp.winLoss}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">Deal Value: <span className="font-medium">{(comp.dealValue / 1000000).toFixed(1)}M €</span></p>
              <p className="text-sm text-gray-600">Price Advantage: <span className="font-medium text-green-600">{(comp.priceComparison.difference / 1000).toLocaleString()}k € günstiger</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AttributionCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Attribution Modeling</h2>
      <p className="text-gray-600 mb-4">Multi-Touch Attribution & Customer Journey</p>
      <div className="space-y-4">
        {mockAttributionModel.map((attr) => (
          <div key={attr.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">Lead ID: {attr.leadId}</h3>
            <p className="text-sm text-gray-600">Conversion Value: {(attr.conversionValue / 1000000).toFixed(1)}M €</p>
            <div className="mt-2">
              <p className="text-sm text-gray-600">First Touch: <span className="font-medium">{attr.firstTouchChannel}</span></p>
              <p className="text-sm text-gray-600">Last Touch: <span className="font-medium">{attr.lastTouchChannel}</span></p>
              <p className="text-sm text-gray-600">Time to Conversion: <span className="font-medium">{attr.timeToConversion} Tage</span></p>
            </div>
            <div className="mt-2 flex space-x-2">
              {attr.touchpoints.map((tp, idx) => (
                <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                  {tp.channel} ({tp.attribution}%)
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AdvancedNurturingCenter = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Advanced Lead Nurturing</h2>
      <p className="text-gray-600 mb-4">Automated Sequences & Behavioral Triggers</p>
      <div className="space-y-4">
        {mockAdvancedLeadNurturing.map((nurture) => (
          <div key={nurture.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{nurture.nurtureSequence}</h3>
                <p className="text-sm text-gray-600">Lead ID: {nurture.leadId}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                Step {nurture.currentStep}/{nurture.totalSteps}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">Engagement Score: <span className="font-medium">{nurture.engagementScore}%</span></p>
              <p className="text-sm text-gray-600">Next Action: <span className="font-medium text-blue-600">{nurture.nextAction}</span></p>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
              <div>Email Opens: {nurture.behaviorTracking.emailOpens}</div>
              <div>Link Clicks: {nurture.behaviorTracking.linkClicks}</div>
              <div>Website Visits: {nurture.behaviorTracking.websiteVisits}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🚀 Advanced Lead Generation Hub</h1>
            <p className="text-gray-600">Schäflein's komplettes Neukundengewinnungs-Arsenal</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Letztes Update</p>
            <p className="text-sm font-medium text-gray-900">{new Date().toLocaleDateString('de-DE')}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActiveTab('overview')} className={getTabStyle('overview')}>
            📊 Übersicht
          </button>
          <button onClick={() => setActiveTab('linkedin')} className={getTabStyle('linkedin')}>
            💼 LinkedIn Social Selling
          </button>
          <button onClick={() => setActiveTab('referrals')} className={getTabStyle('referrals')}>
            🤝 Empfehlungsprogramm
          </button>
          <button onClick={() => setActiveTab('content')} className={getTabStyle('content')}>
            📝 Content Marketing
          </button>
          <button onClick={() => setActiveTab('video')} className={getTabStyle('video')}>
            🎥 Video Personalization
          </button>
          <button onClick={() => setActiveTab('events')} className={getTabStyle('events')}>
            🏢 Event Marketing
          </button>
          <button onClick={() => setActiveTab('enablement')} className={getTabStyle('enablement')}>
            📚 Sales Enablement
          </button>
          <button onClick={() => setActiveTab('intent')} className={getTabStyle('intent')}>
            🎯 Intent Data
          </button>
          <button onClick={() => setActiveTab('competitive')} className={getTabStyle('competitive')}>
            ⚔️ Competitive Intel
          </button>
          <button onClick={() => setActiveTab('attribution')} className={getTabStyle('attribution')}>
            📊 Attribution
          </button>
          <button onClick={() => setActiveTab('nurturing')} className={getTabStyle('nurturing')}>
            🔄 Lead Nurturing
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
} 