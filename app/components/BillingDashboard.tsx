'use client'

import { useState } from 'react'
import { Euro, TrendingUp, Calendar, CreditCard, Download, AlertCircle, CheckCircle } from 'lucide-react'

interface BillingDashboardProps {
  customerId: string
  customerName: string
}

export default function BillingDashboard({ customerId, customerName }: BillingDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('current')

  const billingData = {
    currentMonth: {
      total: 23450,
      paid: 18900,
      pending: 4550,
      overdue: 0,
      invoiceCount: 12
    },
    lastMonth: {
      total: 19800,
      paid: 19800,
      pending: 0,
      overdue: 0,
      invoiceCount: 9
    },
    yearToDate: {
      total: 284650,
      paid: 261200,
      pending: 23450,
      overdue: 0,
      invoiceCount: 156
    }
  }

  const recentInvoices = [
    {
      id: 'SCH-2024-001234',
      date: '2024-01-15',
      amount: 1240,
      status: 'paid',
      dueDate: '2024-02-14',
      description: 'Komplettladung München → Ingolstadt'
    },
    {
      id: 'SCH-2024-001235',
      date: '2024-01-16',
      amount: 890,
      status: 'pending',
      dueDate: '2024-02-15',
      description: 'Sprintbox Express-Service'
    },
    {
      id: 'SCH-2024-001236',
      date: '2024-01-17',
      amount: 2100,
      status: 'pending',
      dueDate: '2024-02-16',
      description: 'Wöchentliche Routenlieferung'
    }
  ]

  const costBreakdown = [
    { category: 'Komplettladungen', amount: 15400, percentage: 66 },
    { category: 'Sprintbox Express', amount: 5200, percentage: 22 },
    { category: 'Stückgut', amount: 2850, percentage: 12 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-4 w-4" />
      case 'pending': return <Calendar className="h-4 w-4" />
      case 'overdue': return <AlertCircle className="h-4 w-4" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">💰 Abrechnungsübersicht</h2>
            <p className="text-sm text-gray-600">{customerName} • Transparente Kostenübersicht</p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="input-field py-2 text-sm"
            >
              <option value="current">Aktueller Monat</option>
              <option value="last">Letzter Monat</option>
              <option value="year">Jahr bis heute</option>
            </select>
            <button className="btn-secondary text-sm">
              <Download className="h-4 w-4 mr-2" />
              Bericht
            </button>
          </div>
        </div>

        {/* Finanz-KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {(billingData.currentMonth.total / 1000).toFixed(1)}k€
                </div>
                <div className="text-sm text-blue-700">Gesamtumsatz</div>
              </div>
              <Euro className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {(billingData.currentMonth.paid / 1000).toFixed(1)}k€
                </div>
                <div className="text-sm text-green-700">Bezahlt</div>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {(billingData.currentMonth.pending / 1000).toFixed(1)}k€
                </div>
                <div className="text-sm text-yellow-700">Ausstehend</div>
              </div>
              <Calendar className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {billingData.currentMonth.invoiceCount}
                </div>
                <div className="text-sm text-purple-700">Rechnungen</div>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kostenaufschlüsselung */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">📊 Kostenaufschlüsselung</h3>
          </div>
          
          <div className="space-y-4">
            {costBreakdown.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.category}</span>
                  <span className="text-sm font-bold text-gray-900">
                    {item.amount.toLocaleString('de-DE')}€
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">{item.percentage}% des Gesamtumsatzes</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">Ø Kosten pro Transport</div>
            <div className="text-xl font-bold text-gray-900">
              {Math.round(billingData.currentMonth.total / billingData.currentMonth.invoiceCount).toLocaleString('de-DE')}€
            </div>
            <div className="text-xs text-green-600">-8% vs. Vormonat</div>
          </div>
        </div>

        {/* Zahlungsstatus */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-semibold text-gray-900">💳 Zahlungsstatus</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium text-green-900">Zahlungen auf dem neuesten Stand</div>
                  <div className="text-sm text-green-700">Alle fälligen Rechnungen wurden beglichen</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700">Automatische Zahlungen</div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-blue-900">SEPA-Lastschrift aktiv</div>
                    <div className="text-sm text-blue-700">Automatischer Einzug am Fälligkeitstag</div>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Aktiv
                </span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="btn-secondary text-sm w-full">
                Zahlungseinstellungen verwalten
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rechnungshistorie */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-gray-900">🧾 Aktuelle Rechnungen</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            Alle Rechnungen anzeigen
          </button>
        </div>

        <div className="space-y-3">
          {recentInvoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${getStatusColor(invoice.status)}`}>
                  {getStatusIcon(invoice.status)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{invoice.id}</div>
                  <div className="text-sm text-gray-600">{invoice.description}</div>
                  <div className="text-xs text-gray-500">
                    Erstellt: {new Date(invoice.date).toLocaleDateString('de-DE')} • 
                    Fällig: {new Date(invoice.dueDate).toLocaleDateString('de-DE')}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-gray-900">
                  {invoice.amount.toLocaleString('de-DE')}€
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(invoice.status)}`}>
                  {invoice.status === 'paid' ? 'Bezahlt' : 
                   invoice.status === 'pending' ? 'Ausstehend' : 'Überfällig'}
                </div>
                <button className="text-xs text-primary-600 hover:text-primary-700 mt-1">
                  PDF herunterladen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kostenoptimierung */}
      <div className="card bg-orange-50 border-orange-200">
        <div className="flex items-start space-x-3">
          <TrendingUp className="h-5 w-5 text-orange-600" />
          <div>
            <h3 className="font-medium text-orange-900">💡 Kostenoptimierungs-Tipps</h3>
            <div className="text-sm text-orange-800 mt-2 space-y-1">
              <p>• <strong>Mengenrabatt:</strong> Bei +20% mehr Volumen erhalten Sie 5% Rabatt</p>
              <p>• <strong>Planungsvorlauf:</strong> Buchungen 48h im Voraus sparen bis zu 12%</p>
              <p>• <strong>Flexible Termine:</strong> Nicht-Express-Lieferungen reduzieren Kosten um 18%</p>
            </div>
            <button className="btn-primary text-sm mt-3">
              Beratungstermin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 