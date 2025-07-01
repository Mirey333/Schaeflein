'use client'

import { useState, useEffect } from 'react'
import { MapPin, Truck, Clock, Navigation, Phone, AlertTriangle, CheckCircle, Package } from 'lucide-react'

interface TrackingData {
  id: string
  trackingNumber: string
  currentLocation: string
  currentCoords: { lat: number; lng: number }
  status: 'Abgeholt' | 'Transit' | 'Depot' | 'Zustellung' | 'Zugestellt' | 'Verzögert'
  estimatedDelivery: string
  driver: {
    name: string
    phone: string
    photo: string
  }
  route: Array<{
    location: string
    timestamp: string
    status: string
    coords: { lat: number; lng: number }
    description: string
    photo?: string
  }>
  vehicle: {
    type: string
    licensePlate: string
    loadCapacity: string
  }
  cargo: {
    description: string
    weight: string
    temperature?: number
  }
  nextStop: string
  distanceToDestination: number
  etaMinutes: number
}

interface LiveTrackingMapProps {
  shipmentId: string
  customerBooking: any
}

export default function LiveTrackingMap({ shipmentId, customerBooking }: LiveTrackingMapProps) {
  const [trackingData, setTrackingData] = useState<TrackingData>({
    id: shipmentId,
    trackingNumber: customerBooking?.trackingNumber || 'SCH-' + Date.now().toString().slice(-6),
    currentLocation: 'A9 Nürnberg-München, Kilometer 387',
    currentCoords: { lat: 49.2544, lng: 11.3464 },
    status: 'Transit',
    estimatedDelivery: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
    driver: {
      name: 'Klaus Weber',
      phone: '+49 911 45678',
      photo: '/api/placeholder/40/40'
    },
    route: [
      {
        location: 'Schäflein Depot München',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        status: 'Abgeholt',
        coords: { lat: 48.1351, lng: 11.5820 },
        description: 'Sendung vom Depot abgeholt',
        photo: '/api/placeholder/100/80'
      },
      {
        location: 'A9 Nürnberg-München, Km 387',
        timestamp: new Date().toISOString(),
        status: 'Transit',
        coords: { lat: 49.2544, lng: 11.3464 },
        description: 'LKW in Fahrt - pünktlich im Zeitplan'
      }
    ],
    vehicle: {
      type: 'Sattelzug 40t',
      licensePlate: 'M-SCH 4247',
      loadCapacity: '24 Paletten'
    },
    cargo: {
      description: customerBooking?.goods?.description || 'Industrieteile',
      weight: customerBooking?.goods?.weight + ' kg' || '8.400 kg',
      temperature: 18
    },
    nextStop: customerBooking?.delivery?.city || 'Ingolstadt BMW Werk',
    distanceToDestination: 142,
    etaMinutes: 165
  })

  const [liveUpdates, setLiveUpdates] = useState(true)

  // Simuliere Live-Updates alle 30 Sekunden
  useEffect(() => {
    if (!liveUpdates) return

    const interval = setInterval(() => {
      setTrackingData(prev => ({
        ...prev,
        distanceToDestination: Math.max(0, prev.distanceToDestination - Math.random() * 5),
        etaMinutes: Math.max(0, prev.etaMinutes - Math.random() * 3),
        currentLocation: `A9 Nürnberg-München, Kilometer ${387 + Math.floor(Math.random() * 20)}`
      }))
    }, 30000)

    return () => clearInterval(interval)
  }, [liveUpdates])

  const getStatusColor = (status: TrackingData['status']) => {
    switch (status) {
      case 'Abgeholt': return 'bg-blue-500'
      case 'Transit': return 'bg-green-500'
      case 'Depot': return 'bg-yellow-500'
      case 'Zustellung': return 'bg-purple-500'
      case 'Zugestellt': return 'bg-success-500'
      case 'Verzögert': return 'bg-danger-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Abgeholt': return <Package className="h-4 w-4" />
      case 'Transit': return <Truck className="h-4 w-4" />
      case 'Zugestellt': return <CheckCircle className="h-4 w-4" />
      case 'Verzögert': return <AlertTriangle className="h-4 w-4" />
      default: return <MapPin className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Live Status Header */}
      <div className="card bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full text-white ${getStatusColor(trackingData.status)}`}>
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Live-Tracking: {trackingData.trackingNumber}
              </h3>
              <p className="text-sm text-gray-600">
                {trackingData.currentLocation}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              {Math.floor(trackingData.etaMinutes / 60)}h {trackingData.etaMinutes % 60}min
            </div>
            <div className="text-sm text-gray-600">bis Ankunft</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Navigation className="h-4 w-4 text-blue-600" />
            <div>
              <div className="text-sm font-medium text-gray-900">{trackingData.distanceToDestination} km</div>
              <div className="text-xs text-gray-600">bis Ziel</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-green-600" />
            <div>
              <div className="text-sm font-medium text-gray-900">Pünktlich</div>
              <div className="text-xs text-gray-600">im Zeitplan</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-purple-600" />
            <div>
              <div className="text-sm font-medium text-gray-900">{trackingData.driver.name}</div>
              <div className="text-xs text-gray-600">Fahrer kontaktieren</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interaktive Karte Simulation */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">🗺️ Live-Karte</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
            <button
              onClick={() => setLiveUpdates(!liveUpdates)}
              className={`text-sm px-3 py-1 rounded-full ${
                liveUpdates 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {liveUpdates ? 'Live Updates AN' : 'Live Updates AUS'}
            </button>
          </div>
        </div>

        {/* Karten-Simulation */}
        <div className="relative bg-gradient-to-br from-blue-100 via-green-50 to-blue-100 rounded-lg p-8 h-80">
          {/* Route-Linie */}
          <div className="absolute top-16 left-12 w-64 h-1 bg-blue-300 rounded transform rotate-12"></div>
          
          {/* Start-Position */}
          <div className="absolute top-12 left-8 flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
            <div className="bg-white px-2 py-1 rounded shadow text-xs">
              München Depot
            </div>
          </div>

          {/* Aktuelle Position (LKW) */}
          <div className="absolute top-20 left-40 flex items-center space-x-2 animate-pulse">
            <div className="p-2 bg-green-500 rounded-full text-white shadow-lg">
              <Truck className="h-4 w-4" />
            </div>
            <div className="bg-white px-3 py-2 rounded shadow">
              <div className="text-sm font-medium">{trackingData.driver.name}</div>
              <div className="text-xs text-gray-600">{trackingData.vehicle.licensePlate}</div>
            </div>
          </div>

          {/* Ziel-Position */}
          <div className="absolute top-28 right-12 flex items-center space-x-2">
            <div className="bg-white px-2 py-1 rounded shadow text-xs">
              {trackingData.nextStop}
            </div>
            <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow"></div>
          </div>

          {/* Autobahn-Markierung */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1 rounded text-sm">
            A9 Nürnberg-München
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Start</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Aktuell</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Ziel</span>
            </div>
          </div>
          <button className="btn-secondary text-sm">
            Vollbild-Karte öffnen
          </button>
        </div>
      </div>

      {/* Sendungsdetails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fahrzeug & Fahrer Info */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">🚛 Fahrzeug & Fahrer</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg">👨‍💼</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{trackingData.driver.name}</div>
                <div className="text-sm text-gray-600">Erfahrener Logistik-Profi</div>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  📞 {trackingData.driver.phone}
                </button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Fahrzeug</div>
                  <div className="font-medium text-gray-900">{trackingData.vehicle.type}</div>
                </div>
                <div>
                  <div className="text-gray-600">Kennzeichen</div>
                  <div className="font-medium text-gray-900">{trackingData.vehicle.licensePlate}</div>
                </div>
                <div>
                  <div className="text-gray-600">Ladekapazität</div>
                  <div className="font-medium text-gray-900">{trackingData.vehicle.loadCapacity}</div>
                </div>
                <div>
                  <div className="text-gray-600">Temperatur</div>
                  <div className="font-medium text-gray-900">{trackingData.cargo.temperature}°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ladung & Service */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">📦 Ladungsdetails</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600">Beschreibung</div>
              <div className="font-medium text-gray-900">{trackingData.cargo.description}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600">Gewicht</div>
                <div className="font-medium text-gray-900">{trackingData.cargo.weight}</div>
              </div>
              <div>
                <div className="text-gray-600">Service</div>
                <div className="font-medium text-gray-900">
                  {customerBooking?.service || 'Komplettladung'}
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm text-gray-600 mb-2">Nächster Halt</div>
              <div className="font-medium text-gray-900">{trackingData.nextStop}</div>
              <div className="text-sm text-gray-600">
                Voraussichtliche Ankunft: {new Date(trackingData.estimatedDelivery).toLocaleString('de-DE')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route-Timeline */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">🛣️ Route & Timeline</h3>
        </div>
        
        <div className="space-y-4">
          {trackingData.route.map((stop, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className={`p-2 rounded-full text-white ${getStatusColor(stop.status as any)}`}>
                  {getStatusIcon(stop.status)}
                </div>
                {index < trackingData.route.length - 1 && (
                  <div className="w-px h-12 bg-gray-300 mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{stop.location}</h4>
                  <span className="text-sm text-gray-500">
                    {new Date(stop.timestamp).toLocaleString('de-DE')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{stop.description}</p>
                
                {stop.photo && (
                  <div className="mt-2">
                    <button className="text-sm text-primary-600 hover:text-primary-700">
                      📷 Foto anzeigen
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Geplante Stops */}
          <div className="flex items-start space-x-4 opacity-50">
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-full border-2 border-gray-300 bg-white">
                <MapPin className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{trackingData.nextStop}</h4>
              <p className="text-sm text-gray-600">Geplante Ankunft: {new Date(trackingData.estimatedDelivery).toLocaleString('de-DE')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 