import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange {
  // First port in the range.
  from?: number;

  // Last port in the range.
  to?: number;
}

export function finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "from",
      "First port in the range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "to",
      "Last port in the range.",
      [],
      true,
      false,
    ),
  ];
}
