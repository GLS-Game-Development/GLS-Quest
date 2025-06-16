import { Scene } from "phaser";
import Map, { LatLngExpression } from 'leaflet';

export class Map extends Scene {
    map: Map.Map = Map.Map("game-container").setView([0, 0], 18); 
  constructor() {
    super({ key: "Map" });
  }

    create() {
        Map.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {}
    ).addTo(this.map);

        const userMarker = Map.circleMarker([0, 0], {
            radius: 8,
            fillColor: "#3388ff",
            color: "#000",
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);

        const pathCoordinates: LatLngExpression[] = [];

        const pathLine: Map.Polyline = Map.polyline(pathCoordinates, {
            color: "#3388ff",
            weight: 3,
            opacity: 0.7,
        }).addTo(this.map);    

        const options = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000
        };

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition( 
                (position) => {
                    const { latitude, longitude } = position.coords;
                    userMarker.setLatLng([latitude, longitude]);
                    this.map.setView([latitude, longitude], 18);
                    pathCoordinates.push([latitude, longitude] as LatLngExpression);
                    pathLine.setLatLngs(pathCoordinates);
                    this.map.setView([latitude, longitude], 18, {
                        animate: true,
                        duration: 1
                    });
                }
            );
        }
    }
}
