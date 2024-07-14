import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface guardduty_OrganizationConfigurationFeatureAdditionalConfiguration {
  // The status of the additional configuration that will be configured for the organization. Valid values: `NEW`, `ALL`, `NONE`.
  autoEnable?: string;

  // The name of the additional configuration that will be configured for the organization. Valid values: `EKS_ADDON_MANAGEMENT`.
  name?: string;
}

export function guardduty_OrganizationConfigurationFeatureAdditionalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "autoEnable",
      "The status of the additional configuration that will be configured for the organization. Valid values: `NEW`, `ALL`, `NONE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the additional configuration that will be configured for the organization. Valid values: `EKS_ADDON_MANAGEMENT`.",
      [],
      true,
      true,
    ),
  ];
}
