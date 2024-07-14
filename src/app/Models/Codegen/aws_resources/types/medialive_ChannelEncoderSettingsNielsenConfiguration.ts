import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelEncoderSettingsNielsenConfiguration {
  // Enter the Distributor ID assigned to your organization by Nielsen.
  distributorId?: string;

  // Enables Nielsen PCM to ID3 tagging.
  nielsenPcmToId3Tagging?: string;
}

export function medialive_ChannelEncoderSettingsNielsenConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "distributorId",
      "Enter the Distributor ID assigned to your organization by Nielsen.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nielsenPcmToId3Tagging",
      "Enables Nielsen PCM to ID3 tagging.",
      [],
      false,
      false,
    ),
  ];
}
