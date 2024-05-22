import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings,
  medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings_GetTypes,
} from "./medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings";
import {
  medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor,
  medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor_GetTypes,
} from "./medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor";

export interface medialive_MultiplexProgramMultiplexProgramSettings {
  // Video settings. See Video Settings for more details.
  videoSettings?: medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings;

  // Enum for preferred channel pipeline. Options are `CURRENTLY_ACTIVE`, `PIPELINE_0`, or `PIPELINE_1`.
  preferredChannelPipeline?: string;

  // Unique program number.
  programNumber?: number;

  // Service Descriptor. See Service Descriptor for more details.
  serviceDescriptor?: medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor;
}

export function medialive_MultiplexProgramMultiplexProgramSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "programNumber",
      "Unique program number.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceDescriptor",
      "Service Descriptor. See Service Descriptor for more details.",
      medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "videoSettings",
      "Video settings. See Video Settings for more details.",
      medialive_MultiplexProgramMultiplexProgramSettingsVideoSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "preferredChannelPipeline",
      "Enum for preferred channel pipeline. Options are `CURRENTLY_ACTIVE`, `PIPELINE_0`, or `PIPELINE_1`.",
      [],
      true,
      false,
    ),
  ];
}
