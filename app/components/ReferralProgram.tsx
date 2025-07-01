'use client';

import React, { useState } from 'react';
import { ReferralProgram } from '../types';
import { mockReferralProgram } from '../data/mockData';

export default function ReferralProgramDashboard() {
  const [referrals, setReferrals] = useState<ReferralProgram[]>(mockReferralProgram);
  const [selectedReferral, setSelectedReferral] = useState<ReferralProgram | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [showNewReferralForm, setShowNewReferralForm] = useState(false);

  const filteredReferrals = filterStatus === 'All' 
    ? referrals 
    : referrals.filter(r => r.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Gewonnen': return 'bg-green-100 text-green-800';
      case 'Qualifiziert': return 'bg-blue-100 text-blue-800';
      case 'Kontaktiert': return 'bg-yellow-100 text-yellow-800';
      case 'Eingegangen': return 'bg-gray-100 text-gray-800';
      case 'Verloren': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRewardTypeColor = (type: string) => {
    switch (type) {
      case 'Geld': return 'text-green-600';
      case 'Rabatt': return 'text-blue-600';
      case 'Geschenk': return 'text-purple-600';
      case 'Bonus': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const stats = {
    totalReferrals: referrals.length,
    totalValue: referrals.reduce((sum, r) => sum + r.referralValue, 0),
    wonReferrals: referrals.filter(r => r.status === 'Gewonnen').length,
    totalRewards: referrals.filter(r => r.status === 'Gewonnen').reduce((sum, r) => sum + r.rewardAmount, 0),
    conversionRate: Math.round((referrals.filter(r => r.status === 'Gewonnen').length / referrals.length) * 100)
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Empfehlungsprogramm</h2>
            <p className="text-gray-600">Verwaltung von Kundenempfehlungen & Rewards</p>
          </div>
          <button 
            onClick={() => setShowNewReferralForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            + Neue Empfehlung
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Gesamt Empfehlungen</h3>
            <p className="text-2xl font-bold text-blue-900">{stats.totalReferrals}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Gewonnene Deals</h3>
            <p className="text-2xl font-bold text-green-900">{stats.wonReferrals}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600">Conversion Rate</h3>
            <p className="text-2xl font-bold text-purple-900">{stats.conversionRate}%</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-600">Potentieller Wert</h3>
            <p className="text-2xl font-bold text-yellow-900">{(stats.totalValue / 1000000).toFixed(1)}M €</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-orange-600">Ausgezahlte Rewards</h3>
            <p className="text-2xl font-bold text-orange-900">{stats.totalRewards.toLocaleString()} €</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2">
          {['All', 'Eingegangen', 'Kontaktiert', 'Qualifiziert', 'Gewonnen', 'Verloren'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Referrals Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empfehler
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empfohlenes Unternehmen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Potentieller Wert
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reward
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zugewiesen an
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Datum
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReferrals.map((referral) => (
                <tr 
                  key={referral.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedReferral(referral)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{referral.referrerName}</div>
                      <div className="text-sm text-gray-500">{referral.referrerType}</div>
                      <div className="text-xs text-blue-600">{referral.referrerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{referral.referredCompany}</div>
                      <div className="text-sm text-gray-500">{referral.referredContact}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(referral.status)}`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {(referral.referralValue / 1000).toLocaleString()}k €
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span className={`font-medium ${getRewardTypeColor(referral.rewardType)}`}>
                        {referral.rewardType}
                      </span>
                      <div className="text-xs text-gray-500">
                        {referral.rewardAmount.toLocaleString()} €
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {referral.assignedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(referral.createdAt).toLocaleDateString('de-DE')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Referral Detail Modal */}
      {selectedReferral && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Empfehlung Details</h3>
                  <p className="text-sm text-gray-500">{selectedReferral.referredCompany}</p>
                </div>
                <button 
                  onClick={() => setSelectedReferral(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Empfehler</label>
                  <p className="text-sm text-gray-900">{selectedReferral.referrerName}</p>
                  <p className="text-xs text-gray-500">{selectedReferral.referrerType}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Empfohlener Kontakt</label>
                  <p className="text-sm text-gray-900">{selectedReferral.referredContact}</p>
                  <p className="text-xs text-blue-600">{selectedReferral.referredEmail}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedReferral.status)}`}>
                    {selectedReferral.status}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Potentieller Wert</label>
                  <p className="text-lg font-bold text-gray-900">{(selectedReferral.referralValue / 1000).toLocaleString()}k €</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Reward</label>
                  <p className={`text-sm font-medium ${getRewardTypeColor(selectedReferral.rewardType)}`}>
                    {selectedReferral.rewardType} - {selectedReferral.rewardAmount.toLocaleString()} €
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Zugewiesen an</label>
                <p className="text-sm text-gray-900">{selectedReferral.assignedTo}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Notizen</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedReferral.notes}</p>
              </div>

              {selectedReferral.conversionDate && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Conversion Datum</label>
                  <p className="text-sm text-green-600 font-medium">
                    {new Date(selectedReferral.conversionDate).toLocaleDateString('de-DE')}
                  </p>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Kontakt aufnehmen
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Status ändern
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Reward auszahlen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Referral Form Modal */}
      {showNewReferralForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full m-4">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Neue Empfehlung erfassen</h3>
                <button 
                  onClick={() => setShowNewReferralForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empfehler Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name des Empfehlers"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empfehler Typ</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Customer</option>
                  <option>Employee</option>
                  <option>Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empfohlenes Unternehmen</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name des empfohlenen Unternehmens"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ansprechpartner</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name des Ansprechpartners"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Geschätzer Deal-Wert (€)</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="z.B. 850000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notizen</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  placeholder="Zusätzliche Informationen zur Empfehlung..."
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button 
                  onClick={() => setShowNewReferralForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Abbrechen
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Empfehlung erstellen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 