import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface InviteAccepterArgs {
  // The account ID of the master Security Hub account whose invitation you're accepting.
  masterId?: string;
}
export class InviteAccepter extends DS_Resource {
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
        () => [],
        true,
        true,
      ),
    ];
  }
}
