import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole,
  lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole_GetTypes,
} from "./lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole";

export interface lightsail_ContainerServicePrivateRegistryAccess {
  // Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See ECR Image Puller Role below for more details.
  ecrImagePullerRole?: lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole;
}

export function lightsail_ContainerServicePrivateRegistryAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ecrImagePullerRole",
      "Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See ECR Image Puller Role below for more details.",
      lightsail_ContainerServicePrivateRegistryAccessEcrImagePullerRole_GetTypes(),
      false,
      false,
    ),
  ];
}
