import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RouterNatSubnetwork {
  /*
List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
`LIST_OF_SECONDARY_IP_RANGES` is one of the values in
sourceIpRangesToNat
*/
  secondaryIpRangeNames?: Array<string>;

  /*
List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
`ALL_IP_RANGES`, `LIST_OF_SECONDARY_IP_RANGES`,
`PRIMARY_IP_RANGE`.
*/
  sourceIpRangesToNats?: Array<string>;

  // Self-link of subnetwork to NAT
  name?: string;
}

export function compute_RouterNatSubnetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secondaryIpRangeNames",
      "List of the secondary ranges of the subnetwork that are allowed\nto use NAT. This can be populated only if\n`LIST_OF_SECONDARY_IP_RANGES` is one of the values in\nsourceIpRangesToNat",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceIpRangesToNats",
      "List of options for which source IPs in the subnetwork\nshould have NAT enabled. Supported values include:\n`ALL_IP_RANGES`, `LIST_OF_SECONDARY_IP_RANGES`,\n`PRIMARY_IP_RANGE`.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Self-link of subnetwork to NAT",
      () => [],
      true,
      false,
    ),
  ];
}
