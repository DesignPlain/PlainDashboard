import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EmailIdentityFeedbackAttributesArgs {
  // Sets the feedback forwarding configuration for the identity.
  emailForwardingEnabled?: boolean;

  // The email identity.
  emailIdentity?: string;
}
export class EmailIdentityFeedbackAttributes extends Resource {
  // Sets the feedback forwarding configuration for the identity.
  public emailForwardingEnabled?: boolean;

  // The email identity.
  public emailIdentity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "emailForwardingEnabled",
        "Sets the feedback forwarding configuration for the identity.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "emailIdentity",
        "The email identity.",
        [],
        true,
        true,
      ),
    ];
  }
}
