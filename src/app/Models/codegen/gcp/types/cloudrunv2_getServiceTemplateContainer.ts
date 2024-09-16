import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateContainerLivenessProbe,
  cloudrunv2_getServiceTemplateContainerLivenessProbe_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerLivenessProbe';
import {
  cloudrunv2_getServiceTemplateContainerPort,
  cloudrunv2_getServiceTemplateContainerPort_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerPort';
import {
  cloudrunv2_getServiceTemplateContainerResource,
  cloudrunv2_getServiceTemplateContainerResource_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerResource';
import {
  cloudrunv2_getServiceTemplateContainerEnv,
  cloudrunv2_getServiceTemplateContainerEnv_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerEnv';
import {
  cloudrunv2_getServiceTemplateContainerStartupProbe,
  cloudrunv2_getServiceTemplateContainerStartupProbe_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerStartupProbe';
import {
  cloudrunv2_getServiceTemplateContainerVolumeMount,
  cloudrunv2_getServiceTemplateContainerVolumeMount_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerVolumeMount';

export interface cloudrunv2_getServiceTemplateContainer {
  // Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  livenessProbes?: Array<cloudrunv2_getServiceTemplateContainerLivenessProbe>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  image?: string;

  // The name of the Cloud Run v2 Service.
  name?: string;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.

If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
*/
  ports?: Array<cloudrunv2_getServiceTemplateContainerPort>;

  // Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  resources?: Array<cloudrunv2_getServiceTemplateContainerResource>;

  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  args?: Array<string>;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  commands?: Array<string>;

  // Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.
  dependsOns?: Array<string>;

  // List of environment variables to set in the container.
  envs?: Array<cloudrunv2_getServiceTemplateContainerEnv>;

  // Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  startupProbes?: Array<cloudrunv2_getServiceTemplateContainerStartupProbe>;

  // Volume to mount into the container's filesystem.
  volumeMounts?: Array<cloudrunv2_getServiceTemplateContainerVolumeMount>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  workingDir?: string;
}

export function cloudrunv2_getServiceTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'commands',
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dependsOns',
      'Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'startupProbes',
      'Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
      () => cloudrunv2_getServiceTemplateContainerStartupProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'workingDir',
      "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'envs',
      'List of environment variables to set in the container.',
      () => cloudrunv2_getServiceTemplateContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'volumeMounts',
      "Volume to mount into the container's filesystem.",
      () => cloudrunv2_getServiceTemplateContainerVolumeMount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'livenessProbes',
      'Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
      () => cloudrunv2_getServiceTemplateContainerLivenessProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'image',
      'URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Cloud Run v2 Service.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ports',
      'List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\n\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on',
      () => cloudrunv2_getServiceTemplateContainerPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resources',
      'Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources',
      () => cloudrunv2_getServiceTemplateContainerResource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'args',
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
