import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ManagementServerNetwork } from "../types/ManagementServerNetwork";
import { ManagementServerManagementUri } from "../types/ManagementServerManagementUri";

export interface ManagementServerArgs {
  // The location for the management server (management console)
  Location?: string;

  // The name of management server (management console)
  Name?: string;

  /*
Network details to create management server (management console).
Structure is documented below.
*/
  Networks?: Array<ManagementServerNetwork>;

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
}
export class ManagementServer extends Resource {
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
  public ManagementUris?: Array<ManagementServerManagementUri>;

  // The name of management server (management console)
  public Name?: string;

  /*
Network details to create management server (management console).
Structure is documented below.
*/
  public Networks?: Array<ManagementServerNetwork>;

  // The oauth2ClientId of management console.
  public Oauth2ClientId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the management server (management console)",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of management server (management console)",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Networks",
        "Network details to create management server (management console).\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of management server (management console).\nDefault value is `BACKUP_RESTORE`.\nPossible values are: `BACKUP_RESTORE`.",
      ),
    ];
  }
}
