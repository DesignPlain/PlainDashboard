import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv";
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersResources,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersResources_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesContainersResources";
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext";
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount_GetTypes,
} from "./batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount";

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainers {
  // The entrypoint for the container. This isn't run within a shell. If this isn't specified, the ENTRYPOINT of the container image is used. Environment variable references are expanded using the container's environment.
  commands?: Array<string>;

  // The environment variables to pass to a container. See EKS Environment below.
  envs?: Array<batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv>;

  // The Docker image used to start the container.
  image?: string;

  // The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`.
  resources?: batch_JobDefinitionEksPropertiesPodPropertiesContainersResources;

  // An array of arguments to the entrypoint. If this isn't specified, the CMD of the container image is used. This corresponds to the args member in the Entrypoint portion of the Pod in Kubernetes. Environment variable references are expanded using the container's environment.
  args?: Array<string>;

  // The image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`.
  imagePullPolicy?: string;

  // The name of the container. If the name isn't specified, the default name "Default" is used. Each container in a pod must have a unique name.
  name?: string;

  // The security context for a job.
  securityContext?: batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext;

  // The volume mounts for the container.
  volumeMounts?: Array<batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount>;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imagePullPolicy",
      "The image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "securityContext",
      "The security context for a job.",
      batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumeMounts",
      "The volume mounts for the container.",
      batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envs",
      "The environment variables to pass to a container. See EKS Environment below.",
      batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "resources",
      "The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`.",
      batch_JobDefinitionEksPropertiesPodPropertiesContainersResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "An array of arguments to the entrypoint. If this isn't specified, the CMD of the container image is used. This corresponds to the args member in the Entrypoint portion of the Pod in Kubernetes. Environment variable references are expanded using the container's environment.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      'The name of the container. If the name isn\'t specified, the default name "Default" is used. Each container in a pod must have a unique name.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "The entrypoint for the container. This isn't run within a shell. If this isn't specified, the ENTRYPOINT of the container image is used. Environment variable references are expanded using the container's environment.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The Docker image used to start the container.",
      [],
      true,
      false,
    ),
  ];
}
