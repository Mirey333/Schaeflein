'use client'

import { useState } from 'react'
import { Phone, Calendar, MessageSquare } from 'lucide-react'

interface CallbackFormProps {
  customerName: string
  onSubmit: (data: any) => void
}

export default function CallbackForm({ customerName, onSubmit }: CallbackFormProps) {
  const [formData, setFormData] = useState({
    phone: '',
    date: '',
    time: '',
    topic: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card bg-green-50 border-green-200 text-center py-8">
        <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Rückruf angefordert!</h3>
        <p className="text-green-700">Wir rufen Sie zum gewünschten Zeitpunkt an.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Rückruf anfordern</h2>
        <p className="text-gray-600 mb-6">Unser Team ruft Sie zum Wunschtermin an</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="input-field"
              placeholder="+49 89 12345678"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Datum *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="input-field"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Uhrzeit *
              </label>
              <select
                required
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="input-field"
              >
                <option value="">Zeitfenster wählen</option>
                <option value="09:00-10:00">09:00 - 10:00</option>
                <option value="10:00-11:00">10:00 - 11:00</option>
                <option value="14:00-15:00">14:00 - 15:00</option>
                <option value="15:00-16:00">15:00 - 16:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Thema
            </label>
            <select
              value={formData.topic}
              onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
              className="input-field"
            >
              <option value="">Thema wählen</option>
              <option value="booking">Neue Buchung</option>
              <option value="sprintbox">Sprintbox Express</option>
              <option value="pricing">Preisanfrage</option>
              <option value="support">Support/Problem</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notizen & Details
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              rows={3}
              className="input-field"
              placeholder="Beschreiben Sie Ihr Anliegen..."
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            <Phone className="h-4 w-4 mr-2" />
            Rückruf anfordern
          </button>
        </form>
      </div>
    </div>
  )
} 