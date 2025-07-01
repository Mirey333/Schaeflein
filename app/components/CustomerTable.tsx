import { Phone, Mail, Calendar } from 'lucide-react'
import { Customer } from '../types'

interface CustomerTableProps {
  customers: Customer[]
}

export default function CustomerTable({ customers }: CustomerTableProps) {
  const getTierBadgeClass = (tier: Customer['tier']) => {
    switch (tier) {
      case 'Platinum': return 'badge-primary bg-purple-50 text-purple-600'
      case 'Gold': return 'badge-warning bg-yellow-50 text-yellow-600'
      case 'Silver': return 'badge bg-gray-50 text-gray-600'
      case 'Bronze': return 'badge bg-orange-50 text-orange-600'
      default: return 'badge'
    }
  }

  const getBusinessTypeBadgeClass = (type: Customer['businessType']) => {
    switch (type) {
      case 'Logistik': return 'badge-primary'
      case 'Spedition': return 'badge-success'
      case 'Industriemontage': return 'badge-warning'
      case 'Sprintbox': return 'badge bg-blue-50 text-blue-600'
      case 'Truckwerkstatt': return 'badge bg-green-50 text-green-600'
      case 'Ausland': return 'badge bg-indigo-50 text-indigo-600'
      default: return 'badge'
    }
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-logistics-200">
          <thead className="bg-logistics-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Kunde
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Kontakt
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Geschäftsbereich
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Tier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Umsatz
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Nächster Kontakt
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Betreuer
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-logistics-500 uppercase tracking-wider">
                Aktionen
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-logistics-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-logistics-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-logistics-900">{customer.name}</div>
                    <div className="text-sm text-logistics-500">{customer.location}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-logistics-600">
                      <Mail className="h-3 w-3 mr-1" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-logistics-600">
                      <Phone className="h-3 w-3 mr-1" />
                      {customer.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getBusinessTypeBadgeClass(customer.businessType)}>
                    {customer.businessType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getTierBadgeClass(customer.tier)}>
                    {customer.tier}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-logistics-900">
                  {(customer.totalRevenue / 1000000).toFixed(1)}M €
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-logistics-600">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(customer.nextContact).toLocaleDateString('de-DE')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-logistics-600">
                  {customer.assignedTo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex space-x-2 justify-end">
                    <button className="text-primary-600 hover:text-primary-900 transition-colors">
                      Bearbeiten
                    </button>
                    <button className="text-success-600 hover:text-success-900 transition-colors">
                      Kontakt
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 