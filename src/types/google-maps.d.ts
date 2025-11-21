declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions)
      setCenter(latlng: LatLng | LatLngLiteral): void
      setZoom(zoom: number): void
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral
      zoom?: number
      mapTypeControl?: boolean
      fullscreenControl?: boolean
      streetViewControl?: boolean
      styles?: MapTypeStyle[]
    }

    interface LatLng {
      lat(): number
      lng(): number
    }

    interface LatLngLiteral {
      lat: number
      lng: number
    }

    interface MapTypeStyle {
      featureType?: string
      elementType?: string
      stylers?: Array<Record<string, unknown>>
    }

    class Polyline {
      constructor(opts?: PolylineOptions)
      setMap(map: Map | null): void
    }

    interface PolylineOptions {
      path?: LatLng[] | LatLngLiteral[]
      geodesic?: boolean
      strokeColor?: string
      strokeOpacity?: number
      strokeWeight?: number
    }
  }
}

