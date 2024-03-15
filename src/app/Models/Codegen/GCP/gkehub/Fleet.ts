import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FleetDefaultClusterConfig } from "../types/FleetDefaultClusterConfig";
import { FleetState } from "../types/FleetState";

export interface FleetArgs {
  /*
The default cluster configurations to apply across the fleet.
Structure is documented below.
*/
  DefaultClusterConfig?: FleetDefaultClusterConfig;

  /*
A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.
*/
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Fleet extends Resource {
  /*
A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.
*/
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The state of the fleet resource.
Structure is documented below.
*/
  public States?: Array<FleetState>;

  /*
Google-generated UUID for this resource. This is unique across all
Fleet resources. If a Fleet resource is deleted and another
resource with the same name is created, it gets a different uid.
*/
  public Uid?: string;

  // The time the fleet was last updated, in RFC3339 text format.
  public UpdateTime?: string;

  // The time the fleet was created, in RFC3339 text format.
  public CreateTime?: string;

  /*
The default cluster configurations to apply across the fleet.
Structure is documented below.
*/
  public DefaultClusterConfig?: FleetDefaultClusterConfig;

  // The time the fleet was deleted, in RFC3339 text format.
  public DeleteTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters.\nAllowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultClusterConfig",
        "The default cluster configurations to apply across the fleet.\nStructure is documented below.",
      ),
    ];
  }
}
