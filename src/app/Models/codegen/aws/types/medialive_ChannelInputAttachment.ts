import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettings,
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentAutomaticInputFailoverSettings";
import {
  medialive_ChannelInputAttachmentInputSettings,
  medialive_ChannelInputAttachmentInputSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentInputSettings";

export interface medialive_ChannelInputAttachment {
  // User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input. See Automatic Input Failover Settings for more details.
  automaticInputFailoverSettings?: medialive_ChannelInputAttachmentAutomaticInputFailoverSettings;

  // User-specified name for the attachment.
  inputAttachmentName?: string;

  // The ID of the input.
  inputId?: string;

  // Settings of an input. See Input Settings for more details.
  inputSettings?: medialive_ChannelInputAttachmentInputSettings;
}

export function medialive_ChannelInputAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "automaticInputFailoverSettings",
      "User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input. See Automatic Input Failover Settings for more details.",
      () =>
        medialive_ChannelInputAttachmentAutomaticInputFailoverSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputAttachmentName",
      "User-specified name for the attachment.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputId",
      "The ID of the input.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inputSettings",
      "Settings of an input. See Input Settings for more details.",
      () => medialive_ChannelInputAttachmentInputSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
