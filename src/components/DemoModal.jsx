import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, User, Briefcase, FileText } from 'lucide-react';
import trinityLogo from '../assets/trinity-logo.png';

export default function DemoModal({ isOpen, onClose, preselectedProduct = "Both" }) {
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate enterprise briefing scheduling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
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
                  <span>Confidentiality & Mutual NDA Guarantee</span>
                </div>
                <p>
                  All case profiles, file samples, and exposure discussions are protected under strict enterprise privilege and confidentiality protocols.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="btn-primary w-full"
              >
                Return to Trinity AI Boston
              </button>
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
                      <option value="The Cosmos Platform">The Cosmos Platform (Enterprise Overview)</option>
                      <option value="CosmosOne™ (First-Party Property)">CosmosOne™ (First-Party Property)</option>
                      <option value="CosmosNexus™ (Construction Defect)">CosmosNexus™ (Construction Defect)</option>
                      <option value="CosmosHelios™ (Intake & Conflicts)">CosmosHelios™ (Intake & Conflicts)</option>
                      <option value="Cosmos Helix™ (Nursing Home & Medical)">Cosmos Helix™ (Nursing Home & Medical)</option>
                      <option value="Cosmos Gravity™ (Audit & Compliance)">Cosmos Gravity™ (Audit & Compliance)</option>
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
