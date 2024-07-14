import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_getDetectorFeatureAdditionalConfiguration,
  guardduty_getDetectorFeatureAdditionalConfiguration_GetTypes,
} from "./guardduty_getDetectorFeatureAdditionalConfiguration";

export interface guardduty_getDetectorFeature {
  // Additional feature configuration.
  additionalConfigurations?: Array<guardduty_getDetectorFeatureAdditionalConfiguration>;

  // The name of the detector feature.
  name?: string;

  // Current status of the detector.
  status?: string;
}

export function guardduty_getDetectorFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Current status of the detector.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalConfigurations",
      "Additional feature configuration.",
      guardduty_getDetectorFeatureAdditionalConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the detector feature.",
      [],
      true,
      false,
    ),
  ];
}
