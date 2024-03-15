import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceSettingsMetadata } from "../types/InstanceSettingsMetadata";

export interface InstanceSettingsArgs {
  /*
The metadata key/value pairs assigned to all the instances in the corresponding scope.
Structure is documented below.
*/
  Metadata?: InstanceSettingsMetadata;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  Zone?: string;
}
export class InstanceSettings extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public Zone?: string;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public Fingerprint?: string;

  /*
The metadata key/value pairs assigned to all the instances in the corresponding scope.
Structure is documented below.
*/
  public Metadata?: InstanceSettingsMetadata;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "The metadata key/value pairs assigned to all the instances in the corresponding scope.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "A reference to the zone where the machine resides.\n\n\n- - -",
      ),
    ];
  }
}
