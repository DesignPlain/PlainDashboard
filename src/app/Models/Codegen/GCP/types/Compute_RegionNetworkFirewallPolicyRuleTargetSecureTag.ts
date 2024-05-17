import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionNetworkFirewallPolicyRuleTargetSecureTag {
  // [Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.
  State?: string;

  // Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+
  Name?: string;
}

export function Compute_RegionNetworkFirewallPolicyRuleTargetSecureTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "[Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+",
      [],
      true,
      false,
    ),
  ];
}
