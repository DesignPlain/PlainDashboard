import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_getLocationsLocation {
  // Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1".
  Name?: string;

  // The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  DisplayName?: string;

  // Cross-service attributes for the location. For example `{"cloud.googleapis.com/region": "us-east1"}`.
  Labels?: Map<string, string>;

  // The canonical id for this location. For example: "us-east1"..
  LocationId?: string;

  // Service-specific metadata. For example the available capacity at the given location.
  Metadata?: Map<string, string>;
}

export function Alloydb_getLocationsLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      'Cross-service attributes for the location. For example `{"cloud.googleapis.com/region": "us-east1"}`.',
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LocationId",
      'The canonical id for this location. For example: "us-east1"..',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "Service-specific metadata. For example the available capacity at the given location.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      'Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1".',
      [],
      true,
      false,
    ),
  ];
}
