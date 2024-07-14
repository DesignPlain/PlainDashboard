import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lightsail_ContainerServiceDeploymentVersionContainer,
  lightsail_ContainerServiceDeploymentVersionContainer_GetTypes,
} from "../types/lightsail_ContainerServiceDeploymentVersionContainer";
import {
  lightsail_ContainerServiceDeploymentVersionPublicEndpoint,
  lightsail_ContainerServiceDeploymentVersionPublicEndpoint_GetTypes,
} from "../types/lightsail_ContainerServiceDeploymentVersionPublicEndpoint";

export interface ContainerServiceDeploymentVersionArgs {
  // A set of configuration blocks that describe the settings of the containers that will be launched on the container service. Maximum of 53. Detailed below.
  containers?: Array<lightsail_ContainerServiceDeploymentVersionContainer>;

  // A configuration block that describes the settings of the public endpoint for the container service. Detailed below.
  publicEndpoint?: lightsail_ContainerServiceDeploymentVersionPublicEndpoint;

  // The name for the container service.
  serviceName?: string;
}
export class ContainerServiceDeploymentVersion extends Resource {
  // The current state of the container service.
  public state?: string;

  // The version number of the deployment.
  public version?: number;

  // A set of configuration blocks that describe the settings of the containers that will be launched on the container service. Maximum of 53. Detailed below.
  public containers?: Array<lightsail_ContainerServiceDeploymentVersionContainer>;

  // The timestamp when the deployment was created.
  public createdAt?: string;

  // A configuration block that describes the settings of the public endpoint for the container service. Detailed below.
  public publicEndpoint?: lightsail_ContainerServiceDeploymentVersionPublicEndpoint;

  // The name for the container service.
  public serviceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "containers",
        "A set of configuration blocks that describe the settings of the containers that will be launched on the container service. Maximum of 53. Detailed below.",
        lightsail_ContainerServiceDeploymentVersionContainer_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "publicEndpoint",
        "A configuration block that describes the settings of the public endpoint for the container service. Detailed below.",
        lightsail_ContainerServiceDeploymentVersionPublicEndpoint_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceName",
        "The name for the container service.",
        [],
        true,
        true,
      ),
    ];
  }
}
