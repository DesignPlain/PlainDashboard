import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  directoryservice_SharedDirectoryTarget,
  directoryservice_SharedDirectoryTarget_GetTypes,
} from "../types/directoryservice_SharedDirectoryTarget";

export interface SharedDirectoryArgs {
  // Identifier of the Managed Microsoft AD directory that you want to share with other accounts.
  directoryId?: string;

  // Method used when sharing a directory. Valid values are `ORGANIZATIONS` and `HANDSHAKE`. Default is `HANDSHAKE`.
  method?: string;

  // Message sent by the directory owner to the directory consumer to help the directory consumer administrator determine whether to approve or reject the share invitation.
  notes?: string;

  /*
Identifier for the directory consumer account with whom the directory is to be shared. See below.

The following arguments are optional:
*/
  target?: directoryservice_SharedDirectoryTarget;
}
export class SharedDirectory extends Resource {
  // Identifier of the Managed Microsoft AD directory that you want to share with other accounts.
  public directoryId?: string;

  // Method used when sharing a directory. Valid values are `ORGANIZATIONS` and `HANDSHAKE`. Default is `HANDSHAKE`.
  public method?: string;

  // Message sent by the directory owner to the directory consumer to help the directory consumer administrator determine whether to approve or reject the share invitation.
  public notes?: string;

  // Identifier of the directory that is stored in the directory consumer account that corresponds to the shared directory in the owner account.
  public sharedDirectoryId?: string;

  /*
Identifier for the directory consumer account with whom the directory is to be shared. See below.

The following arguments are optional:
*/
  public target?: directoryservice_SharedDirectoryTarget;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "Identifier of the Managed Microsoft AD directory that you want to share with other accounts.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "method",
        "Method used when sharing a directory. Valid values are `ORGANIZATIONS` and `HANDSHAKE`. Default is `HANDSHAKE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notes",
        "Message sent by the directory owner to the directory consumer to help the directory consumer administrator determine whether to approve or reject the share invitation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "target",
        "Identifier for the directory consumer account with whom the directory is to be shared. See below.\n\nThe following arguments are optional:",
        directoryservice_SharedDirectoryTarget_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
