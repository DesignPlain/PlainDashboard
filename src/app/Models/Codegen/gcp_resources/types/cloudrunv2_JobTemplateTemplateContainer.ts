import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_JobTemplateTemplateContainerEnv,
  cloudrunv2_JobTemplateTemplateContainerEnv_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateContainerEnv";
import {
  cloudrunv2_JobTemplateTemplateContainerResources,
  cloudrunv2_JobTemplateTemplateContainerResources_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateContainerResources";
import {
  cloudrunv2_JobTemplateTemplateContainerVolumeMount,
  cloudrunv2_JobTemplateTemplateContainerVolumeMount_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateContainerVolumeMount";
import {
  cloudrunv2_JobTemplateTemplateContainerPort,
  cloudrunv2_JobTemplateTemplateContainerPort_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateContainerPort";

export interface cloudrunv2_JobTemplateTemplateContainer {
  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  commands?: Array<string>;

  // Name of the container specified as a DNS_LABEL.
  name?: string;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
Structure is documented below.
*/
  ports?: Array<cloudrunv2_JobTemplateTemplateContainerPort>;

  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  args?: Array<string>;

  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  envs?: Array<cloudrunv2_JobTemplateTemplateContainerEnv>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  image?: string;

  /*
Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
Structure is documented below.
*/
  resources?: cloudrunv2_JobTemplateTemplateContainerResources;

  /*
Volume to mount into the container's filesystem.
Structure is documented below.
*/
  volumeMounts?: Array<cloudrunv2_JobTemplateTemplateContainerVolumeMount>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  workingDir?: string;
}

export function cloudrunv2_JobTemplateTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workingDir",
      "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envs",
      "List of environment variables to set in the container.\nStructure is documented below.",
      cloudrunv2_JobTemplateTemplateContainerEnv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "resources",
      "Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources\nStructure is documented below.",
      cloudrunv2_JobTemplateTemplateContainerResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumeMounts",
      "Volume to mount into the container's filesystem.\nStructure is documented below.",
      cloudrunv2_JobTemplateTemplateContainerVolumeMount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the container specified as a DNS_LABEL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on\nStructure is documented below.",
      cloudrunv2_JobTemplateTemplateContainerPort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
