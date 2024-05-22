import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface guardduty_DetectorFeatureAdditionalConfiguration {
  // The name of the additional configuration. Valid values: `EKS_ADDON_MANAGEMENT`.
  name?: string;

  // The status of the additional configuration. Valid values: `ENABLED`, `DISABLED`.
  status?: string;
}

export function guardduty_DetectorFeatureAdditionalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the additional configuration. Valid values: `EKS_ADDON_MANAGEMENT`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the additional configuration. Valid values: `ENABLED`, `DISABLED`.",
      [],
      true,
      false,
    ),
  ];
}
