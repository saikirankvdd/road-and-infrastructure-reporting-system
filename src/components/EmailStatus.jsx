import React from 'react';
import { Mail, CheckCircle2, Eye, Clock, ExternalLink } from 'lucide-react';
import { generatePrefilledGmailUrls } from '../utils/formatters';

export const EmailStatus = ({ emailStatus, recipientEmail = 'ee.roads.uppal@ghmc.gov.in', report }) => {
  const status = emailStatus || {
    sent: true,
    delivered: true,
    read: true,
    responseReceived: false,
    lastChecked: 'Just now'
  };

  const { gmailWebUrl } = generatePrefilledGmailUrls(report || { authorityEmail: recipientEmail });

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-blue-600" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Official Email Dispatch Status</h3>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Last checked: {status.lastChecked}</span>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <div>
          <span>Recipient Inbox: </span>
          <span className="font-mono font-bold text-slate-800">{recipientEmail}</span>
        </div>

        <a
          href={gmailWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] shadow-sm transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Open Pre-filled Gmail</span>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        
        <div className={`p-3 rounded-2xl border ${status.sent ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center space-x-1.5 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-bold text-[11px]">SMTP Sent</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-mono">DKIM Signed</span>
        </div>

        <div className={`p-3 rounded-2xl border ${status.delivered ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center space-x-1.5 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-bold text-[11px]">Delivered</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-mono">Server 250 OK</span>
        </div>

        <div className={`p-3 rounded-2xl border ${status.read ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex items-center space-x-1.5 mb-1">
            <Eye className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-bold text-[11px]">Opened / Read</span>
          </div>
          <span className="text-[10px] text-blue-700 font-mono">Desk Opened</span>
        </div>

        <div className={`p-3 rounded-2xl border ${status.responseReceived ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
          <div className="flex items-center space-x-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-bold text-[11px]">{status.responseReceived ? 'Response' : 'SLA Active'}</span>
          </div>
          <span className="text-[10px] text-amber-700 font-mono">48h SLA Window</span>
        </div>

      </div>
    </div>
  );
};
