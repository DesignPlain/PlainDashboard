import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings";
import {
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings,
  medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings_GetTypes,
} from "./medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings {
  //
  fecOutputSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings;

  // UDP output buffering in milliseconds.
  bufferMsec?: number;

  // UDP container settings. See Container Settings for more details.
  containerSettings?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings;

  // Destination address and port number for RTP or UDP packets. See Destination for more details.
  destination?: medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerSettings",
      "UDP container settings. See Container Settings for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsContainerSettings_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "Destination address and port number for RTP or UDP packets. See Destination for more details.",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fecOutputSettings",
      "",
      medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsUdpOutputSettingsFecOutputSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferMsec",
      "UDP output buffering in milliseconds.",
      [],
      false,
      false,
    ),
  ];
}
