import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceAttachmentArgs {
  // The resource ID of the environment.
  Environment?: string;

  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  InstanceId?: string;
}
export class InstanceAttachment extends Resource {
  // The resource ID of the environment.
  public Environment?: string;

  /*
The Apigee instance associated with the Apigee environment,
in the format `organizations/{{org_name}}/instances/{{instance_name}}`.


- - -
*/
  public InstanceId?: string;

  // The name of the newly created  attachment (output parameter).
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "The resource ID of the environment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The Apigee instance associated with the Apigee environment,\nin the format `organizations/{{org_name}}/instances/{{instance_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
