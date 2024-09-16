import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_ServiceTemplateContainerPort,
  cloudrunv2_ServiceTemplateContainerPort_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerPort';
import {
  cloudrunv2_ServiceTemplateContainerVolumeMount,
  cloudrunv2_ServiceTemplateContainerVolumeMount_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerVolumeMount';
import {
  cloudrunv2_ServiceTemplateContainerLivenessProbe,
  cloudrunv2_ServiceTemplateContainerLivenessProbe_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerLivenessProbe';
import {
  cloudrunv2_ServiceTemplateContainerEnv,
  cloudrunv2_ServiceTemplateContainerEnv_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerEnv';
import {
  cloudrunv2_ServiceTemplateContainerResources,
  cloudrunv2_ServiceTemplateContainerResources_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerResources';
import {
  cloudrunv2_ServiceTemplateContainerStartupProbe,
  cloudrunv2_ServiceTemplateContainerStartupProbe_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerStartupProbe';

export interface cloudrunv2_ServiceTemplateContainer {
  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
Structure is documented below.
*/
  ports?: Array<cloudrunv2_ServiceTemplateContainerPort>;

  /*
Volume to mount into the container's filesystem.
Structure is documented below.
*/
  volumeMounts?: Array<cloudrunv2_ServiceTemplateContainerVolumeMount>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  workingDir?: string;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  commands?: Array<string>;

  /*
Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  livenessProbe?: cloudrunv2_ServiceTemplateContainerLivenessProbe;

  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  envs?: Array<cloudrunv2_ServiceTemplateContainerEnv>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  image?: string;

  // Name of the container specified as a DNS_LABEL.
  name?: string;

  /*
Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
Structure is documented below.
*/
  resources?: cloudrunv2_ServiceTemplateContainerResources;

  /*
Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  startupProbe?: cloudrunv2_ServiceTemplateContainerStartupProbe;

  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  args?: Array<string>;

  // Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.
  dependsOns?: Array<string>;
}

export function cloudrunv2_ServiceTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ports',
      'List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on\nStructure is documented below.',
      () => cloudrunv2_ServiceTemplateContainerPort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'volumeMounts',
      "Volume to mount into the container's filesystem.\nStructure is documented below.",
      () => cloudrunv2_ServiceTemplateContainerVolumeMount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'livenessProbe',
      'Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes\nStructure is documented below.',
      () => cloudrunv2_ServiceTemplateContainerLivenessProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the container specified as a DNS_LABEL.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'resources',
      'Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources\nStructure is documented below.',
      () => cloudrunv2_ServiceTemplateContainerResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'args',
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dependsOns',
      'Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'workingDir',
      "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'commands',
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'envs',
      'List of environment variables to set in the container.\nStructure is documented below.',
      () => cloudrunv2_ServiceTemplateContainerEnv_GetTypes(),
      false,
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
      InputType.Object,
      'startupProbe',
      'Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes\nStructure is documented below.',
      () => cloudrunv2_ServiceTemplateContainerStartupProbe_GetTypes(),
      false,
      false,
    ),
  ];
}
