import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_getJobTemplateTemplateContainerEnv,
  cloudrunv2_getJobTemplateTemplateContainerEnv_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainerEnv";
import {
  cloudrunv2_getJobTemplateTemplateContainerPort,
  cloudrunv2_getJobTemplateTemplateContainerPort_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainerPort";
import {
  cloudrunv2_getJobTemplateTemplateContainerResource,
  cloudrunv2_getJobTemplateTemplateContainerResource_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainerResource";
import {
  cloudrunv2_getJobTemplateTemplateContainerVolumeMount,
  cloudrunv2_getJobTemplateTemplateContainerVolumeMount_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainerVolumeMount";

export interface cloudrunv2_getJobTemplateTemplateContainer {
  // The name of the Cloud Run v2 Job.
  name?: string;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  workingDir?: string;

  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  args?: Array<string>;

  // List of environment variables to set in the container.
  envs?: Array<cloudrunv2_getJobTemplateTemplateContainerEnv>;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.

If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
*/
  ports?: Array<cloudrunv2_getJobTemplateTemplateContainerPort>;

  // Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  resources?: Array<cloudrunv2_getJobTemplateTemplateContainerResource>;

  // Volume to mount into the container's filesystem.
  volumeMounts?: Array<cloudrunv2_getJobTemplateTemplateContainerVolumeMount>;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  commands?: Array<string>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  image?: string;
}

export function cloudrunv2_getJobTemplateTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run v2 Job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workingDir",
      "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumeMounts",
      "Volume to mount into the container's filesystem.",
      cloudrunv2_getJobTemplateTemplateContainerVolumeMount_GetTypes(),
      true,
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
      InputType.Array,
      "envs",
      "List of environment variables to set in the container.",
      cloudrunv2_getJobTemplateTemplateContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\n\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on",
      cloudrunv2_getJobTemplateTemplateContainerPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources",
      cloudrunv2_getJobTemplateTemplateContainerResource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
