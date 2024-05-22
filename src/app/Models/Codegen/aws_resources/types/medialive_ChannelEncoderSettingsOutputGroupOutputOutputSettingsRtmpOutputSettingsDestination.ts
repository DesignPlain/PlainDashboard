import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination {
  // Reference ID for the destination.
  destinationRefId?: string;
}

export function medialive_ChannelEncoderSettingsOutputGroupOutputOutputSettingsRtmpOutputSettingsDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationRefId",
      "Reference ID for the destination.",
      [],
      true,
      false,
    ),
  ];
}
