'use client'

import { useState } from 'react'
import {
  Users,
  Clock,
  Calendar,
  TrendingUp,
  Award,
  UserPlus,
  AlertCircle,
  CheckCircle,
  DollarSign,
  BookOpen,
  FileText,
  Settings
} from 'lucide-react'
import { mockHRMetrics, mockEmployees, mockVacationRequests, mockTrainings, mockPerformanceReviews } from '../data/mockData'

interface HRDashboardProps {
  onNavigate: (section: string) => void
}

export default function HRDashboard({ onNavigate }: HRDashboardProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Monat')

  // Berechne aktuelle HR-Statistiken
  const pendingVacations = mockVacationRequests.filter(req => req.status === 'Eingereicht').length
  const upcomingTrainings = mockTrainings.filter(training => training.status === 'Geplant').length
  const overdueReviews = mockPerformanceReviews.filter(review => review.status === 'Geplant').length
  const newEmployeesThisMonth = mockEmployees.filter(emp => {
    const startDate = new Date(emp.startDate)
    const now = new Date()
    const monthsAgo = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    return startDate >= monthsAgo
  }).length

  const hrKpis = [
    {
      name: 'Gesamtmitarbeiter',
      value: mockHRMetrics.employeeCount.toLocaleString(),
      change: +2.3,
      trend: 'up' as const,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Durchschnittsgehalt',
      value: `${mockHRMetrics.avgSalary.toLocaleString()} €`,
      change: +5.2,
      trend: 'up' as const,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      name: 'Fluktuation',
      value: `${mockHRMetrics.turnoverRate}%`,
      change: -1.8,
      trend: 'down' as const,
      icon: TrendingUp,
      color: 'bg-orange-500'
    },
    {
      name: 'Urlaubsnutzung',
      value: `${mockHRMetrics.vacationUtilization}%`,
      change: +3.1,
      trend: 'up' as const,
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      name: 'Schulungsstunden/MA',
      value: `${mockHRMetrics.trainingHoursPerEmployee}h`,
      change: +8.7,
      trend: 'up' as const,
      icon: BookOpen,
      color: 'bg-indigo-500'
    },
    {
      name: 'Offene Stellen',
      value: mockHRMetrics.recruitmentMetrics.openPositions.toString(),
      change: -12.5,
      trend: 'down' as const,
      icon: UserPlus,
      color: 'bg-red-500'
    }
  ]

  const urgentTasks = [
    {
      type: 'Urlaubsanträge',
      count: pendingVacations,
      action: () => onNavigate('vacation'),
      color: 'text-orange-600',
      icon: Calendar
    },
    {
      type: 'Bevorstehende Schulungen',
      count: upcomingTrainings,
      action: () => onNavigate('training'),
      color: 'text-blue-600',
      icon: BookOpen
    },
    {
      type: 'Überfällige Reviews',
      count: overdueReviews,
      action: () => onNavigate('performance'),
      color: 'text-red-600',
      icon: Award
    },
    {
      type: 'Neue Mitarbeiter',
      count: newEmployeesThisMonth,
      action: () => onNavigate('employees'),
      color: 'text-green-600',
      icon: UserPlus
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header mit Zeitraum-Auswahl */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">HR-Dashboard</h2>
          <p className="text-gray-600">Personalverwaltung Schäflein AG</p>
        </div>
        <div className="flex items-center space-x-3">
          <label className="text-sm text-gray-600">Zeitraum:</label>
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
          >
            <option>Woche</option>
            <option>Monat</option>
            <option>Quartal</option>
            <option>Jahr</option>
          </select>
        </div>
      </div>

      {/* Schnellzugriff - nach oben verschoben */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Schnellzugriff</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate('employees')}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Mitarbeiter</span>
          </button>
          <button
            onClick={() => onNavigate('time')}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <Clock className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Zeiterfassung</span>
          </button>
          <button
            onClick={() => onNavigate('recruiting')}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <UserPlus className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Recruiting</span>
          </button>
          <button
            onClick={() => onNavigate('automation')}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <Settings className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Automatisierung</span>
          </button>
        </div>
      </div>

      {/* KPI-Karten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hrKpis.map((kpi) => {
          const Icon = kpi.icon
          return (
            <div key={kpi.name} className="card">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{kpi.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.trend === 'up' ? '+' : ''}{kpi.change}%
                    </span>
                    <span className="text-xs text-gray-500 ml-1">vs. Vormonat</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${kpi.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Abteilungsverteilung */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Mitarbeiterverteilung</h3>
            <button 
              onClick={() => onNavigate('employees')}
              className="btn-secondary text-sm"
            >
              Alle Mitarbeiter
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(mockHRMetrics.departmentDistribution)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 6)
              .map(([department, count]) => {
                const percentage = (count / mockHRMetrics.employeeCount * 100).toFixed(1)
                return (
                  <div key={department} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">{department}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900">{count}</span>
                      <span className="text-xs text-gray-500 ml-1">({percentage}%)</span>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* Dringende Aufgaben */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">Dringende HR-Aufgaben</h3>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
              {urgentTasks.reduce((sum, task) => sum + task.count, 0)} offen
            </span>
          </div>
          <div className="space-y-4">
            {urgentTasks.map((task) => {
              const Icon = task.icon
              return (
                <div
                  key={task.type}
                  onClick={task.action}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-5 w-5 ${task.color}`} />
                    <span className="font-medium text-gray-900">{task.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-bold ${task.color}`}>{task.count}</span>
                    <span className="text-xs text-gray-500">zu bearbeiten</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Performance-Übersicht */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">Leistungsverteilung (Bewertungen)</h3>
          <button 
            onClick={() => onNavigate('performance')}
            className="btn-secondary text-sm"
          >
            Performance-Reviews
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {Object.entries(mockHRMetrics.performanceDistribution).map(([rating, count]) => {
            const percentage = (count / mockHRMetrics.employeeCount * 100).toFixed(1)
            const stars = '★'.repeat(parseInt(rating))
            return (
              <div key={rating} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-yellow-500 text-lg mb-1">{stars}</div>
                <div className="text-2xl font-bold text-gray-900">{count}</div>
                <div className="text-xs text-gray-500">{percentage}%</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 