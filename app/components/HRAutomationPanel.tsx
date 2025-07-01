'use client'

import { useState } from 'react'
import {
  Settings,
  Play,
  Pause,
  Calendar,
  Mail,
  CheckSquare,
  Bell,
  Clock,
  Users,
  Gift,
  Award,
  AlertTriangle,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'
import { mockHRAutomations } from '../data/mockData'
import { HRAutomation } from '../types'

interface HRAutomationPanelProps {
  automations?: HRAutomation[]
}

export default function HRAutomationPanel({ automations = mockHRAutomations }: HRAutomationPanelProps) {
  const [selectedAutomation, setSelectedAutomation] = useState<HRAutomation | null>(null)
  const [filterType, setFilterType] = useState('Alle')

  const automationTypes = ['Alle', 'Onboarding', 'Offboarding', 'Performance Review', 'Geburtstag', 'Jubiläum', 'Vertragsende', 'Schulungserinnerung']

  const filteredAutomations = automations.filter(auto => 
    filterType === 'Alle' || auto.type === filterType
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Onboarding': return Users
      case 'Offboarding': return Users
      case 'Performance Review': return Award
      case 'Geburtstag': return Gift
      case 'Jubiläum': return Calendar
      case 'Vertragsende': return AlertTriangle
      case 'Schulungserinnerung': return Bell
      default: return Settings
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Onboarding': return 'bg-green-100 text-green-800'
      case 'Offboarding': return 'bg-red-100 text-red-800'
      case 'Performance Review': return 'bg-purple-100 text-purple-800'
      case 'Geburtstag': return 'bg-pink-100 text-pink-800'
      case 'Jubiläum': return 'bg-yellow-100 text-yellow-800'
      case 'Vertragsende': return 'bg-orange-100 text-orange-800'
      case 'Schulungserinnerung': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'Email': return Mail
      case 'Task': return CheckSquare
      case 'Document': return Settings
      case 'Notification': return Bell
      default: return Settings
    }
  }

  const toggleAutomation = (id: string) => {
    // Hier würde die API-Logik zum Aktivieren/Deaktivieren stehen
    console.log(`Toggle automation ${id}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">HR-Automatisierung</h3>
          <p className="text-sm text-gray-600">Automatisierte Workflows für Personalabläufe</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Neue Automatisierung
        </button>
      </div>

      {/* Filter */}
      <div className="card">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Typ:</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            {automationTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <div className="ml-auto flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {filteredAutomations.filter(a => a.isActive).length} aktiv von {filteredAutomations.length}
            </span>
          </div>
        </div>
      </div>

      {/* Statistiken */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{automations.length}</div>
              <div className="text-sm text-gray-600">Gesamte Automatisierungen</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Play className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{automations.filter(a => a.isActive).length}</div>
              <div className="text-sm text-gray-600">Aktiv</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1.247</div>
              <div className="text-sm text-gray-600">Ausgeführt (diesen Monat)</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98.5%</div>
              <div className="text-sm text-gray-600">Erfolgsrate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Automatisierungen Liste */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAutomations.map((automation) => {
          const TypeIcon = getTypeIcon(automation.type)
          return (
            <div key={automation.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <TypeIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{automation.name}</h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(automation.type)}`}>
                      {automation.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleAutomation(automation.id)}
                    className={`p-1 rounded ${automation.isActive ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-50'}`}
                  >
                    {automation.isActive ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  </button>
                  <button 
                    onClick={() => setSelectedAutomation(automation)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Trigger: {automation.trigger}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Aktionen:</div>
                  {automation.actions.map((action, index) => {
                    const ActionIcon = getActionIcon(action.type)
                    return (
                      <div key={index} className="flex items-center space-x-2 pl-4">
                        <ActionIcon className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">
                          {action.type} an {action.recipient}
                          {action.daysOffset !== 0 && (
                            <span className="ml-1 text-gray-500">
                              ({action.daysOffset > 0 ? '+' : ''}{action.daysOffset} Tage)
                            </span>
                          )}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {automation.lastTriggered && (
                  <div className="flex items-center text-xs text-gray-500 pt-2 border-t">
                    <Clock className="h-3 w-3 mr-1" />
                    Zuletzt ausgeführt: {new Date(automation.lastTriggered).toLocaleDateString('de-DE')}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail Modal */}
      {selectedAutomation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedAutomation.name}</h2>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full mt-2 ${getTypeColor(selectedAutomation.type)}`}>
                    {selectedAutomation.type}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedAutomation(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trigger-Bedingung</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-900">{selectedAutomation.trigger}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Automatisierte Aktionen</label>
                  <div className="space-y-3">
                    {selectedAutomation.actions.map((action, index) => {
                      const ActionIcon = getActionIcon(action.type)
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                          <ActionIcon className="h-5 w-5 text-gray-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{action.type}</div>
                            <div className="text-xs text-gray-600">
                              An: {action.recipient} • Template: {action.template}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {action.daysOffset === 0 ? 'Sofort' : `${action.daysOffset > 0 ? '+' : ''}${action.daysOffset} Tage`}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <div className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                      selectedAutomation.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedAutomation.isActive ? 'Aktiv' : 'Inaktiv'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Erstellt am</label>
                    <div className="text-sm text-gray-900">
                      {new Date(selectedAutomation.createdAt).toLocaleDateString('de-DE')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setSelectedAutomation(null)}
                  className="btn-secondary"
                >
                  Schließen
                </button>
                <button 
                  onClick={() => toggleAutomation(selectedAutomation.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm ${
                    selectedAutomation.isActive 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {selectedAutomation.isActive ? 'Deaktivieren' : 'Aktivieren'}
                </button>
                <button className="btn-primary">
                  Bearbeiten
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 