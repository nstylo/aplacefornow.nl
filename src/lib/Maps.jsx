import Leaflet from "leaflet"

export const MarkerIcon = new Leaflet.Icon({
  iconUrl: require("../Assets/Marker.svg"),
  iconRetinaUrl: require("../Assets/Marker.svg"),
  iconAnchor: [30, 80],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new Leaflet.Point(60, 80),
  className: "leaflet-div-icon",
})
