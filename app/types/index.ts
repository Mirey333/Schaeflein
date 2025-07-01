// Schäflein CRM Types
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  location: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  lastContact: string;
  nextContact: string;
  assignedTo: string;
  totalRevenue: number;
  status: 'Aktiv' | 'Inaktiv' | 'Prospect';
  businessType: 'Spedition' | 'Logistik' | 'Ausland' | 'Sprintbox' | 'Industriemontage' | 'Truckwerkstatt';
  notes: string;
  createdAt: string;
  updatedAt: string;
  // Erweiterte CRM-Felder
  leadScore?: number;
  engagementLevel?: 'Niedrig' | 'Mittel' | 'Hoch';
  preferredCommunication?: 'Email' | 'Telefon' | 'WhatsApp' | 'Brief';
  decisionMakers?: string[];
  painPoints?: string[];
  competitionInfo?: string;
  marketSegment?: string;
  businessPotential?: 'Niedrig' | 'Mittel' | 'Hoch' | 'Sehr Hoch';
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: 'Website' | 'Cargoline' | 'Ausschreibung' | 'Kaltakquise' | 'Empfehlung' | 'Messen' | 'LinkedIn' | 'Social Media';
  status: 'Neu' | 'Kontaktiert' | 'Qualifiziert' | 'Angebot' | 'Verhandlung' | 'Gewonnen' | 'Verloren';
  businessType: 'Spedition' | 'Logistik' | 'Ausland' | 'Sprintbox' | 'Industriemontage' | 'Truckwerkstatt';
  potentialValue: number;
  probability: number;
  assignedTo: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  // Erweiterte Lead-Felder
  leadScore: number;
  qualificationCriteria: {
    budget: 'Niedrig' | 'Mittel' | 'Hoch';
    authority: 'Niedrig' | 'Mittel' | 'Hoch';
    need: 'Niedrig' | 'Mittel' | 'Hoch';
    timeline: 'Niedrig' | 'Mittel' | 'Hoch';
  };
  interactions: number;
  lastInteraction: string;
  nextAction: string;
  competitorAnalysis?: string;
  decisionMakers: string[];
  painPoints: string[];
  proposalsSent: number;
  meetingsHeld: number;
  daysInPipeline: number;
  engagementLevel: 'Niedrig' | 'Mittel' | 'Hoch';
}

export interface Campaign {
  id: string;
  name: string;
  type: 'Email' | 'WhatsApp' | 'Telefon' | 'Brief' | 'LinkedIn' | 'Account-Based' | 'Multi-Channel';
  status: 'Entwurf' | 'Aktiv' | 'Pausiert' | 'Beendet';
  targetAudience: string;
  businessType: string[];
  sendDate: string;
  recipients: number;
  openRate: number;
  clickRate: number;
  responseRate: number;
  createdAt: string;
  content: string;
  // Erweiterte Kampagnen-Felder
  budget: number;
  roi: number;
  costPerLead: number;
  conversionRate: number;
  leadGenerated: number;
  revenueGenerated: number;
  targetCompanies?: string[];
  personalization: 'Niedrig' | 'Mittel' | 'Hoch';
  abTestVariant?: string;
  followUpSequence?: string[];
}

export interface Activity {
  id: string;
  type: 'Anruf' | 'Email' | 'Meeting' | 'WhatsApp' | 'Notiz' | 'LinkedIn' | 'Proposal' | 'Demo';
  customerId?: string;
  leadId?: string;
  subject: string;
  description: string;
  assignedTo: string;
  scheduledDate?: string;
  completedDate?: string;
  status: 'Geplant' | 'Abgeschlossen' | 'Verschoben' | 'Abgebrochen';
  createdAt: string;
  // Erweiterte Aktivitäts-Felder
  outcome?: 'Positiv' | 'Neutral' | 'Negativ';
  nextSteps?: string;
  engagementScore?: number;
  duration?: number;
  attendees?: string[];
  followUpRequired?: boolean;
  leadScoreImpact?: number;
}

// Neue Typen für erweiterte CRM-Funktionalität

export interface ProspectResearch {
  id: string;
  companyName: string;
  industry: string;
  revenue: number;
  employees: number;
  location: string;
  website: string;
  businessType: string;
  potentialValue: number;
  priority: 'Niedrig' | 'Mittel' | 'Hoch' | 'Kritisch';
  researchDate: string;
  sources: string[];
  keyInsights: string[];
  decisionMakers: {
    name: string;
    role: string;
    email?: string;
    phone?: string;
    linkedIn?: string;
  }[];
  competitorAnalysis: string;
  painPoints: string[];
  businessNeed: string;
  timeline: string;
  budget: string;
  assignedTo: string;
  status: 'Recherche' | 'Qualifiziert' | 'Kontaktiert' | 'Nicht Interessiert';
  createdAt: string;
  updatedAt: string;
}

export interface AccountBasedMarketing {
  id: string;
  accountName: string;
  targetCompanies: string[];
  strategy: string;
  budget: number;
  timeline: string;
  keyContacts: {
    name: string;
    role: string;
    email: string;
    phone?: string;
    linkedIn?: string;
    influence: 'Niedrig' | 'Mittel' | 'Hoch';
  }[];
  touchpoints: {
    channel: string;
    message: string;
    date: string;
    status: 'Geplant' | 'Ausgeführt' | 'Verschoben';
  }[];
  kpis: {
    engagement: number;
    meetings: number;
    proposals: number;
    revenue: number;
  };
  status: 'Planung' | 'Aktiv' | 'Pause' | 'Abgeschlossen';
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompetitiveIntelligence {
  id: string;
  competitorName: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  marketShare: number;
  keyClients: string[];
  uniqueSellingPoints: string[];
  threats: string[];
  opportunities: string[];
  lastUpdated: string;
  source: string;
  notes: string;
}

export interface LeadNurturing {
  id: string;
  leadId: string;
  sequence: string;
  currentStep: number;
  totalSteps: number;
  nextActionDate: string;
  status: 'Aktiv' | 'Pausiert' | 'Abgeschlossen';
  engagementLevel: 'Niedrig' | 'Mittel' | 'Hoch';
  lastInteraction: string;
  automationRules: {
    trigger: string;
    action: string;
    delay: number;
  }[];
  personalizedContent: boolean;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

export interface SalesAnalytics {
  id: string;
  period: string;
  newLeads: number;
  qualifiedLeads: number;
  conversions: number;
  revenue: number;
  averageDealSize: number;
  salesCycleLength: number;
  winRate: number;
  pipelineValue: number;
  forecasting: {
    nextMonth: number;
    nextQuarter: number;
    nextYear: number;
  };
  topPerformers: string[];
  lostDealReasons: string[];
  marketTrends: string[];
  competitiveWins: number;
  competitiveLosses: number;
}

// Bestehende Typen bleiben unverändert
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Mitarbeiter';
  department: string;
  avatar?: string;
}

export interface KPI {
  name: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
  assignedTo: string;
  status: 'Offen' | 'In Bearbeitung' | 'Abgeschlossen' | 'Blockiert';
  dueDate: string;
  priority: 'Niedrig' | 'Mittel' | 'Hoch' | 'Kritisch';
  businessType: string;
}

// HR-Management Types für Schäflein AG
export interface Employee {
  id: string;
  personalNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
  position: string;
  department: 'Spedition' | 'Logistik' | 'Ausland' | 'Sprintbox' | 'Industriemontage' | 'Truckwerkstatt' | 'Verwaltung' | 'IT' | 'Buchhaltung' | 'Personal' | 'Geschäftsführung';
  location: string; // Standort von 35 Schäflein-Standorten
  directSupervisor: string;
  startDate: string;
  contractType: 'Vollzeit' | 'Teilzeit' | 'Werkstudent' | 'Azubi' | 'Minijob' | 'Befristet';
  salaryGrade: string;
  monthlySalary: number;
  status: 'Aktiv' | 'Kündigung eingereicht' | 'Beendet' | 'Karenz' | 'Krankgeschrieben';
  skills: string[];
  certifications: string[];
  workingHours: {
    standard: number; // Stunden pro Woche
    overtime: number;
    vacationDays: number;
    usedVacationDays: number;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface TimeEntry {
  id: string;
  employeeId: string;
  date: string;
  startTime: string;
  endTime: string;
  breakMinutes: number;
  workedHours: number;
  overtimeHours: number;
  type: 'Regulär' | 'Überstunden' | 'Nachtschicht' | 'Wochenende' | 'Feiertag';
  project?: string;
  location: string;
  status: 'Entwurf' | 'Eingereicht' | 'Genehmigt' | 'Abgelehnt';
  notes?: string;
  approvedBy?: string;
  approvedAt?: string;
}

export interface VacationRequest {
  id: string;
  employeeId: string;
  startDate: string;
  endDate: string;
  days: number;
  type: 'Urlaub' | 'Krankheit' | 'Sonderurlaub' | 'Elternzeit' | 'Bildungsurlaub';
  reason?: string;
  status: 'Eingereicht' | 'Genehmigt' | 'Abgelehnt' | 'Storniert';
  requestedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  reviewNotes?: string;
  replacement?: string; // Vertretung
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewPeriod: string;
  reviewDate: string;
  reviewerID: string;
  overallRating: 1 | 2 | 3 | 4 | 5;
  categories: {
    workQuality: number;
    productivity: number;
    teamwork: number;
    communication: number;
    reliability: number;
    initiative: number;
  };
  strengths: string[];
  improvementAreas: string[];
  goals: string[];
  developmentPlan: string;
  comments: string;
  employeeComments?: string;
  status: 'Geplant' | 'Durchgeführt' | 'Abgeschlossen';
  nextReviewDate: string;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  type: 'Pflichtschulung' | 'Weiterbildung' | 'Zertifizierung' | 'Sicherheitsschulung' | 'Führungskräfteentwicklung';
  provider: string;
  duration: number; // in Stunden
  cost: number;
  maxParticipants: number;
  location: string;
  startDate: string;
  endDate: string;
  trainer: string;
  requirements: string[];
  certification?: string;
  status: 'Geplant' | 'Aktiv' | 'Abgeschlossen' | 'Abgesagt';
  participants: string[]; // Employee IDs
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Werkstudent' | 'Azubi' | 'Praktikum';
  salaryRange: {
    min: number;
    max: number;
  };
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  status: 'Entwurf' | 'Veröffentlicht' | 'Pausiert' | 'Besetzt';
  publishedDate?: string;
  applicationDeadline: string;
  recruiter: string;
  applications: number;
  createdAt: string;
}

export interface Application {
  id: string;
  jobPostingId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: 'Eingegangen' | 'In Prüfung' | 'Interview geplant' | 'Interview durchgeführt' | 'Angebot gemacht' | 'Zusage' | 'Absage';
  resumeUrl?: string;
  coverLetterUrl?: string;
  applicationDate: string;
  lastContactDate?: string;
  assignedRecruiter: string;
  interviewNotes?: string;
  rating?: number;
  notes?: string;
}

export interface PayrollEntry {
  id: string;
  employeeId: string;
  payPeriod: string; // YYYY-MM
  baseSalary: number;
  overtime: number;
  bonuses: number;
  commissions: number;
  deductions: {
    taxes: number;
    socialSecurity: number;
    healthInsurance: number;
    pension: number;
    other: number;
  };
  netSalary: number;
  payDate: string;
  status: 'Berechnet' | 'Geprüft' | 'Ausgezahlt' | 'Korrektur erforderlich';
  processedBy: string;
  notes?: string;
}

export interface Document {
  id: string;
  employeeId?: string;
  title: string;
  type: 'Arbeitsvertrag' | 'Gehaltsabrechnung' | 'Zeugnis' | 'Zertifikat' | 'Krankmeldung' | 'Urlaubsantrag' | 'Sonstiges';
  url: string;
  uploadedBy: string;
  uploadedAt: string;
  expiryDate?: string;
  isConfidential: boolean;
  status: 'Aktiv' | 'Archiviert' | 'Abgelaufen';
}

export interface HRMetrics {
  employeeCount: number;
  departmentDistribution: Record<string, number>;
  avgTenure: number;
  turnoverRate: number;
  avgSalary: number;
  trainingHoursPerEmployee: number;
  vacationUtilization: number;
  performanceDistribution: Record<number, number>;
  recruitmentMetrics: {
    openPositions: number;
    avgTimeToHire: number;
    applicationRate: number;
  };
}

export interface HRAutomation {
  id: string;
  name: string;
  type: 'Onboarding' | 'Offboarding' | 'Performance Review' | 'Geburtstag' | 'Jubiläum' | 'Vertragsende' | 'Schulungserinnerung';
  trigger: string;
  actions: {
    type: 'Email' | 'Task' | 'Document' | 'Notification';
    recipient: string;
    template: string;
    daysOffset: number;
  }[];
  isActive: boolean;
  createdAt: string;
  lastTriggered?: string;
}

// Neue Logistik-Features für Schäflein
export interface Shipment {
  id: string;
  trackingNumber: string;
  sender: string;
  recipient: string;
  recipientAddress: string;
  service: 'Stückgut' | 'Komplettladung' | 'Sprintbox' | 'Europa Express' | 'Luftfracht' | 'Seefracht';
  status: 'Abgeholt' | 'Im Transit' | 'Depot' | 'Zustellung' | 'Zugestellt' | 'Verzögert' | 'Problem';
  currentLocation: string;
  estimatedDelivery: string;
  actualDelivery?: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  value: number;
  priority: 'Standard' | 'Express' | 'Kritisch';
  transportMode: 'LKW' | 'Bahn' | 'Flugzeug' | 'Schiff' | 'Kombiniert';
  route: TrackingEvent[];
  temperature?: number;
  hazardous?: boolean;
  customsStatus?: 'Ausstehend' | 'Cleared' | 'Problem';
  co2Footprint: number;
  costs: {
    transport: number;
    fuel: number;
    customs: number;
    insurance: number;
    total: number;
  };
}

export interface TrackingEvent {
  id: string;
  timestamp: string;
  location: string;
  description: string;
  status: string;
  nextLocation?: string;
  estimatedArrival?: string;
  temperature?: number;
  image?: string;
}

export interface TransportRoute {
  id: string;
  origin: string;
  destination: string;
  distance: number;
  estimatedTime: number;
  cost: number;
  co2Emissions: number;
  mode: 'LKW' | 'Bahn' | 'Flugzeug' | 'Schiff' | 'Kombiniert';
  reliability: number;
  weatherImpact: 'Niedrig' | 'Mittel' | 'Hoch';
  trafficeConditions: 'Gut' | 'Mittel' | 'Schlecht';
  alternatives: {
    mode: string;
    cost: number;
    time: number;
    co2: number;
  }[];
}

export interface LogisticsKPI {
  name: string;
  value: string | number;
  unit?: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
  target?: number;
  category: 'Transport' | 'Lager' | 'Qualität' | 'Kosten' | 'Umwelt';
}

export interface WarehouseStatus {
  location: string;
  totalCapacity: number;
  currentUtilization: number;
  utilizationRate: number;
  availableSpace: number;
  temperatureZones: {
    normal: number;
    cooled: number;
    frozen: number;
  };
  hazardousGoods: boolean;
  equipment: {
    cranes: number;
    forklifts: number;
    conveyor: number;
  };
  staff: {
    total: number;
    available: number;
    shift: string;
  };
}

export interface Fleet {
  vehicleId: string;
  type: 'Sattelzug' | 'LKW' | 'Sprinter' | 'Kran';
  location: string;
  status: 'Verfügbar' | 'Unterwegs' | 'Beladen' | 'Wartung' | 'Defekt';
  driver: string;
  currentLoad: number;
  maxLoad: number;
  fuel: number;
  nextMaintenance: string;
  route?: string;
  estimatedArrival?: string;
  co2Today: number;
  efficiency: number;
}

// Kundenportal 2.0 - Self-Service Features
export interface CustomerPortalUser {
  id: string;
  customerId: string;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Viewer';
  department: string;
  phone?: string;
  permissions: CustomerPermission[];
  lastLogin: string;
  isActive: boolean;
  preferredLanguage: 'de' | 'en';
  notifications: NotificationPreference[];
}

export interface CustomerPermission {
  resource: 'bookings' | 'tracking' | 'documents' | 'invoices' | 'reports' | 'settings';
  actions: ('create' | 'read' | 'update' | 'delete')[];
}

export interface NotificationPreference {
  type: 'email' | 'sms' | 'push';
  events: ('shipment_updates' | 'delivery_notifications' | 'invoice_ready' | 'delays')[];
  enabled: boolean;
}

export interface CustomerBooking {
  id: string;
  customerId: string;
  customerReference: string;
  service: 'Stückgut' | 'Komplettladung' | 'Sprintbox' | 'Europa Express' | 'Luftfracht' | 'Seefracht';
  priority: 'Standard' | 'Express' | 'Kritisch';
  pickup: BookingLocation;
  delivery: BookingLocation;
  goods: BookingGoods;
  requirements: BookingRequirements;
  pricing: BookingPricing;
  status: 'Angebot' | 'Bestätigt' | 'In Bearbeitung' | 'Abgeholt' | 'Transit' | 'Zugestellt' | 'Storniert';
  createdBy: string;
  createdAt: string;
  estimatedPickup: string;
  estimatedDelivery: string;
  trackingNumber?: string;
  notes?: string;
}

export interface BookingLocation {
  company: string;
  contact: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  phone?: string;
  email?: string;
  openingHours?: string;
  specialInstructions?: string;
}

export interface BookingGoods {
  description: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  quantity: number;
  packageType: 'Palette' | 'Karton' | 'Container' | 'Sonderverpackung';
  value: number;
  isHazardous: boolean;
  hazardClass?: string;
  temperatureControlled: boolean;
  temperatureRange?: {
    min: number;
    max: number;
  };
}

export interface BookingRequirements {
  specialEquipment: string[];
  loadingMethod: 'Seitlich' | 'Hinten' | 'Oben' | 'Kran';
  insurance: boolean;
  customsClearance: boolean;
  deliveryAppointment: boolean;
  returnReceipt: boolean;
  photoConfirmation: boolean;
}

export interface BookingPricing {
  basePrice: number;
  fuelSurcharge: number;
  insurance: number;
  specialServices: number;
  tax: number;
  total: number;
  currency: 'EUR';
  validUntil: string;
}

export interface CustomerDocument {
  id: string;
  customerId: string;
  type: 'Invoice' | 'Delivery Note' | 'Packing List' | 'CMR' | 'Certificate' | 'Insurance' | 'Other';
  title: string;
  description?: string;
  shipmentId?: string;
  bookingId?: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  createdAt: string;
  downloadCount: number;
  isArchived: boolean;
  tags: string[];
}

export interface SupportTicket {
  id: string;
  customerId: string;
  customerUserId: string;
  subject: string;
  description: string;
  category: 'Booking' | 'Tracking' | 'Billing' | 'Technical' | 'General' | 'Complaint';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Open' | 'In Progress' | 'Waiting' | 'Resolved' | 'Closed';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  responses: TicketResponse[];
  relatedShipmentId?: string;
  relatedBookingId?: string;
  satisfaction?: number; // 1-5 stars
}

export interface TicketResponse {
  id: string;
  author: string;
  authorType: 'Customer' | 'Support' | 'AI';
  message: string;
  timestamp: string;
  attachments?: string[];
  isInternal: boolean;
}

export interface CustomerAnalytics {
  customerId: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  shipments: {
    total: number;
    onTime: number;
    delayed: number;
    cancelled: number;
  };
  revenue: {
    total: number;
    change: number;
    trend: 'up' | 'down' | 'stable';
  };
  satisfaction: {
    average: number;
    responses: number;
    nps: number;
  };
  portalUsage: {
    logins: number;
    bookings: number;
    downloads: number;
    tickets: number;
  };
  topServices: Array<{
    service: string;
    count: number;
    revenue: number;
  }>;
  topRoutes: Array<{
    origin: string;
    destination: string;
    count: number;
  }>;
}

export interface AIChat {
  id: string;
  customerId: string;
  customerUserId: string;
  messages: ChatMessage[];
  status: 'active' | 'resolved' | 'escalated';
  createdAt: string;
  updatedAt: string;
  intent?: string;
  confidence?: number;
  handedOffToHuman: boolean;
}

export interface ChatMessage {
  id: string;
  author: 'customer' | 'ai' | 'human';
  message: string;
  timestamp: string;
  type: 'text' | 'quick_reply' | 'attachment' | 'action';
  metadata?: any;
}

// Neue Typen für erweiterte Neukundengewinnung

export interface LinkedInSocialSelling {
  id: string;
  prospectName: string;
  prospectCompany: string;
  linkedInProfile: string;
  connectionStatus: 'Not Connected' | 'Connection Sent' | 'Connected' | 'Followed Up';
  lastAction: string;
  nextAction: string;
  engagementScore: number;
  messagesSent: number;
  responseRate: number;
  leadScore: number;
  assignedTo: string;
  automationSequence: string;
  industryFocus: string;
  connectionDate?: string;
  firstResponseDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReferralProgram {
  id: string;
  referrerType: 'Customer' | 'Employee' | 'Partner';
  referrerName: string;
  referrerEmail: string;
  referredCompany: string;
  referredContact: string;
  referredEmail: string;
  referralValue: number;
  status: 'Eingegangen' | 'Kontaktiert' | 'Qualifiziert' | 'Gewonnen' | 'Verloren';
  rewardType: 'Geld' | 'Rabatt' | 'Geschenk' | 'Bonus';
  rewardAmount: number;
  conversionDate?: string;
  assignedTo: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface VideoPersonalization {
  id: string;
  recipientName: string;
  recipientCompany: string;
  recipientEmail: string;
  videoType: 'Cold Outreach' | 'Follow Up' | 'Proposal' | 'Demo' | 'Thank You';
  videoUrl: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  viewCount: number;
  watchTime: number; // in seconds
  clicked: boolean;
  responded: boolean;
  meetingBooked: boolean;
  dealClosed: boolean;
  campaignId?: string;
  createdBy: string;
  createdAt: string;
  lastViewed?: string;
}

export interface ContentMarketing {
  id: string;
  title: string;
  type: 'Blog Post' | 'Case Study' | 'Webinar' | 'White Paper' | 'Video' | 'Infographic';
  category: 'Spedition' | 'Logistik' | 'Industriemontage' | 'Sprintbox' | 'Truckwerkstatt' | 'Ausland';
  status: 'Entwurf' | 'Review' | 'Veröffentlicht' | 'Archiviert';
  author: string;
  publishDate: string;
  content: string;
  seoKeywords: string[];
  viewCount: number;
  leadGenerated: number;
  downloadCount: number;
  socialShares: number;
  linkedInShares: number;
  engagementRate: number;
  conversionRate: number;
  targetAudience: string[];
  cta: string;
  ctaClicks: number;
  createdAt: string;
  updatedAt: string;
}

export interface EventMarketing {
  id: string;
  eventName: string;
  eventType: 'Messe' | 'Webinar' | 'Workshop' | 'Networking' | 'Konferenz';
  date: string;
  location: string;
  budget: number;
  targetAttendees: number;
  actualAttendees: number;
  leadsGenerated: number;
  qualifiedLeads: number;
  meetings: number;
  deals: number;
  revenue: number;
  roi: number;
  followUpStatus: 'Nicht gestartet' | 'In Bearbeitung' | 'Abgeschlossen';
  assignedTo: string[];
  materials: string[];
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface SalesEnablement {
  id: string;
  title: string;
  type: 'Proposal Template' | 'Battle Card' | 'Case Study' | 'Objection Handler' | 'Product Sheet' | 'Pricing Guide';
  category: string;
  businessType: string[];
  content: string;
  usageCount: number;
  effectiveness: number; // 1-5 rating
  lastUsed: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IntentData {
  id: string;
  companyName: string;
  website: string;
  industry: string;
  employees: number;
  revenue: number;
  intentSignals: string[];
  intentScore: number;
  researchTopics: string[];
  competitorResearch: string[];
  buyingStage: 'Awareness' | 'Consideration' | 'Decision' | 'Purchase';
  timeline: string;
  budget: string;
  decisionMakers: string[];
  dataSource: string;
  lastUpdated: string;
  assignedTo: string;
  contacted: boolean;
  createdAt: string;
}

export interface CompetitiveIntelligence {
  id: string;
  competitor: string;
  dealId?: string;
  winLoss: 'Win' | 'Loss' | 'No Decision' | 'Ongoing';
  competitorStrengths: string[];
  competitorWeaknesses: string[];
  ourAdvantages: string[];
  lossReasons: string[];
  priceComparison: {
    ourPrice: number;
    competitorPrice: number;
    difference: number;
  };
  serviceComparison: string[];
  customerFeedback: string;
  actionItems: string[];
  assignedTo: string;
  dealValue: number;
  industry: string;
  createdAt: string;
  updatedAt: string;
}

export interface AttributionModel {
  id: string;
  leadId: string;
  customerId?: string;
  touchpoints: {
    channel: string;
    campaign: string;
    date: string;
    attribution: number; // percentage
    cost: number;
  }[];
  totalTouchpoints: number;
  conversionValue: number;
  firstTouchChannel: string;
  lastTouchChannel: string;
  assistedChannels: string[];
  timeToConversion: number; // days
  customerJourneyStage: string;
  attributionModel: 'First Touch' | 'Last Touch' | 'Linear' | 'Time Decay' | 'Data Driven';
  createdAt: string;
}

export interface AdvancedLeadNurturing {
  id: string;
  leadId: string;
  nurtureSequence: string;
  currentStep: number;
  totalSteps: number;
  triggerType: 'Behavior' | 'Time' | 'Score' | 'Manual';
  triggerEvent: string;
  personalizedContent: {
    industry: string;
    painPoint: string;
    solution: string;
    caseStudy: string;
  };
  behaviorTracking: {
    emailOpens: number;
    linkClicks: number;
    websiteVisits: number;
    contentDownloads: number;
    videoViews: number;
  };
  engagementScore: number;
  nextAction: string;
  scheduledDate: string;
  status: 'Active' | 'Paused' | 'Completed' | 'Opted Out';
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

// Erweiterte Typen für Sales Analytics
export interface SalesAnalyticsExtended extends SalesAnalytics {
  socialSellingMetrics: {
    linkedInConnections: number;
    socialEngagement: number;
    socialLeads: number;
    socialConversions: number;
  };
  contentMarketingMetrics: {
    contentViews: number;
    contentLeads: number;
    contentConversions: number;
    topPerformingContent: string[];
  };
  videoMetrics: {
    videosCreated: number;
    videoViews: number;
    videoResponseRate: number;
    meetingsFromVideos: number;
  };
  referralMetrics: {
    referralsReceived: number;
    referralConversions: number;
    referralRevenue: number;
    topReferrers: string[];
  };
}

// Customer Management Suite Types
export interface CustomerHealthScore {
  id: string
  customerId: string
  overallScore: number // 0-100
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical'
  factors: {
    engagementScore: number
    paymentHistory: number
    supportTickets: number
    lastActivity: number
    contractUtilization: number
  }
  trendDirection: 'up' | 'down' | 'stable'
  lastUpdated: string
  recommendations: string[]
}

export interface CustomerLifetimeValue {
  id: string
  customerId: string
  currentCLV: number
  predictedCLV: number
  acquisitionCost: number
  totalRevenue: number
  averageOrderValue: number
  purchaseFrequency: number
  customerLifespan: number
  profitMargin: number
  growthRate: number
}

export interface UpsellOpportunity {
  id: string
  customerId: string
  type: 'Upsell' | 'Cross-sell' | 'Expansion'
  productService: string
  currentSpend: number
  potentialRevenue: number
  probability: number
  timeframe: string
  reasoning: string
  status: 'Identified' | 'Proposed' | 'Negotiating' | 'Won' | 'Lost'
  assignedTo: string
  nextAction: string
  dueDate: string
}

export interface AccountRelationship {
  id: string
  customerId: string
  stakeholders: {
    name: string
    role: string
    influence: 'High' | 'Medium' | 'Low'
    relationship: 'Champion' | 'Supporter' | 'Neutral' | 'Skeptic' | 'Blocker'
    lastContact: string
    nextAction: string
  }[]
  decisionMakers: string[]
  champions: string[]
  contracts: {
    name: string
    value: number
    startDate: string
    endDate: string
    renewalRisk: 'Low' | 'Medium' | 'High'
  }[]
}

export interface CustomerSuccessMetrics {
  id: string
  customerId: string
  onboardingProgress: number
  timeToValue: number
  adoptionRate: number
  featureUsage: { [key: string]: number }
  supportSatisfaction: number
  npsScore: number
  renewalProbability: number
  expansionPotential: number
  milestones: {
    name: string
    completed: boolean
    dueDate: string
    impact: string
  }[]
}

export interface WinBackCampaign {
  id: string
  name: string
  targetSegment: string
  status: 'Planning' | 'Active' | 'Paused' | 'Completed'
  targetCustomers: string[]
  touchpoints: string[]
  offerType: string
  budget: number
  spent: number
  results: {
    contacted: number
    responded: number
    reactivated: number
    revenue: number
  }
  roi: number
  nextAction: string
}

export interface CustomerSegment {
  id: string
  name: string
  description: string
  criteria: {
    field: string
    operator: 'equals' | 'greater_than' | 'less_than' | 'contains'
    value: string
  }[]
  customerCount: number
  averageRevenue: number
  churnRate: number
  growthRate: number
  color: string
  campaigns: string[]
}

export interface LoyaltyProgram {
  id: string
  customerId: string
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'
  points: number
  tierProgress: number
  benefits: string[]
  rewardsEarned: number
  rewardsRedeemed: number
  joinDate: string
  lastActivity: string
  referrals: number
  satisfactionScore: number
} 