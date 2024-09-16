import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersResources,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersResources_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesContainersResources';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv,
  batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv';

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainers {
  // Name of the container. If the name isn't specified, the default name "Default" is used. Each container in a pod must have a unique name.
  name?: string;

  // Type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`.
  resources?: batch_JobDefinitionEksPropertiesPodPropertiesContainersResources;

  // Security context for a job.
  securityContext?: batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext;

  // Array of arguments to the entrypoint. If this isn't specified, the CMD of the container image is used. This corresponds to the args member in the Entrypoint portion of the Pod in Kubernetes. Environment variable references are expanded using the container's environment.
  args?: Array<string>;

  // Entrypoint for the container. This isn't run within a shell. If this isn't specified, the ENTRYPOINT of the container image is used. Environment variable references are expanded using the container's environment.
  commands?: Array<string>;

  // Image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`.
  imagePullPolicy?: string;

  // Volume mounts for the container.
  volumeMounts?: Array<batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount>;

  // Environment variables to pass to a container. See EKS Environment below.
  envs?: Array<batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv>;

  // Docker image used to start the container.
  image?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'commands',
      "Entrypoint for the container. This isn't run within a shell. If this isn't specified, the ENTRYPOINT of the container image is used. Environment variable references are expanded using the container's environment.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'volumeMounts',
      'Volume mounts for the container.',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesContainersVolumeMount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'image',
      'Docker image used to start the container.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'resources',
      'Type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`.',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesContainersResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'args',
      "Array of arguments to the entrypoint. If this isn't specified, the CMD of the container image is used. This corresponds to the args member in the Entrypoint portion of the Pod in Kubernetes. Environment variable references are expanded using the container's environment.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'imagePullPolicy',
      'Image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'envs',
      'Environment variables to pass to a container. See EKS Environment below.',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesContainersEnv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the container. If the name isn\'t specified, the default name "Default" is used. Each container in a pod must have a unique name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'securityContext',
      'Security context for a job.',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext_GetTypes(),
      false,
      false,
    ),
  ];
}
