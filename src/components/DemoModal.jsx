import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, User, Briefcase, FileText, Send } from 'lucide-react';
import trinityLogo from '../assets/trinity-logo.png';
import { sendFormViaEmailJS } from '../services/emailjsService';

export default function DemoModal({ isOpen, onClose, preselectedProduct = "The Cosmos Platform" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    product: preselectedProduct,
    useCase: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        product: preselectedProduct
      }));
    }
  }, [preselectedProduct, isOpen]);

  if (!isOpen) return null;

  const mailtoUrl = `mailto:jahangirxl@gmail.com?subject=${encodeURIComponent(
    `[Executive Demo Request] ${formData.product || 'The Cosmos Platform'} - ${formData.fullName || 'Counsel'}`
  )}&body=${encodeURIComponent(
    `TRINITY AI BOSTON - EXECUTIVE PRODUCT DEMO REQUEST\n` +
    `--------------------------------------------------\n` +
    `Full Name: ${formData.fullName}\n` +
    `Work Email: ${formData.email}\n` +
    `Organization / Law Firm: ${formData.organization}\n` +
    `Professional Role: ${formData.role || 'Not specified'}\n` +
    `Platform of Interest: ${formData.product}\n` +
    `Use Case Overview: ${formData.useCase || 'N/A'}\n\n` +
    `Submission Date: ${new Date().toLocaleString()}\n` +
    `Target Recipient: jahangirxl@gmail.com`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orgText = formData.organization ? ` (${formData.organization})` : '';
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      workEmail: formData.email,
      organization: formData.organization,
      role: formData.role || 'Not specified',
      product: formData.product,
      platformOfInterest: formData.product,
      useCase: formData.useCase || 'N/A',
      subject: `[Demo Lead: ${formData.fullName}${orgText}] ${formData.product}`
    };

    await sendFormViaEmailJS('Executive Product Demo Request', payload);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-trinity-hero/80 backdrop-blur-md transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-trinity-border overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-trinity-hero via-[#0c182c] to-trinity-hero px-6 py-6 text-white border-b border-white/10 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={trinityLogo} 
              alt="Trinity AI Boston" 
              className="h-9 w-auto object-contain"
            />
            <div>
              <div className="text-xs font-semibold tracking-wider text-trinity-lightBlue uppercase">
                Enterprise Briefing
              </div>
              <h2 id="demo-modal-title" className="text-xl font-bold font-display text-white">
                Request an Executive Product Demo
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-blue"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold font-display text-trinity-ink mb-2">
                Executive Briefing Requested
              </h3>
              <p className="text-trinity-slate text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-trinity-ink">{formData.fullName || "Counsel"}</span>. Our enterprise solutions partner for <span className="font-semibold text-trinity-blue">{formData.product}</span> will review your matter profile and contact you at <span className="font-semibold text-trinity-ink">{formData.email}</span> within 4 business hours to schedule a confidential technical walkthrough.
              </p>
              
              <div className="bg-trinity-canvas border border-trinity-border rounded-xl p-4 text-left text-xs text-trinity-slate space-y-2 mb-6">
                <div className="flex items-center gap-2 text-trinity-ink font-semibold">
                  <ShieldCheck className="w-4 h-4 text-trinity-blue" />
                  <span>Confidentiality & Direct Routing</span>
                </div>
                <p>
                  Your inquiry has been logged and forwarded directly to <strong>jahangirxl@gmail.com</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-trinity-blue hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send direct copy via Email / Gmail client →</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={mailtoUrl}
                  className="btn-primary flex-1 py-2.5 px-4 text-center inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-trinity-slate mb-4">
                Schedule a confidential, data-driven walkthrough of the Cosmos platform and its practice lines tailored to your firm’s active litigation portfolio or exposure profile.
              </p>

              <div>
                <label className="block text-xs font-semibold text-trinity-ink mb-1.5" htmlFor="fullName">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-trinity-muted absolute left-3 top-3" />
                  <input
                    id="fullName"
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins, Esq."
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-trinity-border rounded-lg text-trinity-ink placeholder:text-trinity-muted focus:border-trinity-blue focus:ring-1 focus:ring-trinity-blue outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-trinity-ink mb-1.5" htmlFor="email">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-trinity-muted absolute left-3 top-3" />
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="sjenkins@lawfirm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-trinity-border rounded-lg text-trinity-ink placeholder:text-trinity-muted focus:border-trinity-blue focus:ring-1 focus:ring-trinity-blue outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-trinity-ink mb-1.5" htmlFor="organization">
                    Organization / Law Firm <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-trinity-muted absolute left-3 top-3" />
                    <input
                      id="organization"
                      required
                      type="text"
                      placeholder="e.g. Jenkins & Associates LLP"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-trinity-border rounded-lg text-trinity-ink placeholder:text-trinity-muted focus:border-trinity-blue focus:ring-1 focus:ring-trinity-blue outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-trinity-ink mb-1.5" htmlFor="role">
                    Professional Role
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-trinity-muted absolute left-3 top-3" />
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-trinity-border rounded-lg text-trinity-ink focus:border-trinity-blue focus:ring-1 focus:ring-trinity-blue outline-none transition"
                    >
                      <option value="">Select your role</option>
                      <option value="Managing / Senior Partner">Managing / Senior Partner</option>
                      <option value="Litigation Counsel">Litigation Counsel</option>
                      <option value="Claims Director / Adjuster">Claims Director / Adjuster</option>
                      <option value="General Counsel / Legal Ops">General Counsel / Legal Ops</option>
                      <option value="Forensic Expert / Engineer">Forensic Expert / Engineer</option>
                      <option value="Risk & Compliance Officer">Risk & Compliance Officer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-trinity-ink mb-1.5" htmlFor="product">
                    Platform of Interest <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-trinity-muted absolute left-3 top-3" />
                    <select
                      id="product"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-trinity-border rounded-lg text-trinity-ink focus:border-trinity-blue focus:ring-1 focus:ring-trinity-blue outline-none transition font-medium text-trinity-blue"
                    >
                      {formData.product && ![
                        "The Cosmos Platform",
                        "CosmosOne™ (First-Party Property)",
                        "CosmosNexus™ (Construction Defect)",
                        "CosmosHelios™ (Intake & Conflicts)",
                        "Cosmos Helix™ (Nursing Home & Medical)",
                        "Cosmos Gravity™ (Audit & Compliance)"
                      ].includes(formData.product) && (
                        <option value={formData.product}>{formData.product}</option>
                      )}
                      <option value="The Cosmos Platform">The Cosmos Platform (Enterprise Overview)</option>
                      <option value="CosmosOne™ (First-Party Property)">CosmosOne™ (First-Party Property)</option>
                      <option value="CosmosNexus™ (Construction Defect)">CosmosNexus™ (Construction Defect)</option>
                      <option value="CosmosHelios™ (Intake & Conflicts)">CosmosHelios™ (Intake & Conflicts)</option>
                      <option value="Cosmos Helix™ (Nursing Home & Medical)">Cosmos Helix™ (Nursing Home & Medical)</option>
                      <option value="Cosmos Gravity™ (Audit & Compliance)">Cosmos Gravity™ (Audit & Compliance)</option>
                      <option value="Executive Briefing">Executive Briefing / Platform Overview</option>
                      <option value="General Inquiry">General Enterprise Inquiry</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-trinity-ink mb-1.5" htmlFor="useCase">
                  Brief Overview of High-Stakes Use Case (Optional)
                </label>
                <textarea
                  id="useCase"
                  rows="3"
                  placeholder="e.g. Active multi-party construction defect litigation with 15+ subcontractors, or large carrier exposure review..."
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  className="w-full p-3 text-sm bg-white border border-trinity-border rounded-lg text-trinity-ink placeholder:text-trinity-muted focus:border-trinity-blue focus:ring-1 focus:ring-trinity-blue outline-none transition"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[11px] text-trinity-muted">
                  <ShieldCheck className="w-4 h-4 text-trinity-blue shrink-0" />
                  <span>Single-tenant security • Zero data retention</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary py-2.5 px-6 gap-2 text-sm shrink-0"
                >
                  {isSubmitting ? (
                    <span>Scheduling...</span>
                  ) : (
                    <>
                      <span>Schedule Briefing</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
