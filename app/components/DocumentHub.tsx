'use client'

import { useState } from 'react'
import { FileText, Download, Search, Filter, FolderOpen, Mail, Archive, Star, Eye, Share, Calendar, User } from 'lucide-react'
import { CustomerDocument } from '../types'

interface DocumentHubProps {
  documents: CustomerDocument[]
  customerId: string
  customerName: string
}

interface DocumentFolder {
  id: string
  name: string
  icon: string
  count: number
  documents: CustomerDocument[]
}

export default function DocumentHub({ documents, customerId, customerName }: DocumentHubProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFolder, setSelectedFolder] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'type' | 'size'>('date')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([])

  // Organisiere Dokumente in Ordner
  const folders: DocumentFolder[] = [
    {
      id: 'all',
      name: 'Alle Dokumente',
      icon: '📁',
      count: documents.length,
      documents: documents
    },
    {
      id: 'invoices',
      name: 'Rechnungen',
      icon: '🧾',
      count: documents.filter(d => d.type === 'Invoice').length,
      documents: documents.filter(d => d.type === 'Invoice')
    },
    {
      id: 'delivery_notes',
      name: 'Lieferscheine',
      icon: '📋',
      count: documents.filter(d => d.type === 'Delivery Note').length,
      documents: documents.filter(d => d.type === 'Delivery Note')
    },
    {
      id: 'cmr',
      name: 'CMR-Frachtbriefe',
      icon: '🚛',
      count: documents.filter(d => d.type === 'CMR').length,
      documents: documents.filter(d => d.type === 'CMR')
    },
    {
      id: 'certificates',
      name: 'Zertifikate',
      icon: '🏆',
      count: documents.filter(d => d.type === 'Certificate').length,
      documents: documents.filter(d => d.type === 'Certificate')
    },
    {
      id: 'archived',
      name: 'Archiviert',
      icon: '📦',
      count: documents.filter(d => d.isArchived).length,
      documents: documents.filter(d => d.isArchived)
    }
  ]

  // Filtere und sortiere Dokumente
  const getFilteredDocuments = () => {
    let filtered = selectedFolder === 'all' 
      ? documents 
      : folders.find(f => f.id === selectedFolder)?.documents || []

    // Textsuche
    if (searchTerm) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sortierung
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'name':
          return a.title.localeCompare(b.title)
        case 'type':
          return a.type.localeCompare(b.type)
        case 'size':
          return b.fileSize - a.fileSize
        default:
          return 0
      }
    })

    return filtered
  }

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
      case 'Certificate': return '🏆'
      case 'Insurance': return '🛡️'
      case 'Packing List': return '📦'
      default: return '📄'
    }
  }

  const handleBulkDownload = () => {
    if (selectedDocuments.length === 0) return
    // Simuliere Bulk-Download
    alert(`${selectedDocuments.length} Dokumente werden als ZIP-Archiv vorbereitet...`)
  }

  const handleEmailDocuments = () => {
    if (selectedDocuments.length === 0) return
    // Simuliere E-Mail-Versand
    alert(`${selectedDocuments.length} Dokumente werden per E-Mail versandt...`)
  }

  const toggleDocumentSelection = (docId: string) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) 
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    )
  }

  const currentDocuments = getFilteredDocuments()

  return (
    <div className="space-y-6">
      {/* Header mit Suchfunktion */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">📄 Dokumentenzentrale</h2>
            <p className="text-sm text-gray-600">{customerName} • {documents.length} Dokumente verfügbar</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="btn-secondary text-sm">
              <Archive className="h-4 w-4 mr-2" />
              Archivieren
            </button>
            <button className="btn-primary text-sm">
              <Download className="h-4 w-4 mr-2" />
              Alle herunterladen
            </button>
          </div>
        </div>

        {/* Suche und Filter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Dokumente durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="input-field"
          >
            <option value="date">Sortieren: Datum</option>
            <option value="name">Sortieren: Name</option>
            <option value="type">Sortieren: Typ</option>
            <option value="size">Sortieren: Größe</option>
          </select>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <FileText className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}`}
            >
              <FolderOpen className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bulk-Aktionen */}
        {selectedDocuments.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-blue-800">
                {selectedDocuments.length} Dokument(e) ausgewählt
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleBulkDownload}
                  className="btn-primary text-sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  ZIP Download
                </button>
                <button
                  onClick={handleEmailDocuments}
                  className="btn-secondary text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Per E-Mail senden
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Seitenleiste mit Ordnern */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📁 Ordner</h3>
            <div className="space-y-2">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => setSelectedFolder(folder.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedFolder === folder.id
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{folder.icon}</span>
                      <span className="text-sm font-medium">{folder.name}</span>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {folder.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Statistiken</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Gesamt-Downloads</span>
                <span className="text-sm font-medium">
                  {documents.reduce((sum, d) => sum + d.downloadCount, 0)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Neueste Dokumente</span>
                <span className="text-sm font-medium">
                  {documents.filter(d => {
                    const daysDiff = Math.floor((Date.now() - new Date(d.createdAt).getTime()) / (1000 * 60 * 60 * 24))
                    return daysDiff <= 7
                  }).length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Gesamt-Größe</span>
                <span className="text-sm font-medium">
                  {formatFileSize(documents.reduce((sum, d) => sum + d.fileSize, 0))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dokumentenliste */}
        <div className="lg:col-span-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">
                {folders.find(f => f.id === selectedFolder)?.name || 'Dokumente'}
              </h3>
              <span className="text-sm text-gray-600">
                {currentDocuments.length} Dokument(e)
              </span>
            </div>

            {currentDocuments.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Dokumente gefunden</h3>
                <p className="text-gray-600">
                  {searchTerm ? 'Versuchen Sie einen anderen Suchbegriff.' : 'In diesem Ordner sind keine Dokumente vorhanden.'}
                </p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-3'}>
                {currentDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className={`p-4 border rounded-lg hover:bg-gray-50 transition-colors ${
                      selectedDocuments.includes(doc.id) ? 'border-primary-200 bg-primary-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedDocuments.includes(doc.id)}
                        onChange={() => toggleDocumentSelection(doc.id)}
                        className="mt-1"
                      />
                      
                      <div className="text-2xl">{getDocumentIcon(doc.type)}</div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900 truncate">{doc.title}</h4>
                          <div className="flex items-center space-x-1">
                            {doc.downloadCount > 10 && (
                              <Star className="h-4 w-4 text-yellow-500" />
                            )}
                            <span className="text-xs text-gray-500">
                              {doc.downloadCount}x
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span>{doc.type}</span>
                          <span>{formatFileSize(doc.fileSize)}</span>
                          <span>{new Date(doc.createdAt).toLocaleDateString('de-DE')}</span>
                        </div>
                        
                        {doc.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {doc.description}
                          </p>
                        )}

                        {doc.tags && doc.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {doc.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                            {doc.tags.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{doc.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1">
                              <Download className="h-4 w-4" />
                              <span>Download</span>
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 text-sm flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>Vorschau</span>
                            </button>
                            <button className="text-gray-600 hover:text-gray-700 text-sm flex items-center space-x-1">
                              <Share className="h-4 w-4" />
                              <span>Teilen</span>
                            </button>
                          </div>
                          
                          {doc.shipmentId && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Sendung: {doc.shipmentId.slice(-6)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Auto-Generierung Info */}
      <div className="card bg-green-50 border-green-200">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <FileText className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-green-900">🤖 Automatische Dokumentenerstellung</h3>
            <p className="text-sm text-green-700 mt-1">
              Neue Dokumente werden automatisch erstellt und hier abgelegt:
            </p>
            <ul className="text-sm text-green-700 mt-2 space-y-1">
              <li>• CMR-Frachtbriefe direkt nach Abholung</li>
              <li>• Lieferscheine bei Zustellung mit Foto-Nachweis</li>
              <li>• Rechnungen automatisch 24h nach Zustellung</li>
              <li>• Compliance-Zertifikate bei Gefahrgut-Transporten</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 