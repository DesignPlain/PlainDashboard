import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface chime_VoiceConnectorGroupConnector {
  // The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.
  priority?: number;

  // The Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;
}

export function chime_VoiceConnectorGroupConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "voiceConnectorId",
      "The Amazon Chime Voice Connector ID.",
      [],
      true,
      false,
    ),
  ];
}
