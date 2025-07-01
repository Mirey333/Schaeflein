import { useState } from 'react'
import { Package, MapPin, Clock, Euro, Truck, Shield, FileText, CheckCircle, AlertTriangle, Calendar, Plus, Minus, Info } from 'lucide-react'
import { CustomerBooking, BookingLocation, BookingGoods, BookingRequirements } from '../types'

interface BookingCenterProps {
  customerId: string
  customerName: string
  onBookingCreated?: (booking: CustomerBooking) => void
}

export default function BookingCenter({ customerId, customerName, onBookingCreated }: BookingCenterProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    customerReference: '',
    service: 'Stückgut' as CustomerBooking['service'],
    priority: 'Standard' as CustomerBooking['priority'],
    pickup: {
      company: '',
      contact: '',
      address: '',
      city: '',
      zip: '',
      country: 'Deutschland',
      phone: '',
      email: '',
      openingHours: '',
      specialInstructions: ''
    } as BookingLocation,
    delivery: {
      company: '',
      contact: '',
      address: '',
      city: '',
      zip: '',
      country: 'Deutschland',
      phone: '',
      email: '',
      openingHours: '',
      specialInstructions: ''
    } as BookingLocation,
    goods: {
      description: '',
      weight: 0,
      dimensions: { length: 0, width: 0, height: 0 },
      quantity: 1,
      packageType: 'Palette' as BookingGoods['packageType'],
      value: 0,
      isHazardous: false,
      hazardClass: '',
      temperatureControlled: false,
      temperatureRange: { min: 0, max: 0 }
    } as BookingGoods,
    requirements: {
      specialEquipment: [] as string[],
      loadingMethod: 'Hinten' as BookingRequirements['loadingMethod'],
      insurance: false,
      customsClearance: false,
      deliveryAppointment: false,
      returnReceipt: false,
      photoConfirmation: false
    } as BookingRequirements,
    estimatedPickup: '',
    estimatedDelivery: '',
    notes: ''
  })

  const services = [
    { id: 'Stückgut', name: 'Stückgut', description: 'Bis 31,5 kg, Europa-weit', icon: '📦' },
    { id: 'Komplettladung', name: 'Komplettladung', description: 'Ganze LKW-Ladung, direkt', icon: '🚛' },
    { id: 'Sprintbox', name: 'Sprintbox', description: 'Express-Service, 24h', icon: '⚡' },
    { id: 'Europa Express', name: 'Europa Express', description: 'NextDay in Europa', icon: '🇪🇺' },
    { id: 'Luftfracht', name: 'Luftfracht', description: 'Weltweit per Flugzeug', icon: '✈️' },
    { id: 'Seefracht', name: 'Seefracht', description: 'Container-Transport', icon: '🚢' }
  ]

  const priorities = [
    { id: 'Standard', name: 'Standard', description: 'Reguläre Bearbeitung', color: 'text-gray-600' },
    { id: 'Express', name: 'Express', description: 'Bevorzugte Bearbeitung', color: 'text-warning-600' },
    { id: 'Kritisch', name: 'Kritisch', description: 'Höchste Priorität', color: 'text-danger-600' }
  ]

  const specialEquipment = [
    'Hubwagen', 'Kran', 'Gabelstapler', 'Ladebordwand', 'Spezialtransport', 'Kühlcontainer'
  ]

  const calculateEstimatedPrice = () => {
    let basePrice = 0
    const distance = 300 // Beispiel-Entfernung
    
    switch (formData.service) {
      case 'Stückgut': basePrice = distance * 0.8; break
      case 'Komplettladung': basePrice = distance * 2.5; break
      case 'Sprintbox': basePrice = distance * 1.8; break
      case 'Europa Express': basePrice = distance * 1.5; break
      case 'Luftfracht': basePrice = distance * 8.0; break
      case 'Seefracht': basePrice = distance * 1.2; break
    }

    const priorityMultiplier = formData.priority === 'Express' ? 1.5 : formData.priority === 'Kritisch' ? 2.0 : 1.0
    const equipmentCost = formData.requirements.specialEquipment.length * 50
    const insuranceCost = formData.requirements.insurance ? formData.goods.value * 0.01 : 0
    
    const subtotal = basePrice * priorityMultiplier + equipmentCost + insuranceCost
    const tax = subtotal * 0.19
    
    return {
      basePrice: basePrice * priorityMultiplier,
      equipment: equipmentCost,
      insurance: insuranceCost,
      tax,
      total: subtotal + tax
    }
  }

  const pricing = calculateEstimatedPrice()

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    const newBooking: CustomerBooking = {
      id: `cb${Date.now()}`,
      customerId,
      customerReference: formData.customerReference,
      service: formData.service,
      priority: formData.priority,
      pickup: formData.pickup,
      delivery: formData.delivery,
      goods: formData.goods,
      requirements: formData.requirements,
      pricing: {
        basePrice: pricing.basePrice,
        fuelSurcharge: pricing.basePrice * 0.15,
        insurance: pricing.insurance,
        specialServices: pricing.equipment,
        tax: pricing.tax,
        total: pricing.total,
        currency: 'EUR',
        validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
      },
      status: 'Angebot',
      createdBy: 'current-user',
      createdAt: new Date().toISOString(),
      estimatedPickup: formData.estimatedPickup,
      estimatedDelivery: formData.estimatedDelivery,
      notes: formData.notes
    }

    onBookingCreated?.(newBooking)
    alert('Buchung erfolgreich erstellt! Sie erhalten in Kürze ein Angebot.')
  }

  const toggleEquipment = (equipment: string) => {
    const current = formData.requirements.specialEquipment
    const updated = current.includes(equipment)
      ? current.filter(e => e !== equipment)
      : [...current, equipment]
    
    setFormData({
      ...formData,
      requirements: { ...formData.requirements, specialEquipment: updated }
    })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">🚚 Neue Buchung erstellen</h1>
        <p className="text-white/90">
          {customerName} • Schritt {step} von 5
        </p>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="card">
            {/* Step 1: Service & Priority */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">1. Service & Priorität</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Referenz
                  </label>
                  <input
                    type="text"
                    value={formData.customerReference}
                    onChange={(e) => setFormData({ ...formData, customerReference: e.target.value })}
                    placeholder="z.B. BMW-2024-001"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Logistik-Service wählen
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setFormData({ ...formData, service: service.id as CustomerBooking['service'] })}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.service === service.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-600">{service.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Priorität
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {priorities.map((priority) => (
                      <button
                        key={priority.id}
                        onClick={() => setFormData({ ...formData, priority: priority.id as CustomerBooking['priority'] })}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          formData.priority === priority.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`font-medium ${priority.color}`}>
                          {priority.name}
                        </div>
                        <div className="text-sm text-gray-600">{priority.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Pickup Location */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">2. Abholadresse</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Firma *
                    </label>
                    <input
                      type="text"
                      value={formData.pickup.company}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, company: e.target.value }
                      })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ansprechpartner *
                    </label>
                    <input
                      type="text"
                      value={formData.pickup.contact}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, contact: e.target.value }
                      })}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse *
                  </label>
                  <input
                    type="text"
                    value={formData.pickup.address}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      pickup: { ...formData.pickup, address: e.target.value }
                    })}
                    className="input-field"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PLZ *
                    </label>
                    <input
                      type="text"
                      value={formData.pickup.zip}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, zip: e.target.value }
                      })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stadt *
                    </label>
                    <input
                      type="text"
                      value={formData.pickup.city}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, city: e.target.value }
                      })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Land
                    </label>
                    <select
                      value={formData.pickup.country}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, country: e.target.value }
                      })}
                      className="input-field"
                    >
                      <option>Deutschland</option>
                      <option>Österreich</option>
                      <option>Polen</option>
                      <option>Andere</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.pickup.phone}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, phone: e.target.value }
                      })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Öffnungszeiten
                    </label>
                    <input
                      type="text"
                      value={formData.pickup.openingHours}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        pickup: { ...formData.pickup, openingHours: e.target.value }
                      })}
                      placeholder="z.B. 07:00-16:00"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Besondere Hinweise
                  </label>
                  <textarea
                    value={formData.pickup.specialInstructions}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      pickup: { ...formData.pickup, specialInstructions: e.target.value }
                    })}
                    placeholder="z.B. Anlieferung über Tor 3, Ersatzteile-Lager"
                    className="input-field"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Delivery Location - Similar structure as pickup */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">3. Zustelladresse</h3>
                </div>
                {/* Similar form fields as pickup - shortened for brevity */}
                <div className="text-center py-8 text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Zustelladresse eingeben...</p>
                  <p className="text-sm">(Gleiche Felder wie Abholadresse)</p>
                </div>
              </div>
            )}

            {/* Step 4: Goods & Requirements */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">4. Waren & Anforderungen</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Warenbeschreibung *
                  </label>
                  <input
                    type="text"
                    value={formData.goods.description}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      goods: { ...formData.goods, description: e.target.value }
                    })}
                    placeholder="z.B. Motor-Ersatzteile für 3er Serie"
                    className="input-field"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gewicht (kg) *
                    </label>
                    <input
                      type="number"
                      value={formData.goods.weight}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        goods: { ...formData.goods, weight: Number(e.target.value) }
                      })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Länge (cm)
                    </label>
                    <input
                      type="number"
                      value={formData.goods.dimensions.length}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        goods: { 
                          ...formData.goods, 
                          dimensions: { ...formData.goods.dimensions, length: Number(e.target.value) }
                        }
                      })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Breite (cm)
                    </label>
                    <input
                      type="number"
                      value={formData.goods.dimensions.width}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        goods: { 
                          ...formData.goods, 
                          dimensions: { ...formData.goods.dimensions, width: Number(e.target.value) }
                        }
                      })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Höhe (cm)
                    </label>
                    <input
                      type="number"
                      value={formData.goods.dimensions.height}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        goods: { 
                          ...formData.goods, 
                          dimensions: { ...formData.goods.dimensions, height: Number(e.target.value) }
                        }
                      })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Spezielle Ausrüstung
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {specialEquipment.map((equipment) => (
                      <button
                        key={equipment}
                        type="button"
                        onClick={() => toggleEquipment(equipment)}
                        className={`p-3 rounded-lg border text-sm transition-all ${
                          formData.requirements.specialEquipment.includes(equipment)
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {equipment}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Zusätzliche Services
                  </label>
                  
                  {[
                    { key: 'insurance', label: 'Transportversicherung', icon: Shield },
                    { key: 'deliveryAppointment', label: 'Terminzustellung', icon: Calendar },
                    { key: 'returnReceipt', label: 'Rückschein', icon: FileText },
                    { key: 'photoConfirmation', label: 'Foto-Bestätigung', icon: CheckCircle }
                  ].map(({ key, label, icon: Icon }) => (
                    <label key={key} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.requirements[key as keyof BookingRequirements] as boolean}
                        onChange={(e) => setFormData({
                          ...formData,
                          requirements: { 
                            ...formData.requirements, 
                            [key]: e.target.checked 
                          }
                        })}
                        className="h-4 w-4 text-primary-600 rounded border-gray-300"
                      />
                      <Icon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">5. Zusammenfassung & Bestätigung</h3>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Service</h4>
                      <p className="text-sm text-gray-600">
                        {formData.service} • {formData.priority}
                      </p>
                      <p className="text-sm text-gray-600">
                        Ref: {formData.customerReference}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Route</h4>
                      <p className="text-sm text-gray-600">
                        {formData.pickup.city} → {formData.delivery.city}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Waren</h4>
                    <p className="text-sm text-gray-600">
                      {formData.goods.description} • {formData.goods.weight} kg
                    </p>
                  </div>

                  {formData.requirements.specialEquipment.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Spezielle Ausrüstung</h4>
                      <p className="text-sm text-gray-600">
                        {formData.requirements.specialEquipment.join(', ')}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zusätzliche Notizen
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Weitere Hinweise für Schäflein..."
                    className="input-field"
                    rows={3}
                  />
                </div>

                <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-success-700">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Bereit zur Übermittlung</span>
                  </div>
                  <p className="text-sm text-success-600 mt-1">
                    Sie erhalten innerhalb von 24h ein verbindliches Angebot per E-Mail.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={step === 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Zurück
              </button>
              
              {step < 5 ? (
                <button onClick={handleNext} className="btn-primary">
                  Weiter →
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-primary">
                  🚚 Buchung absenden
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Price Preview Sidebar */}
        <div className="lg:col-span-1">
          <div className="card sticky top-8">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">💰 Preisschätzung</h3>
              <span className="text-xs text-gray-500">Unverbindlich</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Basis-Transport</span>
                <span className="text-sm font-medium text-gray-900">
                  {pricing.basePrice.toFixed(2)}€
                </span>
              </div>
              
              {pricing.equipment > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Spezialausrüstung</span>
                  <span className="text-sm font-medium text-gray-900">
                    {pricing.equipment.toFixed(2)}€
                  </span>
                </div>
              )}
              
              {pricing.insurance > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Versicherung</span>
                  <span className="text-sm font-medium text-gray-900">
                    {pricing.insurance.toFixed(2)}€
                  </span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">MwSt. (19%)</span>
                <span className="text-sm font-medium text-gray-900">
                  {pricing.tax.toFixed(2)}€
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Gesamt (ca.)</span>
                  <span className="text-lg font-bold text-primary-600">
                    {pricing.total.toFixed(2)}€
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-blue-700">
                  <strong>Hinweis:</strong> Dies ist eine Schätzung. Das finale Angebot kann aufgrund von Routenoptimierung und aktuellen Tarifen abweichen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 