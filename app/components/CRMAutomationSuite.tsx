'use client'

import { useState } from 'react'
import { 
  Settings, 
  Zap, 
  Mail, 
  Users, 
  TrendingUp, 
  Play,
  Pause,
  BarChart3,
  Target,
  MessageSquare,
  Calendar,
  Filter,
  GitBranch,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Plus,
  Edit3,
  Eye,
  Trash2
} from 'lucide-react'

interface Automation {
  id: string
  name: string
  type: 'Email' | 'Lead_Scoring' | 'Social_Media' | 'Follow_up' | 'Onboarding'
  status: 'Active' | 'Paused' | 'Draft'
  trigger: string
  steps: number
  leads: number
  conversions: number
  roi: number
  lastRun: string
  performance: {
    openRate?: number
    clickRate?: number
    conversionRate: number
  }
}

interface WorkflowStep {
  id: string
  type: 'trigger' | 'condition' | 'action' | 'delay'
  title: string
  description: string
  config: any
}

export default function CRMAutomationSuite() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedAutomation, setSelectedAutomation] = useState<string | null>(null)

  const tabs = [
    { id: 'overview', label: '🏠 Übersicht', icon: BarChart3 },
    { id: 'workflows', label: '⚡ Workflows', icon: GitBranch },
    { id: 'email', label: '📧 Email-Sequenzen', icon: Mail },
    { id: 'scoring', label: '🎯 Lead Scoring', icon: Target },
    { id: 'triggers', label: '🔔 Trigger', icon: Zap },
    { id: 'analytics', label: '📊 Analytics', icon: TrendingUp },
    { id: 'integrations', label: '🔗 Integrationen', icon: Settings }
  ]

  const mockAutomations: Automation[] = [
    {
      id: '1',
      name: 'Welcome Onboarding BMW',
      type: 'Onboarding',
      status: 'Active',
      trigger: 'Neuer Kunde registriert',
      steps: 7,
      leads: 156,
      conversions: 89,
      roi: 340,
      lastRun: '2024-01-15T10:30:00',
      performance: {
        openRate: 68,
        clickRate: 23,
        conversionRate: 57
      }
    },
    {
      id: '2',
      name: 'Inaktive VIP-Kunden Reaktivierung',
      type: 'Follow_up',
      status: 'Active',
      trigger: 'Keine Aktivität > 30 Tage',
      steps: 5,
      leads: 23,
      conversions: 12,
      roi: 890,
      lastRun: '2024-01-15T08:15:00',
      performance: {
        openRate: 82,
        clickRate: 34,
        conversionRate: 52
      }
    },
    {
      id: '3',
      name: 'LinkedIn Lead Nurturing',
      type: 'Social_Media',
      status: 'Active',
      trigger: 'LinkedIn Verbindung akzeptiert',
      steps: 6,
      leads: 445,
      conversions: 67,
      roi: 245,
      lastRun: '2024-01-15T12:00:00',
      performance: {
        conversionRate: 15
      }
    },
    {
      id: '4',
      name: 'Express-Service Interessenten',
      type: 'Lead_Scoring',
      status: 'Paused',
      trigger: 'Sprintbox-Seite besucht',
      steps: 4,
      leads: 298,
      conversions: 45,
      roi: 178,
      lastRun: '2024-01-14T16:45:00',
      performance: {
        openRate: 45,
        clickRate: 12,
        conversionRate: 15
      }
    },
    {
      id: '5',
      name: 'Webinar Follow-up Audi',
      type: 'Email',
      status: 'Draft',
      trigger: 'Webinar Teilnahme',
      steps: 3,
      leads: 0,
      conversions: 0,
      roi: 0,
      lastRun: '',
      performance: {
        conversionRate: 0
      }
    }
  ]

  const workflowSteps: WorkflowStep[] = [
    {
      id: '1',
      type: 'trigger',
      title: 'Neuer Lead erstellt',
      description: 'Wenn ein neuer Lead über das Kontaktformular eingeht',
      config: { source: 'contact_form', delay: 0 }
    },
    {
      id: '2',
      type: 'condition',
      title: 'Unternehmensgröße prüfen',
      description: 'Wenn Unternehmen > 500 Mitarbeiter',
      config: { field: 'company_size', operator: 'greater_than', value: 500 }
    },
    {
      id: '3',
      type: 'action',
      title: 'Willkommens-Email senden',
      description: 'Personalisierte Begrüßung mit Firmen-Broschüre',
      config: { template: 'welcome_enterprise', personalized: true }
    },
    {
      id: '4',
      type: 'delay',
      title: 'Warten',
      description: '2 Tage warten',
      config: { duration: 2, unit: 'days' }
    },
    {
      id: '5',
      type: 'action',
      title: 'Termin-Link senden',
      description: 'Calendly-Link für Beratungsgespräch',
      config: { template: 'consultation_booking', calendly_link: true }
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Paused': return 'bg-yellow-100 text-yellow-800'
      case 'Draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <Play className="h-4 w-4" />
      case 'Paused': return <Pause className="h-4 w-4" />
      case 'Draft': return <Edit3 className="h-4 w-4" />
      default: return <Settings className="h-4 w-4" />
    }
  }

  const getTriggerIcon = (type: string) => {
    switch (type) {
      case 'Email': return <Mail className="h-5 w-5" />
      case 'Lead_Scoring': return <Target className="h-5 w-5" />
      case 'Social_Media': return <MessageSquare className="h-5 w-5" />
      case 'Follow_up': return <Users className="h-5 w-5" />
      case 'Onboarding': return <CheckCircle className="h-5 w-5" />
      default: return <Settings className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">🤖 CRM Automation Suite</h2>
            <p className="text-gray-600 mt-1">Intelligente Workflows & automatisierte Kundenkommunikation</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {mockAutomations.filter(a => a.status === 'Active').length}
              </div>
              <div className="text-sm text-gray-600">Aktive Flows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {mockAutomations.reduce((sum, a) => sum + a.leads, 0)}
              </div>
              <div className="text-sm text-gray-600">Leads processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(mockAutomations.reduce((sum, a) => sum + a.roi, 0) / mockAutomations.length)}%
              </div>
              <div className="text-sm text-gray-600">Ø ROI</div>
            </div>
            <button className="btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Neue Automation
            </button>
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
        <div className="space-y-6">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Automatisierungsgrad</p>
                  <p className="text-2xl font-bold text-green-600">87%</p>
                  <p className="text-xs text-green-600">+12% vs. Vormonat</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Zeitersparnis</p>
                  <p className="text-2xl font-bold text-blue-600">23h</p>
                  <p className="text-xs text-blue-600">pro Woche</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-purple-600">34%</p>
                  <p className="text-xs text-purple-600">+8% durch Automation</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ROI Gesamt</p>
                  <p className="text-2xl font-bold text-orange-600">530%</p>
                  <p className="text-xs text-orange-600">über alle Automationen</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Active Automations */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">🔄 Aktive Automationen</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Alle exportieren</button>
                <button className="btn-primary text-sm">Performance Report</button>
              </div>
            </div>

            <div className="space-y-4">
              {mockAutomations.map((automation) => (
                <div key={automation.id} className="border rounded-lg p-6 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        automation.type === 'Email' ? 'bg-blue-100' :
                        automation.type === 'Lead_Scoring' ? 'bg-green-100' :
                        automation.type === 'Social_Media' ? 'bg-purple-100' :
                        automation.type === 'Follow_up' ? 'bg-orange-100' : 'bg-gray-100'
                      }`}>
                        {getTriggerIcon(automation.type)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{automation.name}</h4>
                        <p className="text-sm text-gray-600">{automation.trigger}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(automation.status)}`}>
                            {getStatusIcon(automation.status)}
                            <span>{automation.status}</span>
                          </span>
                          <span className="text-xs text-gray-500">{automation.steps} Schritte</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{automation.roi}%</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{automation.leads}</div>
                      <div className="text-xs text-gray-600">Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{automation.conversions}</div>
                      <div className="text-xs text-gray-600">Conversions</div>
                    </div>
                    {automation.performance.openRate && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{automation.performance.openRate}%</div>
                        <div className="text-xs text-gray-600">Öffnungsrate</div>
                      </div>
                    )}
                    {automation.performance.clickRate && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">{automation.performance.clickRate}%</div>
                        <div className="text-xs text-gray-600">Klickrate</div>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-lg font-bold text-indigo-600">{automation.performance.conversionRate}%</div>
                      <div className="text-xs text-gray-600">Conversion</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Zuletzt ausgeführt: {automation.lastRun ? new Date(automation.lastRun).toLocaleString('de-DE') : 'Noch nicht gestartet'}
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-sm flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>Ansehen</span>
                      </button>
                      <button className="btn-secondary text-sm flex items-center space-x-1">
                        <Edit3 className="h-4 w-4" />
                        <span>Bearbeiten</span>
                      </button>
                      {automation.status === 'Active' ? (
                        <button className="btn-secondary text-sm flex items-center space-x-1">
                          <Pause className="h-4 w-4" />
                          <span>Pausieren</span>
                        </button>
                      ) : (
                        <button className="btn-primary text-sm flex items-center space-x-1">
                          <Play className="h-4 w-4" />
                          <span>Starten</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Workflow Builder */}
      {activeTab === 'workflows' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">⚡ Workflow Designer</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Template laden</button>
                <button className="btn-primary text-sm">Neuer Workflow</button>
              </div>
            </div>

            {/* Workflow Canvas */}
            <div className="bg-gray-50 rounded-lg p-6 min-h-[600px]">
              <div className="grid grid-cols-1 gap-6">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      step.type === 'trigger' ? 'bg-green-500' :
                      step.type === 'condition' ? 'bg-yellow-500' :
                      step.type === 'action' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-primary-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              step.type === 'trigger' ? 'bg-green-100 text-green-800' :
                              step.type === 'condition' ? 'bg-yellow-100 text-yellow-800' :
                              step.type === 'action' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {step.type === 'trigger' ? 'Auslöser' :
                               step.type === 'condition' ? 'Bedingung' :
                               step.type === 'action' ? 'Aktion' : 'Verzögerung'}
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-gray-600">
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-px h-8 bg-gray-300 ml-6 mt-4"></div>
                    )}
                  </div>
                ))}
                
                {/* Add Step Button */}
                <div className="flex items-center justify-center">
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Schritt hinzufügen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Sequences */}
      {activeTab === 'email' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">📧 Email-Sequenzen</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Template importieren</button>
                <button className="btn-primary text-sm">Neue Sequenz</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Email Sequences */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Aktive Sequenzen</h4>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">Welcome BMW Neukunden</h5>
                        <p className="text-sm text-gray-600">7 Emails über 14 Tage</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-blue-600">87%</div>
                      <div className="text-gray-600">Öffnungsrate</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">34%</div>
                      <div className="text-gray-600">Klickrate</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600">23%</div>
                      <div className="text-gray-600">Conversion</div>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button className="btn-secondary text-xs">Bearbeiten</button>
                    <button className="btn-secondary text-xs">Statistiken</button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">VIP Reaktivierung</h5>
                        <p className="text-sm text-gray-600">5 Emails über 10 Tage</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-blue-600">92%</div>
                      <div className="text-gray-600">Öffnungsrate</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">67%</div>
                      <div className="text-gray-600">Klickrate</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600">45%</div>
                      <div className="text-gray-600">Conversion</div>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button className="btn-secondary text-xs">Bearbeiten</button>
                    <button className="btn-secondary text-xs">Statistiken</button>
                  </div>
                </div>
              </div>

              {/* Email Templates */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Email-Vorlagen</h4>
                
                <div className="space-y-3">
                  <div className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">Willkommen B2B Enterprise</h5>
                        <p className="text-sm text-gray-600">Personalisiert für Großkunden</p>
                      </div>
                      <button className="btn-secondary text-xs">Verwenden</button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">Follow-up nach Termin</h5>
                        <p className="text-sm text-gray-600">Automatische Nachfrage</p>
                      </div>
                      <button className="btn-secondary text-xs">Verwenden</button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">Angebot nachfassen</h5>
                        <p className="text-sm text-gray-600">3-Stufen Reminder</p>
                      </div>
                      <button className="btn-secondary text-xs">Verwenden</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead Scoring */}
      {activeTab === 'scoring' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">🎯 Lead Scoring</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Scoring-Regel</button>
                <button className="btn-primary text-sm">Neue Bewertung</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Scoring Rules */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="font-semibold text-gray-900">Bewertungskriterien</h4>
                
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium">Firmengröße</h5>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Aktiv</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>KMU (50-250 MA)</span>
                        <span className="font-medium">+15 Punkte</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mittelstand (250-1000 MA)</span>
                        <span className="font-medium">+25 Punkte</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Konzern (1000+ MA)</span>
                        <span className="font-medium">+40 Punkte</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium">Website-Aktivität</h5>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Aktiv</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Preisseite besucht</span>
                        <span className="font-medium">+20 Punkte</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Case Study gelesen</span>
                        <span className="font-medium">+15 Punkte</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Demo angefordert</span>
                        <span className="font-medium">+50 Punkte</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium">Branche</h5>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Aktiv</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Automotive</span>
                        <span className="font-medium">+30 Punkte</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Logistik</span>
                        <span className="font-medium">+35 Punkte</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fertigung</span>
                        <span className="font-medium">+25 Punkte</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Score Distribution */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Score-Verteilung</h4>
                
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-red-800">Kalt (0-25)</span>
                      <span className="text-red-600 font-bold">234</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-yellow-800">Warm (26-50)</span>
                      <span className="text-yellow-600 font-bold">167</span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '32%'}}></div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-green-800">Heiß (51-75)</span>
                      <span className="text-green-600 font-bold">89</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '17%'}}></div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-purple-800">Ready (76+)</span>
                      <span className="text-purple-600 font-bold">34</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '6%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <h5 className="font-medium mb-3">Top Leads heute</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>BMW Group München</span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">92</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Volkswagen AG</span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">87</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mercedes Benz</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">73</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Triggers */}
      {activeTab === 'triggers' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">🔔 Trigger Management</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Trigger testen</button>
                <button className="btn-primary text-sm">Neuer Trigger</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Triggers */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Aktive Trigger</h4>
                
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Zap className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">Neuer Lead</h5>
                          <p className="text-sm text-gray-600">Kontaktformular eingegangen</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Ausgelöst: <strong>47 mal heute</strong>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-xs">Bearbeiten</button>
                      <button className="btn-secondary text-xs">Log ansehen</button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">Email geöffnet</h5>
                          <p className="text-sm text-gray-600">Kampagne "BMW Welcome"</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Ausgelöst: <strong>156 mal heute</strong>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-xs">Bearbeiten</button>
                      <button className="btn-secondary text-xs">Log ansehen</button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">LinkedIn Verbindung</h5>
                          <p className="text-sm text-gray-600">Neue Verbindung akzeptiert</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Ausgelöst: <strong>23 mal heute</strong>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-xs">Bearbeiten</button>
                      <button className="btn-secondary text-xs">Log ansehen</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger Categories */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Trigger-Kategorien</h4>
                
                <div className="grid gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 mb-2">📧 Email Events</h5>
                    <div className="text-sm text-blue-600 space-y-1">
                      <div>• Email geöffnet (23 aktiv)</div>
                      <div>• Link geklickt (18 aktiv)</div>
                      <div>• Email abbestellt (5 aktiv)</div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-medium text-green-800 mb-2">🌐 Website Events</h5>
                    <div className="text-sm text-green-600 space-y-1">
                      <div>• Seite besucht (34 aktiv)</div>
                      <div>• Formular ausgefüllt (12 aktiv)</div>
                      <div>• Download gestartet (8 aktiv)</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 className="font-medium text-purple-800 mb-2">👥 CRM Events</h5>
                    <div className="text-sm text-purple-600 space-y-1">
                      <div>• Lead erstellt (15 aktiv)</div>
                      <div>• Status geändert (9 aktiv)</div>
                      <div>• Termin gebucht (6 aktiv)</div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h5 className="font-medium text-orange-800 mb-2">📱 Social Media</h5>
                    <div className="text-sm text-orange-600 space-y-1">
                      <div>• LinkedIn Verbindung (4 aktiv)</div>
                      <div>• XING Nachricht (2 aktiv)</div>
                      <div>• Facebook Interaktion (1 aktiv)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">📊 Automation Analytics</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Export PDF</button>
                <button className="btn-primary text-sm">Bericht erstellen</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">923</div>
                  <div className="text-sm text-gray-600">Leads automatisiert</div>
                  <div className="text-xs text-green-600 mt-1">+34% vs. Vormonat</div>
                </div>
              </div>
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">234</div>
                  <div className="text-sm text-gray-600">Emails versendet</div>
                  <div className="text-xs text-blue-600 mt-1">+18% vs. Vormonat</div>
                </div>
              </div>
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">67%</div>
                  <div className="text-sm text-gray-600">Öffnungsrate</div>
                  <div className="text-xs text-purple-600 mt-1">+5% vs. Vormonat</div>
                </div>
              </div>
              <div className="card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">289%</div>
                  <div className="text-sm text-gray-600">ROI Average</div>
                  <div className="text-xs text-orange-600 mt-1">+23% vs. Vormonat</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance by Automation */}
              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-4">🎯 Performance nach Automation</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Welcome BMW</div>
                        <div className="text-sm text-gray-600">340% ROI</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">89 Conv.</div>
                      <div className="text-xs text-gray-600">156 Leads</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium">VIP Reaktivierung</div>
                        <div className="text-sm text-gray-600">890% ROI</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">12 Conv.</div>
                      <div className="text-xs text-gray-600">23 Leads</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium">LinkedIn Nurturing</div>
                        <div className="text-sm text-gray-600">245% ROI</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">67 Conv.</div>
                      <div className="text-xs text-gray-600">445 Leads</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Trends */}
              <div className="card">
                <h4 className="font-semibold text-gray-900 mb-4">📈 Wöchentliche Trends</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Leads generiert</span>
                      <span className="font-medium">234 (Diese Woche)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Email-Öffnungen</span>
                      <span className="font-medium">1,567 (Diese Woche)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Conversions</span>
                      <span className="font-medium">67 (Diese Woche)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '64%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ROI</span>
                      <span className="font-medium">289% (Durchschnitt)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Integrations */}
      {activeTab === 'integrations' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">🔗 System-Integrationen</h3>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Integration hinzufügen</button>
                <button className="btn-primary text-sm">Verbindung testen</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Active Integrations */}
              <div className="card bg-green-50 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Mailchimp</h4>
                      <p className="text-sm text-gray-600">Email Marketing</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Letzte Sync: <strong>vor 2 Min</strong><br/>
                  Emails versendet: <strong>2,334 heute</strong>
                </div>
                <div className="flex space-x-2">
                  <button className="btn-secondary text-xs">Konfigurieren</button>
                  <button className="btn-secondary text-xs">Logs</button>
                </div>
              </div>

              <div className="card bg-green-50 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">LinkedIn Sales</h4>
                      <p className="text-sm text-gray-600">Social Selling</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Letzte Sync: <strong>vor 5 Min</strong><br/>
                  Nachrichten: <strong>67 heute</strong>
                </div>
                <div className="flex space-x-2">
                  <button className="btn-secondary text-xs">Konfigurieren</button>
                  <button className="btn-secondary text-xs">Logs</button>
                </div>
              </div>

              <div className="card bg-green-50 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Google Analytics</h4>
                      <p className="text-sm text-gray-600">Web Tracking</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aktiv</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Letzte Sync: <strong>vor 1 Min</strong><br/>
                  Events: <strong>1,234 heute</strong>
                </div>
                <div className="flex space-x-2">
                  <button className="btn-secondary text-xs">Konfigurieren</button>
                  <button className="btn-secondary text-xs">Logs</button>
                </div>
              </div>

              {/* Available Integrations */}
              <div className="card bg-gray-50 border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Slack</h4>
                      <p className="text-sm text-gray-600">Team Communication</p>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Verfügbar</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Automatische Benachrichtigungen<br/>
                  bei wichtigen CRM-Events
                </div>
                <div className="flex space-x-2">
                  <button className="btn-primary text-xs">Verbinden</button>
                  <button className="btn-secondary text-xs">Info</button>
                </div>
              </div>

              <div className="card bg-gray-50 border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Calendly</h4>
                      <p className="text-sm text-gray-600">Termin-Buchung</p>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Verfügbar</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Automatische Termine<br/>
                  nach Lead-Qualifizierung
                </div>
                <div className="flex space-x-2">
                  <button className="btn-primary text-xs">Verbinden</button>
                  <button className="btn-secondary text-xs">Info</button>
                </div>
              </div>

              <div className="card bg-gray-50 border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp Business</h4>
                      <p className="text-sm text-gray-600">Messaging</p>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Verfügbar</span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Direkter Kundenkontakt<br/>
                  für wichtige Updates
                </div>
                <div className="flex space-x-2">
                  <button className="btn-primary text-xs">Verbinden</button>
                  <button className="btn-secondary text-xs">Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 