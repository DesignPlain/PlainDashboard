import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SharedDirectoryAccepterArgs {
  // Identifier of the directory that is stored in the directory consumer account that corresponds to the shared directory in the owner account.
  sharedDirectoryId?: string;
}
export class SharedDirectoryAccepter extends DS_Resource {
  // Method used when sharing a directory (i.e., `ORGANIZATIONS` or `HANDSHAKE`).
  public method?: string;

  // Message sent by the directory owner to the directory consumer to help the directory consumer administrator determine whether to approve or reject the share invitation.
  public notes?: string;

  // Account identifier of the directory owner.
  public ownerAccountId?: string;

  // Identifier of the Managed Microsoft AD directory from the perspective of the directory owner.
  public ownerDirectoryId?: string;

  // Identifier of the directory that is stored in the directory consumer account that corresponds to the shared directory in the owner account.
  public sharedDirectoryId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sharedDirectoryId",
        "Identifier of the directory that is stored in the directory consumer account that corresponds to the shared directory in the owner account.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
