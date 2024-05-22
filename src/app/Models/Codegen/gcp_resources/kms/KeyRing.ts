import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface KeyRingArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The location for the KeyRing.
A full list of valid locations can be found by running `gcloud kms locations list`.


- - -
*/
  location?: string;

  // The resource name for the KeyRing.
  name?: string;
}
export class KeyRing extends Resource {
  /*
The location for the KeyRing.
A full list of valid locations can be found by running `gcloud kms locations list`.


- - -
*/
  public location?: string;

  // The resource name for the KeyRing.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "location",
        "The location for the KeyRing.\nA full list of valid locations can be found by running `gcloud kms locations list`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name for the KeyRing.",
        [],
        false,
        true,
      ),
    ];
  }
}
