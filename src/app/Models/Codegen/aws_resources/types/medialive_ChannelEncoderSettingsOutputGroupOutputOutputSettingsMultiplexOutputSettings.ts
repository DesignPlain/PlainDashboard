import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings {
  // Destination is a multiplex. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "Destination is a multiplex. See Destination for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsMultiplexOutputSettingsDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
