import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionEksPropertyPodPropertyContainerResource,
  batch_getJobDefinitionEksPropertyPodPropertyContainerResource_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyContainerResource';
import {
  batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount,
  batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount';
import {
  batch_getJobDefinitionEksPropertyPodPropertyContainerEnv,
  batch_getJobDefinitionEksPropertyPodPropertyContainerEnv_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyContainerEnv';
import {
  batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext,
  batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext';

export interface batch_getJobDefinitionEksPropertyPodPropertyContainer {
  // The command that's passed to the container.
  commands?: Array<string>;

  // The image used to start a container.
  image?: string;

  // The image pull policy for the container.
  imagePullPolicy?: string;

  // The type and amount of resources to assign to a container.
  resources?: Array<batch_getJobDefinitionEksPropertyPodPropertyContainerResource>;

  // The volume mounts for the container.
  volumeMounts?: Array<batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount>;

  // An array of arguments to the entrypoint
  args?: Array<string>;

  // The environment variables to pass to a container.  Array of EksContainerEnvironmentVariable objects.
  envs?: Array<batch_getJobDefinitionEksPropertyPodPropertyContainerEnv>;

  // The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  name?: string;

  // The security context for a job.
  securityContexts?: Array<batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext>;
}

export function batch_getJobDefinitionEksPropertyPodPropertyContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'image',
      'The image used to start a container.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'imagePullPolicy',
      'The image pull policy for the container.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'volumeMounts',
      'The volume mounts for the container.',
      () =>
        batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityContexts',
      'The security context for a job.',
      () =>
        batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'commands',
      "The command that's passed to the container.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resources',
      'The type and amount of resources to assign to a container.',
      () =>
        batch_getJobDefinitionEksPropertyPodPropertyContainerResource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'args',
      'An array of arguments to the entrypoint',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'envs',
      'The environment variables to pass to a container.  Array of EksContainerEnvironmentVariable objects.',
      () => batch_getJobDefinitionEksPropertyPodPropertyContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
      () => [],
      true,
      false,
    ),
  ];
}
