import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets,
  Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes,
} from "./Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets";

export interface Dns_RecordSetRoutingPolicyGeo {
  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  HealthCheckedTargets?: Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  Location?: string;

  // Same as `rrdatas` above.
  Rrdatas?: Array<string>;
}

export function Dns_RecordSetRoutingPolicyGeo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HealthCheckedTargets",
      "For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The location name defined in Google Cloud.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rrdatas",
      "Same as `rrdatas` above.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
