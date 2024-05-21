import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alloydb_getLocationsLocation {
  // The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  displayName?: string;

  // Cross-service attributes for the location. For example `{"cloud.googleapis.com/region": "us-east1"}`.
  labels?: Map<string, string>;

  // The canonical id for this location. For example: "us-east1"..
  locationId?: string;

  // Service-specific metadata. For example the available capacity at the given location.
  metadata?: Map<string, string>;

  // Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1".
  name?: string;
}

export function alloydb_getLocationsLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      'Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      'Cross-service attributes for the location. For example `{"cloud.googleapis.com/region": "us-east1"}`.',
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locationId",
      'The canonical id for this location. For example: "us-east1"..',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "Service-specific metadata. For example the available capacity at the given location.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
