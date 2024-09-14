import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceSettingsMetadata,
  compute_InstanceSettingsMetadata_GetTypes,
} from "../types/compute_InstanceSettingsMetadata";

export interface InstanceSettingsArgs {
  /*
The metadata key/value pairs assigned to all the instances in the corresponding scope.
Structure is documented below.
*/
  metadata?: compute_InstanceSettingsMetadata;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  zone?: string;
}
export class InstanceSettings extends DS_Resource {
  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public fingerprint?: string;

  /*
The metadata key/value pairs assigned to all the instances in the corresponding scope.
Structure is documented below.
*/
  public metadata?: compute_InstanceSettingsMetadata;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
A reference to the zone where the machine resides.


- - -
*/
  public zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "metadata",
        "The metadata key/value pairs assigned to all the instances in the corresponding scope.\nStructure is documented below.",
        () => compute_InstanceSettingsMetadata_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "A reference to the zone where the machine resides.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
    ];
  }
}
