import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EnvGroupArgs {
  // The resource ID of the environment group.
  name?: string;

  /*
The Apigee Organization associated with the Apigee environment group,
in the format `organizations/{{org_name}}`.


- - -
*/
  orgId?: string;

  // Hostnames of the environment group.
  hostnames?: Array<string>;
}
export class EnvGroup extends Resource {
  // Hostnames of the environment group.
  public hostnames?: Array<string>;

  // The resource ID of the environment group.
  public name?: string;

  /*
The Apigee Organization associated with the Apigee environment group,
in the format `organizations/{{org_name}}`.


- - -
*/
  public orgId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The Apigee Organization associated with the Apigee environment group,\nin the format `organizations/{{org_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "hostnames",
        "Hostnames of the environment group.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource ID of the environment group.",
        [],
        false,
        true,
      ),
    ];
  }
}
