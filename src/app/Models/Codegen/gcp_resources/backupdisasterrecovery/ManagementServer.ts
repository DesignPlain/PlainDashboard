import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  backupdisasterrecovery_ManagementServerNetwork,
  backupdisasterrecovery_ManagementServerNetwork_GetTypes,
} from "../types/backupdisasterrecovery_ManagementServerNetwork";
import {
  backupdisasterrecovery_ManagementServerManagementUri,
  backupdisasterrecovery_ManagementServerManagementUri_GetTypes,
} from "../types/backupdisasterrecovery_ManagementServerManagementUri";

export interface ManagementServerArgs {
  // The name of management server (management console)
  name?: string;

  /*
Network details to create management server (management console).
Structure is documented below.
*/
  networks?: Array<backupdisasterrecovery_ManagementServerNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The type of management server (management console).
Default value is `BACKUP_RESTORE`.
Possible values are: `BACKUP_RESTORE`.
*/
  type?: string;

  // The location for the management server (management console)
  location?: string;
}
export class ManagementServer extends Resource {
  /*
The type of management server (management console).
Default value is `BACKUP_RESTORE`.
Possible values are: `BACKUP_RESTORE`.
*/
  public type?: string;

  // The location for the management server (management console)
  public location?: string;

  /*
The management console URI
Structure is documented below.
*/
  public managementUris?: Array<backupdisasterrecovery_ManagementServerManagementUri>;

  // The name of management server (management console)
  public name?: string;

  /*
Network details to create management server (management console).
Structure is documented below.
*/
  public networks?: Array<backupdisasterrecovery_ManagementServerNetwork>;

  // The oauth2ClientId of management console.
  public oauth2ClientId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of management server (management console)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networks",
        "Network details to create management server (management console).\nStructure is documented below.",
        backupdisasterrecovery_ManagementServerNetwork_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of management server (management console).\nDefault value is `BACKUP_RESTORE`.\nPossible values are: `BACKUP_RESTORE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the management server (management console)",
        [],
        true,
        true,
      ),
    ];
  }
}
