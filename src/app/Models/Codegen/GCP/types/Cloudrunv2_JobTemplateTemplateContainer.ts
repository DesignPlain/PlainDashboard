import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_JobTemplateTemplateContainerEnv,
  Cloudrunv2_JobTemplateTemplateContainerEnv_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateContainerEnv";
import {
  Cloudrunv2_JobTemplateTemplateContainerPort,
  Cloudrunv2_JobTemplateTemplateContainerPort_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateContainerPort";
import {
  Cloudrunv2_JobTemplateTemplateContainerResources,
  Cloudrunv2_JobTemplateTemplateContainerResources_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateContainerResources";
import {
  Cloudrunv2_JobTemplateTemplateContainerVolumeMount,
  Cloudrunv2_JobTemplateTemplateContainerVolumeMount_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateContainerVolumeMount";

export interface Cloudrunv2_JobTemplateTemplateContainer {
  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  Envs?: Array<Cloudrunv2_JobTemplateTemplateContainerEnv>;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
Structure is documented below.
*/
  Ports?: Array<Cloudrunv2_JobTemplateTemplateContainerPort>;

  /*
Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
Structure is documented below.
*/
  Resources?: Cloudrunv2_JobTemplateTemplateContainerResources;

  /*
Volume to mount into the container's filesystem.
Structure is documented below.
*/
  VolumeMounts?: Array<Cloudrunv2_JobTemplateTemplateContainerVolumeMount>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  WorkingDir?: string;

  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Args?: Array<string>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  Image?: string;

  // Name of the container specified as a DNS_LABEL.
  Name?: string;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Commands?: Array<string>;
}

export function Cloudrunv2_JobTemplateTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      "List of environment variables to set in the container.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateContainerEnv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Resources",
      "Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateContainerResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VolumeMounts",
      "Volume to mount into the container's filesystem.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateContainerVolumeMount_GetTypes(),
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
      InputType.String,
      "Image",
      "URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateContainerPort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
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
      InputType.Array,
      "Commands",
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
