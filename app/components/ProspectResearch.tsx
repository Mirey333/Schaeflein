'use client'

import { useState } from 'react'
import {
  Search,
  Building2,
  Users,
  DollarSign,
  Target,
  Star,
  Phone,
  Mail,
  Linkedin,
  Globe,
  MapPin,
  Calendar,
  TrendingUp,
  AlertCircle,
  Eye,
  Plus,
  Filter
} from 'lucide-react'
import { mockProspectResearch } from '../data/mockData'
import { ProspectResearch } from '../types'

interface ProspectResearchProps {
  prospects?: ProspectResearch[]
}

export default function ProspectResearchComponent({ prospects = mockProspectResearch }: ProspectResearchProps) {
  const [selectedProspect, setSelectedProspect] = useState<ProspectResearch | null>(null)
  const [filterPriority, setFilterPriority] = useState('Alle')
  const [filterStatus, setFilterStatus] = useState('Alle')

  const priorities = ['Alle', 'Kritisch', 'Hoch', 'Mittel', 'Niedrig']
  const statuses = ['Alle', 'Recherche', 'Qualifiziert', 'Kontaktiert', 'Nicht Interessiert']

  const filteredProspects = prospects.filter(prospect => {
    const matchesPriority = filterPriority === 'Alle' || prospect.priority === filterPriority
    const matchesStatus = filterStatus === 'Alle' || prospect.status === filterStatus
    return matchesPriority && matchesStatus
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Kritisch': return 'bg-red-100 text-red-800'
      case 'Hoch': return 'bg-orange-100 text-orange-800'
      case 'Mittel': return 'bg-yellow-100 text-yellow-800'
      case 'Niedrig': return 'bg-gray-100 text-gray-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Qualifiziert': return 'bg-green-100 text-green-800'
      case 'Kontaktiert': return 'bg-blue-100 text-blue-800'
      case 'Recherche': return 'bg-yellow-100 text-yellow-800'
      case 'Nicht Interessiert': return 'bg-gray-100 text-gray-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  const formatCurrency = (amount: number) => {
    return (amount / 1000000).toFixed(1) + 'M €'
  }

  const formatRevenue = (revenue: number) => {
    if (revenue >= 1000000000) {
      return (revenue / 1000000000).toFixed(1) + 'Mrd €'
    } else if (revenue >= 1000000) {
      return (revenue / 1000000).toFixed(0) + 'M €'
    } else {
      return (revenue / 1000).toFixed(0) + 'k €'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header mit Statistiken */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{prospects.length}</div>
              <div className="text-sm text-gray-600">Prospects Recherchiert</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(prospects.reduce((sum, p) => sum + p.potentialValue, 0))}
              </div>
              <div className="text-sm text-gray-600">Gesamtpotenzial</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {prospects.filter(p => p.priority === 'Kritisch').length}
              </div>
              <div className="text-sm text-gray-600">Kritische Priorität</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {prospects.filter(p => p.status === 'Qualifiziert').length}
              </div>
              <div className="text-sm text-gray-600">Qualifiziert</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {priorities.map(priority => (
                <option key={priority} value={priority}>{priority}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="ml-auto">
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Neuen Prospect hinzufügen
            </button>
          </div>
        </div>
      </div>

      {/* Prospects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProspects.map((prospect) => (
          <div key={prospect.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Building2 className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{prospect.companyName}</h3>
                  <p className="text-sm text-gray-600">{prospect.industry}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(prospect.priority)}`}>
                  {prospect.priority}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(prospect.status)}`}>
                  {prospect.status}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <div>
                    <div className="font-medium">{formatRevenue(prospect.revenue)}</div>
                    <div className="text-xs">Jahresumsatz</div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <div>
                    <div className="font-medium">{prospect.employees.toLocaleString()}</div>
                    <div className="text-xs">Mitarbeiter</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{prospect.location}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Target className="h-4 w-4 mr-2" />
                <span className="font-medium text-primary-600">
                  {formatCurrency(prospect.potentialValue)} Potenzial
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="text-sm font-medium text-gray-700">Top Insights:</div>
              {prospect.keyInsights.slice(0, 2).map((insight, index) => (
                <div key={index} className="text-xs text-gray-600 pl-2 border-l-2 border-gray-200">
                  {insight}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(prospect.researchDate).toLocaleDateString('de-DE')}
              </div>
              <button 
                onClick={() => setSelectedProspect(prospect)}
                className="text-primary-600 hover:text-primary-900 text-sm font-medium"
              >
                <Eye className="h-4 w-4 inline mr-1" />
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProspect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProspect.companyName}</h2>
                  <p className="text-gray-600">{selectedProspect.industry} • {selectedProspect.location}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(selectedProspect.priority)}`}>
                      {selectedProspect.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedProspect.status)}`}>
                      {selectedProspect.status}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProspect(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Unternehmensdaten */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Unternehmensdaten</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <a href={`https://${selectedProspect.website}`} target="_blank" rel="noopener noreferrer" 
                         className="text-primary-600 hover:underline">
                        {selectedProspect.website}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>{formatRevenue(selectedProspect.revenue)} Jahresumsatz</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{selectedProspect.employees.toLocaleString()} Mitarbeiter</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-primary-600">
                        {formatCurrency(selectedProspect.potentialValue)} Geschäftspotenzial
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Business Need</h4>
                    <p className="text-sm text-gray-600">{selectedProspect.businessNeed}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                    <p className="text-sm text-gray-600">{selectedProspect.timeline}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Budget</h4>
                    <p className="text-sm text-gray-600">{selectedProspect.budget}</p>
                  </div>
                </div>

                {/* Entscheidungsträger & Insights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Schlüsselpersonen</h3>
                  <div className="space-y-3">
                    {selectedProspect.decisionMakers.map((person, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-gray-900">{person.name}</div>
                        <div className="text-sm text-gray-600">{person.role}</div>
                        <div className="flex items-center space-x-3 mt-2">
                          {person.email && (
                            <a href={`mailto:${person.email}`} className="text-primary-600 hover:underline">
                              <Mail className="h-3 w-3 inline mr-1" />
                              Email
                            </a>
                          )}
                          {person.phone && (
                            <a href={`tel:${person.phone}`} className="text-primary-600 hover:underline">
                              <Phone className="h-3 w-3 inline mr-1" />
                              Telefon
                            </a>
                          )}
                          {person.linkedIn && (
                            <a href={person.linkedIn} target="_blank" rel="noopener noreferrer" 
                               className="text-primary-600 hover:underline">
                              <Linkedin className="h-3 w-3 inline mr-1" />
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Insights</h4>
                    <div className="space-y-2">
                      {selectedProspect.keyInsights.map((insight, index) => (
                        <div key={index} className="text-sm text-gray-600 pl-3 border-l-2 border-primary-200">
                          {insight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Pain Points</h4>
                    <div className="space-y-1">
                      {selectedProspect.painPoints.map((point, index) => (
                        <div key={index} className="text-sm text-gray-600">• {point}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Wettbewerbsanalyse</h4>
                    <p className="text-sm text-gray-600">{selectedProspect.competitorAnalysis}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setSelectedProspect(null)}
                  className="btn-secondary"
                >
                  Schließen
                </button>
                <button className="btn-primary">
                  Zu Leads konvertieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 