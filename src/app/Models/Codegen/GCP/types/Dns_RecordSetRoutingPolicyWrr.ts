import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets,
  Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets_GetTypes,
} from "./Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets";

export interface Dns_RecordSetRoutingPolicyWrr {
  /*
The list of targets to be health checked. Note that if DNSSEC is enabled for this zone, only one of `rrdatas` or `health_checked_targets` can be set.
Structure is document below.
*/
  HealthCheckedTargets?: Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets;

  // Same as `rrdatas` above.
  Rrdatas?: Array<string>;

  // The ratio of traffic routed to the target.
  Weight?: number;
}

export function Dns_RecordSetRoutingPolicyWrr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HealthCheckedTargets",
      "The list of targets to be health checked. Note that if DNSSEC is enabled for this zone, only one of `rrdatas` or `health_checked_targets` can be set.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets_GetTypes(),
      false,
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
    new DynamicUIProps(
      InputType.Number,
      "Weight",
      "The ratio of traffic routed to the target.",
      [],
      true,
      false,
    ),
  ];
}
