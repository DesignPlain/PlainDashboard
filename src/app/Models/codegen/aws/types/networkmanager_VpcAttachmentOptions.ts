import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_VpcAttachmentOptions {
  /*
Indicates whether appliance mode is supported.
If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow.
If the VPC attachment is pending acceptance, changing this value will recreate the resource.
*/
  applianceModeSupport?: boolean;

  /*
Indicates whether IPv6 is supported.
If the VPC attachment is pending acceptance, changing this value will recreate the resource.
*/
  ipv6Support?: boolean;
}

export function networkmanager_VpcAttachmentOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "applianceModeSupport",
      "Indicates whether appliance mode is supported.\nIf enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow.\nIf the VPC attachment is pending acceptance, changing this value will recreate the resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ipv6Support",
      "Indicates whether IPv6 is supported.\nIf the VPC attachment is pending acceptance, changing this value will recreate the resource.",
      () => [],
      false,
      false,
    ),
  ];
}
