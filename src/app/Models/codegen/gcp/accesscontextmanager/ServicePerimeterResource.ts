import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ServicePerimeterResourceArgs {
  /*
A GCP resource that is inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
*/
  resource?: string;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  perimeterName?: string;
}
export class ServicePerimeterResource extends DS_Resource {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public perimeterName?: string;

  /*
A GCP resource that is inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
*/
  public resource?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "perimeterName",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resource",
        "A GCP resource that is inside of the service perimeter.\nCurrently only projects are allowed.\nFormat: projects/{project_number}",
        () => [],
        true,
        true,
      ),
    ];
  }
}
