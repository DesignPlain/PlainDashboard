import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutput,
  medialive_ChannelEncoderSettingsOutputGroupOutput_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutput";

export interface medialive_ChannelEncoderSettingsOutputGroup {
  // Custom output group name defined by the user.
  name?: string;

  // Settings associated with the output group. See Output Group Settings for more details.
  outputGroupSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings;

  // List of outputs. See Outputs for more details.
  outputs?: Array<medialive_ChannelEncoderSettingsOutputGroupOutput>;
}

export function medialive_ChannelEncoderSettingsOutputGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Custom output group name defined by the user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "outputGroupSettings",
      "Settings associated with the output group. See Output Group Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputGroupSettings_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outputs",
      "List of outputs. See Outputs for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutput_GetTypes(),
      true,
      false,
    ),
  ];
}
