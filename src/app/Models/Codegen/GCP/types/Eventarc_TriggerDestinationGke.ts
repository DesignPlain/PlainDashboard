import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Eventarc_TriggerDestinationGke {
  // Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.
  Cluster?: string;

  // Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.
  Location?: string;

  // Required. The namespace the GKE service is running in.
  Namespace?: string;

  // Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  Path?: string;

  // Required. Name of the GKE service.
  Service?: string;
}

export function Eventarc_TriggerDestinationGke_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Cluster",
      "Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Namespace",
      "Required. The namespace the GKE service is running in.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      'Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "Required. Name of the GKE service.",
      [],
      true,
      false,
    ),
  ];
}
