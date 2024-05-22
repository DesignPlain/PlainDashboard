import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VoiceConnectorTerminationArgs {
  // The Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;

  // The countries to which calls are allowed, in ISO 3166-1 alpha-2 format.
  callingRegions?: Array<string>;

  // The IP addresses allowed to make calls, in CIDR format.
  cidrAllowLists?: Array<string>;

  // The limit on calls per second. Max value based on account service quota. Default value of `1`.
  cpsLimit?: number;

  // The default caller ID phone number.
  defaultPhoneNumber?: string;

  // When termination settings are disabled, outbound calls can not be made.
  disabled?: boolean;
}
export class VoiceConnectorTermination extends Resource {
  // The limit on calls per second. Max value based on account service quota. Default value of `1`.
  public cpsLimit?: number;

  // The default caller ID phone number.
  public defaultPhoneNumber?: string;

  // When termination settings are disabled, outbound calls can not be made.
  public disabled?: boolean;

  // The Amazon Chime Voice Connector ID.
  public voiceConnectorId?: string;

  // The countries to which calls are allowed, in ISO 3166-1 alpha-2 format.
  public callingRegions?: Array<string>;

  // The IP addresses allowed to make calls, in CIDR format.
  public cidrAllowLists?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "cpsLimit",
        "The limit on calls per second. Max value based on account service quota. Default value of `1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultPhoneNumber",
        "The default caller ID phone number.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "When termination settings are disabled, outbound calls can not be made.",
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
        InputType.Array,
        "callingRegions",
        "The countries to which calls are allowed, in ISO 3166-1 alpha-2 format.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cidrAllowLists",
        "The IP addresses allowed to make calls, in CIDR format.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
