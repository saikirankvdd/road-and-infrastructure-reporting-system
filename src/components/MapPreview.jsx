import React, { useEffect, useRef } from 'react';

export const MapPreview = ({ lat = 17.4125, lng = 78.6015, height = '240px', onLocationSelect, markerTitle = 'Issue Location' }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (typeof window === 'undefined' || !window.L) return;

    const L = window.L;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 15,
        zoomControl: true,
        attributionControl: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(map);

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="background-color: #2563eb; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; items-center; justify-content: center;">
                <div style="background-color: white; width: 8px; height: 8px; border-radius: 50%;"></div>
               </div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([lat, lng], { icon: customIcon, draggable: !!onLocationSelect }).addTo(map);
      marker.bindPopup(`<b>${markerTitle}</b>`).openPopup();

      if (onLocationSelect) {
        marker.on('dragend', () => {
          const position = marker.getLatLng();
          onLocationSelect({ lat: position.lat, lng: position.lng });
        });

        map.on('click', (e) => {
          marker.setLatLng(e.latlng);
          onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
        });
      }

      mapInstanceRef.current = map;
      markerRef.current = marker;
    } else {
      mapInstanceRef.current.setView([lat, lng], 15);
      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
      }
    }
  }, [lat, lng, onLocationSelect, markerTitle]);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ height }} 
      className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner z-10"
    />
  );
};
