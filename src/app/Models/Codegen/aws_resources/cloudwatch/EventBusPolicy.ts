import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EventBusPolicyArgs {
  /*
The name of the event bus to set the permissions on.
If you omit this, the permissions are set on the `default` event bus.
*/
  eventBusName?: string;

  // The text of the policy.
  policy?: string;
}
export class EventBusPolicy extends Resource {
  /*
The name of the event bus to set the permissions on.
If you omit this, the permissions are set on the `default` event bus.
*/
  public eventBusName?: string;

  // The text of the policy.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "policy",
        "The text of the policy.",
        [],
        true,
        false,
      ),
    ];
  }
}
