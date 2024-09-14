import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RouterNatRuleAction {
  /*
A list of URLs of the IP resources used for this NAT rule.
These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.
*/
  sourceNatActiveIps?: Array<string>;

  /*
A list of URLs of the subnetworks used as source ranges for this NAT Rule.
These subnetworks must have purpose set to PRIVATE_NAT.
This field is used for private NAT.
*/
  sourceNatActiveRanges?: Array<string>;

  /*
A list of URLs of the IP resources to be drained.
These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.
*/
  sourceNatDrainIps?: Array<string>;

  /*
A list of URLs of subnetworks representing source ranges to be drained.
This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.
This field is used for private NAT.
*/
  sourceNatDrainRanges?: Array<string>;
}

export function compute_RouterNatRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "sourceNatActiveIps",
      "A list of URLs of the IP resources used for this NAT rule.\nThese IP addresses must be valid static external IP addresses assigned to the project.\nThis field is used for public NAT.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceNatActiveRanges",
      "A list of URLs of the subnetworks used as source ranges for this NAT Rule.\nThese subnetworks must have purpose set to PRIVATE_NAT.\nThis field is used for private NAT.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceNatDrainIps",
      "A list of URLs of the IP resources to be drained.\nThese IPs must be valid static external IPs that have been assigned to the NAT.\nThese IPs should be used for updating/patching a NAT rule only.\nThis field is used for public NAT.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceNatDrainRanges",
      "A list of URLs of subnetworks representing source ranges to be drained.\nThis is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.\nThis field is used for private NAT.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
