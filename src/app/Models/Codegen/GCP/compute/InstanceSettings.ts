import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceSettingsMetadata,
  Compute_InstanceSettingsMetadata_GetTypes,
} from "../types/Compute_InstanceSettingsMetadata";

export interface InstanceSettingsArgs {
  /*
The metadata key/value pairs assigned to all the instances in the corresponding scope.
Structure is documented below.
*/
  Metadata?: Compute_InstanceSettingsMetadata;

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
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public Fingerprint?: string;

  /*
The metadata key/value pairs assigned to all the instances in the corresponding scope.
Structure is documented below.
*/
  public Metadata?: Compute_InstanceSettingsMetadata;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Metadata",
        "The metadata key/value pairs assigned to all the instances in the corresponding scope.\nStructure is documented below.",
        Compute_InstanceSettingsMetadata_GetTypes(),
        false,
        false,
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
        "Zone",
        "A reference to the zone where the machine resides.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
