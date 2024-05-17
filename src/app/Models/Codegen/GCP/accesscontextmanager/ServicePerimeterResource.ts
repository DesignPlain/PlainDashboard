import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServicePerimeterResourceArgs {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  PerimeterName?: string;

  /*
A GCP resource that is inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
*/
  Resource?: string;
}
export class ServicePerimeterResource extends Resource {
  /*
A GCP resource that is inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
*/
  public Resource?: string;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public PerimeterName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PerimeterName",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Resource",
        "A GCP resource that is inside of the service perimeter.\nCurrently only projects are allowed.\nFormat: projects/{project_number}",
        [],
        true,
        true,
      ),
    ];
  }
}
