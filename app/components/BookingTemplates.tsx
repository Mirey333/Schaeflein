'use client'

import { useState } from 'react'
import { Star, Copy, Clock, Repeat, Plus, Edit, Trash2, MapPin, Package, Calendar } from 'lucide-react'

interface BookingTemplate {
  id: string
  name: string
  description: string
  isStarred: boolean
  usage: number
  lastUsed: string
  route: {
    from: string
    to: string
    distance: string
  }
  service: string
  recurring: {
    enabled: boolean
    frequency: 'daily' | 'weekly' | 'monthly'
    nextDate?: string
  }
  estimatedCost: number
  estimatedTime: string
  goods: {
    type: string
    weight: string
    dimensions: string
  }
}

interface BookingTemplatesProps {
  customerId: string
  customerName: string
  onCreateBooking: (template: BookingTemplate) => void
}

export default function BookingTemplates({ customerId, customerName, onCreateBooking }: BookingTemplatesProps) {
  const [templates, setTemplates] = useState<BookingTemplate[]>([
    {
      id: '1',
      name: 'BMW Werk → Audi Produktionslager',
      description: 'Wöchentliche Auslieferung von Motorenkomponenten',
      isStarred: true,
      usage: 47,
      lastUsed: '2024-01-15',
      route: {
        from: 'München BMW Werk 1',
        to: 'Ingolstadt Audi Produktionslager B3',
        distance: '85 km'
      },
      service: 'Komplettladung',
      recurring: {
        enabled: true,
        frequency: 'weekly',
        nextDate: '2024-01-22'
      },
      estimatedCost: 1240,
      estimatedTime: '2.5h',
      goods: {
        type: 'Motorenkomponenten',
        weight: '12.400 kg',
        dimensions: '18 Paletten'
      }
    },
    {
      id: '2',
      name: 'Sprintbox Express - Ersatzteile',
      description: 'Dringende Ersatzteil-Lieferung für Produktionsstillstand',
      isStarred: true,
      usage: 23,
      lastUsed: '2024-01-14',
      route: {
        from: 'München Lager Schäflein',
        to: 'Verschiedene BMW Standorte',
        distance: 'variabel'
      },
      service: 'Sprintbox',
      recurring: {
        enabled: false,
        frequency: 'weekly'
      },
      estimatedCost: 890,
      estimatedTime: '4-6h',
      goods: {
        type: 'Kritische Ersatzteile',
        weight: '< 500 kg',
        dimensions: '1-3 Paletten'
      }
    },
    {
      id: '3',
      name: 'Standardroute - Tageslieferung',
      description: 'Tägliche Routenlieferung zwischen Hauptstandorten',
      isStarred: false,
      usage: 156,
      lastUsed: '2024-01-16',
      route: {
        from: 'München Zentrale',
        to: 'Ingolstadt + Regensburg + Nürnberg',
        distance: '340 km'
      },
      service: 'Stückgut',
      recurring: {
        enabled: true,
        frequency: 'daily',
        nextDate: '2024-01-17'
      },
      estimatedCost: 450,
      estimatedTime: '8h',
      goods: {
        type: 'Diverse Kleinteile',
        weight: '2.100 kg',
        dimensions: '6-8 Paletten'
      }
    }
  ])

  const [showCreateForm, setShowCreateForm] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<BookingTemplate | null>(null)

  const handleStarTemplate = (templateId: string) => {
    setTemplates(prev => prev.map(t => 
      t.id === templateId ? { ...t, isStarred: !t.isStarred } : t
    ))
  }

  const handleUseTemplate = (template: BookingTemplate) => {
    // Aktualisiere Nutzungsstatistiken
    setTemplates(prev => prev.map(t => 
      t.id === template.id 
        ? { ...t, usage: t.usage + 1, lastUsed: new Date().toISOString().split('T')[0] }
        : t
    ))
    
    // Callback für Buchungserstellung
    onCreateBooking(template)
  }

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'Sprintbox': return '⚡'
      case 'Komplettladung': return '🚛'
      case 'Stückgut': return '📦'
      default: return '🚚'
    }
  }

  const getFrequencyText = (frequency: string) => {
    switch (frequency) {
      case 'daily': return 'Täglich'
      case 'weekly': return 'Wöchentlich'
      case 'monthly': return 'Monatlich'
      default: return 'Einmalig'
    }
  }

  const starredTemplates = templates.filter(t => t.isStarred)
  const recentTemplates = templates.sort((a, b) => new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()).slice(0, 3)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">⭐ Buchungsvorlagen</h2>
            <p className="text-sm text-gray-600">{customerName} • {templates.length} Vorlagen verfügbar</p>
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Neue Vorlage
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {templates.reduce((sum, t) => sum + t.usage, 0)}
            </div>
            <div className="text-sm text-blue-700">Buchungen über Vorlagen</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {starredTemplates.length}
            </div>
            <div className="text-sm text-green-700">Favoriten-Routen</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {templates.filter(t => t.recurring.enabled).length}
            </div>
            <div className="text-sm text-purple-700">Wiederkehrende Aufträge</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {Math.round(templates.reduce((sum, t) => sum + t.estimatedCost, 0) / templates.length)}€
            </div>
            <div className="text-sm text-orange-700">Ø Kosten pro Route</div>
          </div>
        </div>
      </div>

      {/* Favoriten-Vorlagen */}
      {starredTemplates.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Ihre Favoriten
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {starredTemplates.map((template) => (
              <div key={template.id} className="p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{getServiceIcon(template.service)}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleStarTemplate(template.id)}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    <Star className="h-4 w-4 fill-current" />
                  </button>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{template.route.from} → {template.route.to}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">💰 {template.estimatedCost.toLocaleString('de-DE')}€</span>
                    <span className="text-gray-600">⏱️ {template.estimatedTime}</span>
                    <span className="text-gray-600">📈 {template.usage}x genutzt</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {template.recurring.enabled && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                        <Repeat className="h-3 w-3 mr-1" />
                        {getFrequencyText(template.recurring.frequency)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleUseTemplate(template)}
                    className="btn-primary text-sm"
                  >
                    Jetzt buchen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alle Vorlagen */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">📋 Alle Buchungsvorlagen</h3>
          <div className="flex items-center space-x-2">
            <button className="btn-secondary text-sm">
              <Copy className="h-4 w-4 mr-2" />
              Vorlage duplizieren
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {templates.map((template) => (
            <div key={template.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary-200 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <span className="text-2xl">{getServiceIcon(template.service)}</span>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{template.name}</h4>
                      <button
                        onClick={() => handleStarTemplate(template.id)}
                        className={`${template.isStarred ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-500`}
                      >
                        <Star className={`h-4 w-4 ${template.isStarred ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Route</div>
                        <div className="font-medium">{template.route.from}</div>
                        <div className="text-gray-600">→ {template.route.to}</div>
                        <div className="text-xs text-gray-500">{template.route.distance}</div>
                      </div>
                      
                      <div>
                        <div className="text-gray-500">Ladung</div>
                        <div className="font-medium">{template.goods.type}</div>
                        <div className="text-gray-600">{template.goods.weight}</div>
                        <div className="text-xs text-gray-500">{template.goods.dimensions}</div>
                      </div>
                      
                      <div>
                        <div className="text-gray-500">Details</div>
                        <div className="font-medium">{template.service}</div>
                        <div className="text-gray-600">{template.estimatedCost.toLocaleString('de-DE')}€</div>
                        <div className="text-xs text-gray-500">ca. {template.estimatedTime}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-3">
                      <span className="text-xs text-gray-500">
                        Zuletzt genutzt: {new Date(template.lastUsed).toLocaleDateString('de-DE')}
                      </span>
                      <span className="text-xs text-gray-500">
                        {template.usage}x verwendet
                      </span>
                      {template.recurring.enabled && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                          <Repeat className="h-3 w-3 mr-1" />
                          {getFrequencyText(template.recurring.frequency)}
                          {template.recurring.nextDate && (
                            <span className="ml-1">
                              (nächste: {new Date(template.recurring.nextDate).toLocaleDateString('de-DE')})
                            </span>
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="btn-secondary text-sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Bearbeiten
                  </button>
                  <button
                    onClick={() => handleUseTemplate(template)}
                    className="btn-primary text-sm"
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    Jetzt buchen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KI-Optimierungsvorschläge */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Package className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-900">🤖 KI-Optimierungsvorschläge</h3>
            <div className="text-sm text-blue-700 mt-2 space-y-1">
              <p>• <strong>Routenoptimierung:</strong> Kombination der BMW→Audi Route mit Rückfracht könnte 15% Kosten sparen</p>
              <p>• <strong>Timing-Optimierung:</strong> Verschiebung der täglichen Route um 2h würde Verkehrsstaus vermeiden</p>
              <p>• <strong>Service-Upgrade:</strong> 3 Sprintbox-Buchungen könnten als Komplettladung effizienter sein</p>
            </div>
            <button className="btn-primary text-sm mt-3">
              Optimierungen anwenden
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 