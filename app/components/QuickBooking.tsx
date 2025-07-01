'use client'

import { useState } from 'react'
import { Star, Calendar, MapPin, Package } from 'lucide-react'

interface QuickBookingProps {
  customerId: string
  onCreateBooking: (template: any) => void
}

export default function QuickBooking({ customerId, onCreateBooking }: QuickBookingProps) {
  const [templates] = useState([
    {
      id: '1',
      name: 'BMW Werk → Audi Lager',
      isStarred: true,
      usage: 47,
      route: { from: 'München BMW', to: 'Ingolstadt Audi' },
      service: 'Komplettladung',
      cost: 1240,
      time: '2.5h'
    },
    {
      id: '2', 
      name: 'Sprintbox Express',
      isStarred: true,
      usage: 23,
      route: { from: 'München Lager', to: 'Verschiedene Standorte' },
      service: 'Sprintbox',
      cost: 890,
      time: '4-6h'
    }
  ])

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⭐ Buchungsvorlagen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{template.name}</h4>
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{template.route.from} → {template.route.to}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>💰 {template.cost.toLocaleString('de-DE')}€</span>
                  <span>⏱️ {template.time}</span>
                  <span>📈 {template.usage}x</span>
                </div>
              </div>

              <button
                onClick={() => onCreateBooking(template)}
                className="btn-primary text-sm w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Jetzt buchen
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-3">
          <Package className="h-5 w-5 text-blue-600" />
          <div>
            <h3 className="font-medium text-blue-900">🤖 KI-Optimierung</h3>
            <p className="text-sm text-blue-700 mt-1">
              Routenoptimierung könnte 15% Kosten sparen durch intelligente Kombination von Hin- und Rückfracht.
            </p>
            <button className="btn-primary text-sm mt-2">Optimierung anwenden</button>
          </div>
        </div>
      </div>
    </div>
  )
} 