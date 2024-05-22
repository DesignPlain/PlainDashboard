import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VoiceConnectorLoggingArgs {
  // When true, enables SIP message logs for sending to Amazon CloudWatch Logs.
  enableSipLogs?: boolean;

  // The Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;

  // When true, enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.
  enableMediaMetricLogs?: boolean;
}
export class VoiceConnectorLogging extends Resource {
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
        "enableSipLogs",
        "When true, enables SIP message logs for sending to Amazon CloudWatch Logs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "voiceConnectorId",
        "The Amazon Chime Voice Connector ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableMediaMetricLogs",
        "When true, enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.",
        [],
        false,
        false,
      ),
    ];
  }
}
