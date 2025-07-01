'use client'

import { useState } from 'react'
import { Phone, MessageSquare, Calendar, Clock, User, MapPin, Package, AlertCircle, CheckCircle } from 'lucide-react'

interface CallbackRequest {
  id: string
  customerName: string
  phone: string
  email: string
  preferredTime: string
  urgency: 'normal' | 'urgent' | 'asap'
  topic: string
  notes: string
  route?: {
    from: string
    to: string
  }
  goods?: {
    type: string
    weight: string
    specialRequirements: string
  }
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled'
  createdAt: string
}

interface CallbackBookingProps {
  customerId: string
  customerName: string
  onSubmitCallback: (request: CallbackRequest) => void
}

export default function CallbackBooking({ customerId, customerName, onSubmitCallback }: CallbackBookingProps) {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    urgency: 'normal' as const,
    topic: '',
    notes: '',
    routeFrom: '',
    routeTo: '',
    goodsType: '',
    goodsWeight: '',
    specialRequirements: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const urgencyOptions = [
    { value: 'normal', label: 'Normal', color: 'text-gray-600', icon: '📞' },
    { value: 'urgent', label: 'Dringend', color: 'text-orange-600', icon: '⚡' },
    { value: 'asap', label: 'Sofort', color: 'text-red-600', icon: '🚨' }
  ]

  const topicOptions = [
    'Neue Buchung',
    'Sprintbox Express-Service',
    'Komplettladung anfragen',
    'Preisanfrage',
    'Sonderkonditionen',
    'Rückfrage zu laufender Sendung',
    'Technische Beratung',
    'Reklamation/Problem',
    'Sonstiges'
  ]

  const timeSlots = [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuliere API-Call
    await new Promise(resolve => setTimeout(resolve, 1500))

    const callbackRequest: CallbackRequest = {
      id: Date.now().toString(),
      customerName,
      phone: formData.phone,
      email: formData.email,
      preferredTime: `${formData.preferredDate} ${formData.preferredTime}`,
      urgency: formData.urgency,
      topic: formData.topic,
      notes: formData.notes,
      route: formData.routeFrom && formData.routeTo ? {
        from: formData.routeFrom,
        to: formData.routeTo
      } : undefined,
      goods: formData.goodsType ? {
        type: formData.goodsType,
        weight: formData.goodsWeight,
        specialRequirements: formData.specialRequirements
      } : undefined,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    onSubmitCallback(callbackRequest)
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="card bg-green-50 border-green-200">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Rückruf erfolgreich angefordert!</h2>
            <p className="text-green-700 mb-4">
              Vielen Dank für Ihre Anfrage. Unser Experten-Team wird Sie zum gewünschten Zeitpunkt kontaktieren.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-green-200 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-2">Ihre Anfrage im Überblick:</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Thema:</strong> {formData.topic}</div>
                <div><strong>Wunschtermin:</strong> {formData.preferredDate} um {formData.preferredTime}</div>
                <div><strong>Dringlichkeit:</strong> {urgencyOptions.find(o => o.value === formData.urgency)?.label}</div>
                {formData.notes && <div><strong>Notizen:</strong> {formData.notes}</div>}
              </div>
            </div>

            <div className="mt-6 space-x-4">
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
              >
                Weitere Anfrage stellen
              </button>
              <button className="btn-primary">
                Zurück zum Portal
              </button>
            </div>
          </div>
        </div>

        {/* Erwartete Bearbeitungszeit */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">⏰ Was passiert als nächstes?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">1</div>
              <div>
                <div className="font-medium text-gray-900">Sofortige Bestätigung</div>
                <div className="text-sm text-gray-600">Sie erhalten eine Bestätigungs-E-Mail mit Ihrer Anfrage-Nummer</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">2</div>
              <div>
                <div className="font-medium text-gray-900">Expertenauswahl</div>
                <div className="text-sm text-gray-600">Unser System wählt den passenden Spezialisten für Ihr Anliegen aus</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">3</div>
              <div>
                <div className="font-medium text-gray-900">Persönlicher Rückruf</div>
                <div className="text-sm text-gray-600">
                  Rückruf zum Wunschtermin {formData.preferredDate} um {formData.preferredTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-primary-100 rounded-lg">
            <Phone className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">📞 Rückruf anfordern</h2>
            <p className="text-sm text-gray-600">
              Unser Experten-Team ruft Sie zum Wunschtermin an • Kostenlos & unverbindlich
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <strong>Warum Rückruf?</strong> Komplexe Logistik-Anfragen besprechen wir am liebsten persönlich. 
              So können wir Ihnen die beste Lösung für Ihre spezifischen Anforderungen anbieten und direkt ein 
              unverbindliches Angebot erstellen.
            </div>
          </div>
        </div>
      </div>

      {/* Rückruf-Formular */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Kontaktdaten */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">👤 Kontaktdaten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefonnummer *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+49 89 12345678"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail (optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="ihre@email.de"
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Wunschtermin */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Wunschtermin</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Datum *
              </label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                min={new Date().toISOString().split('T')[0]}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Uhrzeit *
              </label>
              <select
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                className="input-field"
              >
                <option value="">Zeitfenster wählen</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dringlichkeit
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value as any }))}
                className="input-field"
              >
                {urgencyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Anliegen */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💼 Ihr Anliegen</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thema *
              </label>
              <select
                required
                value={formData.topic}
                onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                className="input-field"
              >
                <option value="">Thema auswählen</option>
                {topicOptions.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detaillierte Beschreibung & Notizen
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Beschreiben Sie Ihr Anliegen im Detail. Je mehr Informationen Sie uns geben, desto besser können wir Sie beraten..."
                rows={4}
                className="input-field resize-none"
              />
              <div className="text-xs text-gray-500 mt-1">
                Tipp: Erwähnen Sie besondere Anforderungen, Zeitrahmen, Budget oder andere wichtige Details
              </div>
            </div>
          </div>
        </div>

        {/* Transport-Details (optional) */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🚛 Transport-Details (optional)</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Von (Abholung)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.routeFrom}
                    onChange={(e) => setFormData(prev => ({ ...prev, routeFrom: e.target.value }))}
                    placeholder="z.B. München, PLZ oder Adresse"
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nach (Zustellung)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.routeTo}
                    onChange={(e) => setFormData(prev => ({ ...prev, routeTo: e.target.value }))}
                    placeholder="z.B. Berlin, PLZ oder Adresse"
                    className="input-field pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Art der Güter
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.goodsType}
                    onChange={(e) => setFormData(prev => ({ ...prev, goodsType: e.target.value }))}
                    placeholder="z.B. Maschinen, Elektronik, Möbel"
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gewicht/Volumen
                </label>
                <input
                  type="text"
                  value={formData.goodsWeight}
                  onChange={(e) => setFormData(prev => ({ ...prev, goodsWeight: e.target.value }))}
                  placeholder="z.B. 2,5t oder 15 Paletten"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Besondere Anforderungen
              </label>
              <input
                type="text"
                value={formData.specialRequirements}
                onChange={(e) => setFormData(prev => ({ ...prev, specialRequirements: e.target.value }))}
                placeholder="z.B. Kühlung, Gefahrgut, Terminlieferung, Kran erforderlich"
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              * Pflichtfelder • Ihre Daten werden vertraulich behandelt
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary px-8 py-3"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Wird übermittelt...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Rückruf anfordern</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
} 