import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SharedflowDeploymentArgs {
  // The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.
  ServiceAccount?: string;

  // Id of the Sharedflow to be deployed.
  SharedflowId?: string;

  // The resource ID of the environment.
  Environment?: string;

  // The Apigee Organization associated with the Sharedflow
  OrgId?: string;

  /*
Revision of the Sharedflow to be deployed.


- - -
*/
  Revision?: string;
}
export class SharedflowDeployment extends Resource {
  // Id of the Sharedflow to be deployed.
  public SharedflowId?: string;

  // The resource ID of the environment.
  public Environment?: string;

  // The Apigee Organization associated with the Sharedflow
  public OrgId?: string;

  /*
Revision of the Sharedflow to be deployed.


- - -
*/
  public Revision?: string;

  // The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.
  public ServiceAccount?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the Sharedflow",
      ),
      new DynamicUIProps(
        InputType.String,
        "Revision",
        "Revision of the Sharedflow to be deployed.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SharedflowId",
        "Id of the Sharedflow to be deployed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "The resource ID of the environment.",
      ),
    ];
  }
}
