import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DeploymentArgs {
  // API identifier.
  apiId?: string;

  // Description for the deployment resource. Must be less than or equal to 1024 characters in length.
  description?: string;

  // Map of arbitrary keys and values that, when changed, will trigger a redeployment.
  triggers?: Map<string, string>;
}
export class Deployment extends Resource {
  // API identifier.
  public apiId?: string;

  // Whether the deployment was automatically released.
  public autoDeployed?: boolean;

  // Description for the deployment resource. Must be less than or equal to 1024 characters in length.
  public description?: string;

  // Map of arbitrary keys and values that, when changed, will trigger a redeployment.
  public triggers?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the deployment resource. Must be less than or equal to 1024 characters in length.",
        [],
        false,
        false,
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
