import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apprunner_ServiceSourceConfigurationAuthenticationConfiguration,
  apprunner_ServiceSourceConfigurationAuthenticationConfiguration_GetTypes,
} from "./apprunner_ServiceSourceConfigurationAuthenticationConfiguration";
import {
  apprunner_ServiceSourceConfigurationCodeRepository,
  apprunner_ServiceSourceConfigurationCodeRepository_GetTypes,
} from "./apprunner_ServiceSourceConfigurationCodeRepository";
import {
  apprunner_ServiceSourceConfigurationImageRepository,
  apprunner_ServiceSourceConfigurationImageRepository_GetTypes,
} from "./apprunner_ServiceSourceConfigurationImageRepository";

export interface apprunner_ServiceSourceConfiguration {
  // Describes resources needed to authenticate access to some source repositories. See Authentication Configuration below for more details.
  authenticationConfiguration?: apprunner_ServiceSourceConfigurationAuthenticationConfiguration;

  // Whether continuous integration from the source repository is enabled for the App Runner service. If set to `true`, each repository change (source code commit or new image version) starts a deployment. Defaults to `true`.
  autoDeploymentsEnabled?: boolean;

  // Description of a source code repository. See Code Repository below for more details.
  codeRepository?: apprunner_ServiceSourceConfigurationCodeRepository;

  // Description of a source image repository. See Image Repository below for more details.
  imageRepository?: apprunner_ServiceSourceConfigurationImageRepository;
}

export function apprunner_ServiceSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "imageRepository",
      "Description of a source image repository. See Image Repository below for more details.",
      apprunner_ServiceSourceConfigurationImageRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authenticationConfiguration",
      "Describes resources needed to authenticate access to some source repositories. See Authentication Configuration below for more details.",
      apprunner_ServiceSourceConfigurationAuthenticationConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDeploymentsEnabled",
      "Whether continuous integration from the source repository is enabled for the App Runner service. If set to `true`, each repository change (source code commit or new image version) starts a deployment. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codeRepository",
      "Description of a source code repository. See Code Repository below for more details.",
      apprunner_ServiceSourceConfigurationCodeRepository_GetTypes(),
      false,
      false,
    ),
  ];
}
