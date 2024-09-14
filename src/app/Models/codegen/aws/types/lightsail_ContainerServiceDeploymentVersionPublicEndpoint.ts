import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck,
  lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck_GetTypes,
} from "./lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck";

export interface lightsail_ContainerServiceDeploymentVersionPublicEndpoint {
  // The name of the container for the endpoint.
  containerName?: string;

  // The port of the container to which traffic is forwarded to.
  containerPort?: number;

  // A configuration block that describes the health check configuration of the container. Detailed below.
  healthCheck?: lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck;
}

export function lightsail_ContainerServiceDeploymentVersionPublicEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      "The port of the container to which traffic is forwarded to.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "healthCheck",
      "A configuration block that describes the health check configuration of the container. Detailed below.",
      () =>
        lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerName",
      "The name of the container for the endpoint.",
      () => [],
      true,
      true,
    ),
  ];
}
