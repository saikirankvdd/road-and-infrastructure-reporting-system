export const getSeverityBadgeStyle = (severity) => {
  switch ((severity || '').toLowerCase()) {
    case 'critical':
      return 'bg-red-100 text-red-700 border-red-200 ring-red-500/20';
    case 'high':
      return 'bg-amber-100 text-amber-800 border-amber-200 ring-amber-500/20';
    case 'medium':
      return 'bg-blue-100 text-blue-700 border-blue-200 ring-blue-500/20';
    case 'low':
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200 ring-slate-500/20';
  }
};

export const getStatusBadgeStyle = (status) => {
  switch ((status || '').toLowerCase()) {
    case 'resolved':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'under investigation':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'awaiting response':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'sent':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

export const formatDate = (dateStr) => {
  if (!dateStr) return 'Just now';
  return dateStr;
};

export const generatePrefilledGmailUrls = (report) => {
  const reportId = report?.id || report?.reportId || 'RW-2026-001284';
  const title = report?.title || 'Road Infrastructure Hazard Report';
  const authorityEmail = report?.authorityEmail || 'ee.roads.uppal@ghmc.gov.in';
  const authority = report?.authority || 'GHMC Roads Department';
  const locationText = report?.location || report?.locationText || 'Uppal - Narapally Road (NH 163 Warangal Highway)';
  const category = report?.category || 'Potholes / Surface Damage';
  const severity = report?.severity || 'High';
  const description = report?.description || 'Asphalt surface damage & severe pothole hazard.';
  const lat = report?.lat || report?.coords?.lat || 17.4125;
  const lng = report?.lng || report?.coords?.lng || 78.6015;
  const reporterName = report?.citizenName || report?.user?.name || 'Verified Citizen Reporter';
  const reporterEmail = report?.citizenEmail || report?.user?.email || 'saikirankvdd06@gmail.com';

  const subject = `[ROADWATCH CIVIC DOCKET #${reportId}] ${title}`;

  const bodyText = `OFFICIAL CIVIC ROAD INFRASTRUCTURE COMPLAINT
Docket ID: #${reportId}
Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
Target Municipal Authority: ${authority} (${authorityEmail})

--------------------------------------------------
1. INCIDENT & LOCATION DETAILS
--------------------------------------------------
Category: ${category}
Severity Level: ${severity}
Location Address: ${locationText}
GPS Coordinates: ${lat}, ${lng}
Google Maps Pin: https://maps.google.com/?q=${lat},${lng}

--------------------------------------------------
2. CITIZEN PROBLEM STATEMENT & EVIDENCE
--------------------------------------------------
${description}

--------------------------------------------------
3. AI HAZARD & SAFETY RISK ASSESSMENT
--------------------------------------------------
• High vulnerability for two-wheelers, skidding & wheel entrapment hazard.
• Highway shoulder bottleneck & sudden vehicular swerving risk.
• Immediate municipal patch work & resurfacing required within 48h SLA window.

--------------------------------------------------
4. RECIPIENT RESPONSIBLE AUTHORITY
--------------------------------------------------
Department: ${authority}
Verified Email Inbox: ${authorityEmail}

--------------------------------------------------
SUBMITTED VIA ROADWATCH CITIZEN SAFETY SYSTEM
Reporter Name: ${reporterName}
Reporter Email: ${reporterEmail}
SLA Reference: 48-Hour Municipal Accountability Window
`;

  const encodedTo = encodeURIComponent(authorityEmail);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(bodyText);

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
  const mailtoUrl = `mailto:${encodedTo}?subject=${encodedSubject}&body=${encodedBody}`;

  return { gmailWebUrl, mailtoUrl, subject, bodyText };
};
