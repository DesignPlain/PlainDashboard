import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InviteAccepterArgs {
  // The account ID of the master Security Hub account whose invitation you're accepting.
  masterId?: string;
}
export class InviteAccepter extends Resource {
  // The ID of the invitation.
  public invitationId?: string;

  // The account ID of the master Security Hub account whose invitation you're accepting.
  public masterId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "masterId",
        "The account ID of the master Security Hub account whose invitation you're accepting.",
        [],
        true,
        true,
      ),
    ];
  }
}
