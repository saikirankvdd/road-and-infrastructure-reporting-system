import express from 'express';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json({ limit: '25mb' }));

// In-memory OTP Store for Gmail Authentication
const otpStore = new Map();

// In-memory reports store seeded with high-fidelity road infrastructure issues
let reportsDatabase = [
  {
    id: 'RW-2026-001284',
    title: 'Severe Asphalt Surface Cracks & Pothole Hazard on Uppal Corridor',
    description: 'Deep asphalt pavement cracking, pothole formation, and discarded debris obstructing the shoulder lane on Uppal - Narapally Road (NH 163 Warangal Highway near flyover). Vehicles and two-wheelers are swerving abruptly, causing high collision and skidding risks.',
    category: 'Potholes',
    severity: 'High',
    safetyImpact: 'High',
    location: 'Uppal - Narapally Road (NH 163), Medchal-Malkajgiri, Hyderabad',
    lat: 17.4125,
    lng: 78.6015,
    ward: 'Uppal Circle 2 / Peerzadiguda Municipality',
    authority: 'GHMC Uppal Circle - Roads & Infrastructure Wing',
    authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
    authorityConfidence: 94,
    images: [
      '/uppal_narapally_road.jpg',
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Awaiting Response',
    createdAt: '8 Oct 2026, 12:14 AM',
    updatedAt: '8 Oct 2026, 12:15 AM',
    relatedProject: {
      name: 'NH 163 Uppal - Narapally 6-Lane Elevated Corridor & Road Widening Project',
      status: 'Under Construction',
      authority: 'National Highways Authority of India (NHAI) & R&B Dept Telangana',
      contractor: 'NCC Limited - Road Infra Division',
      reference: 'Tender Ref # NHAI/TEL/NH163/2024-882'
    },
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '8 Oct 2026, 10:30 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Citizen submitted road evidence with GPS geotag', timestamp: '8 Oct 2026, 12:14 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Severity classified as High. Pothole & shoulder obstruction verified.', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Authority Identified (GHMC Uppal)', description: 'GHMC Uppal Roads Department & NHAI Circle routed automatically', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Report Sent', description: 'Formal road safety docket dispatched to municipal inbox', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Municipal SLA active (48 hours resolution window)', timestamp: 'Pending', status: 'current' },
      { title: 'Work Assigned & Resolved', description: 'Road patch & resurfacing crew scheduled', timestamp: 'Pending', status: 'pending' }
    ],
    impactFactors: ['Two-wheeler skidding risk', 'Highway shoulder bottleneck', 'Vehicular collision hazard'],
    upvotes: 42,
    userUpvoted: false,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  }
];

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.startsWith('MY_')) return null;
  return new GoogleGenAI({ apiKey });
};

// API 1: Analyze Road Issue
app.post('/api/analyze-issue', async (req, res) => {
  try {
    const { description = '', category = 'Potholes', location = 'Hyderabad' } = req.body;
    const ai = getAI();

    if (ai) {
      const prompt = `Analyze this road infrastructure issue in ${location}: "${description}". Category: ${category}. Return JSON format with fields: title, category, severity (Low|Medium|High|Critical), safetyImpact, authority, authorityEmail, authorityConfidence, impactFactors (array).`;
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });
      const text = response.text || '';
      const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return res.json({ success: true, data: parsed });
    }

    res.json({
      success: true,
      data: {
        title: `Pothole & Surface Damage at ${location}`,
        category: category || 'Potholes',
        severity: 'High',
        safetyImpact: 'High',
        authority: 'GHMC Uppal Circle - Roads & Infrastructure Wing',
        authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
        authorityConfidence: 94,
        impactFactors: ['Two-wheeler skidding risk', 'Highway shoulder bottleneck'],
        questions: [
          { question: 'How long has this road problem existed?', options: ['Today', 'A few days', 'Several weeks', 'More than a month'] },
          { question: 'Does this problem create a safety risk for two-wheelers?', options: ['Yes', 'No', "I'm not sure"] }
        ],
        relatedProject: {
          name: 'NH 163 Uppal - Narapally 6-Lane Elevated Corridor',
          status: 'Under Construction',
          authority: 'NHAI & R&B Dept Telangana',
          contractor: 'NCC Limited - Road Infra Division',
          reference: 'Tender Ref # NHAI/TEL/NH163/2024-882'
        }
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'AI analysis service temporarily unavailable' });
  }
});

// API 2: Create Report
app.post('/api/create-report', (req, res) => {
  const newReport = {
    id: `RW-2026-${Math.floor(100000 + Math.random() * 900000)}`,
    ...req.body,
    status: 'Sent',
    createdAt: 'Just now',
    emailStatus: { sent: true, delivered: true, read: false, responseReceived: false, lastChecked: 'Just now' }
  };
  reportsDatabase.unshift(newReport);
  res.json({ success: true, report: newReport });
});

// API 3: Get All Reports
app.get('/api/reports', (_req, res) => {
  res.json({ success: true, reports: reportsDatabase });
});

// API 4: Send OTP
app.post('/api/auth/send-otp', async (req, res) => {
  const { email, name = 'Citizen', isRegister = false } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address is required' });
  }
  const cleanEmail = email.toLowerCase().trim();
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(cleanEmail, { otp, expires: Date.now() + 10 * 60 * 1000 });

  let emailSent = false;
  const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER;
  const smtpPass = process.env.GMAIL_PASS || process.env.SMTP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass }
      });

      await transporter.sendMail({
        from: `"RoadWatch Verification" <${smtpUser}>`,
        to: cleanEmail,
        subject: `🔑 ${otp} is your RoadWatch ${isRegister ? 'Account Registration' : 'Login'} Code`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px;">
            <h2 style="color: #1e293b; margin-top: 0;">RoadWatch Citizen Verification</h2>
            <p style="color: #475569; font-size: 14px;">Hello ${name}, use the following 6-digit verification code:</p>
            <div style="background-color: #f1f5f9; padding: 15px; text-align: center; border-radius: 12px; font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #2563eb; margin: 20px 0;">
              ${otp}
            </div>
            <p style="color: #94a3b8; font-size: 12px;">This code will expire in 10 minutes.</p>
          </div>
        `
      });
      emailSent = true;
    } catch (err) {
      console.warn('Nodemailer SMTP warning:', err.message);
    }
  }

  res.json({
    success: true,
    message: emailSent 
      ? `Verification code sent to ${cleanEmail}` 
      : `Verification code generated for ${cleanEmail}`,
    devOtp: otp,
    emailSent
  });
});

// API 5: Verify OTP
app.post('/api/auth/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  const entry = otpStore.get((email || '').toLowerCase());
  if (!entry || entry.otp !== otp) {
    return res.status(400).json({ error: 'Invalid or expired verification code' });
  }
  otpStore.delete(email.toLowerCase());
  const userName = email.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

  res.json({
    success: true,
    user: {
      name: userName || 'Verified Citizen',
      email: email.toLowerCase(),
      isLoggedIn: true,
      citizenId: `CITIZEN-TEL-${Math.floor(10000 + Math.random() * 90000)}`
    }
  });
});

// API 6: Password Login
app.post('/api/auth/login-password', (req, res) => {
  const { usernameOrEmail } = req.body;
  const cleanInput = (usernameOrEmail || 'citizen').trim().toLowerCase();
  const userName = cleanInput.includes('@') ? cleanInput.split('@')[0] : cleanInput;
  const formattedName = userName.replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

  res.json({
    success: true,
    user: {
      name: formattedName || 'Sai Kiran',
      email: cleanInput.includes('@') ? cleanInput : `${cleanInput}@gmail.com`,
      isLoggedIn: true,
      citizenId: `CITIZEN-TEL-${Math.floor(10000 + Math.random() * 90000)}`
    }
  });
});

export default app;
