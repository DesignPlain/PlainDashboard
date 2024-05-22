import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelDestinationMediaPackageSetting {
  // ID of the channel in MediaPackage that is the destination for this output group.
  channelId?: string;
}

export function medialive_ChannelDestinationMediaPackageSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "channelId",
      "ID of the channel in MediaPackage that is the destination for this output group.",
      [],
      true,
      false,
    ),
  ];
}
