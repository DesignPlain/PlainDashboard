import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chime_VoiceConnectorGroupConnector,
  chime_VoiceConnectorGroupConnector_GetTypes,
} from "../types/chime_VoiceConnectorGroupConnector";

export interface VoiceConnectorGroupArgs {
  // The name of the Amazon Chime Voice Connector group.
  name?: string;

  // The Amazon Chime Voice Connectors to route inbound calls to.
  connectors?: Array<chime_VoiceConnectorGroupConnector>;
}
export class VoiceConnectorGroup extends DS_Resource {
  // The Amazon Chime Voice Connectors to route inbound calls to.
  public connectors?: Array<chime_VoiceConnectorGroupConnector>;

  // The name of the Amazon Chime Voice Connector group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Amazon Chime Voice Connector group.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "connectors",
        "The Amazon Chime Voice Connectors to route inbound calls to.",
        () => chime_VoiceConnectorGroupConnector_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
