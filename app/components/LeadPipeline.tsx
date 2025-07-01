import { Lead } from '../types'
import { Euro, User, Building, Calendar } from 'lucide-react'

interface LeadPipelineProps {
  leads: Lead[]
  compact?: boolean
}

export default function LeadPipeline({ leads, compact = false }: LeadPipelineProps) {
  const stages = [
    { id: 'Neu', label: 'Neu', color: 'bg-gray-100 text-gray-800' },
    { id: 'Kontaktiert', label: 'Kontaktiert', color: 'bg-blue-100 text-blue-800' },
    { id: 'Qualifiziert', label: 'Qualifiziert', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'Angebot', label: 'Angebot', color: 'bg-orange-100 text-orange-800' },
    { id: 'Verhandlung', label: 'Verhandlung', color: 'bg-purple-100 text-purple-800' },
    { id: 'Gewonnen', label: 'Gewonnen', color: 'bg-green-100 text-green-800' },
    { id: 'Verloren', label: 'Verloren', color: 'bg-red-100 text-red-800' },
  ]

  const getLeadsForStage = (stageId: string) => {
    return leads.filter(lead => lead.status === stageId)
  }

  const getTotalValue = (stageLeads: Lead[]) => {
    return stageLeads.reduce((sum, lead) => sum + lead.potentialValue, 0)
  }

  const getBusinessTypeIcon = (type: Lead['businessType']) => {
    switch (type) {
      case 'Logistik': return '📦'
      case 'Spedition': return '🚛'
      case 'Industriemontage': return '🏭'
      case 'Sprintbox': return '⚡'
      case 'Truckwerkstatt': return '🔧'
      case 'Ausland': return '🌍'
      default: return '📋'
    }
  }

  if (compact) {
    return (
      <div className="space-y-3">
        {stages.slice(0, 5).map((stage) => {
          const stageLeads = getLeadsForStage(stage.id)
          const totalValue = getTotalValue(stageLeads)
          
          if (stageLeads.length === 0) return null
          
          return (
            <div key={stage.id} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${stage.color}`}>
                  {stage.label}
                </span>
                <span className="text-sm text-logistics-600">
                  {stageLeads.length} Lead{stageLeads.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-logistics-900">
                  {(totalValue / 1000000).toFixed(1)}M €
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Pipeline Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stages.slice(0, 4).map((stage) => {
          const stageLeads = getLeadsForStage(stage.id)
          const totalValue = getTotalValue(stageLeads)
          
          return (
            <div key={stage.id} className="card text-center">
              <h3 className="font-medium text-logistics-900 mb-2">{stage.label}</h3>
              <p className="text-2xl font-bold text-primary-600 mb-1">{stageLeads.length}</p>
              <p className="text-sm text-logistics-600">
                {(totalValue / 1000000).toFixed(1)}M € Potenzial
              </p>
            </div>
          )
        })}
      </div>

      {/* Detailed Lead Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <div key={lead.id} className="card hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getBusinessTypeIcon(lead.businessType)}</span>
                <h3 className="font-medium text-logistics-900">{lead.name}</h3>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                stages.find(s => s.id === lead.status)?.color || 'bg-gray-100 text-gray-800'
              }`}>
                {lead.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-logistics-600">
                <Building className="h-3 w-3 mr-2" />
                {lead.company}
              </div>
              <div className="flex items-center text-sm text-logistics-600">
                <Euro className="h-3 w-3 mr-2" />
                {(lead.potentialValue / 1000000).toFixed(1)}M € Potenzial
              </div>
              <div className="flex items-center text-sm text-logistics-600">
                <User className="h-3 w-3 mr-2" />
                {lead.assignedTo}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-logistics-500">Wahrscheinlichkeit:</span>
                <div className="flex items-center">
                  <div className="w-20 bg-logistics-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        lead.probability >= 70 ? 'bg-success-500' :
                        lead.probability >= 40 ? 'bg-warning-500' : 'bg-danger-500'
                      }`}
                      style={{ width: `${lead.probability}%` }}
                    />
                  </div>
                  <span className="text-xs text-logistics-600 ml-2">{lead.probability}%</span>
                </div>
              </div>
              <button className="btn-secondary text-xs">Details</button>
            </div>

            {lead.notes && (
              <div className="mt-3 pt-3 border-t border-logistics-200">
                <p className="text-xs text-logistics-600">{lead.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 