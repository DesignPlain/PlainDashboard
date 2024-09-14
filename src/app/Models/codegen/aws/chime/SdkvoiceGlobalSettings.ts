import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chime_SdkvoiceGlobalSettingsVoiceConnector,
  chime_SdkvoiceGlobalSettingsVoiceConnector_GetTypes,
} from "../types/chime_SdkvoiceGlobalSettingsVoiceConnector";

export interface SdkvoiceGlobalSettingsArgs {
  // The Voice Connector settings. See voice_connector.
  voiceConnector?: chime_SdkvoiceGlobalSettingsVoiceConnector;
}
export class SdkvoiceGlobalSettings extends DS_Resource {
  // The Voice Connector settings. See voice_connector.
  public voiceConnector?: chime_SdkvoiceGlobalSettingsVoiceConnector;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "voiceConnector",
        "The Voice Connector settings. See voice_connector.",
        () => chime_SdkvoiceGlobalSettingsVoiceConnector_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
