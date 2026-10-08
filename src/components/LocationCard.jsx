import React, { useState } from 'react';
import { MapPin, Navigation, Edit3, CheckCircle2, RefreshCw } from 'lucide-react';
import { MapPreview } from './MapPreview';
import { getCurrentGPSLocation } from '../services/locationService';

export const LocationCard = ({ 
  locationText, 
  setLocationText, 
  coords, 
  setCoords, 
  ward = 'Uppal Circle 2 / Peerzadiguda Municipality'
}) => {
  const [isLocating, setIsLocating] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const handleDetectLocation = async () => {
    setIsLocating(true);
    try {
      const loc = await getCurrentGPSLocation();
      setCoords({ lat: loc.lat, lng: loc.lng });
      if (loc.address) {
        setLocationText(loc.address);
      }
    } catch (err) {
      console.warn('GPS location error:', err);
    } finally {
      setIsLocating(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">LOCATION DETECTED</h3>
            <p className="text-xs font-bold text-slate-900">{ward}</p>
          </div>
        </div>

        <button
          onClick={handleDetectLocation}
          disabled={isLocating}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-all border border-blue-200"
        >
          <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
          <span>{isLocating ? 'Fetching GPS...' : 'Detect My Location'}</span>
        </button>
      </div>

      {/* Map Display */}
      <MapPreview 
        lat={coords.lat} 
        lng={coords.lng} 
        height="180px"
        onLocationSelect={(newCoords) => setCoords(newCoords)}
      />

      {/* Address & Coordinates box */}
      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {isEditingAddress ? (
            <input
              type="text"
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              onBlur={() => setIsEditingAddress(false)}
              className="w-full text-xs font-semibold bg-white border border-blue-400 rounded-lg p-2 focus:outline-none"
              autoFocus
            />
          ) : (
            <div>
              <p className="text-xs font-bold text-slate-800 leading-snug">{locationText}</p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                Geotag: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsEditingAddress(!isEditingAddress)}
          className="text-xs font-bold text-blue-600 hover:text-blue-800 shrink-0 underline"
        >
          {isEditingAddress ? 'Save' : 'Change Location'}
        </button>
      </div>
    </div>
  );
};
