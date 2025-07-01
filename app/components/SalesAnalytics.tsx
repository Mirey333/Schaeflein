'use client'

import { useState } from 'react'
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Users,
  DollarSign,
  Calendar,
  Award,
  AlertTriangle,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { mockSalesAnalytics, mockLeads } from '../data/mockData'
import { SalesAnalytics } from '../types'

interface SalesAnalyticsProps {
  analytics?: SalesAnalytics[]
}

export default function SalesAnalyticsComponent({ analytics = mockSalesAnalytics }: SalesAnalyticsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('Januar 2024')
  const [selectedTimeframe, setSelectedTimeframe] = useState('Monat')

  const currentAnalytics = analytics.find(a => a.period === selectedPeriod) || analytics[0]

  // Pipeline-Analyse
  const pipelineStages = [
    { name: 'Neu', leads: mockLeads.filter(l => l.status === 'Neu'), color: 'bg-gray-500' },
    { name: 'Kontaktiert', leads: mockLeads.filter(l => l.status === 'Kontaktiert'), color: 'bg-blue-500' },
    { name: 'Qualifiziert', leads: mockLeads.filter(l => l.status === 'Qualifiziert'), color: 'bg-yellow-500' },
    { name: 'Angebot', leads: mockLeads.filter(l => l.status === 'Angebot'), color: 'bg-orange-500' },
    { name: 'Verhandlung', leads: mockLeads.filter(l => l.status === 'Verhandlung'), color: 'bg-purple-500' },
    { name: 'Gewonnen', leads: mockLeads.filter(l => l.status === 'Gewonnen'), color: 'bg-green-500' }
  ]

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return (amount / 1000000).toFixed(1) + 'M €'
    } else if (amount >= 1000) {
      return (amount / 1000).toFixed(0) + 'k €'
    } else {
      return amount.toLocaleString() + ' €'
    }
  }

  const calculateConversionRate = (from: string, to: string) => {
    const fromCount = pipelineStages.find(s => s.name === from)?.leads.length || 0
    const toCount = pipelineStages.find(s => s.name === to)?.leads.length || 0
    return fromCount > 0 ? ((toCount / fromCount) * 100).toFixed(1) : '0'
  }

  return (
    <div className="space-y-6">
      {/* Header mit Zeitraum-Auswahl */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sales Analytics</h2>
          <p className="text-gray-600">Vertriebsleistung und Forecasting</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option>Woche</option>
            <option>Monat</option>
            <option>Quartal</option>
            <option>Jahr</option>
          </select>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Neue Leads</p>
              <p className="text-2xl font-bold text-gray-900">{currentAnalytics.newLeads}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12.5% vs. Vormonat
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Win Rate</p>
              <p className="text-2xl font-bold text-gray-900">{currentAnalytics.winRate.toFixed(1)}%</p>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -2.3% vs. Vormonat
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Durchschnittl. Deal</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentAnalytics.averageDealSize)}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8.7% vs. Vormonat
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sales Cycle</p>
              <p className="text-2xl font-bold text-gray-900">{currentAnalytics.salesCycleLength} Tage</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -5 Tage vs. Vormonat
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Übersicht */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Sales Pipeline</h3>
          <span className="text-sm text-gray-600">{formatCurrency(currentAnalytics.pipelineValue)} Gesamtwert</span>
        </div>
        <div className="space-y-4">
          {pipelineStages.map((stage, index) => {
            const totalValue = stage.leads.reduce((sum, lead) => sum + lead.potentialValue, 0)
            const percentage = (stage.leads.length / mockLeads.length) * 100
            
            return (
              <div key={stage.name} className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{stage.name}</span>
                      <span className="text-sm text-gray-600">{stage.leads.length} Leads</span>
                    </div>
                    <div className="mt-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${stage.color}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{formatCurrency(totalValue)}</div>
                    <div className="text-xs text-gray-500">{percentage.toFixed(1)}%</div>
                  </div>
                </div>
                {index < pipelineStages.length - 2 && (
                  <div className="ml-4 text-xs text-gray-500">
                    {calculateConversionRate(stage.name, pipelineStages[index + 1]?.name)}% →
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Forecasting & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Forecasting */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Umsatz-Forecasting</h3>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Nächster Monat</span>
              <span className="text-lg font-medium text-gray-900">
                {formatCurrency(currentAnalytics.forecasting.nextMonth)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Nächstes Quartal</span>
              <span className="text-lg font-medium text-gray-900">
                {formatCurrency(currentAnalytics.forecasting.nextQuarter)}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-t">
              <span className="text-sm font-medium text-gray-900">Nächstes Jahr</span>
              <span className="text-xl font-bold text-primary-600">
                {formatCurrency(currentAnalytics.forecasting.nextYear)}
              </span>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                📈 Prognose basiert auf aktueller Pipeline und historischen Conversion-Raten
              </p>
            </div>
          </div>
        </div>

        {/* Top Performer */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Top Performer</h3>
            <Award className="h-5 w-5 text-yellow-600" />
          </div>
          <div className="space-y-3">
            {currentAnalytics.topPerformers.map((performer, index) => (
              <div key={performer} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">{performer}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {index === 0 ? '12 Deals' : index === 1 ? '8 Deals' : '6 Deals'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marktanalyse */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verlust-Gründe */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Häufigste Verlust-Gründe</h3>
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="space-y-3">
            {currentAnalytics.lostDealReasons.map((reason, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-900">{reason}</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${35 - index * 5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-red-50 rounded-lg">
            <p className="text-sm text-red-800">
              💡 Fokus auf Wettbewerbsfähigkeit und bessere Zeitplanung könnte Win-Rate verbessern
            </p>
          </div>
        </div>

        {/* Markttrends */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Markttrends</h3>
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            {currentAnalytics.marketTrends.map((trend, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-sm text-gray-900">{trend}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              🚀 E-Mobility Logistik bietet größtes Wachstumspotenzial für 2024
            </p>
          </div>
        </div>
      </div>

      {/* Wettbewerbsanalyse */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Wettbewerbsperformance</h3>
          <span className="text-sm text-gray-600">Wins vs. Losses gegen Konkurrenz</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {currentAnalytics.competitiveWins}
            </div>
            <div className="text-sm text-gray-600">Gewonnene Deals</div>
            <div className="text-xs text-green-600 mt-1">vs. Konkurrenz</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {currentAnalytics.competitiveLosses}
            </div>
            <div className="text-sm text-gray-600">Verlorene Deals</div>
            <div className="text-xs text-red-600 mt-1">an Konkurrenz</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {((currentAnalytics.competitiveWins / (currentAnalytics.competitiveWins + currentAnalytics.competitiveLosses)) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Win Rate</div>
            <div className="text-xs text-primary-600 mt-1">gegen Wettbewerb</div>
          </div>
        </div>
      </div>
    </div>
  )
} 