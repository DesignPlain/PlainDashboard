import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apprunner_DeploymentTimeouts,
  apprunner_DeploymentTimeouts_GetTypes,
} from "../types/apprunner_DeploymentTimeouts";

export interface DeploymentArgs {
  // The Amazon Resource Name (ARN) of the App Runner service to start the deployment for.
  serviceArn?: string;

  //
  timeouts?: apprunner_DeploymentTimeouts;
}
export class Deployment extends DS_Resource {
  // The unique ID of the operation associated with deployment.
  public operationId?: string;

  // The Amazon Resource Name (ARN) of the App Runner service to start the deployment for.
  public serviceArn?: string;

  // The current status of the App Runner service deployment.
  public status?: string;

  //
  public timeouts?: apprunner_DeploymentTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceArn",
        "The Amazon Resource Name (ARN) of the App Runner service to start the deployment for.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => apprunner_DeploymentTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
