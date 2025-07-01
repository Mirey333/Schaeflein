import { Truck, Package, MapPin, Clock, AlertTriangle, CheckCircle, BarChart3, Fuel, Thermometer, Shield } from 'lucide-react'
import { Shipment, LogisticsKPI, Fleet, WarehouseStatus } from '../types'

interface TrackingDashboardProps {
  shipments: Shipment[]
  kpis: LogisticsKPI[]
  fleet: Fleet[]
  warehouses: WarehouseStatus[]
}

export default function TrackingDashboard({ shipments, kpis, fleet, warehouses }: TrackingDashboardProps) {
  const getStatusIcon = (status: Shipment['status']) => {
    switch (status) {
      case 'Abgeholt': return <Package className="h-4 w-4 text-blue-600" />
      case 'Im Transit': return <Truck className="h-4 w-4 text-orange-600" />
      case 'Depot': return <MapPin className="h-4 w-4 text-purple-600" />
      case 'Zustellung': return <Clock className="h-4 w-4 text-green-600" />
      case 'Zugestellt': return <CheckCircle className="h-4 w-4 text-success-600" />
      case 'Verzögert': return <AlertTriangle className="h-4 w-4 text-warning-600" />
      case 'Problem': return <AlertTriangle className="h-4 w-4 text-danger-600" />
      default: return <Package className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: Shipment['status']) => {
    switch (status) {
      case 'Abgeholt': return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'Im Transit': return 'bg-orange-50 text-orange-800 border-orange-200'
      case 'Depot': return 'bg-purple-50 text-purple-800 border-purple-200'
      case 'Zustellung': return 'bg-green-50 text-green-800 border-green-200'
      case 'Zugestellt': return 'bg-success-50 text-success-800 border-success-200'
      case 'Verzögert': return 'bg-warning-50 text-warning-800 border-warning-200'
      case 'Problem': return 'bg-danger-50 text-danger-800 border-danger-200'
      default: return 'bg-gray-50 text-gray-800 border-gray-200'
    }
  }

  const getPriorityColor = (priority: Shipment['priority']) => {
    switch (priority) {
      case 'Kritisch': return 'text-danger-600'
      case 'Express': return 'text-warning-600'
      case 'Standard': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  const getFleetStatusColor = (status: Fleet['status']) => {
    switch (status) {
      case 'Verfügbar': return 'bg-success-50 text-success-800 border-success-200'
      case 'Unterwegs': return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'Beladen': return 'bg-orange-50 text-orange-800 border-orange-200'
      case 'Wartung': return 'bg-warning-50 text-warning-800 border-warning-200'
      case 'Defekt': return 'bg-danger-50 text-danger-800 border-danger-200'
      default: return 'bg-gray-50 text-gray-800 border-gray-200'
    }
  }

  const getTrendIcon = (trend: LogisticsKPI['trend']) => {
    return trend === 'up' ? '↗️' : trend === 'down' ? '↘️' : '➡️'
  }

  return (
    <div className="space-y-8">
      {/* Logistik KPIs */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-bold text-logistics-900">🚛 Schäflein Logistik-Cockpit</h3>
          <span className="bg-success-100 text-success-800 text-sm font-medium px-3 py-1 rounded-full">
            Live-Tracking aktiv
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {kpis.map((kpi, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-logistics-900">{kpi.name}</h4>
                <span className="text-lg">{getTrendIcon(kpi.trend)}</span>
              </div>
              <div className="flex items-baseline space-x-2 mb-1">
                <span className="text-2xl font-bold text-primary-600">
                  {kpi.value}
                </span>
                {kpi.unit && (
                  <span className="text-sm text-logistics-600">{kpi.unit}</span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${kpi.trend === 'up' ? 'text-success-600' : kpi.trend === 'down' ? 'text-danger-600' : 'text-gray-600'}`}>
                  {kpi.change > 0 ? '+' : ''}{kpi.change}% {kpi.period}
                </span>
                <span className="text-xs bg-logistics-100 text-logistics-700 px-2 py-1 rounded">
                  {kpi.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Sendungsverfolgung */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-logistics-900">📦 Live Sendungsverfolgung</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-logistics-600">
              {shipments.length} aktive Sendungen
            </span>
            <button className="btn-primary text-sm">
              <Package className="h-4 w-4 mr-2" />
              Neue Sendung
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="card bg-logistics-50 border-logistics-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Sendung Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(shipment.status)}
                    <div>
                      <h4 className="font-semibold text-logistics-900">
                        {shipment.trackingNumber}
                      </h4>
                      <p className="text-sm text-logistics-600">
                        {shipment.sender} → {shipment.recipient}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                      <span className={`text-xs font-medium ${getPriorityColor(shipment.priority)}`}>
                        {shipment.priority}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-logistics-500" />
                      <span className="text-logistics-700">{shipment.currentLocation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-logistics-500" />
                      <span className="text-logistics-700">
                        Zustellung: {new Date(shipment.estimatedDelivery).toLocaleDateString('de-DE')} {new Date(shipment.estimatedDelivery).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4 text-logistics-500" />
                      <span className="text-logistics-700">
                        {shipment.weight.toLocaleString('de-DE')} kg - {shipment.service}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Zusatzinfos */}
                <div className="flex items-center space-x-4 text-sm">
                  {shipment.temperature && (
                    <div className="flex items-center space-x-1">
                      <Thermometer className="h-4 w-4 text-blue-500" />
                      <span className="text-logistics-700">{shipment.temperature}°C</span>
                    </div>
                  )}
                  {shipment.hazardous && (
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-danger-500" />
                      <span className="text-danger-700">Gefahrgut</span>
                    </div>
                  )}
                  <div className="text-right">
                    <div className="text-logistics-900 font-medium">
                      {shipment.costs.total.toLocaleString('de-DE')}€
                    </div>
                    <div className="text-xs text-logistics-600">
                      {shipment.co2Footprint} kg CO₂
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline (nur bei aktiven Sendungen) */}
              {shipment.status !== 'Zugestellt' && shipment.route.length > 0 && (
                <div className="mt-4 pt-4 border-t border-logistics-200">
                  <div className="flex space-x-4 overflow-x-auto pb-2">
                    {shipment.route.map((event, index) => (
                      <div key={event.id} className="flex-shrink-0 flex items-center space-x-2">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${index === shipment.route.length - 1 ? 'bg-primary-600' : 'bg-success-600'}`} />
                          {index < shipment.route.length - 1 && (
                            <div className="w-0.5 h-8 bg-logistics-300 mt-1" />
                          )}
                        </div>
                        <div className="text-xs">
                          <div className="font-medium text-logistics-900">{event.location}</div>
                          <div className="text-logistics-600">{event.description}</div>
                          <div className="text-logistics-500">
                            {new Date(event.timestamp).toLocaleDateString('de-DE')} {new Date(event.timestamp).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Flottenübersicht */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-logistics-900">🚚 Fahrzeugflotte</h3>
            <span className="text-sm text-logistics-600">{fleet.length} Fahrzeuge</span>
          </div>
          
          <div className="space-y-3">
            {fleet.map((vehicle) => (
              <div key={vehicle.vehicleId} className="card bg-logistics-50 border-logistics-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-logistics-600" />
                    <div>
                      <div className="font-medium text-logistics-900">
                        {vehicle.vehicleId} - {vehicle.type}
                      </div>
                      <div className="text-sm text-logistics-600">
                        Fahrer: {vehicle.driver}
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getFleetStatusColor(vehicle.status)}`}>
                    {vehicle.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                  <div>
                    <div className="text-logistics-600">Standort</div>
                    <div className="font-medium text-logistics-900">{vehicle.location}</div>
                  </div>
                  <div>
                    <div className="text-logistics-600">Auslastung</div>
                    <div className="font-medium text-logistics-900">
                      {Math.round((vehicle.currentLoad / vehicle.maxLoad) * 100)}%
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4 text-logistics-500" />
                    <div>
                      <div className="text-logistics-600">Kraftstoff</div>
                      <div className="font-medium text-logistics-900">{vehicle.fuel}%</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-logistics-600">Effizienz</div>
                    <div className="font-medium text-logistics-900">{vehicle.efficiency}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lagerübersicht */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-logistics-900">🏭 Lagerübersicht</h3>
            <span className="text-sm text-logistics-600">{warehouses.length} Standorte</span>
          </div>
          
          <div className="space-y-4">
            {warehouses.map((warehouse, index) => (
              <div key={index} className="card bg-logistics-50 border-logistics-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-logistics-900">{warehouse.location}</h4>
                  <span className={`text-sm font-medium ${warehouse.utilizationRate > 90 ? 'text-danger-600' : warehouse.utilizationRate > 80 ? 'text-warning-600' : 'text-success-600'}`}>
                    {warehouse.utilizationRate}% Auslastung
                  </span>
                </div>
                
                <div className="w-full bg-logistics-200 rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full ${warehouse.utilizationRate > 90 ? 'bg-danger-500' : warehouse.utilizationRate > 80 ? 'bg-warning-500' : 'bg-success-500'}`}
                    style={{ width: `${warehouse.utilizationRate}%` }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-logistics-600">Kapazität</div>
                    <div className="font-medium text-logistics-900">
                      {warehouse.totalCapacity.toLocaleString('de-DE')} m²
                    </div>
                  </div>
                  <div>
                    <div className="text-logistics-600">Verfügbar</div>
                    <div className="font-medium text-logistics-900">
                      {warehouse.availableSpace.toLocaleString('de-DE')} m²
                    </div>
                  </div>
                  <div>
                    <div className="text-logistics-600">Personal</div>
                    <div className="font-medium text-logistics-900">
                      {warehouse.staff.available}/{warehouse.staff.total}
                    </div>
                  </div>
                  <div>
                    <div className="text-logistics-600">Schicht</div>
                    <div className="font-medium text-logistics-900">{warehouse.staff.shift}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 