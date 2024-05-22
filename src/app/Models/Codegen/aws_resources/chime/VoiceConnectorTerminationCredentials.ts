import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  chime_VoiceConnectorTerminationCredentialsCredential,
  chime_VoiceConnectorTerminationCredentialsCredential_GetTypes,
} from "../types/chime_VoiceConnectorTerminationCredentialsCredential";

export interface VoiceConnectorTerminationCredentialsArgs {
  // List of termination SIP credentials.
  credentials?: Array<chime_VoiceConnectorTerminationCredentialsCredential>;

  // Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;
}
export class VoiceConnectorTerminationCredentials extends Resource {
  // List of termination SIP credentials.
  public credentials?: Array<chime_VoiceConnectorTerminationCredentialsCredential>;

  // Amazon Chime Voice Connector ID.
  public voiceConnectorId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "credentials",
        "List of termination SIP credentials.",
        chime_VoiceConnectorTerminationCredentialsCredential_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "voiceConnectorId",
        "Amazon Chime Voice Connector ID.",
        [],
        true,
        true,
      ),
    ];
  }
}
