import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  chime_VoiceConnectorGroupConnector,
  chime_VoiceConnectorGroupConnector_GetTypes,
} from "../types/chime_VoiceConnectorGroupConnector";

export interface VoiceConnectorGroupArgs {
  // The Amazon Chime Voice Connectors to route inbound calls to.
  connectors?: Array<chime_VoiceConnectorGroupConnector>;

  // The name of the Amazon Chime Voice Connector group.
  name?: string;
}
export class VoiceConnectorGroup extends Resource {
  // The Amazon Chime Voice Connectors to route inbound calls to.
  public connectors?: Array<chime_VoiceConnectorGroupConnector>;

  // The name of the Amazon Chime Voice Connector group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "connectors",
        "The Amazon Chime Voice Connectors to route inbound calls to.",
        chime_VoiceConnectorGroupConnector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Amazon Chime Voice Connector group.",
        [],
        false,
        false,
      ),
    ];
  }
}
