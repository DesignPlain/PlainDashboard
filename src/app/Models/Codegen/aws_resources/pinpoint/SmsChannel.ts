import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SmsChannelArgs {
  // Identifier of the sender for your messages.
  senderId?: string;

  // Short Code registered with the phone provider.
  shortCode?: string;

  // ID of the application.
  applicationId?: string;

  // Whether the channel is enabled or disabled. By default, it is set to `true`.
  enabled?: boolean;
}
export class SmsChannel extends Resource {
  // ID of the application.
  public applicationId?: string;

  // Whether the channel is enabled or disabled. By default, it is set to `true`.
  public enabled?: boolean;

  // Maximum number of promotional messages that can be sent per second.
  public promotionalMessagesPerSecond?: number;

  // Identifier of the sender for your messages.
  public senderId?: string;

  // Short Code registered with the phone provider.
  public shortCode?: string;

  // Maximum number of transactional messages per second that can be sent.
  public transactionalMessagesPerSecond?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "senderId",
        "Identifier of the sender for your messages.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "shortCode",
        "Short Code registered with the phone provider.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "ID of the application.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the channel is enabled or disabled. By default, it is set to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
