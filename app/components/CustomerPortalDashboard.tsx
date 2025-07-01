import { Package, FileText, MessageSquare, TrendingUp, Clock, CheckCircle, AlertTriangle, Download, Users, Phone, Mail, Star, Calendar, Euro, MapPin, Truck, CreditCard, Bookmark } from 'lucide-react'
import { CustomerPortalUser, CustomerBooking, CustomerDocument, SupportTicket, CustomerAnalytics } from '../types'
import { useState } from 'react'
import LiveTrackingMap from './LiveTrackingMap'
import SmartDocuments from './SmartDocuments'
import QuickBooking from './QuickBooking'
import CallbackForm from './CallbackForm'
import BillingDashboard from './BillingDashboard'

interface CustomerPortalDashboardProps {
  currentUser: CustomerPortalUser
  bookings: CustomerBooking[]
  documents: CustomerDocument[]
  tickets: SupportTicket[]
  analytics: CustomerAnalytics
  customerName: string
}

export default function CustomerPortalDashboard({ 
  currentUser, 
  bookings, 
  documents, 
  tickets, 
  analytics, 
  customerName 
}: CustomerPortalDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'tracking' | 'documents' | 'booking' | 'billing' | 'callback'>('overview')
  
  const getStatusColor = (status: CustomerBooking['status']) => {
    switch (status) {
      case 'Angebot': return 'bg-gray-50 text-gray-800 border-gray-200'
      case 'Bestätigt': return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'In Bearbeitung': return 'bg-orange-50 text-orange-800 border-orange-200'
      case 'Abgeholt': return 'bg-purple-50 text-purple-800 border-purple-200'
      case 'Transit': return 'bg-yellow-50 text-yellow-800 border-yellow-200'
      case 'Zugestellt': return 'bg-success-50 text-success-800 border-success-200'
      case 'Storniert': return 'bg-danger-50 text-danger-800 border-danger-200'
      default: return 'bg-gray-50 text-gray-800 border-gray-200'
    }
  }

  const getPriorityColor = (priority: CustomerBooking['priority']) => {
    switch (priority) {
      case 'Kritisch': return 'text-danger-600'
      case 'Express': return 'text-warning-600'
      case 'Standard': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  const getTicketStatusColor = (status: SupportTicket['status']) => {
    switch (status) {
      case 'Open': return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'In Progress': return 'bg-orange-50 text-orange-800 border-orange-200'
      case 'Waiting': return 'bg-yellow-50 text-yellow-800 border-yellow-200'
      case 'Resolved': return 'bg-success-50 text-success-800 border-success-200'
      case 'Closed': return 'bg-gray-50 text-gray-800 border-gray-200'
      default: return 'bg-gray-50 text-gray-800 border-gray-200'
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const activeBookings = bookings.filter(b => !['Zugestellt', 'Storniert'].includes(b.status))
  const recentDocuments = documents.slice(0, 3)
  const openTickets = tickets.filter(t => ['Open', 'In Progress', 'Waiting'].includes(t.status))

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Willkommen, {currentUser.name}! 👋
            </h1>
            <p className="text-xl text-white/90 mb-4">
              {customerName} • Kundenportal
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Letzter Login: {new Date(currentUser.lastLogin).toLocaleDateString('de-DE')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{currentUser.department}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{currentUser.email}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">
                {analytics.satisfaction.average.toFixed(1)} ⭐
              </div>
              <div className="text-sm text-white/80">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {analytics.shipments.total}
              </div>
              <div className="text-sm text-gray-600">Sendungen (Monat)</div>
              <div className="text-xs text-success-600">
                {analytics.shipments.onTime} pünktlich
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Euro className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {(analytics.revenue.total / 1000).toFixed(0)}k€
              </div>
              <div className="text-sm text-gray-600">Umsatz (Monat)</div>
              <div className="text-xs text-success-600">
                +{analytics.revenue.change}% vs. Vormonat
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {documents.length}
              </div>
              <div className="text-sm text-gray-600">Dokumente</div>
              <div className="text-xs text-gray-500">
                {analytics.portalUsage.downloads} Downloads
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {openTickets.length}
              </div>
              <div className="text-sm text-gray-600">Offene Tickets</div>
              <div className="text-xs text-gray-500">
                {analytics.portalUsage.tickets} gesamt
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Features Banner */}
      <div className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Star className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-900 mb-2">🚀 Neues Self-Service Portal ist da!</h3>
            <p className="text-sm text-green-800 mb-3">
              Verwalten Sie Ihre Transporte jetzt komplett eigenständig mit unseren neuen Premium-Features:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-green-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span><strong>Live GPS-Tracking:</strong> Sendungen in Echtzeit verfolgen</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span><strong>Smart Documents:</strong> Intelligente Dokumentensuche</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span><strong>Buchungsvorlagen:</strong> Favoriten-Routen mit einem Klick</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span><strong>Expertenrückruf:</strong> Persönliche Beratung nach Wunsch</span>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-3">
              <button 
                onClick={() => setActiveTab('tracking')}
                className="btn-primary text-sm"
              >
                Jetzt ausprobieren
              </button>
              <span className="text-xs text-green-600 font-medium">
                ✨ Kostenlos für alle VIP-Kunden
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">🚀 Self-Service Portal</h3>
          <p className="text-sm text-gray-600">Verwalten Sie Ihre Transporte komplett eigenständig</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`btn-action ${activeTab === 'overview' ? 'btn-action-active' : ''}`}
          >
            <TrendingUp className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Dashboard</div>
            <div className="text-xs text-gray-600">Übersicht</div>
          </button>
          <button 
            onClick={() => setActiveTab('tracking')}
            className={`btn-action ${activeTab === 'tracking' ? 'btn-action-active' : ''}`}
          >
            <Truck className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Live-Tracking</div>
            <div className="text-xs text-gray-600">GPS-Verfolgung</div>
          </button>
          <button 
            onClick={() => setActiveTab('booking')}
            className={`btn-action ${activeTab === 'booking' ? 'btn-action-active' : ''}`}
          >
            <Bookmark className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Buchungsvorlagen</div>
            <div className="text-xs text-gray-600">Favoriten-Routen</div>
          </button>
          <button 
            onClick={() => setActiveTab('documents')}
            className={`btn-action ${activeTab === 'documents' ? 'btn-action-active' : ''}`}
          >
            <FileText className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Smart Documents</div>
            <div className="text-xs text-gray-600">Intelligente Suche</div>
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`btn-action ${activeTab === 'billing' ? 'btn-action-active' : ''}`}
          >
            <CreditCard className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Billing</div>
            <div className="text-xs text-gray-600">Kosten & Zahlungen</div>
          </button>
          <button 
            onClick={() => setActiveTab('callback')}
            className={`btn-action ${activeTab === 'callback' ? 'btn-action-active' : ''}`}
          >
            <Phone className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Rückruf</div>
            <div className="text-xs text-gray-600">Expertenberatung</div>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'tracking' && (
        <div className="space-y-6">
          <div className="card bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <Truck className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">🛰️ Live GPS-Tracking</h3>
                <p className="text-sm text-blue-700">Verfolgen Sie Ihre Sendungen in Echtzeit</p>
              </div>
            </div>
          </div>
          <LiveTrackingMap shipmentId="current" customerBooking={activeBookings[0]} />
        </div>
      )}

      {activeTab === 'documents' && (
        <SmartDocuments 
          documents={documents} 
          customerName={customerName}
        />
      )}

      {activeTab === 'booking' && (
        <QuickBooking 
          customerId={currentUser.id}
          onCreateBooking={(template) => {
            console.log('Booking created:', template)
            // Hier würde die Buchung erstellt werden
          }}
        />
      )}

      {activeTab === 'billing' && (
        <BillingDashboard 
          customerId={currentUser.id}
          customerName={customerName}
        />
      )}

      {activeTab === 'callback' && (
        <CallbackForm 
          customerName={customerName}
          onSubmit={(data) => {
            console.log('Callback requested:', data)
            // Hier würde die Rückruf-Anfrage verarbeitet werden
          }}
        />
      )}

      {/* Overview Content */}
      {activeTab === 'overview' && (
        <>
          {/* Active Bookings & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Active Bookings */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">📦 Aktive Buchungen</h3>
                <span className="text-sm text-gray-600">
                  {activeBookings.length} laufende Transporte
                </span>
              </div>
              
              {activeBookings.length > 0 ? (
                <div className="space-y-4">
                  {activeBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="card bg-gray-50 border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {booking.customerReference}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {booking.pickup.city} → {booking.delivery.city}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                          <div className={`text-xs font-medium mt-1 ${getPriorityColor(booking.priority)}`}>
                            {booking.priority}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Service</div>
                          <div className="font-medium text-gray-900">{booking.service}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Lieferung</div>
                          <div className="font-medium text-gray-900">
                            {new Date(booking.estimatedDelivery).toLocaleDateString('de-DE')}
                          </div>
                        </div>
                      </div>
                      
                      {booking.trackingNumber && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <button 
                            onClick={() => setActiveTab('tracking')}
                            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                          >
                            📍 Live-Tracking: {booking.trackingNumber}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {activeBookings.length > 3 && (
                    <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium py-2">
                      Alle {activeBookings.length} Buchungen anzeigen →
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Keine aktiven Buchungen</p>
                  <button 
                    onClick={() => setActiveTab('booking')}
                    className="btn-primary mt-4"
                  >
                    Neue Buchung erstellen
                  </button>
                </div>
              )}
            </div>

            {/* Recent Documents & Support */}
            <div className="space-y-6">
              {/* Recent Documents */}
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">📄 Neueste Dokumente</h3>
                  <button 
                    onClick={() => setActiveTab('documents')}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Alle anzeigen
                  </button>
                </div>
                
                {recentDocuments.length > 0 ? (
                  <div className="space-y-3">
                    {recentDocuments.map((doc) => (
                      <div key={doc.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <FileText className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 truncate">
                            {doc.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {doc.type} • {formatFileSize(doc.fileSize)}
                          </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">Keine Dokumente verfügbar</p>
                  </div>
                )}
              </div>

              {/* Support Status */}
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">💬 Support</h3>
                  <button 
                    onClick={() => setActiveTab('callback')}
                    className="btn-primary text-sm"
                  >
                    Expertenrückruf
                  </button>
                </div>
                
                {openTickets.length > 0 ? (
                  <div className="space-y-3">
                    {openTickets.slice(0, 2).map((ticket) => (
                      <div key={ticket.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 truncate">
                            {ticket.subject}
                          </h4>
                          <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getTicketStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {ticket.category} • {new Date(ticket.createdAt).toLocaleDateString('de-DE')}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">Keine offenen Tickets</p>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2">
                      🤖 KI-Chat starten
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Analytics Preview */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">📊 Ihre Logistik im Überblick</h3>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Detaillierte Analyse →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Top Services */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Meist genutzte Services</h4>
                <div className="space-y-2">
                  {analytics.topServices.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{service.service}</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {service.count}x
                        </div>
                        <div className="text-xs text-gray-500">
                          {(service.revenue / 1000).toFixed(0)}k€
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Routes */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Häufigste Routen</h4>
                <div className="space-y-2">
                  {analytics.topRoutes.slice(0, 3).map((route, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        {route.origin} → {route.destination}
                      </span>
                      <div className="text-sm font-medium text-gray-900">
                        {route.count}x
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal Usage */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Portal-Nutzung</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Logins</span>
                    <span className="text-sm font-medium text-gray-900">
                      {analytics.portalUsage.logins}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Buchungen</span>
                    <span className="text-sm font-medium text-gray-900">
                      {analytics.portalUsage.bookings}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Downloads</span>
                    <span className="text-sm font-medium text-gray-900">
                      {analytics.portalUsage.downloads}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 