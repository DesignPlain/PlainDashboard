import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SharedflowDeploymentArgs {
  // The resource ID of the environment.
  environment?: string;

  // The Apigee Organization associated with the Sharedflow
  orgId?: string;

  /*
Revision of the Sharedflow to be deployed.


- - -
*/
  revision?: string;

  // The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.
  serviceAccount?: string;

  // Id of the Sharedflow to be deployed.
  sharedflowId?: string;
}
export class SharedflowDeployment extends DS_Resource {
  // The resource ID of the environment.
  public environment?: string;

  // The Apigee Organization associated with the Sharedflow
  public orgId?: string;

  /*
Revision of the Sharedflow to be deployed.


- - -
*/
  public revision?: string;

  // The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.
  public serviceAccount?: string;

  // Id of the Sharedflow to be deployed.
  public sharedflowId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'revision',
        'Revision of the Sharedflow to be deployed.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceAccount',
        'The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sharedflowId',
        'Id of the Sharedflow to be deployed.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'environment',
        'The resource ID of the environment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'orgId',
        'The Apigee Organization associated with the Sharedflow',
        () => [],
        true,
        true,
      ),
    ];
  }
}
