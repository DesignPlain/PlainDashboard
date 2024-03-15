import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EnvKeystoreArgs {
  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  EnvId?: string;

  // The name of the newly created keystore.
  Name?: string;
}
export class EnvKeystore extends Resource {
  // Aliases in this keystore.
  public Aliases?: Array<string>;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  public EnvId?: string;

  // The name of the newly created keystore.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EnvId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the newly created keystore.",
      ),
    ];
  }
}
