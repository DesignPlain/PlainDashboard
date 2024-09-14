import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption {
  //
  ruleOrder?: string;

  //
  streamExceptionPolicy?: string;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatefulEngineOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ruleOrder",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamExceptionPolicy",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
