import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor,
  medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor_GetTypes,
} from "./medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor";
import {
  medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings,
  medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings_GetTypes,
} from "./medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings";

export interface medialive_MultiplexProgramMultiplexProgramSettings {
  // Enum for preferred channel pipeline. Options are `CURRENTLY_ACTIVE`, `PIPELINE_0`, or `PIPELINE_1`.
  preferredChannelPipeline?: string;

  // Unique program number.
  programNumber?: number;

  // Service Descriptor. See Service Descriptor for more details.
  serviceDescriptor?: medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor;

  // Video settings. See Video Settings for more details.
  videoSettings?: medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings;
}

export function medialive_MultiplexProgramMultiplexProgramSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "videoSettings",
      "Video settings. See Video Settings for more details.",
      () =>
        medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preferredChannelPipeline",
      "Enum for preferred channel pipeline. Options are `CURRENTLY_ACTIVE`, `PIPELINE_0`, or `PIPELINE_1`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "programNumber",
      "Unique program number.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceDescriptor",
      "Service Descriptor. See Service Descriptor for more details.",
      () =>
        medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor_GetTypes(),
      false,
      false,
    ),
  ];
}
