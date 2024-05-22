import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode {
  // ICMP code. A value of `-1` means all codes for the specified ICMP type.
  code?: number;

  // ICMP type. A value of `-1` means all types.
  type?: number;
}

export function finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "code",
      "ICMP code. A value of `-1` means all codes for the specified ICMP type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "type",
      "ICMP type. A value of `-1` means all types.",
      [],
      true,
      false,
    ),
  ];
}
