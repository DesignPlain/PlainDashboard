import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_ServiceTemplateContainerEnv,
  Cloudrunv2_ServiceTemplateContainerEnv_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerEnv";
import {
  Cloudrunv2_ServiceTemplateContainerLivenessProbe,
  Cloudrunv2_ServiceTemplateContainerLivenessProbe_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerLivenessProbe";
import {
  Cloudrunv2_ServiceTemplateContainerResources,
  Cloudrunv2_ServiceTemplateContainerResources_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerResources";
import {
  Cloudrunv2_ServiceTemplateContainerVolumeMount,
  Cloudrunv2_ServiceTemplateContainerVolumeMount_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerVolumeMount";
import {
  Cloudrunv2_ServiceTemplateContainerPort,
  Cloudrunv2_ServiceTemplateContainerPort_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerPort";
import {
  Cloudrunv2_ServiceTemplateContainerStartupProbe,
  Cloudrunv2_ServiceTemplateContainerStartupProbe_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerStartupProbe";

export interface Cloudrunv2_ServiceTemplateContainer {
  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Args?: Array<string>;

  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  Envs?: Array<Cloudrunv2_ServiceTemplateContainerEnv>;

  /*
Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  LivenessProbe?: Cloudrunv2_ServiceTemplateContainerLivenessProbe;

  // Name of the container specified as a DNS_LABEL.
  Name?: string;

  /*
Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
Structure is documented below.
*/
  Resources?: Cloudrunv2_ServiceTemplateContainerResources;

  /*
Volume to mount into the container's filesystem.
Structure is documented below.
*/
  VolumeMounts?: Array<Cloudrunv2_ServiceTemplateContainerVolumeMount>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  WorkingDir?: string;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Commands?: Array<string>;

  // Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.
  DependsOns?: Array<string>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  Image?: string;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
Structure is documented below.
*/
  Ports?: Array<Cloudrunv2_ServiceTemplateContainerPort>;

  /*
Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  StartupProbe?: Cloudrunv2_ServiceTemplateContainerStartupProbe;
}

export function Cloudrunv2_ServiceTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Resources",
      "Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VolumeMounts",
      "Volume to mount into the container's filesystem.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerVolumeMount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DependsOns",
      "Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerPort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartupProbe",
      "Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerStartupProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      "List of environment variables to set in the container.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerEnv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LivenessProbe",
      "Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerLivenessProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the container specified as a DNS_LABEL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkingDir",
      "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Commands",
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Image",
      "URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images",
      [],
      true,
      false,
    ),
  ];
}
