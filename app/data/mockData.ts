import { Customer, Lead, Campaign, Activity, User, KPI, ProcessStep, Employee, TimeEntry, VacationRequest, PerformanceReview, Training, JobPosting, Application, PayrollEntry, Document, HRMetrics, HRAutomation, ProspectResearch, AccountBasedMarketing, CompetitiveIntelligence, LeadNurturing, SalesAnalytics, Shipment, TrackingEvent, TransportRoute, LogisticsKPI, WarehouseStatus, Fleet, CustomerPortalUser, CustomerBooking, CustomerDocument, SupportTicket, AIChat, CustomerAnalytics, LinkedInSocialSelling, ReferralProgram, VideoPersonalization, ContentMarketing, EventMarketing, SalesEnablement, IntentData, CompetitiveIntelligence as CompetitiveIntel, AttributionModel, AdvancedLeadNurturing, SalesAnalyticsExtended, CustomerHealthScore, CustomerLifetimeValue, UpsellOpportunity, AccountRelationship, CustomerSuccessMetrics, WinBackCampaign, CustomerSegment, LoyaltyProgram } from '../types';

// Demo-Kunden für Schäflein AG
export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'BMW AG',
    email: 'logistik@bmw.de',
    phone: '+49 89 382-0',
    company: 'BMW AG',
    industry: 'Automobilindustrie',
    location: 'München',
    tier: 'Platinum',
    lastContact: '2024-01-15',
    nextContact: '2024-04-15',
    assignedTo: 'Joachim Schäflein',
    totalRevenue: 2500000,
    status: 'Aktiv',
    businessType: 'Logistik',
    notes: 'Strategischer Großkunde - Quartalsweise Betreuung erforderlich',
    createdAt: '2023-01-10',
    updatedAt: '2024-01-15',
    leadScore: 95,
    engagementLevel: 'Hoch',
    preferredCommunication: 'Telefon',
    decisionMakers: ['Dr. Klaus Weber (Logistikleiter)', 'Sandra Müller (Procurement)'],
    painPoints: ['Schnelle Lieferzeiten', 'Internationale Koordination', 'Kostenoptimierung'],
    competitionInfo: 'Hauptkonkurrent: DHL Supply Chain',
    marketSegment: 'Premium Automotive',
    businessPotential: 'Sehr Hoch'
  },
  {
    id: '2',
    name: 'Siemens Energy',
    email: 'supply-chain@siemens-energy.com',
    phone: '+49 9131 18-0',
    company: 'Siemens Energy AG',
    industry: 'Energietechnik',
    location: 'Erlangen',
    tier: 'Gold',
    lastContact: '2024-01-10',
    nextContact: '2024-04-10',
    assignedTo: 'Thomas Müller',
    totalRevenue: 1800000,
    status: 'Aktiv',
    businessType: 'Industriemontage',
    notes: 'Spezialist für Energietechnik-Transporte und Montage',
    createdAt: '2023-03-15',
    updatedAt: '2024-01-10',
    leadScore: 88,
    engagementLevel: 'Hoch',
    preferredCommunication: 'Email',
    decisionMakers: ['Michael Braun (Operations)', 'Lisa Schmidt (Supply Chain)'],
    painPoints: ['Schwerlasttransporte', 'Termingenauigkeit', 'Spezialverpackung'],
    competitionInfo: 'Konkurriert mit Rhenus und DB Schenker',
    marketSegment: 'Industrial Energy',
    businessPotential: 'Hoch'
  },
  {
    id: '3',
    name: 'Würth Industrie',
    email: 'logistics@wuerth.com',
    phone: '+49 7940 15-0',
    company: 'Würth Industrie Service GmbH',
    industry: 'Handel',
    location: 'Bad Mergentheim',
    tier: 'Silver',
    lastContact: '2024-01-20',
    nextContact: '2024-04-20',
    assignedTo: 'Sarah Weber',
    totalRevenue: 950000,
    status: 'Aktiv',
    businessType: 'Spedition',
    notes: 'Regelmäßige Lieferungen nach Österreich und Polen',
    createdAt: '2023-06-20',
    updatedAt: '2024-01-20',
    leadScore: 76,
    engagementLevel: 'Mittel',
    preferredCommunication: 'WhatsApp',
    decisionMakers: ['Frank Weber (Logistik)', 'Anna Schuster (Einkauf)'],
    painPoints: ['Grenzüberschreitende Transporte', 'Zollabwicklung', 'Tracking'],
    competitionInfo: 'Teilt sich Geschäft mit Dachser',
    marketSegment: 'Industrial Trade',
    businessPotential: 'Mittel'
  },
  {
    id: '4',
    name: 'Krones AG',
    email: 'transport@krones.com',
    phone: '+49 9401 70-0',
    company: 'Krones AG',
    industry: 'Maschinenbau',
    location: 'Neutraubling',
    tier: 'Gold',
    lastContact: '2024-01-12',
    nextContact: '2024-04-12',
    assignedTo: 'Joachim Schäflein',
    totalRevenue: 1450000,
    status: 'Aktiv',
    businessType: 'Sprintbox',
    notes: 'Schnelle Lieferungen für Ersatzteile - Sprintbox-Service',
    createdAt: '2023-02-28',
    updatedAt: '2024-01-12',
    leadScore: 82,
    engagementLevel: 'Hoch',
    preferredCommunication: 'Telefon',
    decisionMakers: ['Peter Krones (Geschäftsführung)', 'Maria Fischer (Logistik)'],
    painPoints: ['Eillieferungen', '24/7 Verfügbarkeit', 'Ersatzteillogistik'],
    competitionInfo: 'UPS und FedEx als Hauptkonkurrenten',
    marketSegment: 'Machinery & Equipment',
    businessPotential: 'Hoch'
  },
  {
    id: '5',
    name: 'Bauer Maschinen',
    email: 'info@bauer-maschinen.de',
    phone: '+49 8761 81-0',
    company: 'Bauer Maschinen GmbH',
    industry: 'Landwirtschaft',
    location: 'Schrobenhausen',
    tier: 'Bronze',
    lastContact: '2024-01-25',
    nextContact: '2024-04-25',
    assignedTo: 'Michael Schmidt',
    totalRevenue: 320000,
    status: 'Aktiv',
    businessType: 'Truckwerkstatt',
    notes: 'Werkstatt-Service für Landmaschinen-Transporte',
    createdAt: '2023-09-10',
    updatedAt: '2024-01-25',
    leadScore: 58,
    engagementLevel: 'Mittel',
    preferredCommunication: 'Brief',
    decisionMakers: ['Johann Bauer (Inhaber)', 'Claudia Mayer (Werkstatt)'],
    painPoints: ['Saisonale Schwankungen', 'Reparaturzeiten', 'Ersatzteilbeschaffung'],
    competitionInfo: 'Lokale Werkstätten als Konkurrenz',
    marketSegment: 'Agricultural Machinery',
    businessPotential: 'Mittel'
  }
];

// Demo-Leads für Schäflein AG - erweitert
export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Audi AG',
    company: 'Audi AG',
    email: 'procurement@audi.de',
    phone: '+49 841 89-0',
    source: 'Ausschreibung',
    status: 'Angebot',
    businessType: 'Logistik',
    potentialValue: 3200000,
    probability: 75,
    assignedTo: 'Joachim Schäflein',
    notes: 'Großes Potenzial - Komplette Supply Chain Übernahme geplant',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-28',
    leadScore: 92,
    qualificationCriteria: {
      budget: 'Hoch',
      authority: 'Hoch',
      need: 'Hoch',
      timeline: 'Mittel'
    },
    interactions: 12,
    lastInteraction: '2024-01-28',
    nextAction: 'Finales Angebot präsentieren',
    competitorAnalysis: 'DHL, DB Schenker und Rhenus in der engeren Auswahl',
    decisionMakers: ['Dr. Martina Weber (Head of Procurement)', 'Klaus Fischer (Logistikleiter)', 'Stefan Müller (CFO)'],
    painPoints: ['Komplexe Supply Chain', 'Internationale Koordination', 'Just-in-Time Lieferung', 'Kostenreduktion'],
    proposalsSent: 2,
    meetingsHeld: 4,
    daysInPipeline: 23,
    engagementLevel: 'Hoch'
  },
  {
    id: '2',
    name: 'Schaeffler Technologies',
    company: 'Schaeffler Technologies AG',
    email: 'logistics@schaeffler.com',
    phone: '+49 9132 82-0',
    source: 'Kaltakquise',
    status: 'Qualifiziert',
    businessType: 'Industriemontage',
    potentialValue: 1800000,
    probability: 60,
    assignedTo: 'Thomas Müller',
    notes: 'Interesse an Industriemontage-Services bestätigt',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-28',
    leadScore: 78,
    qualificationCriteria: {
      budget: 'Hoch',
      authority: 'Mittel',
      need: 'Hoch',
      timeline: 'Hoch'
    },
    interactions: 8,
    lastInteraction: '2024-01-25',
    nextAction: 'Technische Spezifikationen besprechen',
    competitorAnalysis: 'Hauptkonkurrent ist Rhenus Contract Logistics',
    decisionMakers: ['Robert Schaeffler (Vorstand)', 'Andrea Schmidt (Operations)', 'Thomas Klein (Technical)'],
    painPoints: ['Präzisionsmontage', 'Qualitätssicherung', 'Terminplanung', 'Fachkräftemangel'],
    proposalsSent: 1,
    meetingsHeld: 2,
    daysInPipeline: 16,
    engagementLevel: 'Hoch'
  },
  {
    id: '3',
    name: 'Lidl Stiftung',
    company: 'Lidl Stiftung & Co. KG',
    email: 'transport@lidl.de',
    phone: '+49 7132 30-0',
    source: 'Cargoline',
    status: 'Verhandlung',
    businessType: 'Spedition',
    potentialValue: 2100000,
    probability: 80,
    assignedTo: 'Sarah Weber',
    notes: 'Verhandlungen über Österreich-Transporte laufen gut',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-29',
    leadScore: 88,
    qualificationCriteria: {
      budget: 'Hoch',
      authority: 'Hoch',
      need: 'Mittel',
      timeline: 'Hoch'
    },
    interactions: 15,
    lastInteraction: '2024-01-29',
    nextAction: 'Vertragsentwurf finalisieren',
    competitorAnalysis: 'Verhandelt parallel mit Dachser',
    decisionMakers: ['Marcus Lidl (Geschäftsführung)', 'Petra Wagner (Logistik)', 'Hans Müller (Einkauf)'],
    painPoints: ['Grenzüberschreitende Transporte', 'Kühlkette', 'Zeitfenster', 'Compliance'],
    proposalsSent: 3,
    meetingsHeld: 5,
    daysInPipeline: 21,
    engagementLevel: 'Hoch'
  },
  {
    id: '4',
    name: 'Fränkische Rohrwerke',
    company: 'Fränkische Rohrwerke Stiftung & Co. KG',
    email: 'einkauf@fraenkische.de',
    phone: '+49 9563 74-0',
    source: 'Website',
    status: 'Kontaktiert',
    businessType: 'Sprintbox',
    potentialValue: 750000,
    probability: 40,
    assignedTo: 'Michael Schmidt',
    notes: 'Erstkontakt erfolgreich - Termin für nächste Woche vereinbart',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-29',
    leadScore: 65,
    qualificationCriteria: {
      budget: 'Mittel',
      authority: 'Mittel',
      need: 'Hoch',
      timeline: 'Mittel'
    },
    interactions: 3,
    lastInteraction: '2024-01-26',
    nextAction: 'Bedarfsanalyse durchführen',
    competitorAnalysis: 'Noch keine anderen Anbieter bekannt',
    decisionMakers: ['Heinrich Fränkische (Geschäftsführer)', 'Sabine Koch (Einkauf)'],
    painPoints: ['Eilaufträge', 'Flexibilität', 'Termintreue', 'Kostentransparenz'],
    proposalsSent: 0,
    meetingsHeld: 1,
    daysInPipeline: 9,
    engagementLevel: 'Mittel'
  },
  {
    id: '5',
    name: 'Fendt GmbH',
    company: 'AGCO Fendt GmbH',
    email: 'logistics@fendt.com',
    phone: '+49 8342 77-0',
    source: 'Empfehlung',
    status: 'Neu',
    businessType: 'Truckwerkstatt',
    potentialValue: 480000,
    probability: 25,
    assignedTo: 'Michael Schmidt',
    notes: 'Empfehlung von Bauer Maschinen - Landwirtschafts-Fokus',
    createdAt: '2024-01-25',
    updatedAt: '2024-01-29',
    leadScore: 52,
    qualificationCriteria: {
      budget: 'Mittel',
      authority: 'Niedrig',
      need: 'Mittel',
      timeline: 'Niedrig'
    },
    interactions: 1,
    lastInteraction: '2024-01-25',
    nextAction: 'Erstkontakt per Telefon',
    decisionMakers: ['Josef Fendt (Betriebsleiter)', 'Marion Weber (Verwaltung)'],
    painPoints: ['Saisonale Auslastung', 'Spezialtransporte', 'Werkstattkapazität'],
    proposalsSent: 0,
    meetingsHeld: 0,
    daysInPipeline: 4,
    engagementLevel: 'Niedrig'
  }
];

// Demo-Kampagnen
export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Sprintbox-Service Frühjahr 2024',
    type: 'Email',
    status: 'Aktiv',
    targetAudience: 'Maschinenbau-Unternehmen',
    businessType: ['Sprintbox', 'Spedition'],
    sendDate: '2024-02-01',
    recipients: 2500,
    openRate: 34.5,
    clickRate: 8.2,
    responseRate: 2.1,
    createdAt: '2024-01-15',
    content: 'Schnelle Lieferungen für Ersatzteile - Jetzt Sprintbox-Service testen!',
    budget: 35000,
    roi: 2.8,
    costPerLead: 673,
    conversionRate: 2.1,
    leadGenerated: 52,
    revenueGenerated: 98000,
    targetCompanies: ['Krones AG', 'Fränkische Rohrwerke'],
    personalization: 'Mittel',
    followUpSequence: ['Email Tag 5', 'Telefon Tag 10']
  },
  {
    id: '2',
    name: 'WhatsApp-Automatisierung Q1',
    type: 'WhatsApp',
    status: 'Aktiv',
    targetAudience: 'Bestandskunden',
    businessType: ['Logistik', 'Spedition'],
    sendDate: '2024-01-20',
    recipients: 180,
    openRate: 89.3,
    clickRate: 23.1,
    responseRate: 12.8,
    createdAt: '2024-01-10',
    content: 'Hallo [Name], wie läuft Ihr Logistik-Projekt? 🚛',
    budget: 12000,
    roi: 6.5,
    costPerLead: 521,
    conversionRate: 12.8,
    leadGenerated: 23,
    revenueGenerated: 78000,
    personalization: 'Hoch',
    followUpSequence: ['WhatsApp Tag 2', 'Anruf Tag 5']
  },
  {
    id: '3',
    name: 'Industriemontage-Expertise',
    type: 'Email',
    status: 'Beendet',
    targetAudience: 'Industrieunternehmen',
    businessType: ['Industriemontage'],
    sendDate: '2024-01-05',
    recipients: 1200,
    openRate: 28.7,
    clickRate: 6.4,
    responseRate: 1.8,
    createdAt: '2023-12-20',
    content: 'Professionelle Industriemontage von Schäflein',
    budget: 18000,
    roi: 3.2,
    costPerLead: 818,
    conversionRate: 1.8,
    leadGenerated: 22,
    revenueGenerated: 57600,
    targetCompanies: ['Siemens Energy', 'BASF SE'],
    personalization: 'Niedrig',
    followUpSequence: ['Email Tag 7']
  }
];

// Demo-Aktivitäten
export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'Anruf',
    customerId: '1',
    subject: 'Quartals-Check BMW AG',
    description: 'Regeltermin mit BMW Logistik-Team besprochen',
    assignedTo: 'Achim Schäflein',
    scheduledDate: '2024-01-15',
    completedDate: '2024-01-15',
    status: 'Abgeschlossen',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    type: 'Meeting',
    leadId: '1',
    subject: 'Audi AG Ausschreibung',
    description: 'Präsentation der Logistiklösung vor Ort',
    assignedTo: 'Achim Schäflein',
    scheduledDate: '2024-02-05',
    status: 'Geplant',
    createdAt: '2024-01-28'
  },
  {
    id: '3',
    type: 'WhatsApp',
    customerId: '3',
    subject: 'Follow-up Würth Industrie',
    description: 'Neue Österreich-Route besprochen',
    assignedTo: 'Sarah Weber',
    completedDate: '2024-01-20',
    status: 'Abgeschlossen',
    createdAt: '2024-01-20'
  }
];

// Demo-Benutzer
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Achim Schäflein',
    email: 'achim.schaeflein@schaeflein.de',
    role: 'Admin',
    department: 'Vorstandsvorsitzender'
  },
  {
    id: '2',
    name: 'Thomas Müller',
    email: 'thomas.mueller@schaeflein.de',
    role: 'Mitarbeiter',
    department: 'Industriemontage'
  },
  {
    id: '3',
    name: 'Sarah Weber',
    email: 'sarah.weber@schaeflein.de',
    role: 'Mitarbeiter',
    department: 'Spedition'
  },
  {
    id: '4',
    name: 'Michael Schmidt',
    email: 'michael.schmidt@schaeflein.de',
    role: 'Manager',
    department: 'Truckwerkstatt'
  }
];

// KPIs für Dashboard
export const mockKPIs: KPI[] = [
  {
    name: 'Gesamtumsatz',
    value: '8.2M €',
    change: 12.5,
    trend: 'up',
    period: 'vs. Vorjahr'
  },
  {
    name: 'Neue Leads',
    value: 127,
    change: 8.3,
    trend: 'up',
    period: 'diesen Monat'
  },
  {
    name: 'Conversion Rate',
    value: '23.4%',
    change: -2.1,
    trend: 'down',
    period: 'vs. Vormonat'
  },
  {
    name: 'Kundenzufriedenheit',
    value: '4.8/5',
    change: 0.2,
    trend: 'up',
    period: 'Durchschnitt'
  }
];

// Prozessschritte für Optimierung
export const mockProcessSteps: ProcessStep[] = [
  {
    id: '1',
    name: 'Lead-Qualifizierung',
    description: 'Eingehende Leads bewerten und kategorisieren',
    assignedTo: 'Thomas Müller',
    status: 'In Bearbeitung',
    dueDate: '2024-02-15',
    priority: 'Hoch',
    businessType: 'Alle'
  },
  {
    id: '2',
    name: 'Kundenbetreuung Quartal',
    description: 'Regelmäßige Betreuung aller Gold/Platinum Kunden',
    assignedTo: 'Achim Schäflein',
    status: 'Offen',
    dueDate: '2024-04-01',
    priority: 'Kritisch',
    businessType: 'Logistik'
  },
  {
    id: '3',
    name: 'WhatsApp-Automatisierung',
    description: 'Implementierung automatisierter Follow-ups',
    assignedTo: 'Sarah Weber',
    status: 'Abgeschlossen',
    dueDate: '2024-01-30',
    priority: 'Mittel',
    businessType: 'Spedition'
  }
];

// HR-Demo-Daten für Schäflein AG
export const mockEmployees: Employee[] = [
  {
    id: 'emp_001',
    personalNumber: 'SA-2019-001',
    firstName: 'Achim',
    lastName: 'Schäflein',
    email: 'achim.schaeflein@schaeflein.com',
    phone: '+49 9324 8877-100',
    dateOfBirth: '1965-03-15',
    address: {
      street: 'Am Etzberg 7',
      city: 'Röthlein',
      zipCode: '97520',
      country: 'Deutschland'
    },
    position: 'Vorstandsvorsitzender',
    department: 'Geschäftsführung',
    location: 'Röthlein (Hauptsitz)',
    directSupervisor: '',
    startDate: '1985-08-01',
    contractType: 'Vollzeit',
    salaryGrade: 'GF1',
    monthlySalary: 25000,
    status: 'Aktiv',
    skills: ['Unternehmensführung', 'Strategische Planung', 'Logistik-Expertise', 'Verhandlungsführung'],
    certifications: ['IHK Logistikfachwirt', 'Betriebswirt (IHK)'],
    workingHours: {
      standard: 40,
      overtime: 5,
      vacationDays: 30,
      usedVacationDays: 8
    },
    emergencyContact: {
      name: 'Maria Schäflein',
      relationship: 'Ehefrau',
      phone: '+49 171 555-0001'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 'emp_002',
    firstName: 'Thomas',
    lastName: 'Müller',
    personalNumber: 'SA-2020-045',
    email: 'thomas.mueller@schaeflein.com',
    phone: '+49 9324 8877-205',
    dateOfBirth: '1978-11-22',
    address: {
      street: 'Hauptstraße 45',
      city: 'Schweinfurt',
      zipCode: '97421',
      country: 'Deutschland'
    },
    position: 'Bereichsleiter Industriemontage',
    department: 'Industriemontage',
    location: 'Schweinfurt',
    directSupervisor: 'emp_001',
    startDate: '2020-03-01',
    contractType: 'Vollzeit',
    salaryGrade: 'L2',
    monthlySalary: 6500,
    status: 'Aktiv',
    skills: ['Projektmanagement', 'Industriemontage', 'Kundenbetreuung', 'Team Leadership'],
    certifications: ['Projektmanager (IHK)', 'Sicherheitsbeauftragter'],
    workingHours: {
      standard: 40,
      overtime: 8,
      vacationDays: 28,
      usedVacationDays: 12
    },
    emergencyContact: {
      name: 'Anna Müller',
      relationship: 'Ehefrau',
      phone: '+49 171 555-0002'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-20'
  },
  {
    id: 'emp_003',
    firstName: 'Sarah',
    lastName: 'Weber',
    personalNumber: 'SA-2021-078',
    email: 'sarah.weber@schaeflein.com',
    phone: '+49 9324 8877-310',
    dateOfBirth: '1985-07-08',
    address: {
      street: 'Gartenstraße 23',
      city: 'Würzburg',
      zipCode: '97070',
      country: 'Deutschland'
    },
    position: 'Key Account Managerin',
    department: 'Spedition',
    location: 'Würzburg',
    directSupervisor: 'emp_008',
    startDate: '2021-05-15',
    contractType: 'Vollzeit',
    salaryGrade: 'S3',
    monthlySalary: 4800,
    status: 'Aktiv',
    skills: ['Key Account Management', 'Verhandlungsführung', 'Kundenbindung', 'Internationale Logistik'],
    certifications: ['Kauffrau für Spedition und Logistikdienstleistung', 'Zollabwicklung'],
    workingHours: {
      standard: 38.5,
      overtime: 3,
      vacationDays: 26,
      usedVacationDays: 5
    },
    emergencyContact: {
      name: 'Michael Weber',
      relationship: 'Ehemann',
      phone: '+49 171 555-0003'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-18'
  },
  {
    id: 'emp_004',
    firstName: 'Michael',
    lastName: 'Schmidt',
    personalNumber: 'SA-2018-032',
    email: 'michael.schmidt@schaeflein.com',
    phone: '+49 9324 8877-420',
    dateOfBirth: '1972-09-14',
    address: {
      street: 'Industriestraße 12',
      city: 'Bamberg',
      zipCode: '96052',
      country: 'Deutschland'
    },
    position: 'Werkstattleiter',
    department: 'Truckwerkstatt',
    location: 'Bamberg',
    directSupervisor: 'emp_009',
    startDate: '2018-09-01',
    contractType: 'Vollzeit',
    salaryGrade: 'T2',
    monthlySalary: 4200,
    status: 'Aktiv',
    skills: ['KFZ-Reparatur', 'Team Leadership', 'Qualitätskontrolle', 'Arbeitsplanung'],
    certifications: ['KFZ-Meister', 'Arbeitssicherheit', 'Umweltschutzbeauftragter'],
    workingHours: {
      standard: 40,
      overtime: 12,
      vacationDays: 28,
      usedVacationDays: 15
    },
    emergencyContact: {
      name: 'Petra Schmidt',
      relationship: 'Ehefrau',
      phone: '+49 171 555-0004'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-22'
  },
  {
    id: 'emp_005',
    firstName: 'Julia',
    lastName: 'Hoffmann',
    personalNumber: 'SA-2022-091',
    email: 'julia.hoffmann@schaeflein.com',
    phone: '+49 9324 8877-155',
    dateOfBirth: '1990-02-28',
    address: {
      street: 'Mozartstraße 8',
      city: 'Erlangen',
      zipCode: '91052',
      country: 'Deutschland'
    },
    position: 'HR Business Partner',
    department: 'Personal',
    location: 'Röthlein (Hauptsitz)',
    directSupervisor: 'emp_001',
    startDate: '2022-01-10',
    contractType: 'Vollzeit',
    salaryGrade: 'V2',
    monthlySalary: 4500,
    status: 'Aktiv',
    skills: ['Personalentwicklung', 'Recruiting', 'Arbeitsrecht', 'Change Management'],
    certifications: ['M.A. Personalmanagement', 'Personalsachbearbeiter (IHK)'],
    workingHours: {
      standard: 38.5,
      overtime: 2,
      vacationDays: 25,
      usedVacationDays: 3
    },
    emergencyContact: {
      name: 'Klaus Hoffmann',
      relationship: 'Vater',
      phone: '+49 171 555-0005'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-25'
  },
  {
    id: 'emp_006',
    firstName: 'Daniel',
    lastName: 'Fischer',
    personalNumber: 'SA-2023-105',
    email: 'daniel.fischer@schaeflein.com',
    phone: '+49 9324 8877-515',
    dateOfBirth: '1995-06-12',
    address: {
      street: 'Ringstraße 17',
      city: 'Nürnberg',
      zipCode: '90402',
      country: 'Deutschland'
    },
    position: 'IT-Administrator',
    department: 'IT',
    location: 'Nürnberg',
    directSupervisor: 'emp_010',
    startDate: '2023-03-01',
    contractType: 'Vollzeit',
    salaryGrade: 'IT2',
    monthlySalary: 4000,
    status: 'Aktiv',
    skills: ['Systemadministration', 'Netzwerktechnik', 'Cloud Computing', 'Cybersecurity'],
    certifications: ['CompTIA Network+', 'Microsoft Azure', 'ITIL Foundation'],
    workingHours: {
      standard: 40,
      overtime: 5,
      vacationDays: 25,
      usedVacationDays: 8
    },
    emergencyContact: {
      name: 'Sandra Fischer',
      relationship: 'Mutter',
      phone: '+49 171 555-0006'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-28'
  },
  {
    id: 'emp_007',
    firstName: 'Lisa',
    lastName: 'Wagner',
    personalNumber: 'SA-2019-063',
    email: 'lisa.wagner@schaeflein.com',
    phone: '+49 9324 8877-625',
    dateOfBirth: '1983-12-03',
    address: {
      street: 'Beethovenstraße 31',
      city: 'Regensburg',
      zipCode: '93047',
      country: 'Deutschland'
    },
    position: 'Auslandskoordinatorin',
    department: 'Ausland',
    location: 'Regensburg',
    directSupervisor: 'emp_011',
    startDate: '2019-07-01',
    contractType: 'Vollzeit',
    salaryGrade: 'A2',
    monthlySalary: 4300,
    status: 'Aktiv',
    skills: ['Internationale Logistik', 'Zollabwicklung', 'Sprachkenntnisse (EN/PL/CZ)', 'Kundenbetreuung'],
    certifications: ['Außenhandelsassistentin (IHK)', 'Zollsachbearbeiter'],
    workingHours: {
      standard: 38.5,
      overtime: 4,
      vacationDays: 27,
      usedVacationDays: 11
    },
    emergencyContact: {
      name: 'Robert Wagner',
      relationship: 'Ehemann',
      phone: '+49 171 555-0007'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-19'
  },
  {
    id: 'emp_008',
    firstName: 'Stefan',
    lastName: 'Bauer',
    personalNumber: 'SA-2017-024',
    email: 'stefan.bauer@schaeflein.com',
    phone: '+49 9324 8877-305',
    dateOfBirth: '1970-04-17',
    address: {
      street: 'Lindenstraße 5',
      city: 'Würzburg',
      zipCode: '97074',
      country: 'Deutschland'
    },
    position: 'Bereichsleiter Spedition',
    department: 'Spedition',
    location: 'Würzburg',
    directSupervisor: 'emp_001',
    startDate: '2017-02-15',
    contractType: 'Vollzeit',
    salaryGrade: 'L2',
    monthlySalary: 6200,
    status: 'Aktiv',
    skills: ['Speditionsleitung', 'Tourenplanung', 'Kundenmanagement', 'Kostenoptimierung'],
    certifications: ['Verkehrsleiter', 'Gefahrgutbeauftragter'],
    workingHours: {
      standard: 40,
      overtime: 6,
      vacationDays: 29,
      usedVacationDays: 13
    },
    emergencyContact: {
      name: 'Monika Bauer',
      relationship: 'Ehefrau',
      phone: '+49 171 555-0008'
    },
    createdAt: '2023-01-01',
    updatedAt: '2024-01-17'
  }
];

// Mock-Zeiterfassungseinträge
export const mockTimeEntries: TimeEntry[] = [
  {
    id: 'time_001',
    employeeId: 'emp_003',
    date: '2024-01-29',
    startTime: '08:00',
    endTime: '17:15',
    breakMinutes: 45,
    workedHours: 8.5,
    overtimeHours: 0.5,
    type: 'Regulär',
    location: 'Würzburg',
    status: 'Genehmigt',
    notes: 'Kundentermin bei BMW verlängert sich',
    approvedBy: 'emp_008',
    approvedAt: '2024-01-30'
  },
  {
    id: 'time_002',
    employeeId: 'emp_004',
    date: '2024-01-29',
    startTime: '06:30',
    endTime: '18:00',
    breakMinutes: 60,
    workedHours: 10.5,
    overtimeHours: 2.5,
    type: 'Überstunden',
    location: 'Bamberg',
    status: 'Eingereicht',
    notes: 'Dringende Reparatur - LKW muss heute fertig werden'
  },
  {
    id: 'time_003',
    employeeId: 'emp_006',
    date: '2024-01-28',
    startTime: '22:00',
    endTime: '06:00',
    breakMinutes: 30,
    workedHours: 7.5,
    overtimeHours: 0,
    type: 'Nachtschicht',
    location: 'Nürnberg',
    status: 'Genehmigt',
    notes: 'Systemwartung - Minimal downtime',
    approvedBy: 'emp_010',
    approvedAt: '2024-01-29'
  }
];

// Mock-Urlaubsanträge
export const mockVacationRequests: VacationRequest[] = [
  {
    id: 'vac_001',
    employeeId: 'emp_003',
    startDate: '2024-03-15',
    endDate: '2024-03-22',
    days: 6,
    type: 'Urlaub',
    reason: 'Familienurlaub - Osterferien',
    status: 'Genehmigt',
    requestedAt: '2024-01-25',
    reviewedBy: 'emp_008',
    reviewedAt: '2024-01-26',
    reviewNotes: 'Approved - adequate coverage arranged',
    replacement: 'emp_012'
  },
  {
    id: 'vac_002',
    employeeId: 'emp_004',
    startDate: '2024-02-05',
    endDate: '2024-02-09',
    days: 5,
    type: 'Krankheit',
    reason: 'Grippe',
    status: 'Genehmigt',
    requestedAt: '2024-02-05',
    reviewedBy: 'emp_009',
    reviewedAt: '2024-02-05',
    reviewNotes: 'Krankschreibung eingereicht'
  },
  {
    id: 'vac_003',
    employeeId: 'emp_005',
    startDate: '2024-04-01',
    endDate: '2024-04-12',
    days: 10,
    type: 'Elternzeit',
    reason: 'Geburt des zweiten Kindes',
    status: 'Eingereicht',
    requestedAt: '2024-01-28'
  }
];

// Mock-Performance-Reviews
export const mockPerformanceReviews: PerformanceReview[] = [
  {
    id: 'perf_001',
    employeeId: 'emp_003',
    reviewPeriod: '2023',
    reviewDate: '2024-01-15',
    reviewerID: 'emp_008',
    overallRating: 4,
    categories: {
      workQuality: 4,
      productivity: 4,
      teamwork: 5,
      communication: 4,
      reliability: 5,
      initiative: 3
    },
    strengths: ['Ausgezeichnete Kundenbeziehungen', 'Hohe Zuverlässigkeit', 'Teamplayer'],
    improvementAreas: ['Mehr Initiative bei neuen Projekten', 'Digitale Skills ausbauen'],
    goals: ['5 neue Großkunden akquirieren', 'CRM-System Zertifizierung'],
    developmentPlan: 'Vertriebsschulung Q2, Projektmanagement-Kurs Q3',
    comments: 'Sarah zeigt konstant gute Leistungen und ist bei Kunden sehr geschätzt.',
    employeeComments: 'Möchte gerne mehr Verantwortung im Bereich Neukunden',
    status: 'Abgeschlossen',
    nextReviewDate: '2025-01-15'
  },
  {
    id: 'perf_002',
    employeeId: 'emp_006',
    reviewPeriod: '2023',
    reviewDate: '2024-01-20',
    reviewerID: 'emp_010',
    overallRating: 5,
    categories: {
      workQuality: 5,
      productivity: 5,
      teamwork: 4,
      communication: 4,
      reliability: 5,
      initiative: 5
    },
    strengths: ['Ausgezeichnete technische Fähigkeiten', 'Proaktive Problemlösung', 'Schnelle Einarbeitung'],
    improvementAreas: ['Präsentationsfähigkeiten', 'Interdisziplinäre Kommunikation'],
    goals: ['Cloud-Migration-Projekt leiten', 'Cybersecurity-Zertifizierung'],
    developmentPlan: 'AWS Solutions Architect, Rhetorik-Seminar',
    comments: 'Daniel hat sich schnell als unverzichtbarer Teil des IT-Teams etabliert.',
    status: 'Abgeschlossen',
    nextReviewDate: '2025-01-20'
  }
];

// Mock-Schulungen
export const mockTrainings: Training[] = [
  {
    id: 'train_001',
    title: 'Arbeitsschutz und Sicherheit im Logistikzentrum',
    description: 'Jährliche Pflichtschulung für alle Mitarbeiter in Logistikbereichen',
    type: 'Pflichtschulung',
    provider: 'TÜV Süd',
    duration: 8,
    cost: 150,
    maxParticipants: 25,
    location: 'Röthlein - Schulungsraum A',
    startDate: '2024-02-15',
    endDate: '2024-02-15',
    trainer: 'Dr. Klaus Meier (TÜV Süd)',
    requirements: ['Alle Logistik-Mitarbeiter', 'Sicherheitsschuhe erforderlich'],
    certification: 'Arbeitsschutz-Zertifikat (1 Jahr gültig)',
    status: 'Geplant',
    participants: ['emp_004', 'emp_008', 'emp_012', 'emp_013']
  },
  {
    id: 'train_002',
    title: 'Führungskräfteentwicklung: Moderne Personalführung',
    description: 'Zweitägiges Seminar für Führungskräfte zu zeitgemäßer Mitarbeiterführung',
    type: 'Führungskräfteentwicklung',
    provider: 'Management Institut Würzburg',
    duration: 16,
    cost: 890,
    maxParticipants: 12,
    location: 'Würzburg - Hotel Maritim',
    startDate: '2024-03-08',
    endDate: '2024-03-09',
    trainer: 'Prof. Dr. Andrea Schneider',
    requirements: ['Führungsverantwortung', 'Min. 2 Jahre Führungserfahrung'],
    certification: 'Führungskräfte-Zertifikat',
    status: 'Aktiv',
    participants: ['emp_002', 'emp_008', 'emp_009', 'emp_011']
  },
  {
    id: 'train_003',
    title: 'Digitalisierung in der Logistik',
    description: 'Workshop zu neuen digitalen Tools und KI in der Logistikbranche',
    type: 'Weiterbildung',
    provider: 'Logistik Initiative Bayern',
    duration: 6,
    cost: 320,
    maxParticipants: 20,
    location: 'Online (Teams)',
    startDate: '2024-02-28',
    endDate: '2024-02-28',
    trainer: 'Marcus Weber (Logistik 4.0)',
    requirements: ['Grundkenntnisse Logistik', 'Laptop/PC mit Teams'],
    status: 'Geplant',
    participants: ['emp_003', 'emp_005', 'emp_006', 'emp_007']
  }
];

// Mock-Stellenausschreibungen
export const mockJobPostings: JobPosting[] = [
  {
    id: 'job_001',
    title: 'Berufskraftfahrer (m/w/d) - Fernverkehr',
    department: 'Spedition',
    location: 'Röthlein',
    type: 'Vollzeit',
    salaryRange: {
      min: 3200,
      max: 4200
    },
    requirements: [
      'Führerschein Klasse CE',
      'ADR-Schein (Gefahrgut)',
      'Mindestens 2 Jahre Berufserfahrung',
      'Flexibilität bei Arbeitszeiten',
      'Zuverlässigkeit und Kundenorientierung'
    ],
    responsibilities: [
      'Durchführung von nationalen und internationalen Transporten',
      'Beladung und Entladung der Fahrzeuge',
      'Einhaltung von Lenk- und Ruhezeiten',
      'Pflege und Wartung des Fahrzeugs',
      'Kundenbetreuung vor Ort'
    ],
    benefits: [
      'Attraktive Vergütung mit Zulagen',
      '30 Tage Urlaub',
      'Betriebliche Altersvorsorge',
      'Moderne Fahrzeugflotte',
      'Weiterbildungsmöglichkeiten'
    ],
    status: 'Veröffentlicht',
    publishedDate: '2024-01-15',
    applicationDeadline: '2024-03-15',
    recruiter: 'emp_005',
    applications: 23,
    createdAt: '2024-01-10'
  },
  {
    id: 'job_002',
    title: 'Sachbearbeiter Disposition (m/w/d)',
    department: 'Logistik',
    location: 'Würzburg',
    type: 'Vollzeit',
    salaryRange: {
      min: 2800,
      max: 3600
    },
    requirements: [
      'Kaufmännische Ausbildung',
      'Erfahrung in der Logistik/Spedition',
      'SAP-Kenntnisse von Vorteil',
      'Kommunikationsstärke',
      'Organisationstalent'
    ],
    responsibilities: [
      'Tourenplanung und -optimierung',
      'Kundenkommunikation',
      'Auftragsabwicklung',
      'Koordination mit Fahrern',
      'Reklamationsbearbeitung'
    ],
    benefits: [
      'Flexible Arbeitszeiten',
      'Homeoffice-Möglichkeit',
      'Betriebliche Altersvorsorge',
      'Kostenfreie Parkplätze',
      'Teamevents'
    ],
    status: 'Veröffentlicht',
    publishedDate: '2024-01-20',
    applicationDeadline: '2024-04-30',
    recruiter: 'emp_005',
    applications: 15,
    createdAt: '2024-01-18'
  }
];

// Mock-Bewerbungen
export const mockApplications: Application[] = [
  {
    id: 'app_001',
    jobPostingId: 'job_001',
    firstName: 'Hans',
    lastName: 'Zimmermann',
    email: 'h.zimmermann@email.com',
    phone: '+49 171 234-5678',
    address: 'Hauptstraße 12, 97525 Schwebheim',
    status: 'Interview geplant',
    resumeUrl: '/documents/zimmermann_cv.pdf',
    coverLetterUrl: '/documents/zimmermann_cover.pdf',
    applicationDate: '2024-01-20',
    lastContactDate: '2024-01-25',
    assignedRecruiter: 'emp_005',
    interviewNotes: 'Sehr erfahrener Fahrer, 15 Jahre Fernverkehr',
    rating: 4,
    notes: 'Termin für Vorstellungsgespräch: 05.02.2024 um 14:00 Uhr'
  },
  {
    id: 'app_002',
    jobPostingId: 'job_002',
    firstName: 'Marina',
    lastName: 'Klein',
    email: 'm.klein@email.com',
    phone: '+49 151 987-6543',
    address: 'Gartenweg 8, 97080 Würzburg',
    status: 'In Prüfung',
    resumeUrl: '/documents/klein_cv.pdf',
    applicationDate: '2024-01-22',
    assignedRecruiter: 'emp_005',
    rating: 3,
    notes: 'Gute kaufmännische Ausbildung, aber wenig Logistik-Erfahrung'
  }
];

// HR-Metriken
export const mockHRMetrics: HRMetrics = {
  employeeCount: 2500,
  departmentDistribution: {
    'Spedition': 890,
    'Logistik': 654,
    'Truckwerkstatt': 287,
    'Industriemontage': 156,
    'Ausland': 89,
    'Sprintbox': 78,
    'Verwaltung': 198,
    'IT': 45,
    'Personal': 32,
    'Buchhaltung': 28,
    'Geschäftsführung': 12
  },
  avgTenure: 8.3,
  turnoverRate: 12.4,
  avgSalary: 3850,
  trainingHoursPerEmployee: 24.5,
  vacationUtilization: 89.2,
  performanceDistribution: {
    1: 45,
    2: 234,
    3: 1456,
    4: 645,
    5: 120
  },
  recruitmentMetrics: {
    openPositions: 47,
    avgTimeToHire: 32,
    applicationRate: 8.7
  }
};

// HR-Automatisierungen
export const mockHRAutomations: HRAutomation[] = [
  {
    id: 'auto_001',
    name: 'Onboarding Neue Mitarbeiter',
    type: 'Onboarding',
    trigger: 'Neuer Mitarbeiter wird angelegt',
    actions: [
      {
        type: 'Email',
        recipient: 'Neuer Mitarbeiter',
        template: 'Willkommen bei Schäflein AG',
        daysOffset: 0
      },
      {
        type: 'Task',
        recipient: 'Direkter Vorgesetzter',
        template: 'Arbeitsplatz vorbereiten',
        daysOffset: -3
      },
      {
        type: 'Email',
        recipient: 'IT-Abteilung',
        template: 'Benutzer-Account anlegen',
        daysOffset: -1
      }
    ],
    isActive: true,
    createdAt: '2023-06-15',
    lastTriggered: '2024-01-28'
  },
  {
    id: 'auto_002',
    name: 'Geburtstags-Glückwünsche',
    type: 'Geburtstag',
    trigger: 'Geburtstag eines Mitarbeiters',
    actions: [
      {
        type: 'Email',
        recipient: 'Mitarbeiter',
        template: 'Herzlichen Glückwunsch zum Geburtstag',
        daysOffset: 0
      },
      {
        type: 'Notification',
        recipient: 'Direkter Vorgesetzter',
        template: 'Mitarbeiter hat heute Geburtstag',
        daysOffset: 0
      }
    ],
    isActive: true,
    createdAt: '2023-08-20',
    lastTriggered: '2024-01-29'
  },
  {
    id: 'auto_003',
    name: 'Schulungserinnerung',
    type: 'Schulungserinnerung',
    trigger: 'Zertifikat läuft ab',
    actions: [
      {
        type: 'Email',
        recipient: 'Mitarbeiter',
        template: 'Schulung erneuern erforderlich',
        daysOffset: -30
      },
      {
        type: 'Task',
        recipient: 'HR-Abteilung',
        template: 'Schulung organisieren',
        daysOffset: -45
      }
    ],
    isActive: true,
    createdAt: '2023-09-10',
    lastTriggered: '2024-01-15'
  }
];

// Prospect Research - Neue potenzielle Kunden
export const mockProspectResearch: ProspectResearch[] = [
  {
    id: '1',
    companyName: 'Volkswagen AG',
    industry: 'Automobilindustrie',
    revenue: 279000000000,
    employees: 672000,
    location: 'Wolfsburg',
    website: 'volkswagen.de',
    businessType: 'Logistik',
    potentialValue: 5000000,
    priority: 'Kritisch',
    researchDate: '2024-01-30',
    sources: ['LinkedIn Sales Navigator', 'Unternehmenswebsite', 'Branchenberichte'],
    keyInsights: [
      'Plant neue Logistikzentren in Osteuropa',
      'Sucht Partner für E-Auto Komponenten Transport',
      'Budget für 2024: 500M€ für Logistik-Outsourcing'
    ],
    decisionMakers: [
      {
        name: 'Dr. Andreas Müller',
        role: 'Head of Global Logistics',
        email: 'a.mueller@volkswagen.de',
        phone: '+49 5361 9-12345',
        linkedIn: 'linkedin.com/in/andreas-mueller-vw'
      },
      {
        name: 'Sandra Weber',
        role: 'Procurement Director',
        email: 's.weber@volkswagen.de',
        linkedIn: 'linkedin.com/in/sandra-weber-vw'
      }
    ],
    competitorAnalysis: 'DHL, DB Schenker und BLG Logistics sind Hauptkonkurrenten',
    painPoints: [
      'Komplexe internationale Supply Chain',
      'E-Mobility Komponenten Handling',
      'Kostendruck durch Transformation',
      'Nachhaltigkeit in der Logistik'
    ],
    businessNeed: 'Neustrukturierung der Logistik für E-Mobility',
    timeline: 'Q2 2024 Ausschreibung geplant',
    budget: '3-7M€ jährlich',
    assignedTo: 'Joachim Schäflein',
    status: 'Qualifiziert',
    createdAt: '2024-01-30',
    updatedAt: '2024-01-30'
  },
  {
    id: '2',
    companyName: 'BASF SE',
    industry: 'Chemie',
    revenue: 87300000000,
    employees: 111000,
    location: 'Ludwigshafen',
    website: 'basf.com',
    businessType: 'Industriemontage',
    potentialValue: 2800000,
    priority: 'Hoch',
    researchDate: '2024-01-29',
    sources: ['Branchenkontakte', 'Messen', 'Pressemitteilungen'],
    keyInsights: [
      'Baut neue Produktionsanlage in Bayern',
      'Benötigt Spezialisten für Chemie-Anlagen',
      'Erfahrung mit Gefahrgut erforderlich'
    ],
    decisionMakers: [
      {
        name: 'Dr. Klaus Reinhardt',
        role: 'Operations Manager',
        email: 'klaus.reinhardt@basf.com',
        phone: '+49 621 60-12345'
      }
    ],
    competitorAnalysis: 'Rhenus und Hoyer dominieren Chemie-Logistik',
    painPoints: [
      'Gefahrgut-Transport',
      'Spezial-Equipment benötigt',
      'Strenge Sicherheitsvorschriften',
      'Umweltauflagen'
    ],
    businessNeed: 'Montage und Transport von Chemieanlagen',
    timeline: 'Projektstart Q3 2024',
    budget: '2-4M€',
    assignedTo: 'Thomas Müller',
    status: 'Recherche',
    createdAt: '2024-01-29',
    updatedAt: '2024-01-29'
  }
];

// Account-Based Marketing Kampagnen
export const mockAccountBasedMarketing: AccountBasedMarketing[] = [
  {
    id: '1',
    accountName: 'German Automotive Giants',
    targetCompanies: ['BMW AG', 'Volkswagen AG', 'Mercedes-Benz Group AG', 'Porsche AG'],
    strategy: 'Multi-Channel Approach für Premium Automotive Logistik',
    budget: 150000,
    timeline: 'Q1-Q3 2024',
    keyContacts: [
      {
        name: 'Dr. Andreas Müller',
        role: 'Head of Logistics VW',
        email: 'a.mueller@volkswagen.de',
        phone: '+49 5361 9-12345',
        linkedIn: 'linkedin.com/in/andreas-mueller-vw',
        influence: 'Hoch'
      },
      {
        name: 'Dr. Klaus Weber',
        role: 'Logistikleiter BMW',
        email: 'logistik@bmw.de',
        phone: '+49 89 382-0',
        influence: 'Hoch'
      }
    ],
    touchpoints: [
      {
        channel: 'LinkedIn',
        message: 'Personalized automotive logistics insights',
        date: '2024-02-01',
        status: 'Geplant'
      },
      {
        channel: 'Email',
        message: 'Fallstudie BMW Erfolg',
        date: '2024-02-05',
        status: 'Geplant'
      },
      {
        channel: 'Meeting',
        message: 'Persönlicher Termin VW Wolfsburg',
        date: '2024-02-15',
        status: 'Geplant'
      }
    ],
    kpis: {
      engagement: 45,
      meetings: 2,
      proposals: 1,
      revenue: 2500000
    },
    status: 'Aktiv',
    assignedTo: 'Joachim Schäflein',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-30'
  }
];

// Competitive Intelligence
export const mockCompetitiveIntelligence: CompetitiveIntelligence[] = [
  {
    id: 'comp_001',
    competitor: 'DHL Supply Chain',
    dealId: '1', // Audi deal
    winLoss: 'Ongoing',
    competitorStrengths: ['Internationale Präsenz', 'Große Fahrzeugflotte', 'Bekannte Marke'],
    competitorWeaknesses: ['Höhere Preise', 'Weniger persönlicher Service', 'Langsamere Entscheidungen'],
    ourAdvantages: ['Persönlicher Service', 'Flexibilität', 'Regionale Expertise', '15% Kostenvorteil'],
    lossReasons: [],
    priceComparison: {
      ourPrice: 3200000,
      competitorPrice: 3680000,
      difference: -480000
    },
    serviceComparison: ['24/7 Service', 'Dedicated Account Manager', 'Lokale Präsenz'],
    customerFeedback: 'Kunde schätzt unsere Flexibilität und persönliche Betreuung',
    actionItems: ['ROI-Kalkulation erstellen', 'Referenzkunden vorstellen', 'Pilot-Projekt vorschlagen'],
    assignedTo: 'Joachim Schäflein',
    dealValue: 3200000,
    industry: 'Automobilindustrie',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-30'
  },
  {
    id: 'comp_002',
    competitor: 'DB Schenker',
    dealId: '3', // Lidl deal
    winLoss: 'Win',
    competitorStrengths: ['Starke Bahnlogistik', 'EU-weites Netzwerk'],
    competitorWeaknesses: ['Komplexe Struktur', 'Langsamere Reaktionszeiten'],
    ourAdvantages: ['Schnellere Umsetzung', 'Direkter Draht zum Management', 'Österreich-Expertise'],
    lossReasons: [],
    priceComparison: {
      ourPrice: 2100000,
      competitorPrice: 2250000,
      difference: -150000
    },
    serviceComparison: ['Grenzüberschreitende Expertise', 'Kühlketten-Management'],
    customerFeedback: 'Überzeugt durch schnelle Umsetzung und Kosteneffizienz',
    actionItems: ['Vertrag finalisieren', 'Onboarding planen', 'Success Story dokumentieren'],
    assignedTo: 'Sarah Weber',
    dealValue: 2100000,
    industry: 'Einzelhandel',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-29'
  }
];

// Attribution Model Mock Data
export const mockAttributionModel: AttributionModel[] = [
  {
    id: 'attr_001',
    leadId: '1', // Audi
    touchpoints: [
      { channel: 'LinkedIn', campaign: 'Automotive Executives', date: '2024-01-05', attribution: 30, cost: 150 },
      { channel: 'Email', campaign: 'Logistik-Newsletter', date: '2024-01-08', attribution: 20, cost: 25 },
      { channel: 'Website', campaign: 'Organic Search', date: '2024-01-12', attribution: 15, cost: 0 },
      { channel: 'Content', campaign: 'BMW Case Study', date: '2024-01-15', attribution: 25, cost: 200 },
      { channel: 'Sales Call', campaign: 'Direct Outreach', date: '2024-01-20', attribution: 10, cost: 100 }
    ],
    totalTouchpoints: 5,
    conversionValue: 3200000,
    firstTouchChannel: 'LinkedIn',
    lastTouchChannel: 'Sales Call',
    assistedChannels: ['Email', 'Website', 'Content'],
    timeToConversion: 15,
    customerJourneyStage: 'Negotiation',
    attributionModel: 'Data Driven',
    createdAt: '2024-01-30'
  },
  {
    id: 'attr_002',
    leadId: '3', // Lidl
    customerId: '3',
    touchpoints: [
      { channel: 'Cargoline', campaign: 'Partner Referral', date: '2024-01-08', attribution: 40, cost: 500 },
      { channel: 'Website', campaign: 'Organic Search', date: '2024-01-10', attribution: 20, cost: 0 },
      { channel: 'Email', campaign: 'Follow-up Sequence', date: '2024-01-12', attribution: 15, cost: 30 },
      { channel: 'Meeting', campaign: 'Personal Presentation', date: '2024-01-18', attribution: 25, cost: 300 }
    ],
    totalTouchpoints: 4,
    conversionValue: 2100000,
    firstTouchChannel: 'Cargoline',
    lastTouchChannel: 'Meeting',
    assistedChannels: ['Website', 'Email'],
    timeToConversion: 21,
    customerJourneyStage: 'Closed Won',
    attributionModel: 'Linear',
    createdAt: '2024-01-29'
  }
];

// Advanced Lead Nurturing Mock Data
export const mockAdvancedLeadNurturing: AdvancedLeadNurturing[] = [
  {
    id: 'nurture_001',
    leadId: '4', // Fränkische Rohrwerke
    nurtureSequence: 'Sprintbox Express Service Journey',
    currentStep: 3,
    totalSteps: 7,
    triggerType: 'Behavior',
    triggerEvent: 'Downloaded Sprintbox Pricing Guide',
    personalizedContent: {
      industry: 'Rohrsysteme',
      painPoint: 'Kritische Ersatzteile schnell liefern',
      solution: 'Sprintbox 24h Service',
      caseStudy: 'Krones AG Success Story'
    },
    behaviorTracking: {
      emailOpens: 4,
      linkClicks: 7,
      websiteVisits: 12,
      contentDownloads: 2,
      videoViews: 1
    },
    engagementScore: 78,
    nextAction: 'Send video testimonial from similar company',
    scheduledDate: '2024-02-02',
    status: 'Active',
    assignedTo: 'Michael Schmidt',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-30'
  },
  {
    id: 'nurture_002',
    leadId: '5', // Fendt
    nurtureSequence: 'Agricultural Machinery - Seasonal',
    currentStep: 1,
    totalSteps: 5,
    triggerType: 'Time',
    triggerEvent: 'New lead created',
    personalizedContent: {
      industry: 'Landmaschinenbau',
      painPoint: 'Saisonale Logistik-Herausforderungen',
      solution: 'Flexible Truckwerkstatt-Services',
      caseStudy: 'Bauer Maschinen Partnership'
    },
    behaviorTracking: {
      emailOpens: 1,
      linkClicks: 2,
      websiteVisits: 3,
      contentDownloads: 0,
      videoViews: 0
    },
    engagementScore: 42,
    nextAction: 'Send industry-specific content about seasonal logistics',
    scheduledDate: '2024-02-01',
    status: 'Active',
    assignedTo: 'Michael Schmidt',
    createdAt: '2024-01-25',
    updatedAt: '2024-01-30'
  }
];

// Extended Sales Analytics Mock Data
export const mockSalesAnalyticsExtended: SalesAnalyticsExtended[] = [
  {
    id: '1',
    period: 'Januar 2024',
    newLeads: 127,
    qualifiedLeads: 45,
    conversions: 12,
    revenue: 2800000,
    averageDealSize: 233333,
    salesCycleLength: 45,
    winRate: 26.7,
    pipelineValue: 12500000,
    forecasting: {
      nextMonth: 3200000,
      nextQuarter: 8500000,
      nextYear: 35000000
    },
    topPerformers: ['Joachim Schäflein', 'Sarah Weber', 'Thomas Müller'],
    lostDealReasons: [
      'Preis zu hoch (35%)',
      'Timing nicht passend (25%)',
      'Fehlende Referenzen (20%)',
      'Konkurrenz ausgewählt (20%)'
    ],
    marketTrends: [
      'Verstärkter Fokus auf Nachhaltigkeit',
      'Digitalisierung der Supply Chain',
      'Nearshoring-Trend aus Asien',
      'E-Mobility Logistik wächst stark'
    ],
    competitiveWins: 8,
    competitiveLosses: 4,
    socialSellingMetrics: {
      linkedInConnections: 89,
      socialEngagement: 156,
      socialLeads: 23,
      socialConversions: 7
    },
    contentMarketingMetrics: {
      contentViews: 5660,
      contentLeads: 101,
      contentConversions: 12,
      topPerformingContent: ['BMW Case Study', 'Sprintbox Blog Post', 'Industriemontage Webinar']
    },
    videoMetrics: {
      videosCreated: 15,
      videoViews: 234,
      videoResponseRate: 68,
      meetingsFromVideos: 8
    },
    referralMetrics: {
      referralsReceived: 12,
      referralConversions: 4,
      referralRevenue: 850000,
      topReferrers: ['BMW AG', 'Cargoline Partner', 'Thomas Müller']
    }
  }
];

// Neue Logistik-Features Mock-Daten für Schäflein
export const mockShipments: Shipment[] = [
  {
    id: 'SH001',
    trackingNumber: 'SCH240201001',
    sender: 'BMW AG München',
    recipient: 'BMW Werk Dingolfing',
    recipientAddress: 'Werk Dingolfing, 84130 Dingolfing',
    service: 'Sprintbox',
    status: 'Im Transit',
    currentLocation: 'Röthlein Depot',
    estimatedDelivery: '2024-02-02T14:30:00',
    weight: 2500,
    dimensions: { length: 120, width: 80, height: 80 },
    value: 45000,
    priority: 'Express',
    transportMode: 'LKW',
    temperature: 22,
    hazardous: false,
    customsStatus: 'Cleared',
    co2Footprint: 12.5,
    costs: {
      transport: 850,
      fuel: 120,
      customs: 0,
      insurance: 45,
      total: 1015
    },
    route: [
      {
        id: 'TE001',
        timestamp: '2024-02-01T08:00:00',
        location: 'BMW AG München',
        description: 'Sendung abgeholt',
        status: 'Abgeholt',
        nextLocation: 'Röthlein Depot',
        estimatedArrival: '2024-02-01T12:30:00'
      },
      {
        id: 'TE002',
        timestamp: '2024-02-01T12:45:00',
        location: 'Röthlein Depot',
        description: 'Sendung im Umschlaglager angekommen',
        status: 'Im Transit',
        nextLocation: 'BMW Werk Dingolfing',
        estimatedArrival: '2024-02-02T14:30:00'
      }
    ]
  },
  {
    id: 'SH002',
    trackingNumber: 'SCH240201002',
    sender: 'Audi AG Ingolstadt',
    recipient: 'Audi Werk Neckarsulm',
    recipientAddress: 'Audi-Allee 1, 74172 Neckarsulm',
    service: 'Komplettladung',
    status: 'Zustellung',
    currentLocation: 'Neckarsulm - Auslieferung',
    estimatedDelivery: '2024-02-01T16:00:00',
    weight: 24000,
    dimensions: { length: 1340, width: 248, height: 270 },
    value: 180000,
    priority: 'Standard',
    transportMode: 'LKW',
    hazardous: false,
    co2Footprint: 45.8,
    costs: {
      transport: 2100,
      fuel: 320,
      customs: 0,
      insurance: 180,
      total: 2600
    },
    route: [
      {
        id: 'TE003',
        timestamp: '2024-01-31T14:00:00',
        location: 'Audi AG Ingolstadt',
        description: 'Komplettladung aufgenommen',
        status: 'Abgeholt'
      },
      {
        id: 'TE004',
        timestamp: '2024-02-01T15:30:00',
        location: 'Neckarsulm - Auslieferung',
        description: 'Zustellung läuft - Entladung begonnen',
        status: 'Zustellung'
      }
    ]
  },
  {
    id: 'SH003',
    trackingNumber: 'SCH240201003',
    sender: 'Siemens Energy Erlangen',
    recipient: 'Siemens Shanghai',
    recipientAddress: 'Shanghai, China',
    service: 'Luftfracht',
    status: 'Depot',
    currentLocation: 'Frankfurt Airport',
    estimatedDelivery: '2024-02-05T09:00:00',
    weight: 850,
    dimensions: { length: 100, width: 60, height: 40 },
    value: 125000,
    priority: 'Kritisch',
    transportMode: 'Flugzeug',
    hazardous: true,
    customsStatus: 'Ausstehend',
    co2Footprint: 85.2,
    costs: {
      transport: 4500,
      fuel: 650,
      customs: 890,
      insurance: 1250,
      total: 7290
    },
    route: [
      {
        id: 'TE005',
        timestamp: '2024-01-30T10:00:00',
        location: 'Siemens Energy Erlangen',
        description: 'Gefahrgut-Sendung abgeholt',
        status: 'Abgeholt'
      },
      {
        id: 'TE006',
        timestamp: '2024-02-01T08:15:00',
        location: 'Frankfurt Airport',
        description: 'Wartet auf Zollabfertigung',
        status: 'Depot'
      }
    ]
  }
];

export const mockLogisticsKPIs: LogisticsKPI[] = [
  {
    name: 'Pünktlichkeitsrate',
    value: 96.8,
    unit: '%',
    change: 2.1,
    trend: 'up',
    period: 'vs. Vormonat',
    target: 95,
    category: 'Qualität'
  },
  {
    name: 'Durchschn. Lieferzeit',
    value: '18.5',
    unit: 'Stunden',
    change: -1.2,
    trend: 'up',
    period: 'vs. Vormonat',
    target: 24,
    category: 'Transport'
  },
  {
    name: 'CO₂-Ausstoß',
    value: '2.3',
    unit: 'kg/km',
    change: -8.5,
    trend: 'up',
    period: 'vs. Vorjahr',
    target: 2.0,
    category: 'Umwelt'
  },
  {
    name: 'Transportkosten',
    value: '1.45',
    unit: '€/km',
    change: -3.2,
    trend: 'up',
    period: 'vs. Vormonat',
    target: 1.50,
    category: 'Kosten'
  },
  {
    name: 'Lagerauslastung',
    value: 78.4,
    unit: '%',
    change: 5.3,
    trend: 'up',
    period: 'aktuell',
    target: 80,
    category: 'Lager'
  },
  {
    name: 'Schadenquote',
    value: 0.12,
    unit: '%',
    change: -0.03,
    trend: 'up',
    period: 'vs. Vormonat',
    target: 0.15,
    category: 'Qualität'
  }
];

export const mockTransportRoutes: TransportRoute[] = [
  {
    id: 'TR001',
    origin: 'Röthlein',
    destination: 'Hamburg',
    distance: 520,
    estimatedTime: 6.5,
    cost: 850,
    co2Emissions: 24.8,
    mode: 'LKW',
    reliability: 98.5,
    weatherImpact: 'Niedrig',
    trafficeConditions: 'Gut',
    alternatives: [
      { mode: 'Bahn', cost: 720, time: 8.5, co2: 12.4 },
      { mode: 'Kombiniert', cost: 780, time: 7.2, co2: 18.6 }
    ]
  },
  {
    id: 'TR002',
    origin: 'Röthlein',
    destination: 'Wien',
    distance: 380,
    estimatedTime: 4.5,
    cost: 620,
    co2Emissions: 18.2,
    mode: 'LKW',
    reliability: 96.2,
    weatherImpact: 'Mittel',
    trafficeConditions: 'Mittel',
    alternatives: [
      { mode: 'Bahn', cost: 560, time: 6.0, co2: 9.1 },
      { mode: 'Kombiniert', cost: 590, time: 5.2, co2: 13.7 }
    ]
  },
  {
    id: 'TR003',
    origin: 'Frankfurt',
    destination: 'Shanghai',
    distance: 8950,
    estimatedTime: 18.0,
    cost: 4500,
    co2Emissions: 850,
    mode: 'Flugzeug',
    reliability: 94.8,
    weatherImpact: 'Hoch',
    trafficeConditions: 'Gut',
    alternatives: [
      { mode: 'Schiff', cost: 2100, time: 432, co2: 120 },
      { mode: 'Bahn', cost: 3200, time: 384, co2: 180 }
    ]
  }
];

export const mockWarehouseStatus: WarehouseStatus[] = [
  {
    location: 'Röthlein Hauptlager',
    totalCapacity: 185000,
    currentUtilization: 145000,
    utilizationRate: 78.4,
    availableSpace: 40000,
    temperatureZones: {
      normal: 120000,
      cooled: 20000,
      frozen: 5000
    },
    hazardousGoods: true,
    equipment: {
      cranes: 8,
      forklifts: 24,
      conveyor: 12
    },
    staff: {
      total: 85,
      available: 72,
      shift: 'Tag'
    }
  },
  {
    location: 'München Außenlager',
    totalCapacity: 42000,
    currentUtilization: 38500,
    utilizationRate: 91.7,
    availableSpace: 3500,
    temperatureZones: {
      normal: 35000,
      cooled: 7000,
      frozen: 0
    },
    hazardousGoods: false,
    equipment: {
      cranes: 2,
      forklifts: 8,
      conveyor: 3
    },
    staff: {
      total: 18,
      available: 16,
      shift: 'Tag'
    }
  }
];

export const mockFleet: Fleet[] = [
  {
    vehicleId: 'SCH-ST-001',
    type: 'Sattelzug',
    location: 'A3 bei Würzburg',
    status: 'Unterwegs',
    driver: 'Hans Müller',
    currentLoad: 22000,
    maxLoad: 24000,
    fuel: 68,
    nextMaintenance: '2024-02-15',
    route: 'München → Hamburg',
    estimatedArrival: '2024-02-02T14:30:00',
    co2Today: 45.2,
    efficiency: 94.5
  },
  {
    vehicleId: 'SCH-LK-012',
    type: 'LKW',
    location: 'Röthlein Depot',
    status: 'Beladen',
    driver: 'Peter Schmidt',
    currentLoad: 7500,
    maxLoad: 12000,
    fuel: 89,
    nextMaintenance: '2024-02-08',
    co2Today: 12.8,
    efficiency: 91.2
  },
  {
    vehicleId: 'SCH-SP-005',
    type: 'Sprinter',
    location: 'BMW Werk Dingolfing',
    status: 'Verfügbar',
    driver: 'Andreas Weber',
    currentLoad: 0,
    maxLoad: 3500,
    fuel: 72,
    nextMaintenance: '2024-02-20',
    co2Today: 8.3,
    efficiency: 88.7
  },
  {
    vehicleId: 'SCH-ST-018',
    type: 'Sattelzug',
    location: 'Werkstatt Röthlein',
    status: 'Wartung',
    driver: 'Klaus Fischer',
    currentLoad: 0,
    maxLoad: 24000,
    fuel: 15,
    nextMaintenance: '2024-02-01',
    co2Today: 0,
    efficiency: 0
  }
]; 

// Kundenportal 2.0 Mock-Daten
export const mockCustomerPortalUsers: CustomerPortalUser[] = [
  {
    id: 'cpu1',
    customerId: '1', // BMW AG
    name: 'Thomas Wagner',
    email: 'thomas.wagner@bmw.de',
    role: 'Admin',
    department: 'Logistik & Supply Chain',
    phone: '+49 89 382-12345',
    permissions: [
      { resource: 'bookings', actions: ['create', 'read', 'update', 'delete'] },
      { resource: 'tracking', actions: ['read'] },
      { resource: 'documents', actions: ['read'] },
      { resource: 'invoices', actions: ['read'] },
      { resource: 'reports', actions: ['read'] },
      { resource: 'settings', actions: ['read', 'update'] }
    ],
    lastLogin: '2024-02-01T08:15:00',
    isActive: true,
    preferredLanguage: 'de',
    notifications: [
      { type: 'email', events: ['shipment_updates', 'delivery_notifications', 'delays'], enabled: true },
      { type: 'sms', events: ['delays'], enabled: true }
    ]
  },
  {
    id: 'cpu2',
    customerId: '2', // Audi AG
    name: 'Sarah Klein',
    email: 'sarah.klein@audi.de',
    role: 'User',
    department: 'Ersatzteile Logistik',
    phone: '+49 841 89-67890',
    permissions: [
      { resource: 'bookings', actions: ['create', 'read'] },
      { resource: 'tracking', actions: ['read'] },
      { resource: 'documents', actions: ['read'] }
    ],
    lastLogin: '2024-02-01T14:30:00',
    isActive: true,
    preferredLanguage: 'de',
    notifications: [
      { type: 'email', events: ['shipment_updates', 'delivery_notifications'], enabled: true }
    ]
  }
];

export const mockCustomerBookings: CustomerBooking[] = [
  {
    id: 'cb001',
    customerId: '1', // BMW AG
    customerReference: 'BMW-2024-001',
    service: 'Sprintbox',
    priority: 'Express',
    pickup: {
      company: 'BMW AG München',
      contact: 'Hans Müller',
      address: 'Petuelring 130',
      city: 'München',
      zip: '80788',
      country: 'Deutschland',
      phone: '+49 89 382-11111',
      email: 'hans.mueller@bmw.de',
      openingHours: '07:00-16:00',
      specialInstructions: 'Anlieferung über Tor 3, Ersatzteile-Lager'
    },
    delivery: {
      company: 'BMW Werk Dingolfing',
      contact: 'Maria Schmidt',
      address: 'Landshuter Str. 56',
      city: 'Dingolfing',
      zip: '84130',
      country: 'Deutschland',
      phone: '+49 8731 80-2222',
      email: 'maria.schmidt@bmw.de',
      openingHours: '06:00-22:00',
      specialInstructions: 'Dringend für Produktionslinie 2'
    },
    goods: {
      description: 'Motor-Ersatzteile für 3er Serie',
      weight: 2500,
      dimensions: { length: 120, width: 80, height: 80 },
      quantity: 15,
      packageType: 'Palette',
      value: 45000,
      isHazardous: false,
      temperatureControlled: false
    },
    requirements: {
      specialEquipment: ['Hubwagen'],
      loadingMethod: 'Hinten',
      insurance: true,
      customsClearance: false,
      deliveryAppointment: true,
      returnReceipt: true,
      photoConfirmation: true
    },
    pricing: {
      basePrice: 850,
      fuelSurcharge: 120,
      insurance: 45,
      specialServices: 0,
      tax: 193.85,
      total: 1208.85,
      currency: 'EUR',
      validUntil: '2024-02-15T23:59:59'
    },
    status: 'Bestätigt',
    createdBy: 'cpu1',
    createdAt: '2024-02-01T09:30:00',
    estimatedPickup: '2024-02-02T08:00:00',
    estimatedDelivery: '2024-02-02T14:30:00',
    trackingNumber: 'SCH240201001',
    notes: 'Kritische Ersatzteile für Produktionsstopp-Vermeidung'
  },
  {
    id: 'cb002',
    customerId: '2', // Audi AG
    customerReference: 'AUDI-LOG-2024-007',
    service: 'Komplettladung',
    priority: 'Standard',
    pickup: {
      company: 'Audi AG Ingolstadt',
      contact: 'Peter Zimmermann',
      address: 'Auto-Union-Str. 1',
      city: 'Ingolstadt',
      zip: '85045',
      country: 'Deutschland',
      phone: '+49 841 89-33333',
      email: 'peter.zimmermann@audi.de',
      openingHours: '05:00-23:00'
    },
    delivery: {
      company: 'Audi Werk Neckarsulm',
      contact: 'Julia Weber',
      address: 'Audi-Allee 1',
      city: 'Neckarsulm',
      zip: '74172',
      country: 'Deutschland',
      phone: '+49 7132 33-4444',
      email: 'julia.weber@audi.de',
      openingHours: '24/7'
    },
    goods: {
      description: 'Karosserieteile für A4 Produktion',
      weight: 24000,
      dimensions: { length: 1340, width: 248, height: 270 },
      quantity: 1,
      packageType: 'Container',
      value: 180000,
      isHazardous: false,
      temperatureControlled: false
    },
    requirements: {
      specialEquipment: ['Kran', 'Spezialtransport'],
      loadingMethod: 'Kran',
      insurance: true,
      customsClearance: false,
      deliveryAppointment: true,
      returnReceipt: true,
      photoConfirmation: false
    },
    pricing: {
      basePrice: 2100,
      fuelSurcharge: 320,
      insurance: 180,
      specialServices: 400,
      tax: 570,
      total: 3570,
      currency: 'EUR',
      validUntil: '2024-02-10T23:59:59'
    },
    status: 'In Bearbeitung',
    createdBy: 'cpu2',
    createdAt: '2024-01-30T16:45:00',
    estimatedPickup: '2024-02-01T14:00:00',
    estimatedDelivery: '2024-02-01T18:00:00',
    trackingNumber: 'SCH240201002'
  }
];

export const mockCustomerDocuments: CustomerDocument[] = [
  {
    id: 'cd001',
    customerId: '1', // BMW AG
    type: 'Invoice',
    title: 'Rechnung Januar 2024',
    description: 'Monatliche Sammelrechnung für alle Logistikdienstleistungen',
    fileUrl: '/documents/bmw-invoice-2024-01.pdf',
    fileName: 'BMW_Rechnung_202401.pdf',
    fileSize: 245760,
    mimeType: 'application/pdf',
    createdAt: '2024-01-31T23:59:59',
    downloadCount: 3,
    isArchived: false,
    tags: ['Rechnung', 'Januar', '2024', 'Monatlich']
  },
  {
    id: 'cd002',
    customerId: '1', // BMW AG
    type: 'Delivery Note',
    title: 'Lieferschein - Motor-Ersatzteile',
    shipmentId: 'SH001',
    bookingId: 'cb001',
    fileUrl: '/documents/bmw-delivery-note-001.pdf',
    fileName: 'Lieferschein_SCH240201001.pdf',
    fileSize: 89432,
    mimeType: 'application/pdf',
    createdAt: '2024-02-01T12:45:00',
    downloadCount: 1,
    isArchived: false,
    tags: ['Lieferschein', 'Ersatzteile', 'Dingolfing']
  },
  {
    id: 'cd003',
    customerId: '2', // Audi AG
    type: 'CMR',
    title: 'CMR Frachtbrief - Karosserieteile',
    shipmentId: 'SH002',
    bookingId: 'cb002',
    fileUrl: '/documents/audi-cmr-002.pdf',
    fileName: 'CMR_SCH240201002.pdf',
    fileSize: 156890,
    mimeType: 'application/pdf',
    createdAt: '2024-01-31T14:00:00',
    downloadCount: 2,
    isArchived: false,
    tags: ['CMR', 'Frachtbrief', 'Neckarsulm']
  }
];

export const mockSupportTickets: SupportTicket[] = [
  {
    id: 'st001',
    customerId: '1', // BMW AG
    customerUserId: 'cpu1',
    subject: 'Verzögerung bei Express-Lieferung',
    description: 'Unser Express-Transport für kritische Ersatzteile hat sich um 2 Stunden verzögert. Produktionsstillstand droht.',
    category: 'Tracking',
    priority: 'Urgent',
    status: 'Resolved',
    assignedTo: 'Achim Schäflein',
    createdAt: '2024-02-01T10:15:00',
    updatedAt: '2024-02-01T11:30:00',
    relatedShipmentId: 'SH001',
    relatedBookingId: 'cb001',
    satisfaction: 5,
    responses: [
      {
        id: 'tr001',
        author: 'Thomas Wagner',
        authorType: 'Customer',
        message: 'Hallo, unser Express-Transport SCH240201001 hat sich verzögert. Wann können wir mit der Ankunft rechnen?',
        timestamp: '2024-02-01T10:15:00',
        isInternal: false
      },
      {
        id: 'tr002',
        author: 'Achim Schäflein',
        authorType: 'Support',
        message: 'Hallo Herr Wagner, ich schaue sofort nach. Der Transport ist aufgrund eines Staus auf der A3 verzögert, aber unser Fahrer ist bereits unterwegs.',
        timestamp: '2024-02-01T10:18:00',
        isInternal: false
      },
      {
        id: 'tr003',
        author: 'Achim Schäflein',
        authorType: 'Support',
        message: 'Update: Fahrer ist wieder in Bewegung. Neue Ankunftszeit: 14:30 Uhr statt 12:30 Uhr. Entschuldigung für die Verzögerung!',
        timestamp: '2024-02-01T11:30:00',
        isInternal: false
      }
    ]
  },
  {
    id: 'st002',
    customerId: '2', // Audi AG
    customerUserId: 'cpu2',
    subject: 'Zugang zu Rechnungen für Q4 2023',
    description: 'Ich benötige Zugriff auf alle Rechnungen vom 4. Quartal 2023 für unsere Buchhaltung.',
    category: 'Billing',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'Sarah Weber',
    createdAt: '2024-01-30T14:20:00',
    updatedAt: '2024-01-30T16:45:00',
    responses: [
      {
        id: 'tr004',
        author: 'Sarah Klein',
        authorType: 'Customer',
        message: 'Hallo, ich brauche alle Rechnungen von Oktober bis Dezember 2023. Können Sie mir dabei helfen?',
        timestamp: '2024-01-30T14:20:00',
        isInternal: false
      },
      {
        id: 'tr005',
        author: 'Sarah Weber',
        authorType: 'Support',
        message: 'Hallo Frau Klein, gerne helfe ich Ihnen. Ich stelle die Rechnungen zusammen und sende Ihnen den Link zu.',
        timestamp: '2024-01-30T16:45:00',
        isInternal: false
      }
    ]
  }
];

export const mockAIChats: AIChat[] = [
  {
    id: 'aic001',
    customerId: '1', // BMW AG
    customerUserId: 'cpu1',
    status: 'resolved',
    createdAt: '2024-02-01T09:00:00',
    updatedAt: '2024-02-01T09:05:00',
    intent: 'shipment_tracking',
    confidence: 0.95,
    handedOffToHuman: false,
    messages: [
      {
        id: 'cm001',
        author: 'customer',
        message: 'Hallo, wo ist meine Sendung SCH240201001?',
        timestamp: '2024-02-01T09:00:00',
        type: 'text'
      },
      {
        id: 'cm002',
        author: 'ai',
        message: 'Hallo! Ihre Sendung SCH240201001 befindet sich aktuell im Röthlein Depot und wird heute um 14:30 Uhr in Dingolfing zugestellt. Möchten Sie eine Benachrichtigung erhalten?',
        timestamp: '2024-02-01T09:00:30',
        type: 'text'
      },
      {
        id: 'cm003',
        author: 'customer',
        message: 'Ja, bitte per SMS.',
        timestamp: '2024-02-01T09:01:00',
        type: 'text'
      },
      {
        id: 'cm004',
        author: 'ai',
        message: 'Perfekt! Sie erhalten eine SMS-Benachrichtigung sobald die Zustellung beginnt. Gibt es noch etwas, womit ich Ihnen helfen kann?',
        timestamp: '2024-02-01T09:01:15',
        type: 'text'
      }
    ]
  }
];

export const mockCustomerAnalytics: CustomerAnalytics[] = [
  {
    customerId: '1', // BMW AG
    period: 'monthly',
    shipments: {
      total: 247,
      onTime: 238,
      delayed: 8,
      cancelled: 1
    },
    revenue: {
      total: 245670,
      change: 12.8,
      trend: 'up'
    },
    satisfaction: {
      average: 4.7,
      responses: 23,
      nps: 8.4
    },
    portalUsage: {
      logins: 89,
      bookings: 34,
      downloads: 156,
      tickets: 3
    },
    topServices: [
      { service: 'Sprintbox', count: 89, revenue: 98560 },
      { service: 'Komplettladung', count: 67, revenue: 87340 },
      { service: 'Stückgut', count: 91, revenue: 59770 }
    ],
    topRoutes: [
      { origin: 'München', destination: 'Dingolfing', count: 67 },
      { origin: 'München', destination: 'Regensburg', count: 45 },
      { origin: 'Dingolfing', destination: 'Leipzig', count: 34 }
    ]
  },
  {
    customerId: '2', // Audi AG
    period: 'monthly',
    shipments: {
      total: 198,
      onTime: 189,
      delayed: 7,
      cancelled: 2
    },
    revenue: {
      total: 189450,
      change: 8.7,
      trend: 'up'
    },
    satisfaction: {
      average: 4.5,
      responses: 18,
      nps: 7.8
    },
    portalUsage: {
      logins: 67,
      bookings: 28,
      downloads: 123,
      tickets: 2
    },
    topServices: [
      { service: 'Komplettladung', count: 78, revenue: 89670 },
      { service: 'Stückgut', count: 87, revenue: 67890 },
      { service: 'Europa Express', count: 33, revenue: 31890 }
    ],
    topRoutes: [
      { origin: 'Ingolstadt', destination: 'Neckarsulm', count: 89 },
      { origin: 'Ingolstadt', destination: 'Brüssel', count: 23 },
      { origin: 'Neckarsulm', destination: 'Győr', count: 18 }
    ]
  }
]; 

// Neue Exports für Neukundengewinnungs-Features
export const mockLinkedInSocialSelling: LinkedInSocialSelling[] = [
  {
    id: 'li_001',
    prospectName: 'Dr. Andreas Müller',
    prospectCompany: 'Volkswagen AG',
    linkedInProfile: 'linkedin.com/in/andreas-mueller-vw',
    connectionStatus: 'Connected',
    lastAction: 'Sent personalized logistics insight article',
    nextAction: 'Follow up on cost optimization discussion',
    engagementScore: 85,
    messagesSent: 4,
    responseRate: 75,
    leadScore: 92,
    assignedTo: 'Joachim Schäflein',
    automationSequence: 'Automotive Executives - Premium',
    industryFocus: 'Automobilindustrie',
    connectionDate: '2024-01-15',
    firstResponseDate: '2024-01-17',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-30'
  },
  {
    id: 'li_002',
    prospectName: 'Sandra Weber',
    prospectCompany: 'Mercedes-Benz Group AG',
    linkedInProfile: 'linkedin.com/in/sandra-weber-mercedes',
    connectionStatus: 'Connection Sent',
    lastAction: 'Sent connection request with personalized note',
    nextAction: 'Wait for connection acceptance',
    engagementScore: 65,
    messagesSent: 1,
    responseRate: 0,
    leadScore: 78,
    assignedTo: 'Sarah Weber',
    automationSequence: 'Automotive Procurement - Standard',
    industryFocus: 'Automobilindustrie',
    createdAt: '2024-01-28',
    updatedAt: '2024-01-30'
  },
  {
    id: 'li_003',
    prospectName: 'Marcus Fischer',
    prospectCompany: 'BASF SE',
    linkedInProfile: 'linkedin.com/in/marcus-fischer-basf',
    connectionStatus: 'Followed Up',
    lastAction: 'Shared case study about chemical logistics',
    nextAction: 'Schedule demo call',
    engagementScore: 92,
    messagesSent: 6,
    responseRate: 83,
    leadScore: 89,
    assignedTo: 'Thomas Müller',
    automationSequence: 'Chemical Industry - Premium',
    industryFocus: 'Chemie',
    connectionDate: '2024-01-08',
    firstResponseDate: '2024-01-09',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-30'
  }
];

export const mockReferralProgram: ReferralProgram[] = [
  {
    id: 'ref_001',
    referrerType: 'Customer',
    referrerName: 'Dr. Klaus Weber',
    referrerEmail: 'logistik@bmw.de',
    referredCompany: 'MINI Cooper Works',
    referredContact: 'Julia Hartmann',
    referredEmail: 'j.hartmann@mini.com',
    referralValue: 850000,
    status: 'Qualifiziert',
    rewardType: 'Rabatt',
    rewardAmount: 5000,
    assignedTo: 'Joachim Schäflein',
    notes: 'BMW Logistikleiter empfiehlt uns für MINI Werk Oxford',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-30'
  },
  {
    id: 'ref_002',
    referrerType: 'Employee',
    referrerName: 'Thomas Müller',
    referrerEmail: 'thomas.mueller@schaeflein.com',
    referredCompany: 'MAN Truck & Bus',
    referredContact: 'Peter Schmidt',
    referredEmail: 'p.schmidt@man.eu',
    referralValue: 1200000,
    status: 'Kontaktiert',
    rewardType: 'Bonus',
    rewardAmount: 2000,
    assignedTo: 'Michael Schmidt',
    notes: 'Thomas kennt Peter aus vorheriger Position',
    createdAt: '2024-01-25',
    updatedAt: '2024-01-29'
  },
  {
    id: 'ref_003',
    referrerType: 'Partner',
    referrerName: 'Cargoline Netzwerk',
    referrerEmail: 'partner@cargoline.de',
    referredCompany: 'Continental AG',
    referredContact: 'Andrea Baum',
    referredEmail: 'a.baum@continental.com',
    referralValue: 2500000,
    status: 'Gewonnen',
    rewardType: 'Geld',
    rewardAmount: 10000,
    conversionDate: '2024-01-28',
    assignedTo: 'Sarah Weber',
    notes: 'Cargoline Partnerempfehlung - sehr erfolgreich',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-28'
  }
];

export const mockVideoPersonalization: VideoPersonalization[] = [
  {
    id: 'vid_001',
    recipientName: 'Dr. Andreas Müller',
    recipientCompany: 'Volkswagen AG',
    recipientEmail: 'a.mueller@volkswagen.de',
    videoType: 'Cold Outreach',
    videoUrl: '/videos/joachim-vw-intro.mp4',
    thumbnailUrl: '/thumbnails/joachim-vw-intro.jpg',
    duration: 90,
    viewCount: 3,
    watchTime: 270,
    clicked: true,
    responded: true,
    meetingBooked: true,
    dealClosed: false,
    createdBy: 'Joachim Schäflein',
    createdAt: '2024-01-15',
    lastViewed: '2024-01-16'
  },
  {
    id: 'vid_002',
    recipientName: 'Sandra Weber',
    recipientCompany: 'Mercedes-Benz Group AG',
    recipientEmail: 's.weber@mercedes-benz.com',
    videoType: 'Proposal',
    videoUrl: '/videos/sarah-mercedes-proposal.mp4',
    thumbnailUrl: '/thumbnails/sarah-mercedes-proposal.jpg',
    duration: 180,
    viewCount: 5,
    watchTime: 800,
    clicked: true,
    responded: true,
    meetingBooked: true,
    dealClosed: false,
    createdBy: 'Sarah Weber',
    createdAt: '2024-01-22',
    lastViewed: '2024-01-29'
  },
  {
    id: 'vid_003',
    recipientName: 'Marcus Fischer',
    recipientCompany: 'BASF SE',
    recipientEmail: 'm.fischer@basf.com',
    videoType: 'Demo',
    videoUrl: '/videos/thomas-basf-demo.mp4',
    thumbnailUrl: '/thumbnails/thomas-basf-demo.jpg',
    duration: 300,
    viewCount: 2,
    watchTime: 580,
    clicked: true,
    responded: false,
    meetingBooked: false,
    dealClosed: false,
    createdBy: 'Thomas Müller',
    createdAt: '2024-01-25',
    lastViewed: '2024-01-26'
  }
];

export const mockContentMarketing: ContentMarketing[] = [
  {
    id: 'content_001',
    title: 'Sprintbox-Service: 24h-Lieferung in ganz Deutschland',
    type: 'Blog Post',
    category: 'Sprintbox',
    status: 'Veröffentlicht',
    author: 'Joachim Schäflein',
    publishDate: '2024-01-15',
    content: 'Erfahren Sie, wie unser Sprintbox-Service Ihrem Unternehmen bei kritischen Lieferungen hilft...',
    seoKeywords: ['Sprintbox', 'Express-Lieferung', '24h-Service', 'Logistik'],
    viewCount: 2850,
    leadGenerated: 23,
    downloadCount: 0,
    socialShares: 45,
    linkedInShares: 18,
    engagementRate: 8.2,
    conversionRate: 0.8,
    targetAudience: ['Maschinenbau', 'Automobilindustrie'],
    cta: 'Jetzt Sprintbox-Service anfragen',
    ctaClicks: 127,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-15'
  },
  {
    id: 'content_002',
    title: 'Case Study: BMW Logistik-Optimierung',
    type: 'Case Study',
    category: 'Logistik',
    status: 'Veröffentlicht',
    author: 'Sarah Weber',
    publishDate: '2024-01-20',
    content: 'Wie Schäflein die BMW Supply Chain um 15% effizienter gemacht hat...',
    seoKeywords: ['BMW', 'Logistik-Optimierung', 'Supply Chain', 'Automotive'],
    viewCount: 1920,
    leadGenerated: 31,
    downloadCount: 156,
    socialShares: 67,
    linkedInShares: 34,
    engagementRate: 12.5,
    conversionRate: 1.6,
    targetAudience: ['Automobilindustrie', 'Großunternehmen'],
    cta: 'Kostenlose Beratung anfordern',
    ctaClicks: 98,
    createdAt: '2024-01-18',
    updatedAt: '2024-01-20'
  },
  {
    id: 'content_003',
    title: 'Webinar: Industriemontage 4.0',
    type: 'Webinar',
    category: 'Industriemontage',
    status: 'Veröffentlicht',
    author: 'Thomas Müller',
    publishDate: '2024-01-25',
    content: 'Live-Webinar über moderne Industriemontage-Verfahren...',
    seoKeywords: ['Industriemontage', 'Webinar', 'Industrie 4.0', 'Montage'],
    viewCount: 890,
    leadGenerated: 47,
    downloadCount: 234,
    socialShares: 123,
    linkedInShares: 89,
    engagementRate: 18.7,
    conversionRate: 5.3,
    targetAudience: ['Maschinenbau', 'Energietechnik'],
    cta: 'An Webinar teilnehmen',
    ctaClicks: 167,
    createdAt: '2024-01-22',
    updatedAt: '2024-01-25'
  }
];

export const mockEventMarketing: EventMarketing[] = [
  {
    id: 'event_001',
    eventName: 'LogiMAT 2024',
    eventType: 'Messe',
    date: '2024-03-19',
    location: 'Stuttgart Messe',
    budget: 45000,
    targetAttendees: 2500,
    actualAttendees: 2780,
    leadsGenerated: 187,
    qualifiedLeads: 89,
    meetings: 34,
    deals: 7,
    revenue: 1850000,
    roi: 4.1,
    followUpStatus: 'In Bearbeitung',
    assignedTo: ['Joachim Schäflein', 'Sarah Weber', 'Thomas Müller'],
    materials: ['Broschüren', 'Case Studies', 'Sprintbox-Demo', 'VR-Präsentation'],
    notes: 'Sehr erfolgreiche Messe - viele Automotive-Kontakte',
    createdAt: '2023-12-01',
    updatedAt: '2024-01-30'
  },
  {
    id: 'event_002',
    eventName: 'Schäflein Kunden-Workshop: Digitale Logistik',
    eventType: 'Workshop',
    date: '2024-02-15',
    location: 'Röthlein Hauptsitz',
    budget: 12000,
    targetAttendees: 50,
    actualAttendees: 47,
    leadsGenerated: 12,
    qualifiedLeads: 8,
    meetings: 8,
    deals: 3,
    revenue: 580000,
    roi: 4.8,
    followUpStatus: 'Abgeschlossen',
    assignedTo: ['Joachim Schäflein', 'Michael Schmidt'],
    materials: ['Digitalisierungs-Roadmap', 'Best Practices', 'Live-Demo'],
    notes: 'Exzellente Resonanz - Kunden wollen mehr Digitalisierung',
    createdAt: '2024-01-05',
    updatedAt: '2024-02-20'
  },
  {
    id: 'event_003',
    eventName: 'Transport & Logistik München 2024',
    eventType: 'Messe',
    date: '2024-06-04',
    location: 'München Messe',
    budget: 35000,
    targetAttendees: 1800,
    actualAttendees: 0,
    leadsGenerated: 0,
    qualifiedLeads: 0,
    meetings: 0,
    deals: 0,
    revenue: 0,
    roi: 0,
    followUpStatus: 'Nicht gestartet',
    assignedTo: ['Sarah Weber', 'Michael Schmidt'],
    materials: ['Neue Truck-Flotte', 'Österreich-Expansion', 'Green Logistics'],
    notes: 'Vorbereitung läuft - Fokus auf internationale Expansion',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-30'
  }
];

export const mockSalesEnablement: SalesEnablement[] = [
  {
    id: 'se_001',
    title: 'Sprintbox vs. DHL Express - Battle Card',
    type: 'Battle Card',
    category: 'Competitive',
    businessType: ['Sprintbox'],
    content: 'Vorteile: 24h in Deutschland, Kostenvorteil 15%, persönlicher Service...',
    usageCount: 23,
    effectiveness: 4.5,
    lastUsed: '2024-01-29',
    createdBy: 'Joachim Schäflein',
    updatedBy: 'Sarah Weber',
    version: 2,
    isActive: true,
    createdAt: '2023-11-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 'se_002',
    title: 'Automotive Logistik - Proposal Template',
    type: 'Proposal Template',
    category: 'Industry',
    businessType: ['Logistik', 'Spedition'],
    content: 'Standardvorlage für Automotive-Angebote mit JIT-Fokus...',
    usageCount: 45,
    effectiveness: 4.8,
    lastUsed: '2024-01-30',
    createdBy: 'Sarah Weber',
    updatedBy: 'Joachim Schäflein',
    version: 3,
    isActive: true,
    createdAt: '2023-09-10',
    updatedAt: '2024-01-15'
  },
  {
    id: 'se_003',
    title: 'Preiseinwände - Objection Handler',
    type: 'Objection Handler',
    category: 'Sales',
    businessType: ['Spedition', 'Logistik', 'Sprintbox'],
    content: 'Wie Sie Preiseinwände professionell behandeln: ROI-Rechnung, TCO, Value Proposition...',
    usageCount: 67,
    effectiveness: 4.2,
    lastUsed: '2024-01-28',
    createdBy: 'Thomas Müller',
    updatedBy: 'Michael Schmidt',
    version: 1,
    isActive: true,
    createdAt: '2023-12-05',
    updatedAt: '2024-01-10'
  }
];

export const mockIntentData: IntentData[] = [
  {
    id: 'intent_001',
    companyName: 'Porsche AG',
    website: 'porsche.com',
    industry: 'Automobilindustrie',
    employees: 35000,
    revenue: 33100000000,
    intentSignals: ['Logistics optimization', 'Supply chain digitalization', 'Transport management'],
    intentScore: 87,
    researchTopics: ['JIT delivery', 'Cost reduction', 'Green logistics'],
    competitorResearch: ['DHL', 'DB Schenker', 'Rhenus'],
    buyingStage: 'Consideration',
    timeline: 'Q2 2024',
    budget: '2-5M € jährlich',
    decisionMakers: ['Dr. Michael Steiner (Logistik)', 'Klaus Fischer (Procurement)'],
    dataSource: 'Bombora',
    lastUpdated: '2024-01-30',
    assignedTo: 'Joachim Schäflein',
    contacted: true,
    createdAt: '2024-01-28'
  },
  {
    id: 'intent_002',
    companyName: 'Bosch GmbH',
    website: 'bosch.com',
    industry: 'Technologie',
    employees: 421000,
    revenue: 88200000000,
    intentSignals: ['Express delivery', 'Emergency logistics', '24h service'],
    intentScore: 92,
    researchTopics: ['Sprintbox service', 'Same-day delivery', 'Critical parts logistics'],
    competitorResearch: ['UPS', 'FedEx', 'TNT'],
    buyingStage: 'Decision',
    timeline: 'Q1 2024',
    budget: '500k-1M € jährlich',
    decisionMakers: ['Andrea Schmidt (Supply Chain)', 'Hans Weber (Operations)'],
    dataSource: 'ZoomInfo',
    lastUpdated: '2024-01-29',
    assignedTo: 'Michael Schmidt',
    contacted: false,
    createdAt: '2024-01-29'
  }
];



// Erweitere bestehende Sales Analytics
export const mockSalesAnalytics: SalesAnalyticsExtended[] = [
  {
    id: '1',
    period: 'Januar 2024',
    newLeads: 127,
    qualifiedLeads: 45,
    conversions: 12,
    revenue: 2800000,
    averageDealSize: 233333,
    salesCycleLength: 45,
    winRate: 26.7,
    pipelineValue: 12500000,
    forecasting: {
      nextMonth: 3200000,
      nextQuarter: 8500000,
      nextYear: 35000000
    },
    topPerformers: ['Joachim Schäflein', 'Sarah Weber', 'Thomas Müller'],
    lostDealReasons: [
      'Preis zu hoch (35%)',
      'Timing nicht passend (25%)',
      'Fehlende Referenzen (20%)',
      'Konkurrenz ausgewählt (20%)'
    ],
    marketTrends: [
      'Verstärkter Fokus auf Nachhaltigkeit',
      'Digitalisierung der Supply Chain',
      'Nearshoring-Trend aus Asien',
      'E-Mobility Logistik wächst stark'
    ],
    competitiveWins: 8,
    competitiveLosses: 4,
    socialSellingMetrics: {
      linkedInConnections: 89,
      socialEngagement: 156,
      socialLeads: 23,
      socialConversions: 7
    },
    contentMarketingMetrics: {
      contentViews: 5660,
      contentLeads: 101,
      contentConversions: 12,
      topPerformingContent: ['BMW Case Study', 'Sprintbox Blog Post', 'Industriemontage Webinar']
    },
    videoMetrics: {
      videosCreated: 15,
      videoViews: 234,
      videoResponseRate: 68,
      meetingsFromVideos: 8
    },
    referralMetrics: {
      referralsReceived: 12,
      referralConversions: 4,
      referralRevenue: 850000,
      topReferrers: ['BMW AG', 'Cargoline Partner', 'Thomas Müller']
    }
  }
]; 

// Customer Management Suite Mock Data
export const mockCustomerHealthScores: CustomerHealthScore[] = [
  {
    id: '1',
    customerId: '1',
    overallScore: 85,
    riskLevel: 'Low',
    factors: {
      engagementScore: 92,
      paymentHistory: 95,
      supportTickets: 78,
      lastActivity: 88,
      contractUtilization: 82
    },
    trendDirection: 'up',
    lastUpdated: '2024-01-15',
    recommendations: [
      'Regelmäßige Check-ins mit Hauptansprechpartner',
      'Neue Sprintbox-Services präsentieren',
      'Quarterly Business Review planen'
    ]
  },
  {
    id: '2',
    customerId: '2',
    overallScore: 65,
    riskLevel: 'Medium',
    factors: {
      engagementScore: 58,
      paymentHistory: 85,
      supportTickets: 45,
      lastActivity: 72,
      contractUtilization: 65
    },
    trendDirection: 'down',
    lastUpdated: '2024-01-15',
    recommendations: [
      'Sofortiger Kundentermin vereinbaren',
      'Support-Probleme prioritär lösen',
      'Zusätzliche Services anbieten'
    ]
  },
  {
    id: '3',
    customerId: '3',
    overallScore: 35,
    riskLevel: 'Critical',
    factors: {
      engagementScore: 25,
      paymentHistory: 45,
      supportTickets: 30,
      lastActivity: 15,
      contractUtilization: 35
    },
    trendDirection: 'down',
    lastUpdated: '2024-01-15',
    recommendations: [
      'URGENT: Executive Escalation erforderlich',
      'Win-Back Kampagne starten',
      'Persönliches Meeting mit Geschäftsführung'
    ]
  }
]

export const mockCustomerLifetimeValues: CustomerLifetimeValue[] = [
  {
    id: '1',
    customerId: '1',
    currentCLV: 4200000,
    predictedCLV: 5800000,
    acquisitionCost: 45000,
    totalRevenue: 3800000,
    averageOrderValue: 85000,
    purchaseFrequency: 12,
    customerLifespan: 7.2,
    profitMargin: 0.32,
    growthRate: 0.18
  },
  {
    id: '2',
    customerId: '2',
    currentCLV: 2800000,
    predictedCLV: 3200000,
    acquisitionCost: 32000,
    totalRevenue: 2400000,
    averageOrderValue: 65000,
    purchaseFrequency: 8,
    customerLifespan: 5.8,
    profitMargin: 0.28,
    growthRate: 0.08
  },
  {
    id: '3',
    customerId: '3',
    currentCLV: 1200000,
    predictedCLV: 800000,
    acquisitionCost: 28000,
    totalRevenue: 980000,
    averageOrderValue: 35000,
    purchaseFrequency: 4,
    customerLifespan: 3.2,
    profitMargin: 0.22,
    growthRate: -0.12
  }
]

export const mockUpsellOpportunities: UpsellOpportunity[] = [
  {
    id: '1',
    customerId: '1',
    type: 'Upsell',
    productService: 'Premium Sprintbox Express',
    currentSpend: 850000,
    potentialRevenue: 320000,
    probability: 85,
    timeframe: 'Q2 2024',
    reasoning: 'Kunde nutzt bereits Standard Express, hohes Volumen',
    status: 'Proposed',
    assignedTo: 'Sarah Klein',
    nextAction: 'Demo-Termin vereinbaren',
    dueDate: '2024-02-01'
  },
  {
    id: '2',
    customerId: '1',
    type: 'Cross-sell',
    productService: 'Industriemontage Plus',
    currentSpend: 850000,
    potentialRevenue: 180000,
    probability: 65,
    timeframe: 'Q3 2024',
    reasoning: 'Expansion in neue Produktionsstätten',
    status: 'Identified',
    assignedTo: 'Thomas Wagner',
    nextAction: 'Bedarfsanalyse durchführen',
    dueDate: '2024-02-15'
  },
  {
    id: '3',
    customerId: '2',
    type: 'Expansion',
    productService: 'Auslandslogistik Osteuropa',
    currentSpend: 650000,
    potentialRevenue: 420000,
    probability: 75,
    timeframe: 'Q1 2024',
    reasoning: 'Geschäftserweiterung nach Polen geplant',
    status: 'Negotiating',
    assignedTo: 'Michael Schmidt',
    nextAction: 'Vertragsverhandlungen',
    dueDate: '2024-01-25'
  }
]

export const mockAccountRelationships: AccountRelationship[] = [
  {
    id: '1',
    customerId: '1',
    stakeholders: [
      {
        name: 'Dr. Andreas Müller',
        role: 'Geschäftsführer',
        influence: 'High',
        relationship: 'Champion',
        lastContact: '2024-01-10',
        nextAction: 'Quarterly Review präsentieren'
      },
      {
        name: 'Petra Schneider',
        role: 'Logistikleitung',
        influence: 'High',
        relationship: 'Supporter',
        lastContact: '2024-01-12',
        nextAction: 'Neue Services vorstellen'
      },
      {
        name: 'Frank Weber',
        role: 'Einkaufsleitung',
        influence: 'Medium',
        relationship: 'Neutral',
        lastContact: '2024-01-08',
        nextAction: 'Kostenoptimierungen diskutieren'
      }
    ],
    decisionMakers: ['Dr. Andreas Müller', 'Petra Schneider'],
    champions: ['Dr. Andreas Müller'],
    contracts: [
      {
        name: 'Hauptvertrag Logistik',
        value: 2400000,
        startDate: '2023-01-01',
        endDate: '2024-12-31',
        renewalRisk: 'Low'
      },
      {
        name: 'Sprintbox Express',
        value: 680000,
        startDate: '2023-06-01',
        endDate: '2024-05-31',
        renewalRisk: 'Low'
      }
    ]
  }
]

export const mockCustomerSuccessMetrics: CustomerSuccessMetrics[] = [
  {
    id: '1',
    customerId: '1',
    onboardingProgress: 100,
    timeToValue: 45,
    adoptionRate: 88,
    featureUsage: {
      'Tracking Portal': 95,
      'Sprintbox Express': 82,
      'API Integration': 75,
      'Analytics Dashboard': 68
    },
    supportSatisfaction: 4.6,
    npsScore: 9,
    renewalProbability: 92,
    expansionPotential: 78,
    milestones: [
      {
        name: 'Onboarding abgeschlossen',
        completed: true,
        dueDate: '2023-02-15',
        impact: 'Basis für alle weiteren Services'
      },
      {
        name: 'API Integration live',
        completed: true,
        dueDate: '2023-03-30',
        impact: 'Automatisierte Prozesse aktiv'
      },
      {
        name: 'Quarterly Review',
        completed: false,
        dueDate: '2024-02-01',
        impact: 'Strategische Weiterentwicklung'
      }
    ]
  }
]

export const mockWinBackCampaigns: WinBackCampaign[] = [
  {
    id: '1',
    name: 'Reaktivierung Inaktive Premium-Kunden',
    targetSegment: 'Inaktive Premium-Kunden (>90 Tage)',
    status: 'Active',
    targetCustomers: ['3', '7', '11', '15'],
    touchpoints: ['Email', 'Telefon', 'LinkedIn', 'Persönlicher Besuch'],
    offerType: '20% Rabatt + kostenlose Beratung',
    budget: 25000,
    spent: 12800,
    results: {
      contacted: 12,
      responded: 7,
      reactivated: 3,
      revenue: 180000
    },
    roi: 7.2,
    nextAction: 'Follow-up Termine vereinbaren'
  },
  {
    id: '2',
    name: 'Sprintbox Comeback-Aktion',
    targetSegment: 'Ehemalige Sprintbox-Kunden',
    status: 'Planning',
    targetCustomers: ['5', '9', '13'],
    touchpoints: ['Email', 'Webinar', 'Demo-Angebot'],
    offerType: 'Kostenloser Testmonat + Setup',
    budget: 15000,
    spent: 0,
    results: {
      contacted: 0,
      responded: 0,
      reactivated: 0,
      revenue: 0
    },
    roi: 0,
    nextAction: 'Kampagne starten'
  }
]

export const mockCustomerSegments: CustomerSegment[] = [
  {
    id: '1',
    name: 'VIP Champions',
    description: 'Unsere wertvollsten Kunden mit höchstem CLV',
    criteria: [
      { field: 'totalRevenue', operator: 'greater_than', value: '1000000' },
      { field: 'tier', operator: 'equals', value: 'Platinum' },
      { field: 'healthScore', operator: 'greater_than', value: '80' }
    ],
    customerCount: 8,
    averageRevenue: 2800000,
    churnRate: 0.05,
    growthRate: 0.22,
    color: '#8B5CF6',
    campaigns: ['VIP-Events', 'Exklusive Services', 'Early Access']
  },
  {
    id: '2',
    name: 'Expansion Ready',
    description: 'Kunden mit hohem Upsell-Potenzial',
    criteria: [
      { field: 'adoptionRate', operator: 'greater_than', value: '70' },
      { field: 'contractUtilization', operator: 'less_than', value: '80' },
      { field: 'growthRate', operator: 'greater_than', value: '0.1' }
    ],
    customerCount: 23,
    averageRevenue: 850000,
    churnRate: 0.08,
    growthRate: 0.18,
    color: '#10B981',
    campaigns: ['Upsell-Opportunities', 'Cross-Sell', 'Expansion Pakete']
  },
  {
    id: '3',
    name: 'At Risk',
    description: 'Kunden mit erhöhtem Churn-Risiko',
    criteria: [
      { field: 'healthScore', operator: 'less_than', value: '60' },
      { field: 'lastActivity', operator: 'less_than', value: '30' },
      { field: 'supportTickets', operator: 'greater_than', value: '5' }
    ],
    customerCount: 12,
    averageRevenue: 420000,
    churnRate: 0.35,
    growthRate: -0.08,
    color: '#EF4444',
    campaigns: ['Win-Back', 'Support Intensiv', 'Retention Offers']
  }
]

export const mockLoyaltyPrograms: LoyaltyProgram[] = [
  {
    id: '1',
    customerId: '1',
    tier: 'Platinum',
    points: 24500,
    tierProgress: 85,
    benefits: [
      'Exklusiver Account Manager',
      'Priorität Support',
      '15% Rabatt auf neue Services',
      'Exklusive VIP-Events',
      'Kostenlose Beratungen'
    ],
    rewardsEarned: 45000,
    rewardsRedeemed: 32000,
    joinDate: '2022-03-15',
    lastActivity: '2024-01-14',
    referrals: 3,
    satisfactionScore: 9.2
  },
  {
    id: '2',
    customerId: '2',
    tier: 'Gold',
    points: 12800,
    tierProgress: 64,
    benefits: [
      'Dedicated Support Line',
      '10% Rabatt auf Zusatzservices',
      'Quarterly Reviews',
      'Bevorzugte Terminierung'
    ],
    rewardsEarned: 28000,
    rewardsRedeemed: 18500,
    joinDate: '2022-08-10',
    lastActivity: '2024-01-12',
    referrals: 1,
    satisfactionScore: 7.8
  },
  {
    id: '3',
    customerId: '3',
    tier: 'Silver',
    points: 4200,
    tierProgress: 28,
    benefits: [
      'Standard Support',
      '5% Rabatt bei Jahresverträgen',
      'Newsletter & Updates'
    ],
    rewardsEarned: 8500,
    rewardsRedeemed: 3200,
    joinDate: '2023-02-20',
    lastActivity: '2023-12-08',
    referrals: 0,
    satisfactionScore: 6.2
  }
]