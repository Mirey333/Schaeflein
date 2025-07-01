import { Phone, Mail, Calendar, MessageSquare, FileText, User, Clock } from 'lucide-react'
import { Activity } from '../types'

interface ActivityFeedProps {
  activities: Activity[]
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'Anruf': return <Phone className="h-4 w-4 text-blue-600" />
      case 'Email': return <Mail className="h-4 w-4 text-primary-600" />
      case 'Meeting': return <Calendar className="h-4 w-4 text-green-600" />
      case 'WhatsApp': return <MessageSquare className="h-4 w-4 text-green-600" />
      case 'Notiz': return <FileText className="h-4 w-4 text-gray-600" />
      default: return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadgeClass = (status: Activity['status']) => {
    switch (status) {
      case 'Abgeschlossen': return 'badge-success'
      case 'Geplant': return 'badge-primary'
      case 'Verschoben': return 'badge-warning'
      case 'Abgebrochen': return 'badge-danger'
      default: return 'badge'
    }
  }

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'Abgeschlossen': return 'border-success-200 bg-success-50'
      case 'Geplant': return 'border-primary-200 bg-primary-50'
      case 'Verschoben': return 'border-warning-200 bg-warning-50'
      case 'Abgebrochen': return 'border-danger-200 bg-danger-50'
      default: return 'border-logistics-200 bg-white'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const sortedActivities = [...activities].sort((a, b) => {
    const dateA = new Date(a.scheduledDate || a.completedDate || a.createdAt)
    const dateB = new Date(b.scheduledDate || b.completedDate || b.createdAt)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="space-y-4">
      {sortedActivities.map((activity) => (
        <div key={activity.id} className={`border rounded-lg p-4 ${getStatusColor(activity.status)}`}>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-logistics-900 mb-1">
                    {activity.subject}
                  </h4>
                  <p className="text-sm text-logistics-600 mb-2">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-logistics-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{activity.assignedTo}</span>
                    </div>
                    
                    {activity.scheduledDate && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Geplant: {formatDate(activity.scheduledDate)}</span>
                      </div>
                    )}
                    
                    {activity.completedDate && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Abgeschlossen: {formatDate(activity.completedDate)}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <span className={getStatusBadgeClass(activity.status)}>
                    {activity.status}
                  </span>
                  <span className="text-xs text-logistics-500">
                    {activity.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex justify-end space-x-2">
            {activity.status === 'Geplant' && (
              <>
                <button className="text-xs text-success-600 hover:text-success-700 font-medium">
                  ✓ Abschließen
                </button>
                <button className="text-xs text-warning-600 hover:text-warning-700 font-medium">
                  ↻ Verschieben
                </button>
              </>
            )}
            <button className="text-xs text-primary-600 hover:text-primary-700 font-medium">
              Details
            </button>
          </div>
        </div>
      ))}
      
      {activities.length === 0 && (
        <div className="text-center py-8">
          <Calendar className="h-12 w-12 text-logistics-300 mx-auto mb-4" />
          <p className="text-logistics-500">Keine Aktivitäten vorhanden</p>
          <button className="btn-primary mt-4">Erste Aktivität erstellen</button>
        </div>
      )}
    </div>
  )
} 