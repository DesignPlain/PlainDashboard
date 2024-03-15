import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EnvGroupArgs {
  // Hostnames of the environment group.
  Hostnames?: Array<string>;

  // The resource ID of the environment group.
  Name?: string;

  /*
The Apigee Organization associated with the Apigee environment group,
in the format `organizations/{{org_name}}`.


- - -
*/
  OrgId?: string;
}
export class EnvGroup extends Resource {
  /*
The Apigee Organization associated with the Apigee environment group,
in the format `organizations/{{org_name}}`.


- - -
*/
  public OrgId?: string;

  // Hostnames of the environment group.
  public Hostnames?: Array<string>;

  // The resource ID of the environment group.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "Hostnames",
        "Hostnames of the environment group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource ID of the environment group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the Apigee environment group,\nin the format `organizations/{{org_name}}`.\n\n\n- - -",
      ),
    ];
  }
}