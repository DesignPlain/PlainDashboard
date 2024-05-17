import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainerPort,
  Cloudrunv2_getServiceTemplateContainerPort_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerPort";
import {
  Cloudrunv2_getServiceTemplateContainerStartupProbe,
  Cloudrunv2_getServiceTemplateContainerStartupProbe_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerStartupProbe";
import {
  Cloudrunv2_getServiceTemplateContainerLivenessProbe,
  Cloudrunv2_getServiceTemplateContainerLivenessProbe_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerLivenessProbe";
import {
  Cloudrunv2_getServiceTemplateContainerResource,
  Cloudrunv2_getServiceTemplateContainerResource_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerResource";
import {
  Cloudrunv2_getServiceTemplateContainerVolumeMount,
  Cloudrunv2_getServiceTemplateContainerVolumeMount_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerVolumeMount";
import {
  Cloudrunv2_getServiceTemplateContainerEnv,
  Cloudrunv2_getServiceTemplateContainerEnv_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerEnv";

export interface Cloudrunv2_getServiceTemplateContainer {
  // The name of the Cloud Run v2 Service.
  Name?: string;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.

If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
*/
  Ports?: Array<Cloudrunv2_getServiceTemplateContainerPort>;

  // Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  StartupProbes?: Array<Cloudrunv2_getServiceTemplateContainerStartupProbe>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  WorkingDir?: string;

  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Args?: Array<string>;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Commands?: Array<string>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  Image?: string;

  // Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  LivenessProbes?: Array<Cloudrunv2_getServiceTemplateContainerLivenessProbe>;

  // Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  Resources?: Array<Cloudrunv2_getServiceTemplateContainerResource>;

  // Volume to mount into the container's filesystem.
  VolumeMounts?: Array<Cloudrunv2_getServiceTemplateContainerVolumeMount>;

  // Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.
  DependsOns?: Array<string>;

  // List of environment variables to set in the container.
  Envs?: Array<Cloudrunv2_getServiceTemplateContainerEnv>;
}

export function Cloudrunv2_getServiceTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LivenessProbes",
      "Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      Cloudrunv2_getServiceTemplateContainerLivenessProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VolumeMounts",
      "Volume to mount into the container's filesystem.",
      Cloudrunv2_getServiceTemplateContainerVolumeMount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      "List of environment variables to set in the container.",
      Cloudrunv2_getServiceTemplateContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run v2 Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\n\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on",
      Cloudrunv2_getServiceTemplateContainerPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      true,
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
    new DynamicUIProps(
      InputType.Array,
      "Resources",
      "Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources",
      Cloudrunv2_getServiceTemplateContainerResource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DependsOns",
      "Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StartupProbes",
      "Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      Cloudrunv2_getServiceTemplateContainerStartupProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkingDir",
      "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Commands",
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
