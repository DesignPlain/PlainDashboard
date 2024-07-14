import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InstanceArgs {
  // Specifies whether auto resolve best voices is enabled. Defaults to `true`.
  autoResolveBestVoicesEnabled?: boolean;

  // Specifies whether contact lens is enabled. Defaults to `true`.
  contactLensEnabled?: boolean;

  // The identifier for the directory if identity_management_type is `EXISTING_DIRECTORY`.
  directoryId?: string;

  // Specifies whether inbound calls are enabled.
  inboundCallsEnabled?: boolean;

  /*
Specifies whether outbound calls are enabled.
<!-- - `use_custom_tts_voices` - (Optional) Whether use custom tts voices is enabled. Defaults to `false` -->
*/
  outboundCallsEnabled?: boolean;

  // Specifies whether contact flow logs are enabled. Defaults to `false`.
  contactFlowLogsEnabled?: boolean;

  // Specifies whether early media for outbound calls is enabled . Defaults to `true` if outbound calls is enabled.
  earlyMediaEnabled?: boolean;

  // Specifies the identity management type attached to the instance. Allowed Values are: `SAML`, `CONNECT_MANAGED`, `EXISTING_DIRECTORY`.
  identityManagementType?: string;

  // Specifies the name of the instance. Required if `directory_id` not specified.
  instanceAlias?: string;

  // Specifies whether multi-party calls/conference is enabled. Defaults to `false`.
  multiPartyConferenceEnabled?: boolean;
}
export class Instance extends Resource {
  // When the instance was created.
  public createdTime?: string;

  // The service role of the instance.
  public serviceRole?: string;

  // The state of the instance.
  public status?: string;

  // Amazon Resource Name (ARN) of the instance.
  public arn?: string;

  // Specifies whether contact lens is enabled. Defaults to `true`.
  public contactLensEnabled?: boolean;

  // The identifier for the directory if identity_management_type is `EXISTING_DIRECTORY`.
  public directoryId?: string;

  // Specifies whether early media for outbound calls is enabled . Defaults to `true` if outbound calls is enabled.
  public earlyMediaEnabled?: boolean;

  // Specifies whether auto resolve best voices is enabled. Defaults to `true`.
  public autoResolveBestVoicesEnabled?: boolean;

  // Specifies the identity management type attached to the instance. Allowed Values are: `SAML`, `CONNECT_MANAGED`, `EXISTING_DIRECTORY`.
  public identityManagementType?: string;

  // Specifies whether multi-party calls/conference is enabled. Defaults to `false`.
  public multiPartyConferenceEnabled?: boolean;

  /*
Specifies whether outbound calls are enabled.
<!-- - `use_custom_tts_voices` - (Optional) Whether use custom tts voices is enabled. Defaults to `false` -->
*/
  public outboundCallsEnabled?: boolean;

  // Specifies whether contact flow logs are enabled. Defaults to `false`.
  public contactFlowLogsEnabled?: boolean;

  // Specifies whether inbound calls are enabled.
  public inboundCallsEnabled?: boolean;

  // Specifies the name of the instance. Required if `directory_id` not specified.
  public instanceAlias?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "contactFlowLogsEnabled",
        "Specifies whether contact flow logs are enabled. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "earlyMediaEnabled",
        "Specifies whether early media for outbound calls is enabled . Defaults to `true` if outbound calls is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceAlias",
        "Specifies the name of the instance. Required if `directory_id` not specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoResolveBestVoicesEnabled",
        "Specifies whether auto resolve best voices is enabled. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "The identifier for the directory if identity_management_type is `EXISTING_DIRECTORY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "inboundCallsEnabled",
        "Specifies whether inbound calls are enabled.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "outboundCallsEnabled",
        "Specifies whether outbound calls are enabled.\n<!-- * `use_custom_tts_voices` - (Optional) Whether use custom tts voices is enabled. Defaults to `false` -->",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityManagementType",
        "Specifies the identity management type attached to the instance. Allowed Values are: `SAML`, `CONNECT_MANAGED`, `EXISTING_DIRECTORY`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiPartyConferenceEnabled",
        "Specifies whether multi-party calls/conference is enabled. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "contactLensEnabled",
        "Specifies whether contact lens is enabled. Defaults to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
