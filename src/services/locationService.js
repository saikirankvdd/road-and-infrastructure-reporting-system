export const getCurrentGPSLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      resolve({
        lat: 17.4125,
        lng: 78.6015,
        address: 'Uppal - Narapally Road (NH 163 Warangal Highway), Medchal-Malkajgiri, Hyderabad 500098',
        accuracy: 'Fallback Default'
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        let address = `Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;

        try {
          const res = await fetch('/api/location/reverse-geocode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat, lng })
          });
          const data = await res.json();
          if (data.success && data.address) {
            address = data.address;
          }
        } catch (err) {
          console.warn('Geocoding server error:', err);
        }

        resolve({
          lat,
          lng,
          address,
          accuracy: `${Math.round(position.coords.accuracy || 15)}m accuracy`
        });
      },
      (error) => {
        console.warn('Geolocation denied or failed:', error.message);
        resolve({
          lat: 17.4125,
          lng: 78.6015,
          address: 'Uppal - Narapally Road (NH 163 Warangal Highway), Medchal-Malkajgiri, Hyderabad 500098',
          accuracy: 'Estimated Location'
        });
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  });
};
