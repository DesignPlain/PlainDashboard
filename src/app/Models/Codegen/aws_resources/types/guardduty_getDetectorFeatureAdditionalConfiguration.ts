import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface guardduty_getDetectorFeatureAdditionalConfiguration {
  // The name of the detector feature.
  name?: string;

  // Current status of the detector.
  status?: string;
}

export function guardduty_getDetectorFeatureAdditionalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the detector feature.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Current status of the detector.",
      [],
      true,
      false,
    ),
  ];
}
