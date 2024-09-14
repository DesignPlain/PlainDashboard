import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VoiceConnectorLoggingArgs {
  // When true, enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.
  enableMediaMetricLogs?: boolean;

  // When true, enables SIP message logs for sending to Amazon CloudWatch Logs.
  enableSipLogs?: boolean;

  // The Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;
}
export class VoiceConnectorLogging extends DS_Resource {
  // When true, enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.
  public enableMediaMetricLogs?: boolean;

  // When true, enables SIP message logs for sending to Amazon CloudWatch Logs.
  public enableSipLogs?: boolean;

  // The Amazon Chime Voice Connector ID.
  public voiceConnectorId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enableMediaMetricLogs",
        "When true, enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableSipLogs",
        "When true, enables SIP message logs for sending to Amazon CloudWatch Logs.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "voiceConnectorId",
        "The Amazon Chime Voice Connector ID.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
