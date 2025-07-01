'use client'

import { useState } from 'react'
import { FileText, Download, Search, Star, Eye } from 'lucide-react'

interface SmartDocumentsProps {
  documents: any[]
  customerName: string
}

export default function SmartDocuments({ documents, customerName }: SmartDocumentsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'Invoice': return '🧾'
      case 'Delivery Note': return '📋'
      case 'CMR': return '🚛'
      default: return '📄'
    }
  }

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📄 Smart Documents</h2>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Dokumente durchsuchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10 w-full"
          />
        </div>

        <div className="space-y-3">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getDocumentIcon(doc.type)}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{doc.title}</h4>
                    <div className="text-sm text-gray-600">
                      {doc.type} • {formatFileSize(doc.fileSize)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="btn-secondary text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Vorschau
                  </button>
                  <button className="btn-primary text-sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 