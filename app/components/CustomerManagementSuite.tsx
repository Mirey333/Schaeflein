'use client'

import { useState } from 'react'
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Target, 
  Heart,
  Trophy,
  RefreshCw,
  BarChart3,
  Star,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Phone,
  Mail,
  Calendar,
  MapPin
} from 'lucide-react'
import { 
  mockCustomerHealthScores, 
  mockCustomerLifetimeValues, 
  mockUpsellOpportunities,
  mockAccountRelationships,
  mockCustomerSuccessMetrics,
  mockWinBackCampaigns,
  mockCustomerSegments,
  mockLoyaltyPrograms,
  mockCustomers
} from '../data/mockData'

interface CustomerManagementSuiteProps {
  customers: any[]
}

export default function CustomerManagementSuite({ customers }: CustomerManagementSuiteProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: '🏠 Übersicht', icon: Users },
    { id: 'health', label: '📊 Kundenbewertung', icon: Heart },
    { id: 'clv', label: '💎 Kundenwert', icon: TrendingUp },
    { id: 'upsell', label: '🚀 Upselling', icon: Target },
    { id: 'accounts', label: '👥 Kontenverwaltung', icon: Users },
    { id: 'success', label: '🎯 Kundenerfolg', icon: Trophy },
    { id: 'winback', label: '🔄 Rückgewinnung', icon: RefreshCw },
    { id: 'segments', label: '🎨 Segmentierung', icon: BarChart3 },
    { id: 'loyalty', label: '⭐ Treueprogramm', icon: Star }
  ]

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50'
    if (score >= 60) return 'text-yellow-600 bg-yellow-50'
    if (score >= 40) return 'text-orange-600 bg-orange-50'
    return 'text-red-600 bg-red-50'
  }

  const getRiskLevelColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-50'
      case 'Medium': return 'text-yellow-600 bg-yellow-50'
      case 'High': return 'text-orange-600 bg-orange-50'
      case 'Critical': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Identified': return 'Identifiziert'
      case 'Proposed': return 'Vorgeschlagen'
      case 'Negotiating': return 'Verhandlung'
      case 'Won': return 'Gewonnen'
      case 'Lost': return 'Verloren'
      default: return status
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Customer Management Suite</h2>
            <p className="text-gray-600 mt-1">Intelligente Bestandskundenbetreuung & Umsatzwachstum</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{customers.length}</div>
              <div className="text-sm text-gray-600">Aktive Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(mockCustomerLifetimeValues.reduce((sum, c) => sum + c.currentCLV, 0) / 1000000)}M€
              </div>
              <div className="text-sm text-gray-600">Total CLV</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(mockCustomerHealthScores.reduce((sum, c) => sum + c.overallScore, 0) / mockCustomerHealthScores.length)}
              </div>
              <div className="text-sm text-gray-600">Ø Kundenbewertung</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Dashboard */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Key Metrics */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Key Performance Indicators</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8.2</div>
                  <div className="text-sm text-gray-600">Ø NPS Score</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">34%</div>
                  <div className="text-sm text-gray-600">Upsell Rate</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">4.8M€</div>
                  <div className="text-sm text-gray-600">Expansionsumsatz</div>
                </div>
              </div>
            </div>

            {/* Kundenbewertung Overview */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Kundenbewertung Übersicht</h3>
              <div className="space-y-3">
                {mockCustomerHealthScores.map((health) => {
                  const customer = customers.find(c => c.id === health.customerId)
                  return (
                    <div key={health.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${getHealthScoreColor(health.overallScore)}`}>
                          {health.overallScore}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{customer?.name}</h4>
                          <p className="text-sm text-gray-600">{customer?.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelColor(health.riskLevel)}`}>
                          {health.riskLevel === 'Low' ? 'Stabil' : 
                           health.riskLevel === 'Medium' ? 'Beobachtung' :
                           health.riskLevel === 'High' ? 'Intervention' : 'Kritisch'}
                        </span>
                        <div className="flex items-center text-sm text-gray-600">
                          {health.trendDirection === 'up' && <ArrowUp className="h-4 w-4 text-green-600" />}
                          {health.trendDirection === 'down' && <ArrowDown className="h-4 w-4 text-red-600" />}
                          {health.trendDirection === 'stable' && <Minus className="h-4 w-4 text-gray-600" />}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Upsell Opportunities */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Top Opportunities</h3>
              <div className="space-y-3">
                {mockUpsellOpportunities.slice(0, 3).map((opp) => {
                  const customer = customers.find(c => c.id === opp.customerId)
                  return (
                    <div key={opp.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{customer?.name}</h4>
                        <span className="text-green-600 font-bold text-sm">
                          {(opp.potentialRevenue / 1000).toFixed(0)}k€
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{opp.productService}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {opp.probability}% Chance
                        </span>
                        <span className="text-xs text-gray-500">{opp.timeframe}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="w-full mt-3 text-primary-600 hover:text-primary-700 text-sm font-medium">
                Alle Opportunities anzeigen →
              </button>
            </div>

            {/* Customer Segments */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎨 Kunden-Segmente</h3>
              <div className="space-y-3">
                {mockCustomerSegments.map((segment) => (
                  <div key={segment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: segment.color }}
                      ></div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{segment.name}</h4>
                        <p className="text-xs text-gray-600">{segment.customerCount} Kunden</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">
                        {(segment.averageRevenue / 1000).toFixed(0)}k€
                      </div>
                      <div className="text-xs text-gray-600">Ø Umsatz</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Kundenbewertung Tab */}
      {activeTab === 'health' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">📊 Kundenbewertung & Qualitätsanalyse</h3>
              <button className="btn-primary text-sm">
                Bewertungsreport generieren
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {mockCustomerHealthScores.filter(h => h.riskLevel === 'Low').length}
                </div>
                <div className="text-sm text-gray-600">Stabile Kunden</div>
                <div className="text-xs text-green-600 mt-1">Niedrig Risiko</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {mockCustomerHealthScores.filter(h => h.riskLevel === 'Medium').length}
                </div>
                <div className="text-sm text-gray-600">Beobachtung</div>
                <div className="text-xs text-yellow-600 mt-1">Mittleres Risiko</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {mockCustomerHealthScores.filter(h => h.riskLevel === 'High').length}
                </div>
                <div className="text-sm text-gray-600">Intervention nötig</div>
                <div className="text-xs text-orange-600 mt-1">Hohes Risiko</div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {mockCustomerHealthScores.filter(h => h.riskLevel === 'Critical').length}
                </div>
                <div className="text-sm text-gray-600">Sofortmaßnahmen</div>
                <div className="text-xs text-red-600 mt-1">Kritisches Risiko</div>
              </div>
            </div>

            {/* Detailed Health Scores */}
            <div className="space-y-4">
              {mockCustomerHealthScores.map((health) => {
                const customer = customers.find(c => c.id === health.customerId)
                return (
                  <div key={health.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${getHealthScoreColor(health.overallScore)}`}>
                          {health.overallScore}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{customer?.name}</h4>
                          <p className="text-gray-600">{customer?.location} • {customer?.businessType}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskLevelColor(health.riskLevel)}`}>
                              {health.riskLevel === 'Low' ? 'Stabil' : 
                               health.riskLevel === 'Medium' ? 'Beobachtung' :
                               health.riskLevel === 'High' ? 'Intervention' : 'Kritisch'}
                            </span>
                            <span className="text-xs text-gray-500">
                              Zuletzt aktualisiert: {new Date(health.lastUpdated).toLocaleDateString('de-DE')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {health.trendDirection === 'up' && <ArrowUp className="h-6 w-6 text-green-600" />}
                        {health.trendDirection === 'down' && <ArrowDown className="h-6 w-6 text-red-600" />}
                        {health.trendDirection === 'stable' && <Minus className="h-6 w-6 text-gray-600" />}
                      </div>
                    </div>

                    {/* Bewertungsfaktoren */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{health.factors.engagementScore}</div>
                        <div className="text-xs text-gray-600">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{health.factors.paymentHistory}</div>
                        <div className="text-xs text-gray-600">Zahlungen</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">{health.factors.supportTickets}</div>
                        <div className="text-xs text-gray-600">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{health.factors.lastActivity}</div>
                        <div className="text-xs text-gray-600">Aktivität</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">{health.factors.contractUtilization}</div>
                        <div className="text-xs text-gray-600">Nutzung</div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">💡 Empfehlungen:</h5>
                      <ul className="space-y-1">
                        {health.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Customer Lifetime Value Tab */}
      {activeTab === 'clv' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">💎 Kundenwert Dashboard</h3>
              <div className="flex space-x-3">
                <button className="btn-secondary text-sm">Kundenwert-Bericht</button>
                <button className="btn-primary text-sm">Prognose aktualisieren</button>
              </div>
            </div>

            {/* CLV Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {(mockCustomerLifetimeValues.reduce((sum, c) => sum + c.currentCLV, 0) / 1000000).toFixed(1)}M€
                </div>
                <div className="text-sm text-gray-600">Aktueller Gesamtwert</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {(mockCustomerLifetimeValues.reduce((sum, c) => sum + c.predictedCLV, 0) / 1000000).toFixed(1)}M€
                </div>
                <div className="text-sm text-gray-600">Prognostizierter Wert</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Math.round(mockCustomerLifetimeValues.reduce((sum, c) => sum + c.averageOrderValue, 0) / mockCustomerLifetimeValues.length / 1000)}k€
                </div>
                <div className="text-sm text-gray-600">Ø Order Value</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {(mockCustomerLifetimeValues.reduce((sum, c) => sum + c.profitMargin, 0) / mockCustomerLifetimeValues.length * 100).toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Ø Profit Margin</div>
              </div>
            </div>

            {/* CLV Details */}
            <div className="space-y-4">
              {mockCustomerLifetimeValues.map((clv) => {
                const customer = customers.find(c => c.id === clv.customerId)
                const growth = ((clv.predictedCLV - clv.currentCLV) / clv.currentCLV * 100)
                return (
                  <div key={clv.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{customer?.name}</h4>
                        <p className="text-gray-600">{customer?.location} • {customer?.tier}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">
                          {(clv.currentCLV / 1000000).toFixed(1)}M€
                        </div>
                        <div className="text-sm text-gray-600">Aktueller Kundenwert</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          {(clv.predictedCLV / 1000000).toFixed(1)}M€
                        </div>
                        <div className="text-xs text-gray-600">Prognose</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {(clv.averageOrderValue / 1000).toFixed(0)}k€
                        </div>
                        <div className="text-xs text-gray-600">Avg Order</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{clv.purchaseFrequency}</div>
                        <div className="text-xs text-gray-600">Purchases/Jahr</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">{clv.customerLifespan.toFixed(1)}</div>
                        <div className="text-xs text-gray-600">Lifespan Jahre</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">{(clv.profitMargin * 100).toFixed(0)}%</div>
                        <div className="text-xs text-gray-600">Profit Margin</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {growth >= 0 ? '+' : ''}{growth.toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-600">Wachstumspotenzial</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Akquisitionskosten: <span className="font-medium">{(clv.acquisitionCost / 1000).toFixed(0)}k€</span>
                        {' • '}
                        ROI: <span className="font-medium text-green-600">{(clv.currentCLV / clv.acquisitionCost).toFixed(1)}x</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-secondary text-sm">Detailanalyse</button>
                        <button className="btn-primary text-sm">Prognose anpassen</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Upselling Tab */}
      {activeTab === 'upsell' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">🚀 Upselling & Cross-Selling Hub</h3>
              <div className="flex space-x-3">
                <button className="btn-secondary text-sm">Chancen-Bericht</button>
                <button className="btn-primary text-sm">Neue Chance</button>
              </div>
            </div>

            {/* Upsell Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {mockUpsellOpportunities.length}
                </div>
                <div className="text-sm text-gray-600">Aktive Chancen</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {(mockUpsellOpportunities.reduce((sum, o) => sum + o.potentialRevenue, 0) / 1000000).toFixed(1)}M€
                </div>
                <div className="text-sm text-gray-600">Potenzieller Umsatz</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Math.round(mockUpsellOpportunities.reduce((sum, o) => sum + o.probability, 0) / mockUpsellOpportunities.length)}%
                </div>
                <div className="text-sm text-gray-600">Ø Erfolgsquote</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {mockUpsellOpportunities.filter(o => o.status === 'Won').length}
                </div>
                <div className="text-sm text-gray-600">Erfolgreiche Abschlüsse</div>
              </div>
            </div>

            {/* Chancen-Pipeline */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">📈 Chancen-Pipeline</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { en: 'Identified', de: 'Identifiziert' },
                  { en: 'Proposed', de: 'Vorgeschlagen' },
                  { en: 'Negotiating', de: 'Verhandlung' },
                  { en: 'Won', de: 'Gewonnen' },
                  { en: 'Lost', de: 'Verloren' }
                ].map((statusObj) => {
                  const status = statusObj.en
                  const opportunities = mockUpsellOpportunities.filter(o => o.status === status)
                  const revenue = opportunities.reduce((sum, o) => sum + o.potentialRevenue, 0)
                  return (
                    <div key={status} className="bg-gray-50 rounded-lg p-4 text-center">
                      <h5 className="font-medium text-gray-900 mb-2">{statusObj.de}</h5>
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {opportunities.length}
                      </div>
                      <div className="text-sm text-gray-600">
                        {(revenue / 1000).toFixed(0)}k€
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Detailed Opportunities */}
            <div className="space-y-4">
              {mockUpsellOpportunities.map((opp) => {
                const customer = customers.find(c => c.id === opp.customerId)
                return (
                  <div key={opp.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          opp.type === 'Upsell' ? 'bg-green-500' : 
                          opp.type === 'Cross-sell' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}>
                          {opp.type === 'Upsell' ? '↗️' : opp.type === 'Cross-sell' ? '🔄' : '📈'}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{customer?.name}</h4>
                          <p className="text-gray-600">{opp.productService}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              opp.status === 'Won' ? 'bg-green-100 text-green-800' :
                              opp.status === 'Lost' ? 'bg-red-100 text-red-800' :
                              opp.status === 'Negotiating' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {getStatusLabel(opp.status)}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                              {opp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {(opp.potentialRevenue / 1000).toFixed(0)}k€
                        </div>
                        <div className="text-sm text-gray-600">Potential</div>
                        <div className="text-sm font-medium text-blue-600">{opp.probability}% Chance</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Aktueller Spend</div>
                        <div className="text-lg font-bold text-gray-900">
                          {(opp.currentSpend / 1000).toFixed(0)}k€
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Timeframe</div>
                        <div className="text-lg font-medium text-gray-900">{opp.timeframe}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Betreuer</div>
                        <div className="text-lg font-medium text-gray-900">{opp.assignedTo}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">Begründung</div>
                      <p className="text-gray-900">{opp.reasoning}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Nächste Aktion: <span className="font-medium">{opp.nextAction}</span>
                        {' • '}
                        Fällig: <span className="font-medium">{new Date(opp.dueDate).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-secondary text-sm">Bearbeiten</button>
                        <button className="btn-primary text-sm">Follow-up</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab !== 'overview' && activeTab !== 'health' && activeTab !== 'clv' && activeTab !== 'upsell' && (
        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {tabs.find(t => t.id === activeTab)?.label} - In Entwicklung
          </h3>
          <p className="text-gray-600">Diese Funktion wird gerade implementiert und ist bald verfügbar!</p>
        </div>
      )}
    </div>
  )
} 