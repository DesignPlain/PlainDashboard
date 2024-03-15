export interface getLocationsLocation {
  // Cross-service attributes for the location. For example `{"cloud.googleapis.com/region": "us-east1"}`.
  Labels?: Map<string, string>;

  // The canonical id for this location. For example: "us-east1"..
  LocationId?: string;

  // Service-specific metadata. For example the available capacity at the given location.
  Metadata?: Map<string, string>;

  // Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1".
  Name?: string;

  // The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  DisplayName?: string;
}
