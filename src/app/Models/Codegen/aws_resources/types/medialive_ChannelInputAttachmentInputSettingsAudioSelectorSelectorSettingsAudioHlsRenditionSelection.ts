import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection {
  // Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
  name?: string;

  // Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
  groupId?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupId",
      "Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.",
      [],
      true,
      false,
    ),
  ];
}
