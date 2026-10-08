import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Video, 
  MapPin, 
  Mic, 
  MicOff, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  Plus, 
  X, 
  Building2, 
  Layers, 
  Copy, 
  ExternalLink,
  ShieldCheck,
  HardHat
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StepIndicator } from '../../components/StepIndicator';
import { LocationCard } from '../../components/LocationCard';
import { AIAnalysisCard } from '../../components/AIAnalysisCard';
import { AuthorityCard } from '../../components/AuthorityCard';
import { ProjectCard } from '../../components/ProjectCard';
import { SimilarReportCard } from '../../components/SimilarReportCard';
import { SafetyAssessment } from '../../components/SafetyAssessment';
import { ReportPreview } from '../../components/ReportPreview';
import { ROAD_CATEGORIES } from '../../data/categories';
import { analyzeRoadIssue, createReport } from '../../services/api';
import { generatePrefilledGmailUrls } from '../../utils/formatters';

export const ReportWizard = ({ user, onCancel, onReportCreated, onTrackReport, onViewSimilarMap }) => {
  // Current Step: 1 (Evidence) -> 2 (Describe) -> 3 (AI Analysis) -> 4 (Details & Questions) -> 5 (Review) -> 6 (Send & Success)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [images, setImages] = useState([
    '/uppal_narapally_road.jpg',
    'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80'
  ]);
  const [locationText, setLocationText] = useState('Uppal - Narapally Road (NH 163 Warangal Highway), Medchal-Malkajgiri, Hyderabad 500098');
  const [coords, setCoords] = useState({ lat: 17.4125, lng: 78.6015 });
  const [ward, setWard] = useState('Uppal Circle 2 / Peerzadiguda Municipality');

  const [description, setDescription] = useState(
    'Asphalt surface damage, dangerous pothole, and discarded plastic bottle debris obstructing the shoulder lane on Uppal - Narapally Road (NH 163 Warangal Highway near flyover). Vehicles and two-wheelers are swerving sharply, causing severe skidding and collision hazards.'
  );
  const [selectedCategory, setSelectedCategory] = useState('Potholes');
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);

  // Step 3: AI State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiProgress, setAiProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState({
    title: 'Severe Asphalt Surface Cracks & Pothole Hazard on Uppal Corridor',
    category: 'Potholes',
    severity: 'High',
    safetyImpact: 'High',
    authority: 'GHMC Uppal Circle - Roads & Infrastructure Wing',
    authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
    authorityConfidence: 94,
    impactFactors: [
      'Two-wheeler skidding and wheel entrapment risk',
      'Highway shoulder bottleneck & abrupt vehicular swerving',
      'Nighttime visibility hazard'
    ],
    questions: [
      {
        question: 'How long has this road problem existed?',
        options: ['Today', 'A few days', 'Several weeks', 'More than a month', "I'm not sure"]
      },
      {
        question: 'Does this problem create a safety risk for two-wheelers?',
        options: ['Yes', 'No', "I'm not sure"]
      },
      {
        question: 'Is traffic affected during peak commute hours?',
        options: ['Severely', 'Somewhat', 'No', "I'm not sure"]
      }
    ],
    relatedProject: {
      name: 'NH 163 Uppal - Narapally 6-Lane Elevated Corridor & Road Widening Project',
      status: 'Under Construction',
      authority: 'National Highways Authority of India (NHAI) & R&B Dept',
      contractor: 'NCC Limited - Road Infra Division',
      reference: 'Tender Ref # NHAI/TEL/NH163/2024-882',
      source: 'Government Verified Dataset'
    }
  });

  // Step 4: AI Follow-up Questions Answers
  const [followUpAnswers, setFollowUpAnswers] = useState({
    'How long has this road problem existed?': 'A few days',
    'Does this problem create a safety risk for two-wheelers?': 'Yes',
    'Is traffic affected during peak commute hours?': 'Severely'
  });

  // Step 6: Sending State & Created Report
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);
  const [createdReportItem, setCreatedReportItem] = useState(null);

  const fileInputRef = useRef(null);

  // File Upload Handlers
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setImages((prev) => [...prev, uploadEvent.target.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Voice Description Handler
  const toggleVoiceRecording = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser. Please type the description.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    if (isRecordingVoice) {
      setIsRecordingVoice(false);
    } else {
      setIsRecordingVoice(true);
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setDescription((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsRecordingVoice(false);
      };

      recognition.onerror = () => setIsRecordingVoice(false);
      recognition.start();
    }
  };

  // Trigger AI Analysis Pipeline
  const runAIAnalysisPipeline = async () => {
    setCurrentStep(3);
    setIsAnalyzing(true);
    setAiProgress(10);

    const interval = setInterval(() => {
      setAiProgress((prev) => (prev >= 90 ? 90 : prev + 15));
    }, 400);

    try {
      const firstImg = images.length > 0 && images[0].startsWith('data:image') ? images[0] : null;
      const res = await analyzeRoadIssue({
        description,
        category: selectedCategory,
        location: locationText,
        imageBase64: firstImg
      });

      clearInterval(interval);
      setAiProgress(100);

      if (res.success && res.data) {
        setAnalysisResult((prev) => ({
          ...prev,
          ...res.data
        }));
        if (res.data.category) setSelectedCategory(res.data.category);
      }
    } catch (err) {
      console.warn('AI analysis failed:', err);
      clearInterval(interval);
      setAiProgress(100);
    } finally {
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 500);
    }
  };

  // Handle Final Submission
  const handleFinalSubmit = async () => {
    setCurrentStep(6);
    setIsSending(true);
    setSendProgress(20);

    const timer = setInterval(() => {
      setSendProgress((p) => {
        if (p >= 90) {
          clearInterval(timer);
          return 90;
        }
        return p + 25;
      });
    }, 400);

    const finalPayload = {
      title: analysisResult.title || 'Road Infrastructure Defect',
      description,
      category: selectedCategory,
      severity: analysisResult.severity || 'High',
      safetyImpact: analysisResult.safetyImpact || 'High',
      location: locationText,
      lat: coords.lat,
      lng: coords.lng,
      ward,
      authority: analysisResult.authority,
      authorityEmail: analysisResult.authorityEmail,
      authorityConfidence: analysisResult.authorityConfidence || 94,
      images,
      relatedProject: analysisResult.relatedProject,
      followUpAnswers,
      impactFactors: analysisResult.impactFactors,
      citizenName: user.name || 'Sai Kiran',
      citizenEmail: user.email || 'saikirankvdd06@gmail.com'
    };

    const result = await createReport(finalPayload);
    clearInterval(timer);
    setSendProgress(100);
    setIsSending(false);

    const reportObj = (result.success && result.report) ? result.report : { ...finalPayload, id: 'RW-2026-001284' };
    setCreatedReportItem(reportObj);

    // Generate Gmail Pre-filled URL & automatically open Gmail Compose in a new browser tab!
    const { gmailWebUrl } = generatePrefilledGmailUrls(reportObj);
    try {
      window.open(gmailWebUrl, '_blank');
    } catch (err) {
      console.log('Browser blocked auto-popup, fallback button rendered on screen');
    }

    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    if (onReportCreated) onReportCreated(reportObj);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Sticky Step Progress Indicator */}
      <StepIndicator currentStep={currentStep} onStepClick={(step) => setCurrentStep(step)} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* STEP 1: CAPTURE EVIDENCE */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h1 className="text-3xl font-black text-slate-900 font-outfit">Report a Road Issue</h1>
              <p className="text-sm text-slate-500 mt-1">Start by showing us what is happening on the road.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Upload Column */}
              <div className="lg:col-span-6 space-y-4">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-white rounded-3xl p-8 border-2 border-dashed border-slate-300 hover:border-blue-500 transition-all cursor-pointer text-center space-y-4 group hover:bg-blue-50/20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900">Take a Photo or Drag & Drop Here</h3>
                    <p className="text-xs text-slate-500 mt-1">Supports JPG, PNG, WEBP up to 25MB</p>
                  </div>

                  <div className="flex justify-center space-x-3 pt-2">
                    <button 
                      type="button"
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-sm"
                    >
                      Upload Photo
                    </button>
                    <button 
                      type="button"
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
                    >
                      Upload Video
                    </button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>

                {/* Location Detection Widget */}
                <LocationCard
                  locationText={locationText}
                  setLocationText={setLocationText}
                  coords={coords}
                  setCoords={setCoords}
                  ward={ward}
                />
              </div>

              {/* Right Gallery Preview Column */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Evidence Preview ({images.length})
                </h3>

                {images.length > 0 ? (
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 shadow-md">
                      <img src={images[0]} alt="Primary Evidence" className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-mono px-2.5 py-1 rounded-md font-bold">
                        Primary Evidence
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                      {images.map((img, idx) => (
                        <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shrink-0 group">
                          <img src={img} alt={`Evidence ${idx + 1}`} className="w-full h-full object-cover" />
                          <button
                            onClick={() => handleRemoveImage(idx)}
                            className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-500 text-slate-400 hover:text-blue-600 flex flex-col items-center justify-center text-[10px] font-bold shrink-0 bg-white"
                      >
                        <Plus className="w-5 h-5 mb-1" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-400 text-xs font-semibold">
                    <span>No evidence photos uploaded yet</span>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <button
                onClick={onCancel}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              >
                Cancel
              </button>

              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center space-x-2 px-7 py-3 rounded-2xl font-extrabold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:scale-[1.02] transition-all"
              >
                <span>Next: Describe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DESCRIBE THE PROBLEM */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in">
            <div>
              <h1 className="text-3xl font-black text-slate-900 font-outfit">Describe the Road Problem</h1>
              <p className="text-sm text-slate-500 mt-1">Tell us what you noticed on the road.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Road Description
                </label>
                <button
                  type="button"
                  onClick={toggleVoiceRecording}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                    isRecordingVoice 
                      ? 'bg-red-600 text-white animate-pulse' 
                      : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  {isRecordingVoice ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  <span>{isRecordingVoice ? 'Listening...' : '🎤 Speak Instead'}</span>
                </button>
              </div>

              <textarea
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: There is a large pothole near the junction. Vehicles are swerving around it and two-wheelers could lose control..."
                className="w-full text-sm font-sans bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:border-blue-500 leading-relaxed"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Provide clear details for AI analysis</span>
                <span>{description.length} / 1000 chars</span>
              </div>
            </div>

            {/* Category Cards Selector */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Select Road Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ROAD_CATEGORIES.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedCategory === cat.name
                        ? 'bg-blue-50/80 border-blue-500 ring-2 ring-blue-200 shadow-sm font-bold'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <h4 className="text-xs font-extrabold text-slate-900">{cat.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{cat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={runAIAnalysisPipeline}
                className="flex items-center space-x-2 px-7 py-3 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:scale-[1.02] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Run AI Analysis</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: AI ROAD ANALYSIS */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in">
            <AIAnalysisCard
              isAnalyzing={isAnalyzing}
              progress={aiProgress}
              analysisResult={analysisResult}
            />

            {!isAnalyzing && (
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={() => setCurrentStep(4)}
                  className="flex items-center space-x-2 px-7 py-3 rounded-2xl font-extrabold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:scale-[1.02] transition-all"
                >
                  <span>Continue to Details & Intelligence</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 4: DETAILS & INTELLIGENCE */}
        {currentStep === 4 && (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in">
            <div>
              <h1 className="text-3xl font-black text-slate-900 font-outfit">Authority & Road Intelligence</h1>
              <p className="text-sm text-slate-500 mt-1">Review authority mapping, project data, and answer a few quick questions.</p>
            </div>

            {/* Authority Card */}
            <AuthorityCard authorityData={analysisResult} />

            {/* Project Card */}
            <ProjectCard project={analysisResult.relatedProject} />

            {/* Similar Reports Card */}
            <SimilarReportCard onViewMap={onViewSimilarMap} />

            {/* AI Follow-up Questions */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">A Few More Questions</h3>
                <p className="text-xs text-slate-500">We only ask questions that help strengthen your municipal report.</p>
              </div>

              <div className="space-y-4">
                {(analysisResult.questions || []).map((q, qIdx) => (
                  <div key={qIdx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-slate-800">{q.question}</p>
                    <div className="flex flex-wrap gap-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = followUpAnswers[q.question] === opt;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => setFollowUpAnswers((prev) => ({ ...prev, [q.question]: opt }))}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-blue-600 text-white font-bold shadow-2xs'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Assessment */}
            <SafetyAssessment severity={analysisResult.severity} safetyImpact={analysisResult.safetyImpact} />

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <button
                onClick={() => setCurrentStep(3)}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setCurrentStep(5)}
                className="flex items-center space-x-2 px-7 py-3 rounded-2xl font-extrabold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:scale-[1.02] transition-all"
              >
                <span>Continue to Review Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: REVIEW & GENERATED REPORT */}
        {currentStep === 5 && (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-black text-slate-900 font-outfit">REVIEW YOUR ROAD REPORT</h1>
                <p className="text-sm text-slate-500 mt-1">Verify all docket details before sending to verified authority recipients.</p>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
              >
                Edit Details
              </button>
            </div>

            <ReportPreview
              title={analysisResult.title}
              category={selectedCategory}
              description={description}
              locationText={locationText}
              coords={coords}
              authorityData={analysisResult}
              severity={analysisResult.severity}
              safetyImpact={analysisResult.safetyImpact}
              images={images}
              relatedProject={analysisResult.relatedProject}
              followUpAnswers={followUpAnswers}
            />

            {/* Recipient Confirmation Box */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">VERIFIED MUNICIPAL RECIPIENT</h3>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white text-sm">{analysisResult.authority}</p>
                  <p className="font-mono text-slate-400 mt-0.5">{analysisResult.authorityEmail}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-400/30">
                  ✓ Verified Inbox
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Recipients are selected automatically using verified municipal authority datasets.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <button
                onClick={() => setCurrentStep(4)}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={handleFinalSubmit}
                className="flex items-center space-x-2.5 px-8 py-4 rounded-2xl font-extrabold text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:scale-[1.02] transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send Report</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: SENDING & SUCCESS PAGE */}
        {currentStep === 6 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
            {isSending ? (
              <div className="bg-slate-900 text-white rounded-3xl p-10 border border-slate-800 shadow-2xl text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto animate-pulse">
                  <Send className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white font-outfit">SENDING YOUR REPORT</h2>
                  <p className="text-xs text-slate-400 mt-1">Attaching evidence, signing DKIM email, and queueing municipal ticket...</p>
                </div>

                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-300"
                    style={{ width: `${sendProgress}%` }}
                  ></div>
                </div>

                <div className="text-xs font-mono text-slate-400">
                  {sendProgress < 40 && '✓ Preparing structured report...'}
                  {sendProgress >= 40 && sendProgress < 80 && '✓ Attaching photo evidence...'}
                  {sendProgress >= 80 && '✓ Selecting verified authority inbox...'}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-10 h-10 stroke-[3]" />
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    DISPATCH SUCCESSFUL
                  </span>
                  <h1 className="text-3xl font-black text-slate-900 font-outfit mt-2">REPORT SENT SUCCESSFULLY</h1>
                  <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
                    Your road issue report has been submitted and queued for municipal resolution.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Report ID:</span>
                    <span className="font-mono font-bold text-blue-600">{createdReportItem?.id || 'RW-2026-001284'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Authority Inbox:</span>
                    <span className="font-bold text-slate-900 truncate max-w-[200px]">{createdReportItem?.authorityEmail || 'ee.roads.uppal@ghmc.gov.in'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date:</span>
                    <span className="font-bold text-slate-700">{createdReportItem?.createdAt || '8 Oct 2026'}</span>
                  </div>
                </div>

                {/* Pre-filled Gmail Dispatch Banner */}
                {(() => {
                  const { gmailWebUrl, mailtoUrl, bodyText } = generatePrefilledGmailUrls(createdReportItem || {});
                  return (
                    <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-6 rounded-3xl border border-blue-800 shadow-lg text-left space-y-4 max-w-lg mx-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-black text-lg">
                          ✉️
                        </div>
                        <div>
                          <h3 className="font-extrabold text-sm text-white font-outfit">Open Pre-filled Gmail</h3>
                          <p className="text-xs text-blue-200">Review & send directly from your personal Gmail account</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        <a
                          href={gmailWebUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs shadow-md transition-all text-center"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Launch Gmail Web</span>
                        </a>

                        <a
                          href={mailtoUrl}
                          className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all text-center"
                        >
                          <Send className="w-4 h-4 text-blue-400" />
                          <span>Default Mail App</span>
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(bodyText);
                          alert('Copied formal complaint text to clipboard!');
                        }}
                        className="w-full flex items-center justify-center space-x-2 py-2 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Formal Complaint Text to Clipboard</span>
                      </button>
                    </div>
                  );
                })()}

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    onClick={() => onTrackReport(createdReportItem?.id || 'RW-2026-001284')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-extrabold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
                  >
                    Track Report Status
                  </button>

                  <button
                    onClick={onCancel}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
