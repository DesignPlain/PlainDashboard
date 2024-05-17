import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getJobTemplateTemplateContainerResource,
  Cloudrunv2_getJobTemplateTemplateContainerResource_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateContainerResource";
import {
  Cloudrunv2_getJobTemplateTemplateContainerVolumeMount,
  Cloudrunv2_getJobTemplateTemplateContainerVolumeMount_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateContainerVolumeMount";
import {
  Cloudrunv2_getJobTemplateTemplateContainerEnv,
  Cloudrunv2_getJobTemplateTemplateContainerEnv_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateContainerEnv";
import {
  Cloudrunv2_getJobTemplateTemplateContainerPort,
  Cloudrunv2_getJobTemplateTemplateContainerPort_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateContainerPort";

export interface Cloudrunv2_getJobTemplateTemplateContainer {
  // Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Args?: Array<string>;

  // List of environment variables to set in the container.
  Envs?: Array<Cloudrunv2_getJobTemplateTemplateContainerEnv>;

  // The name of the Cloud Run v2 Job.
  Name?: string;

  /*
List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.

If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on
*/
  Ports?: Array<Cloudrunv2_getJobTemplateTemplateContainerPort>;

  // Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  Resources?: Array<Cloudrunv2_getJobTemplateTemplateContainerResource>;

  // Volume to mount into the container's filesystem.
  VolumeMounts?: Array<Cloudrunv2_getJobTemplateTemplateContainerVolumeMount>;

  // Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  WorkingDir?: string;

  // Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  Commands?: Array<string>;

  // URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  Image?: string;
}

export function Cloudrunv2_getJobTemplateTemplateContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run v2 Job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VolumeMounts",
      "Volume to mount into the container's filesystem.",
      Cloudrunv2_getJobTemplateTemplateContainerVolumeMount_GetTypes(),
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
      "Args",
      "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      "List of environment variables to set in the container.",
      Cloudrunv2_getJobTemplateTemplateContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.\n\nIf omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on",
      Cloudrunv2_getJobTemplateTemplateContainerPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Resources",
      "Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources",
      Cloudrunv2_getJobTemplateTemplateContainerResource_GetTypes(),
      true,
      false,
    ),
  ];
}
