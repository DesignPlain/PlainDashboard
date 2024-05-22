import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InvitationAccepterArgs {
  // The AWS account ID for the account that sent the invitation.
  administratorAccountId?: string;
}
export class InvitationAccepter extends Resource {
  // The unique identifier for the invitation.
  public invitationId?: string;

  // The AWS account ID for the account that sent the invitation.
  public administratorAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "administratorAccountId",
        "The AWS account ID for the account that sent the invitation.",
        [],
        true,
        true,
      ),
    ];
  }
}
