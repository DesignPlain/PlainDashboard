import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EmailIdentityArgs {
  // The email address to assign to SES.
  email?: string;
}
export class EmailIdentity extends Resource {
  // The ARN of the email identity.
  public arn?: string;

  // The email address to assign to SES.
  public email?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "email",
        "The email address to assign to SES.",
        [],
        true,
        true,
      ),
    ];
  }
}
