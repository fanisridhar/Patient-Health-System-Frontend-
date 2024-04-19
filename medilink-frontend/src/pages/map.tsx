import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Header from "../components/NavBar";

const Search = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(null);

  useEffect(() => {
    // Function to initialize the map
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyCY2KwiH47RNsp1S1Bc8EMrTISs-x7wn0s",
        version: 'weekly',
        libraries: ['places'],
      });

      const google = await loader.load();

      const center = new google.maps.LatLng(39.1653, -86.5264);

      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: center,
        zoom: 11,
        mapId: 'DEMO_MAP_ID',
      });

      setMap(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            setUserLocation(location);

            map.setCenter(location);

            const userMarker = new google.maps.Marker({
              position: location,
              map: map,
              title: 'Your Location',
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    initMap();
  }, []);

  // Function to handle nearby hospitals button click
  const handleNearbyHospitals = () => {
    if (!map) {
      console.error('Map is not initialized.');
      return;
    }
  
    if (userLocation) {
      try {
        const google = window.google;

        const request: google.maps.places.PlaceSearchRequest = {
          location: userLocation,
          radius: 5000,
          type: 'hospital',
        };

        const placesService = new google.maps.places.PlacesService(map);
        placesService.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            // Clear existing markers
            markers.forEach(marker => marker.setMap(null));

            // Create markers for each nearby hospital
            const newMarkers: google.maps.Marker[] = [];
            results.forEach((result) => {
              if (result.geometry && result.geometry.location) {
                const marker = new google.maps.Marker({
                  position: result.geometry.location,
                  map: map,
                  title: result.name,
                });
                newMarkers.push(marker);

                // Add click listener to marker
                marker.addListener('click', () => {
                  if (userLocation) {
                    calculateAndDisplayRoute(userLocation, result.geometry.location);
                  } else {
                    console.error('User location is not available.');
                  }
                });
              } else {
                console.error('Geometry location is not defined for this result:', result);
              }
            });

            // Update the markers state
            setMarkers(newMarkers);
          } else {
            console.error('Nearby search request failed:', status);
          }
        });
      } catch (error) {
        console.error('Error searching for nearby hospitals:', error);
      }
    } else {
      console.error('User location is not available.');
    }
  };

  // Function to calculate and display route
  const calculateAndDisplayRoute = (origin: google.maps.LatLng, destination: google.maps.LatLng) => {
    // Add your route calculation and display logic here
    console.log('Calculating and displaying route...');
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
        <Header />
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={handleNearbyHospitals}
      >
        Find Nearby Hospitals
      </button>
      <div id="map" style={{ height: '600px', marginTop: '20px' }} />
    </div>
  );
};

export default Search;
















