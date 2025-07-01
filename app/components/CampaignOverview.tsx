import { Mail, MessageSquare, Phone, FileText, Users, TrendingUp, Eye, MousePointer } from 'lucide-react'
import { Campaign } from '../types'

interface CampaignOverviewProps {
  campaigns: Campaign[]
}

export default function CampaignOverview({ campaigns }: CampaignOverviewProps) {
  const getCampaignIcon = (type: Campaign['type']) => {
    switch (type) {
      case 'Email': return <Mail className="h-5 w-5 text-primary-600" />
      case 'WhatsApp': return <MessageSquare className="h-5 w-5 text-green-600" />
      case 'Telefon': return <Phone className="h-5 w-5 text-blue-600" />
      case 'Brief': return <FileText className="h-5 w-5 text-gray-600" />
      default: return <Mail className="h-5 w-5 text-primary-600" />
    }
  }

  const getStatusBadgeClass = (status: Campaign['status']) => {
    switch (status) {
      case 'Aktiv': return 'badge-success'
      case 'Entwurf': return 'badge bg-gray-50 text-gray-600'
      case 'Pausiert': return 'badge-warning'
      case 'Beendet': return 'badge bg-purple-50 text-purple-600'
      default: return 'badge'
    }
  }

  const getPerformanceColor = (rate: number, type: 'open' | 'click' | 'response') => {
    const thresholds = {
      open: { good: 30, average: 20 },
      click: { good: 8, average: 5 },
      response: { good: 3, average: 1.5 }
    }
    
    const threshold = thresholds[type]
    if (rate >= threshold.good) return 'text-success-600'
    if (rate >= threshold.average) return 'text-warning-600'
    return 'text-danger-600'
  }

  return (
    <div className="space-y-6">
      {/* Campaign Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <h3 className="font-medium text-logistics-900 mb-2">Aktive Kampagnen</h3>
          <p className="text-2xl font-bold text-success-600">
            {campaigns.filter(c => c.status === 'Aktiv').length}
          </p>
        </div>
        <div className="card text-center">
          <h3 className="font-medium text-logistics-900 mb-2">Gesamt-Empfänger</h3>
          <p className="text-2xl font-bold text-primary-600">
            {campaigns.reduce((sum, c) => sum + c.recipients, 0).toLocaleString('de-DE')}
          </p>
        </div>
        <div className="card text-center">
          <h3 className="font-medium text-logistics-900 mb-2">Ø Öffnungsrate</h3>
          <p className="text-2xl font-bold text-warning-600">
            {(campaigns.reduce((sum, c) => sum + c.openRate, 0) / campaigns.length).toFixed(1)}%
          </p>
        </div>
        <div className="card text-center">
          <h3 className="font-medium text-logistics-900 mb-2">Ø Antwortrate</h3>
          <p className="text-2xl font-bold text-success-600">
            {(campaigns.reduce((sum, c) => sum + c.responseRate, 0) / campaigns.length).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getCampaignIcon(campaign.type)}
                <div>
                  <h3 className="font-semibold text-logistics-900">{campaign.name}</h3>
                  <p className="text-sm text-logistics-600">{campaign.targetAudience}</p>
                </div>
              </div>
              <span className={getStatusBadgeClass(campaign.status)}>
                {campaign.status}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-sm text-logistics-700 bg-logistics-50 p-3 rounded-lg">
                "{campaign.content}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-logistics-50 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Users className="h-4 w-4 text-logistics-600" />
                  <span className="text-sm font-medium text-logistics-900">Empfänger</span>
                </div>
                <p className="text-lg font-bold text-logistics-900">
                  {campaign.recipients.toLocaleString('de-DE')}
                </p>
              </div>
              <div className="text-center p-3 bg-logistics-50 rounded-lg">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <TrendingUp className="h-4 w-4 text-logistics-600" />
                  <span className="text-sm font-medium text-logistics-900">Gesendet</span>
                </div>
                <p className="text-lg font-bold text-logistics-900">
                  {new Date(campaign.sendDate).toLocaleDateString('de-DE')}
                </p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-logistics-600" />
                  <span className="text-sm text-logistics-600">Öffnungsrate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-logistics-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-primary-500 rounded-full" 
                      style={{ width: `${Math.min(campaign.openRate, 100)}%` }}
                    />
                  </div>
                  <span className={`text-sm font-medium ${getPerformanceColor(campaign.openRate, 'open')}`}>
                    {campaign.openRate}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MousePointer className="h-4 w-4 text-logistics-600" />
                  <span className="text-sm text-logistics-600">Klickrate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-logistics-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-warning-500 rounded-full" 
                      style={{ width: `${Math.min(campaign.clickRate * 5, 100)}%` }}
                    />
                  </div>
                  <span className={`text-sm font-medium ${getPerformanceColor(campaign.clickRate, 'click')}`}>
                    {campaign.clickRate}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-logistics-600" />
                  <span className="text-sm text-logistics-600">Antwortrate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-logistics-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-success-500 rounded-full" 
                      style={{ width: `${Math.min(campaign.responseRate * 10, 100)}%` }}
                    />
                  </div>
                  <span className={`text-sm font-medium ${getPerformanceColor(campaign.responseRate, 'response')}`}>
                    {campaign.responseRate}%
                  </span>
                </div>
              </div>
            </div>

            {/* Business Types */}
            <div className="mt-4 pt-4 border-t border-logistics-200">
              <p className="text-xs text-logistics-500 mb-2">Zielgruppen:</p>
              <div className="flex flex-wrap gap-1">
                {campaign.businessType.map((type, index) => (
                  <span key={index} className="badge-primary text-xs">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="btn-secondary flex-1 text-sm">Bearbeiten</button>
              <button className="btn-primary flex-1 text-sm">Duplizieren</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 