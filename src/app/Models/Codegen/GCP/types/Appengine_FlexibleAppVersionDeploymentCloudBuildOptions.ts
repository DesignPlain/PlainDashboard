import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_FlexibleAppVersionDeploymentCloudBuildOptions {
  // Path to the yaml file used in deployment, used to determine runtime configuration details.
  appYamlPath?: string;

  /*
The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  cloudBuildTimeout?: string;
}

export function appengine_FlexibleAppVersionDeploymentCloudBuildOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "appYamlPath",
      "Path to the yaml file used in deployment, used to determine runtime configuration details.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudBuildTimeout",
      "The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
