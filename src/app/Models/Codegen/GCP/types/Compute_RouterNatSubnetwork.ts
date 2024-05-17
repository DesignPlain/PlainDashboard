import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RouterNatSubnetwork {
  /*
List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
`LIST_OF_SECONDARY_IP_RANGES` is one of the values in
sourceIpRangesToNat
*/
  SecondaryIpRangeNames?: Array<string>;

  /*
List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
`ALL_IP_RANGES`, `LIST_OF_SECONDARY_IP_RANGES`,
`PRIMARY_IP_RANGE`.
*/
  SourceIpRangesToNats?: Array<string>;

  // Self-link of subnetwork to NAT
  Name?: string;
}

export function Compute_RouterNatSubnetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Self-link of subnetwork to NAT",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecondaryIpRangeNames",
      "List of the secondary ranges of the subnetwork that are allowed\nto use NAT. This can be populated only if\n`LIST_OF_SECONDARY_IP_RANGES` is one of the values in\nsourceIpRangesToNat",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourceIpRangesToNats",
      "List of options for which source IPs in the subnetwork\nshould have NAT enabled. Supported values include:\n`ALL_IP_RANGES`, `LIST_OF_SECONDARY_IP_RANGES`,\n`PRIMARY_IP_RANGE`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
