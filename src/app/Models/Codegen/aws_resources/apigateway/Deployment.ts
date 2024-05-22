import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DeploymentArgs {
  // Map to set on the stage managed by the `stage_name` argument.
  variables?: Map<string, string>;

  // Description of the deployment
  description?: string;

  // REST API identifier.
  restApi?: string;

  // Description to set on the stage managed by the `stage_name` argument.
  stageDescription?: string;

  // Name of the stage to create with this deployment. If the specified stage already exists, it will be updated to point to the new deployment. We recommend using the `aws.apigateway.Stage` resource instead to manage stages.
  stageName?: string;

  // Map of arbitrary keys and values that, when changed, will trigger a redeployment.
  triggers?: Map<string, string>;
}
export class Deployment extends Resource {
  // Creation date of the deployment
  public createdDate?: string;

  // REST API identifier.
  public restApi?: string;

  // Description to set on the stage managed by the `stage_name` argument.
  public stageDescription?: string;

  // Description of the deployment
  public description?: string;

  /*
Execution ARN to be used in `lambda_permission`'s `source_arn`
when allowing API Gateway to invoke a Lambda function,
e.g., `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
*/
  public executionArn?: string;

  /*
URL to invoke the API pointing to the stage,
e.g., `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
*/
  public invokeUrl?: string;

  // Name of the stage to create with this deployment. If the specified stage already exists, it will be updated to point to the new deployment. We recommend using the `aws.apigateway.Stage` resource instead to manage stages.
  public stageName?: string;

  // Map of arbitrary keys and values that, when changed, will trigger a redeployment.
  public triggers?: Map<string, string>;

  // Map to set on the stage managed by the `stage_name` argument.
  public variables?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "variables",
        "Map to set on the stage managed by the `stage_name` argument.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the deployment",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "REST API identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stageDescription",
        "Description to set on the stage managed by the `stage_name` argument.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stageName",
        "Name of the stage to create with this deployment. If the specified stage already exists, it will be updated to point to the new deployment. We recommend using the `aws.apigateway.Stage` resource instead to manage stages.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "triggers",
        "Map of arbitrary keys and values that, when changed, will trigger a redeployment.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
