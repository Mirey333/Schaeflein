'use client'

import { useState } from 'react'
import { 
  Target, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  BarChart3,
  Globe,
  Settings,
  Plus,
  Star,
  DollarSign
} from 'lucide-react'
import { mockKPIs, mockCustomers, mockLeads, mockCampaigns, mockCustomerPortalUsers, mockCustomerBookings, mockCustomerDocuments, mockSupportTickets, mockCustomerAnalytics } from './data/mockData'
import KPICard from './components/KPICard'
import CustomerTable from './components/CustomerTable'
import LeadPipeline from './components/LeadPipeline'
import CampaignOverview from './components/CampaignOverview'
import CustomerPortalDashboard from './components/CustomerPortalDashboard'
import BookingCenter from './components/BookingCenter'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [portalSubSection, setPortalSubSection] = useState('dashboard')
  const [selectedCustomer, setSelectedCustomer] = useState('1') // BMW AG

  const navigationItems = [
    { id: 'dashboard', label: 'CRM Dashboard', icon: BarChart3 },
    { id: 'leads', label: 'Lead-Management', icon: Target },
    { id: 'customers', label: 'Bestandskunden', icon: Users },
    { id: 'campaigns', label: 'Kampagnen & Social Media', icon: MessageSquare },
    { id: 'portal', label: 'Kundenportal', icon: Globe },
    { id: 'processes', label: 'CRM-Automatisierung', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schäflein CRM Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              {/* Schäflein Logo */}
              <div className="bg-schaefleinRed-600 px-4 py-2 rounded-lg flex items-center">
                <span className="text-white font-bold text-xl">schäflein</span>
                <div className="ml-2 flex flex-col">
                  <div className="w-8 h-1 bg-primary-400 mb-1 rounded"></div>
                  <div className="w-6 h-1 bg-primary-300 mb-1 rounded"></div>
                  <div className="w-4 h-1 bg-primary-200 rounded"></div>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Schäflein CRM-System</h1>
                <p className="text-sm text-gray-600">Neukundengewinnung • Bestandskundenpflege • Automatisierung</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm">
                <p className="font-medium text-gray-900">Workshop-Demo</p>
                <p className="text-gray-600">ROI-Orientiert</p>
              </div>
              <div className="bg-success-50 px-3 py-1 rounded-full">
                <span className="text-success-700 text-sm font-medium">✅ Demo-System</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* CRM Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* CRM Strategy Welcome Section */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white">
              <div className="flex items-center space-x-6">
                <div className="bg-white/10 p-4 rounded-full">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">CRM-Strategie 2024</h2>
                  <p className="text-xl text-white/90 mb-4">
                    Fokus auf Neukundengewinnung und Bestandskundenpflege
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>Sprintbox-Leads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Truckservice-Akquise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Social Media</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Automatisierung</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">ROI</div>
                    <div className="text-sm text-white/80">Workshop-Ziel</div>
                    <div className="text-lg font-semibold mt-1">35k€ Setup</div>
                  </div>
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockKPIs.slice(0, 4).map((kpi, index) => (
                <KPICard key={index} kpi={kpi} />
              ))}
            </div>

            {/* CRM Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sprintbox & Truckservice Leads */}
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">🎯 Fokus-Services: Leads</h3>
                  <button className="btn-primary text-sm">Neuer Lead</button>
                </div>
                <div className="space-y-4">
                  {mockLeads.filter(lead => 
                    lead.source.includes('Sprintbox') || 
                    lead.source.includes('Truck') || 
                    lead.company.includes('Express') ||
                    lead.status === 'Qualifiziert'
                  ).slice(0, 4).map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          lead.status === 'Qualifiziert' ? 'bg-green-500' :
                          lead.status === 'Kontaktiert' ? 'bg-blue-500' :
                          lead.status === 'Angebot' ? 'bg-orange-500' : 'bg-gray-400'
                        }`} />
                        <div>
                          <p className="font-semibold text-gray-900">{lead.company}</p>
                          <p className="text-sm text-gray-600">
                            {lead.source.includes('Sprintbox') ? '⚡ Sprintbox' : 
                             lead.source.includes('Truck') ? '🚛 Truckservice' : '📦 Standard'} • {lead.potentialValue.toLocaleString('de-DE')}€
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'Qualifiziert' ? 'bg-green-100 text-green-800' :
                          lead.status === 'Kontaktiert' ? 'bg-blue-100 text-blue-800' :
                          lead.status === 'Angebot' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* VIP Bestandskunden */}
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">👑 VIP-Bestandskunden</h3>
                  <button className="btn-secondary text-sm">Kundenpflege</button>
                </div>
                <div className="space-y-4">
                  {mockCustomers.filter(c => c.tier === 'Platinum' || c.tier === 'Gold').slice(0, 3).map((customer) => (
                    <div key={customer.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${
                          customer.tier === 'Platinum' ? 'bg-purple-500' : 'bg-yellow-500'
                        }`} />
                        <div>
                          <p className="font-semibold text-gray-900">{customer.name}</p>
                          <p className="text-sm text-gray-600">
                            {customer.businessType} • {(customer.totalRevenue / 1000000).toFixed(1)}M€/Jahr
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {customer.tier} Partner
                        </div>
                        <div className="text-xs text-gray-600">
                          Letzter Kontakt: {new Date(customer.lastContact).toLocaleDateString('de-DE')}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center py-4">
                    <button className="btn-primary text-sm">
                      🤖 Automatische Follow-ups aktivieren
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lead-Management */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Lead-Management & Scoring</h3>
                <button className="btn-primary text-sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Neuer Lead
                </button>
              </div>
              
              {/* Lead Score Übersicht */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="card">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {mockLeads.filter(l => l.leadScore >= 80).length}
                      </div>
                      <div className="text-sm text-gray-600">Hot Leads (80+)</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {mockLeads.filter(l => l.leadScore >= 60 && l.leadScore < 80).length}
                      </div>
                      <div className="text-sm text-gray-600">Warm Leads (60-79)</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {Math.round(mockLeads.reduce((sum, l) => sum + l.daysInPipeline, 0) / mockLeads.length)}
                      </div>
                      <div className="text-sm text-gray-600">Ø Tage in Pipeline</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {((mockLeads.reduce((sum, l) => sum + l.potentialValue, 0)) / 1000000).toFixed(1)}M €
                      </div>
                      <div className="text-sm text-gray-600">Pipeline Wert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <LeadPipeline leads={mockLeads} />
          </div>
        )}

        {/* Bestandskunden */}
        {activeTab === 'customers' && <CustomerTable customers={mockCustomers} />}
        
        {/* Kampagnen & Social Media */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Marketing Kampagnen & ROI</h3>
                <button className="btn-primary text-sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Neue Kampagne
                </button>
              </div>
              
              {/* ROI-Übersicht */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div className="card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {(mockCampaigns.reduce((sum, c) => sum + (c.roi || 0), 0) / mockCampaigns.length).toFixed(1)}x
                    </div>
                    <div className="text-sm text-gray-600">Ø ROI</div>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {Math.round(mockCampaigns.reduce((sum, c) => sum + (c.costPerLead || 0), 0) / mockCampaigns.length).toLocaleString('de-DE')}€
                    </div>
                    <div className="text-sm text-gray-600">Ø Cost/Lead</div>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {mockCampaigns.reduce((sum, c) => sum + (c.leadGenerated || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-600">Leads generiert</div>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {((mockCampaigns.reduce((sum, c) => sum + (c.revenueGenerated || 0), 0)) / 1000).toFixed(0)}k€
                    </div>
                    <div className="text-sm text-gray-600">Revenue generiert</div>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      {((mockCampaigns.reduce((sum, c) => sum + (c.budget || 0), 0)) / 1000).toFixed(0)}k€
                    </div>
                    <div className="text-sm text-gray-600">Budget investiert</div>
                  </div>
                </div>
              </div>
            </div>
            
            <CampaignOverview campaigns={mockCampaigns} />
          </div>
        )}

        {/* CRM-Automatisierung */}
        {activeTab === 'processes' && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">🤖 CRM-Automatisierung</h3>
                <button className="btn-primary text-sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Neue Automation
                </button>
              </div>
              
              {/* Automatisierungs-Bereiche */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-blue-50 border-blue-200">
                  <div className="text-center p-4">
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lead-Qualifizierung</h4>
                    <p className="text-sm text-gray-600 mb-4">Automatische Bewertung und Routing neuer Leads</p>
                    <div className="text-lg font-bold text-blue-600 mb-2">92%</div>
                    <div className="text-xs text-gray-500">Accuracy Rate</div>
                    <button className="btn-primary text-sm mt-3 w-full">Konfigurieren</button>
                  </div>
                </div>
                
                <div className="card bg-green-50 border-green-200">
                  <div className="text-center p-4">
                    <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bestandskunden-Pflege</h4>
                    <p className="text-sm text-gray-600 mb-4">Automatische Follow-ups und Cross-Selling</p>
                    <div className="text-lg font-bold text-green-600 mb-2">+34%</div>
                    <div className="text-xs text-gray-500">Upsell Rate</div>
                    <button className="btn-primary text-sm mt-3 w-full">Aktivieren</button>
                  </div>
                </div>
                
                <div className="card bg-purple-50 border-purple-200">
                  <div className="text-center p-4">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                    <p className="text-sm text-gray-600 mb-4">Automatische Kampagnen und Lead-Generierung</p>
                    <div className="text-lg font-bold text-purple-600 mb-2">2.3k</div>
                    <div className="text-xs text-gray-500">Leads/Monat</div>
                    <button className="btn-primary text-sm mt-3 w-full">Setup</button>
                  </div>
                </div>
              </div>
              
              {/* Aktive Automationen */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Aktive Automationen</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <h5 className="font-medium text-gray-900">Sprintbox Lead Nurturing</h5>
                        <p className="text-sm text-gray-600">Automatische E-Mail-Sequenz für Express-Service-Interessenten</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">87% Conversion</div>
                      <div className="text-xs text-gray-500">234 Leads diese Woche</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <h5 className="font-medium text-gray-900">VIP-Kunden Reaktivierung</h5>
                        <p className="text-sm text-gray-600">Automatische Kontaktaufnahme bei inaktiven Platinum-Kunden</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">42% Reaktivierung</div>
                      <div className="text-xs text-gray-500">12 Kunden kontaktiert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Kundenportal */}
        {activeTab === 'portal' && (
          <div className="space-y-8">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">🌐 Kundenportal 2.0</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Demo-Kunde:</span>
                    <select
                      value={selectedCustomer}
                      onChange={(e) => setSelectedCustomer(e.target.value)}
                      className="input-field py-2 text-sm"
                    >
                      <option value="1">BMW AG (Thomas Wagner)</option>
                      <option value="2">Audi AG (Sarah Klein)</option>
                    </select>
                  </div>
                  <span className="bg-success-100 text-success-800 text-sm font-medium px-3 py-1 rounded-full">
                    Demo aktiv
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPortalSubSection('dashboard')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    portalSubSection === 'dashboard'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  🏠 Dashboard
                </button>
                <button
                  onClick={() => setPortalSubSection('booking')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    portalSubSection === 'booking'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  📦 Neue Buchung
                </button>
              </div>
            </div>

            {portalSubSection === 'dashboard' && (
              <CustomerPortalDashboard
                currentUser={mockCustomerPortalUsers.find(u => u.customerId === selectedCustomer)!}
                bookings={mockCustomerBookings.filter(b => b.customerId === selectedCustomer)}
                documents={mockCustomerDocuments.filter(d => d.customerId === selectedCustomer)}
                tickets={mockSupportTickets.filter(t => t.customerId === selectedCustomer)}
                analytics={mockCustomerAnalytics.find(a => a.customerId === selectedCustomer)!}
                customerName={mockCustomers.find(c => c.id === selectedCustomer)?.name || ''}
              />
            )}

            {portalSubSection === 'booking' && (
              <BookingCenter
                customerId={selectedCustomer}
                customerName={mockCustomers.find(c => c.id === selectedCustomer)?.name || ''}
                onBookingCreated={(booking) => {
                  console.log('Neue Buchung erstellt:', booking)
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
} 