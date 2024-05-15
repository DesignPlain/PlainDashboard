import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Backupdisasterrecovery_ManagementServerNetwork,
  Backupdisasterrecovery_ManagementServerNetwork_GetTypes,
} from "../types/Backupdisasterrecovery_ManagementServerNetwork";
import {
  Backupdisasterrecovery_ManagementServerManagementUri,
  Backupdisasterrecovery_ManagementServerManagementUri_GetTypes,
} from "../types/Backupdisasterrecovery_ManagementServerManagementUri";

export interface ManagementServerArgs {
  /*
Network details to create management server (management console).
Structure is documented below.
*/
  Networks?: Array<Backupdisasterrecovery_ManagementServerNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The type of management server (management console).
Default value is `BACKUP_RESTORE`.
Possible values are: `BACKUP_RESTORE`.
*/
  Type?: string;

  // The location for the management server (management console)
  Location?: string;

  // The name of management server (management console)
  Name?: string;
}
export class ManagementServer extends Resource {
  // The name of management server (management console)
  public Name?: string;

  /*
Network details to create management server (management console).
Structure is documented below.
*/
  public Networks?: Array<Backupdisasterrecovery_ManagementServerNetwork>;

  // The oauth2ClientId of management console.
  public Oauth2ClientId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The type of management server (management console).
Default value is `BACKUP_RESTORE`.
Possible values are: `BACKUP_RESTORE`.
*/
  public Type?: string;

  // The location for the management server (management console)
  public Location?: string;

  /*
The management console URI
Structure is documented below.
*/
  public ManagementUris?: Array<Backupdisasterrecovery_ManagementServerManagementUri>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Networks",
        "Network details to create management server (management console).\nStructure is documented below.",
        Backupdisasterrecovery_ManagementServerNetwork_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of management server (management console).\nDefault value is `BACKUP_RESTORE`.\nPossible values are: `BACKUP_RESTORE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the management server (management console)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of management server (management console)",
        [],
        false,
        true,
      ),
    ];
  }
}
