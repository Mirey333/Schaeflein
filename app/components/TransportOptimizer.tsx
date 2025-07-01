import { Route, Calculator, Leaf, Clock, Euro, TrendingDown, Truck, Train, Plane, Ship, Zap } from 'lucide-react'
import { TransportRoute } from '../types'

interface TransportOptimizerProps {
  routes: TransportRoute[]
}

export default function TransportOptimizer({ routes }: TransportOptimizerProps) {
  const getModeIcon = (mode: TransportRoute['mode']) => {
    switch (mode) {
      case 'LKW': return <Truck className="h-5 w-5 text-blue-600" />
      case 'Bahn': return <Train className="h-5 w-5 text-green-600" />
      case 'Flugzeug': return <Plane className="h-5 w-5 text-purple-600" />
      case 'Schiff': return <Ship className="h-5 w-5 text-cyan-600" />
      case 'Kombiniert': return <Zap className="h-5 w-5 text-orange-600" />
      default: return <Route className="h-5 w-5 text-gray-600" />
    }
  }

  const getModeColor = (mode: TransportRoute['mode']) => {
    switch (mode) {
      case 'LKW': return 'bg-blue-50 text-blue-800 border-blue-200'
      case 'Bahn': return 'bg-green-50 text-green-800 border-green-200'
      case 'Flugzeug': return 'bg-purple-50 text-purple-800 border-purple-200'
      case 'Schiff': return 'bg-cyan-50 text-cyan-800 border-cyan-200'
      case 'Kombiniert': return 'bg-orange-50 text-orange-800 border-orange-200'
      default: return 'bg-gray-50 text-gray-800 border-gray-200'
    }
  }

  const getWeatherColor = (impact: TransportRoute['weatherImpact']) => {
    switch (impact) {
      case 'Niedrig': return 'text-success-600 bg-success-50'
      case 'Mittel': return 'text-warning-600 bg-warning-50'
      case 'Hoch': return 'text-danger-600 bg-danger-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getTrafficColor = (conditions: TransportRoute['trafficeConditions']) => {
    switch (conditions) {
      case 'Gut': return 'text-success-600 bg-success-50'
      case 'Mittel': return 'text-warning-600 bg-warning-50'
      case 'Schlecht': return 'text-danger-600 bg-danger-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const formatTime = (hours: number) => {
    if (hours < 24) {
      return `${hours.toFixed(1)}h`
    } else {
      const days = Math.floor(hours / 24)
      const remainingHours = hours % 24
      return `${days}d ${remainingHours.toFixed(0)}h`
    }
  }

  return (
    <div className="space-y-8">
      {/* Transport-Optimizer Header */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-bold text-logistics-900">🎯 Multi-Modal Transport Optimizer</h3>
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            KI-basierte Routenoptimierung
          </span>
        </div>
        
        {/* Optimierungsziele */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="card bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Euro className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-700">Kosteneinsparung</div>
                <div className="text-lg font-bold text-blue-900">-12.8%</div>
              </div>
            </div>
          </div>
          <div className="card bg-green-50 border-green-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Leaf className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-green-700">CO₂-Reduktion</div>
                <div className="text-lg font-bold text-green-900">-24.5%</div>
              </div>
            </div>
          </div>
          <div className="card bg-purple-50 border-purple-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-purple-700">Zeitoptimierung</div>
                <div className="text-lg font-bold text-purple-900">-15.2%</div>
              </div>
            </div>
          </div>
          <div className="card bg-orange-50 border-orange-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <TrendingDown className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-orange-700">Zuverlässigkeit</div>
                <div className="text-lg font-bold text-orange-900">96.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Routenvergleich */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-logistics-900">🗺️ Intelligente Routenplanung</h3>
          <button className="btn-primary text-sm">
            <Calculator className="h-4 w-4 mr-2" />
            Neue Route berechnen
          </button>
        </div>

        <div className="space-y-6">
          {routes.map((route) => (
            <div key={route.id} className="card bg-logistics-50 border-logistics-200">
              {/* Hauptroute */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-4">
                <div className="flex items-center space-x-4">
                  {getModeIcon(route.mode)}
                  <div>
                    <h4 className="font-semibold text-logistics-900 text-lg">
                      {route.origin} → {route.destination}
                    </h4>
                    <p className="text-sm text-logistics-600">
                      {route.distance.toLocaleString('de-DE')} km via {route.mode}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getModeColor(route.mode)}`}>
                    {route.mode}
                  </span>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {route.cost.toLocaleString('de-DE')}€
                    </div>
                    <div className="text-logistics-600">Kosten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {formatTime(route.estimatedTime)}
                    </div>
                    <div className="text-logistics-600">Dauer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {route.co2Emissions.toLocaleString('de-DE')}
                    </div>
                    <div className="text-logistics-600">kg CO₂</div>
                  </div>
                </div>
              </div>

              {/* Routendetails */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <span className="text-sm text-logistics-700">Zuverlässigkeit</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-logistics-200 rounded-full h-2">
                      <div 
                        className="h-2 bg-success-500 rounded-full" 
                        style={{ width: `${route.reliability}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-success-600">
                      {route.reliability}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <span className="text-sm text-logistics-700">Wetter-Risiko</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getWeatherColor(route.weatherImpact)}`}>
                    {route.weatherImpact}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <span className="text-sm text-logistics-700">Verkehrslage</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTrafficColor(route.trafficeConditions)}`}>
                    {route.trafficeConditions}
                  </span>
                </div>
              </div>

              {/* Alternative Transportmodi */}
              {route.alternatives.length > 0 && (
                <div className="pt-4 border-t border-logistics-200">
                  <h5 className="font-medium text-logistics-900 mb-3">Alternative Transportmodi:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {route.alternatives.map((alt, index) => (
                      <div key={index} className="p-3 bg-white rounded-lg border border-logistics-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-logistics-900">{alt.mode}</span>
                          <div className="flex items-center space-x-1">
                            {alt.co2 < route.co2Emissions && (
                              <Leaf className="h-4 w-4 text-success-500" />
                            )}
                            {alt.cost < route.cost && (
                              <Euro className="h-4 w-4 text-blue-500" />
                            )}
                            {alt.time < route.estimatedTime && (
                              <Clock className="h-4 w-4 text-purple-500" />
                            )}
                          </div>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-logistics-600">Kosten:</span>
                            <span className={`font-medium ${alt.cost < route.cost ? 'text-success-600' : 'text-logistics-900'}`}>
                              {alt.cost.toLocaleString('de-DE')}€
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-logistics-600">Zeit:</span>
                            <span className={`font-medium ${alt.time < route.estimatedTime ? 'text-success-600' : 'text-logistics-900'}`}>
                              {formatTime(alt.time)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-logistics-600">CO₂:</span>
                            <span className={`font-medium ${alt.co2 < route.co2Emissions ? 'text-success-600' : 'text-logistics-900'}`}>
                              {alt.co2.toLocaleString('de-DE')} kg
                            </span>
                          </div>
                        </div>
                        <button className="w-full mt-2 text-xs bg-logistics-100 hover:bg-logistics-200 text-logistics-700 py-1 px-2 rounded transition-colors">
                          Route wählen
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Route-Aktionen */}
              <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-logistics-200">
                <button className="btn-secondary text-sm">Route anpassen</button>
                <button className="btn-primary text-sm">Route buchen</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nachhaltigkeits-Dashboard */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-logistics-900">🌱 Nachhaltigkeits-Cockpit</h3>
          <span className="bg-success-100 text-success-800 text-sm font-medium px-3 py-1 rounded-full">
            CO₂-neutral bis 2030
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-green-50 border-green-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {routes.reduce((sum, r) => sum + r.co2Emissions, 0).toLocaleString('de-DE')}
              </div>
              <div className="text-sm text-green-700">kg CO₂ heute</div>
              <div className="text-xs text-green-600 mt-1">-8.5% vs. gestern</div>
            </div>
          </div>
          <div className="card bg-blue-50 border-blue-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(routes.reduce((sum, r) => sum + r.co2Emissions, 0) * 0.15).toLocaleString('de-DE')}
              </div>
              <div className="text-sm text-blue-700">kg CO₂ eingespart</div>
              <div className="text-xs text-blue-600 mt-1">durch Optimierung</div>
            </div>
          </div>
          <div className="card bg-purple-50 border-purple-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Math.round(routes.reduce((sum, r) => sum + (r.mode === 'Bahn' ? 1 : 0), 0) / routes.length * 100)}%
              </div>
              <div className="text-sm text-purple-700">Bahn-Anteil</div>
              <div className="text-xs text-purple-600 mt-1">+12% vs. Vormonat</div>
            </div>
          </div>
          <div className="card bg-orange-50 border-orange-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                2.3
              </div>
              <div className="text-sm text-orange-700">kg CO₂/km Ø</div>
              <div className="text-xs text-orange-600 mt-1">Ziel: 2.0 kg CO₂/km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 