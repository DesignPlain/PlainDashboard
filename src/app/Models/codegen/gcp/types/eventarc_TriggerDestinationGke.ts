import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eventarc_TriggerDestinationGke {
  // Required. The namespace the GKE service is running in.
  namespace?: string;

  // Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  path?: string;

  // Required. Name of the GKE service.
  service?: string;

  // Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.
  cluster?: string;

  // Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.
  location?: string;
}

export function eventarc_TriggerDestinationGke_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Required. The namespace the GKE service is running in.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      'Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Required. Name of the GKE service.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cluster",
      "Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.",
      () => [],
      true,
      false,
    ),
  ];
}
