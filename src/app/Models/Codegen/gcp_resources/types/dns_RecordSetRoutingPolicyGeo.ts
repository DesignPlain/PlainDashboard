import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dns_RecordSetRoutingPolicyGeoHealthCheckedTargets,
  dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes,
} from "./dns_RecordSetRoutingPolicyGeoHealthCheckedTargets";

export interface dns_RecordSetRoutingPolicyGeo {
  // Same as `rrdatas` above.
  rrdatas?: Array<string>;

  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  healthCheckedTargets?: dns_RecordSetRoutingPolicyGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  location?: string;
}

export function dns_RecordSetRoutingPolicyGeo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "healthCheckedTargets",
      "For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.\nStructure is document below.",
      dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "The location name defined in Google Cloud.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rrdatas",
      "Same as `rrdatas` above.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
