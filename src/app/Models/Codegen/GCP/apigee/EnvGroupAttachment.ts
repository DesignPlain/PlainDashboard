import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EnvGroupAttachmentArgs {
  // The resource ID of the environment.
  Environment?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/envgroups/{{envgroup_name}}`.


- - -
*/
  EnvgroupId?: string;
}
export class EnvGroupAttachment extends Resource {
  // The resource ID of the environment.
  public Environment?: string;

  // The name of the newly created  attachment (output parameter).
  public Name?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/envgroups/{{envgroup_name}}`.


- - -
*/
  public EnvgroupId?: string;

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
        "EnvgroupId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/envgroups/{{envgroup_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
