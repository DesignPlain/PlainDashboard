import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues,
  apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues_GetTypes,
} from "./apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues";

export interface apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration {
  // Basic configuration for building and running the App Runner service. Use this parameter to quickly launch an App Runner service without providing an apprunner.yaml file in the source code repository (or ignoring the file if it exists). See Code Configuration Values below for more details.
  codeConfigurationValues?: apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;

  // Source of the App Runner configuration. Valid values: `REPOSITORY`, `API`. Values are interpreted as follows:
  configurationSource?: string;
}

export function apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "codeConfigurationValues",
      "Basic configuration for building and running the App Runner service. Use this parameter to quickly launch an App Runner service without providing an apprunner.yaml file in the source code repository (or ignoring the file if it exists). See Code Configuration Values below for more details.",
      apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "configurationSource",
      "Source of the App Runner configuration. Valid values: `REPOSITORY`, `API`. Values are interpreted as follows:",
      [],
      true,
      false,
    ),
  ];
}
