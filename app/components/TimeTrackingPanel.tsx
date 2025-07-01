'use client'

import { useState } from 'react'
import {
  Clock,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  Filter,
  Plus,
  Download,
  Eye,
  User,
  MapPin
} from 'lucide-react'
import { mockTimeEntries, mockEmployees, mockVacationRequests } from '../data/mockData'
import { TimeEntry, VacationRequest } from '../types'

interface TimeTrackingPanelProps {
  entries?: TimeEntry[]
  vacationRequests?: VacationRequest[]
}

export default function TimeTrackingPanel({ 
  entries = mockTimeEntries, 
  vacationRequests = mockVacationRequests 
}: TimeTrackingPanelProps) {
  const [activeTab, setActiveTab] = useState('zeiterfassung')
  const [selectedStatus, setSelectedStatus] = useState('Alle')
  const [selectedEmployee, setSelectedEmployee] = useState('Alle')

  // Mitarbeiternamen für Filter
  const employeeNames = ['Alle', ...mockEmployees.map(emp => `${emp.firstName} ${emp.lastName}`)]

  const statusOptions = ['Alle', 'Entwurf', 'Eingereicht', 'Genehmigt', 'Abgelehnt']

  // Filter für Zeiteinträge
  const filteredEntries = entries.filter(entry => {
    const employee = mockEmployees.find(emp => emp.id === entry.employeeId)
    const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : ''
    
    const matchesStatus = selectedStatus === 'Alle' || entry.status === selectedStatus
    const matchesEmployee = selectedEmployee === 'Alle' || employeeName === selectedEmployee
    
    return matchesStatus && matchesEmployee
  })

  // Filter für Urlaubsanträge
  const filteredVacationRequests = vacationRequests.filter(request => {
    const employee = mockEmployees.find(emp => emp.id === request.employeeId)
    const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : ''
    
    const matchesStatus = selectedStatus === 'Alle' || request.status === selectedStatus
    const matchesEmployee = selectedEmployee === 'Alle' || employeeName === selectedEmployee
    
    return matchesStatus && matchesEmployee
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Genehmigt': return 'bg-green-100 text-green-800'
      case 'Eingereicht': return 'bg-yellow-100 text-yellow-800'
      case 'Entwurf': return 'bg-gray-100 text-gray-800'
      case 'Abgelehnt': return 'bg-red-100 text-red-800'
      case 'Storniert': return 'bg-gray-100 text-gray-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Genehmigt': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'Eingereicht': return <Clock className="h-4 w-4 text-yellow-600" />
      case 'Entwurf': return <AlertCircle className="h-4 w-4 text-gray-600" />
      case 'Abgelehnt': return <XCircle className="h-4 w-4 text-red-600" />
      default: return <Clock className="h-4 w-4 text-blue-600" />
    }
  }

  const getVacationTypeColor = (type: string) => {
    switch (type) {
      case 'Urlaub': return 'bg-blue-100 text-blue-800'
      case 'Krankheit': return 'bg-red-100 text-red-800'
      case 'Sonderurlaub': return 'bg-purple-100 text-purple-800'
      case 'Elternzeit': return 'bg-pink-100 text-pink-800'
      case 'Bildungsurlaub': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Berechne Statistiken
  const totalHours = filteredEntries.reduce((sum, entry) => sum + entry.workedHours, 0)
  const overtimeHours = filteredEntries.reduce((sum, entry) => sum + entry.overtimeHours, 0)
  const pendingApprovals = filteredEntries.filter(entry => entry.status === 'Eingereicht').length
  const pendingVacations = filteredVacationRequests.filter(req => req.status === 'Eingereicht').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Zeiterfassung & Urlaub</h3>
          <p className="text-sm text-gray-600">Verwaltung von Arbeitszeiten und Urlaubsanträgen</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Neuer Eintrag
          </button>
        </div>
      </div>

      {/* Statistiken */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{totalHours.toFixed(1)}h</div>
              <div className="text-sm text-gray-600">Gesamtstunden</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{overtimeHours.toFixed(1)}h</div>
              <div className="text-sm text-gray-600">Überstunden</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{pendingApprovals}</div>
              <div className="text-sm text-gray-600">Zu genehmigen</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{pendingVacations}</div>
              <div className="text-sm text-gray-600">Urlaubsanträge</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex space-x-1 p-1 bg-gray-100 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('zeiterfassung')}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
              activeTab === 'zeiterfassung'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Zeiterfassung
          </button>
          <button
            onClick={() => setActiveTab('urlaub')}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
              activeTab === 'urlaub'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Urlaubsanträge
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-400" />
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {employeeNames.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content basierend auf aktiven Tab */}
      {activeTab === 'zeiterfassung' && (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mitarbeiter
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Datum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Arbeitszeit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Typ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Standort
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aktionen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEntries.map((entry) => {
                  const employee = mockEmployees.find(emp => emp.id === entry.employeeId)
                  return (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary-600">
                              {employee?.firstName[0]}{employee?.lastName[0]}
                            </span>
                          </div>
                          <div className="ml-3 text-sm font-medium text-gray-900">
                            {employee?.firstName} {employee?.lastName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(entry.date).toLocaleDateString('de-DE')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>
                          <div>{entry.startTime} - {entry.endTime}</div>
                          <div className="text-xs text-gray-500">
                            {entry.workedHours}h gearbeitet
                            {entry.overtimeHours > 0 && (
                              <span className="text-orange-600 ml-1">(+{entry.overtimeHours}h Überstunden)</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          entry.type === 'Überstunden' ? 'bg-orange-100 text-orange-800' :
                          entry.type === 'Nachtschicht' ? 'bg-purple-100 text-purple-800' :
                          entry.type === 'Wochenende' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {entry.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(entry.status)}
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(entry.status)}`}>
                            {entry.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {entry.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900">
                          <Eye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'urlaub' && (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mitarbeiter
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zeitraum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Typ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Eingereicht
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aktionen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVacationRequests.map((request) => {
                  const employee = mockEmployees.find(emp => emp.id === request.employeeId)
                  return (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary-600">
                              {employee?.firstName[0]}{employee?.lastName[0]}
                            </span>
                          </div>
                          <div className="ml-3 text-sm font-medium text-gray-900">
                            {employee?.firstName} {employee?.lastName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>
                          <div>{new Date(request.startDate).toLocaleDateString('de-DE')} -</div>
                          <div>{new Date(request.endDate).toLocaleDateString('de-DE')}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getVacationTypeColor(request.type)}`}>
                          {request.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {request.days}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(request.status)}
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(request.requestedAt).toLocaleDateString('de-DE')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          {request.status === 'Eingereicht' && (
                            <>
                              <button className="text-green-600 hover:text-green-900">
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <XCircle className="h-4 w-4" />
                              </button>
                            </>
                          )}
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
} 