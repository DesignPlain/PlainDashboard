import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_EventPermissionCondition,
  cloudwatch_EventPermissionCondition_GetTypes,
} from "../types/cloudwatch_EventPermissionCondition";

export interface EventPermissionArgs {
  // The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify `-` to permit any account to put events to your default event bus, optionally limited by `condition`.
  principal?: string;

  // An identifier string for the external account that you are granting permissions to.
  statementId?: string;

  // The action that you are enabling the other account to perform. Defaults to `events:PutEvents`.
  action?: string;

  // Configuration block to limit the event bus permissions you are granting to only accounts that fulfill the condition. Specified below.
  condition?: cloudwatch_EventPermissionCondition;

  /*
The name of the event bus to set the permissions on.
If you omit this, the permissions are set on the `default` event bus.
*/
  eventBusName?: string;
}
export class EventPermission extends Resource {
  // The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify `-` to permit any account to put events to your default event bus, optionally limited by `condition`.
  public principal?: string;

  // An identifier string for the external account that you are granting permissions to.
  public statementId?: string;

  // The action that you are enabling the other account to perform. Defaults to `events:PutEvents`.
  public action?: string;

  // Configuration block to limit the event bus permissions you are granting to only accounts that fulfill the condition. Specified below.
  public condition?: cloudwatch_EventPermissionCondition;

  /*
The name of the event bus to set the permissions on.
If you omit this, the permissions are set on the `default` event bus.
*/
  public eventBusName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "statementId",
        "An identifier string for the external account that you are granting permissions to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "The action that you are enabling the other account to perform. Defaults to `events:PutEvents`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "Configuration block to limit the event bus permissions you are granting to only accounts that fulfill the condition. Specified below.",
        cloudwatch_EventPermissionCondition_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventBusName",
        "The name of the event bus to set the permissions on.\nIf you omit this, the permissions are set on the `default` event bus.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principal",
        "The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify `*` to permit any account to put events to your default event bus, optionally limited by `condition`.",
        [],
        true,
        false,
      ),
    ];
  }
}
