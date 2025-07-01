'use client';

import React, { useState } from 'react';
import { LinkedInSocialSelling } from '../types';
import { mockLinkedInSocialSelling } from '../data/mockData';

export default function LinkedInSocialSellingDashboard() {
  const [prospects, setProspects] = useState<LinkedInSocialSelling[]>(mockLinkedInSocialSelling);
  const [selectedProspect, setSelectedProspect] = useState<LinkedInSocialSelling | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filteredProspects = filterStatus === 'All' 
    ? prospects 
    : prospects.filter(p => p.connectionStatus === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Connection Sent': return 'bg-yellow-100 text-yellow-800';
      case 'Followed Up': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEngagementColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const overallStats = {
    totalConnections: prospects.filter(p => p.connectionStatus === 'Connected').length,
    totalProspects: prospects.length,
    avgEngagement: Math.round(prospects.reduce((sum, p) => sum + p.engagementScore, 0) / prospects.length),
    avgResponseRate: Math.round(prospects.reduce((sum, p) => sum + p.responseRate, 0) / prospects.length),
    avgLeadScore: Math.round(prospects.reduce((sum, p) => sum + p.leadScore, 0) / prospects.length)
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">LinkedIn Social Selling</h2>
            <p className="text-gray-600">Prospect-Management & Automation Dashboard</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Neuer Prospect
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Gesamt Prospects</h3>
            <p className="text-2xl font-bold text-blue-900">{overallStats.totalProspects}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Verbunden</h3>
            <p className="text-2xl font-bold text-green-900">{overallStats.totalConnections}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600">Ø Engagement</h3>
            <p className="text-2xl font-bold text-purple-900">{overallStats.avgEngagement}%</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-600">Ø Response Rate</h3>
            <p className="text-2xl font-bold text-yellow-900">{overallStats.avgResponseRate}%</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-orange-600">Ø Lead Score</h3>
            <p className="text-2xl font-bold text-orange-900">{overallStats.avgLeadScore}</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2">
          {['All', 'Not Connected', 'Connection Sent', 'Connected', 'Followed Up'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Prospects Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prospect
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Messages
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Response Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Letzte Aktion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nächste Aktion
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProspects.map((prospect) => (
                <tr 
                  key={prospect.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedProspect(prospect)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{prospect.prospectName}</div>
                      <div className="text-sm text-gray-500">{prospect.prospectCompany}</div>
                      <div className="text-xs text-blue-600">{prospect.industryFocus}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(prospect.connectionStatus)}`}>
                      {prospect.connectionStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${prospect.engagementScore}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${getEngagementColor(prospect.engagementScore)}`}>
                        {prospect.engagementScore}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {prospect.messagesSent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {prospect.responseRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getEngagementColor(prospect.leadScore)}`}>
                      {prospect.leadScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {prospect.lastAction}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 max-w-xs truncate">
                    {prospect.nextAction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Prospect Detail Modal */}
      {selectedProspect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{selectedProspect.prospectName}</h3>
                  <p className="text-sm text-gray-500">{selectedProspect.prospectCompany}</p>
                </div>
                <button 
                  onClick={() => setSelectedProspect(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">LinkedIn Profil</label>
                  <p className="text-sm text-blue-600">{selectedProspect.linkedInProfile}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Zugewiesen an</label>
                  <p className="text-sm text-gray-900">{selectedProspect.assignedTo}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Automation Sequence</label>
                  <p className="text-sm text-gray-900">{selectedProspect.automationSequence}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Branchenfokus</label>
                  <p className="text-sm text-gray-900">{selectedProspect.industryFocus}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Nachrichten gesendet</label>
                  <p className="text-lg font-bold text-gray-900">{selectedProspect.messagesSent}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Response Rate</label>
                  <p className="text-lg font-bold text-gray-900">{selectedProspect.responseRate}%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Lead Score</label>
                  <p className="text-lg font-bold text-gray-900">{selectedProspect.leadScore}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Letzte Aktion</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedProspect.lastAction}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Nächste Aktion</label>
                <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">{selectedProspect.nextAction}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  LinkedIn öffnen
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Nachricht senden
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Follow-up erstellen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 