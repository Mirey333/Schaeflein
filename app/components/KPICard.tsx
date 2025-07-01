import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { KPI } from '../types'

interface KPICardProps {
  kpi: KPI
}

export default function KPICard({ kpi }: KPICardProps) {
  const getTrendIcon = () => {
    if (kpi.trend === 'up') return <TrendingUp className="h-4 w-4 text-success-600" />
    if (kpi.trend === 'down') return <TrendingDown className="h-4 w-4 text-danger-600" />
    return <Minus className="h-4 w-4 text-logistics-400" />
  }

  const getTrendColor = () => {
    if (kpi.trend === 'up') return 'text-success-600'
    if (kpi.trend === 'down') return 'text-danger-600'
    return 'text-logistics-400'
  }

  return (
    <div className="stats-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-logistics-600">{kpi.name}</p>
          <p className="text-2xl font-bold text-logistics-900 mt-1">{kpi.value}</p>
        </div>
        <div className="flex items-center space-x-1">
          {getTrendIcon()}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
          <span className="text-sm font-medium">
            {kpi.change > 0 ? '+' : ''}{kpi.change}%
          </span>
        </div>
        <p className="text-xs text-logistics-500">{kpi.period}</p>
      </div>
    </div>
  )
} 