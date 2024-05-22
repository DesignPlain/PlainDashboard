import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_RiskConfigurationRiskExceptionConfiguration {
  /*
Overrides the risk decision to always block the pre-authentication requests.
The IP range is in CIDR notation, a compact representation of an IP address and its routing prefix.
Can contain a maximum of 200 items.
*/
  blockedIpRangeLists?: Array<string>;

  /*
Risk detection isn't performed on the IP addresses in this range list.
The IP range is in CIDR notation.
Can contain a maximum of 200 items.
*/
  skippedIpRangeLists?: Array<string>;
}

export function cognito_RiskConfigurationRiskExceptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "blockedIpRangeLists",
      "Overrides the risk decision to always block the pre-authentication requests.\nThe IP range is in CIDR notation, a compact representation of an IP address and its routing prefix.\nCan contain a maximum of 200 items.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "skippedIpRangeLists",
      "Risk detection isn't performed on the IP addresses in this range list.\nThe IP range is in CIDR notation.\nCan contain a maximum of 200 items.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
