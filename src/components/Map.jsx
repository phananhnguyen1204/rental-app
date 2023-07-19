import GoogleMapReact from "google-map-react";

export default function Map({ lat, lng }) {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: lat || 10.99835602, lng: lng || 77.01502627 },
      map,
      title: "Hello World!",
    });
    return marker;
  };

  const defaultProps = {
    center: {
      lat: lat || 10.99835602,
      lng: lng || 77.01502627,
    },
    zoom: 11,
  };
  const key = process.env.REACT_APP_GEOCODE_API_KEY;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${key}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}
