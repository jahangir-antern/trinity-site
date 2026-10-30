import React from 'react';
import { MapPin } from 'lucide-react';
import trinityLogo from '../assets/trinity-logo.png';
import { companyLocations } from '../data/homepageData';

export default function Footer({ onNavigate, onRequestDemo }) {
  return (
    <footer className="bg-[#03070f] text-slate-400 border-t border-[#132035] pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#132035]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img 
                src={trinityLogo} 
                alt="Trinity AI Boston Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold font-display text-white tracking-tight">
                  TRINITY AI <span className="text-trinity-gold">BOSTON</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Engineering Scale at Trust™
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Trinity AI Boston, Inc. builds artificial intelligence for insurance defense litigation, where the output is signed by an attorney, filed with a court, and billed to a carrier that audits it.
            </p>

            {/* Global Centers */}
            <div className="flex flex-col gap-1.5 pt-2 text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                <span>Headquarters: {companyLocations.headquarters.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-trinity-gold shrink-0" />
                <span>Engineering & Development: {companyLocations.engineeringCenter.address}</span>
              </div>
            </div>
          </div>

          {/* The Cosmos Platform Practice Lines */}
          <div className="space-y-3">
            <div className="font-bold font-display text-white text-xs uppercase tracking-wider">
              The Cosmos Platform
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  CosmosOne™
                </a>
                <span className="block text-[11px] text-slate-500">First-Party Property</span>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  CosmosNexus™
                </a>
                <span className="block text-[11px] text-slate-500">Construction Defect</span>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  CosmosHelios™
                </a>
                <span className="block text-[11px] text-slate-500">Intake & Conflicts</span>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Cosmos Helix™
                </a>
                <span className="block text-[11px] text-slate-500">Nursing Home & Medical</span>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Cosmos Gravity™
                </a>
                <span className="block text-[11px] text-slate-500">Audit & Compliance</span>
              </li>
            </ul>
          </div>

          {/* Company & Leadership */}
          <div className="space-y-3">
            <div className="font-bold font-display text-white text-xs uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('team')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li><a href="#positioning" className="hover:text-white transition-colors">Who We Build For</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">In Production (Am Law 200)</a></li>
              <li>
                <button 
                  type="button"
                  onClick={() => onRequestDemo && onRequestDemo("The Cosmos Platform")}
                  className="text-trinity-lightBlue hover:underline text-left mt-2 cursor-pointer"
                >
                  Schedule Demo Briefing →
                </button>
              </li>
            </ul>
          </div>

          {/* Architecture & Governance */}
          <div className="space-y-3">
            <div className="font-bold font-display text-white text-xs uppercase tracking-wider">
              Governance & IP
            </div>
            <ul className="space-y-2">
              <li><a href="#trust" className="hover:text-white transition-colors">ABA Formal Opinion 512</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Florida Bar Opinion 24-1</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Cortex, Polaris & Argus™</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Single-Tenant Security</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">USPTO Patent Filings (10)</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">SOC 2 Type 1 Attested</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 Trinity AI Boston, Inc. All rights reserved. Engineering Scale at Trust™.</p>
          <div className="flex items-center gap-6">
            <span>2 Trinity Ct, Andover, MA 01810</span>
            <span>•</span>
            <span>Single Tenant Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
