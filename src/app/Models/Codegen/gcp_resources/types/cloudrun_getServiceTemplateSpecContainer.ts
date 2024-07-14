import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrun_getServiceTemplateSpecContainerLivenessProbe,
  cloudrun_getServiceTemplateSpecContainerLivenessProbe_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerLivenessProbe";
import {
  cloudrun_getServiceTemplateSpecContainerVolumeMount,
  cloudrun_getServiceTemplateSpecContainerVolumeMount_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerVolumeMount";
import {
  cloudrun_getServiceTemplateSpecContainerEnv,
  cloudrun_getServiceTemplateSpecContainerEnv_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerEnv";
import {
  cloudrun_getServiceTemplateSpecContainerPort,
  cloudrun_getServiceTemplateSpecContainerPort_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerPort";
import {
  cloudrun_getServiceTemplateSpecContainerStartupProbe,
  cloudrun_getServiceTemplateSpecContainerStartupProbe_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerStartupProbe";
import {
  cloudrun_getServiceTemplateSpecContainerResource,
  cloudrun_getServiceTemplateSpecContainerResource_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerResource";
import {
  cloudrun_getServiceTemplateSpecContainerEnvFrom,
  cloudrun_getServiceTemplateSpecContainerEnvFrom_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerEnvFrom";

export interface cloudrun_getServiceTemplateSpecContainer {
  // The name of the Cloud Run Service.
  name?: string;

  // Compute Resources required by this container. Used to set values such as max memory
  resources?: Array<cloudrun_getServiceTemplateSpecContainerResource>;

  /*
Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
*/
  args?: Array<string>;

  /*
Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
*/
  commands?: Array<string>;

  /*
List of sources to populate environment variables in the container.
All invalid keys will be reported as an event when the container is starting.
When a key exists in multiple sources, the value associated with the last source will
take precedence. Values defined by an Env with a duplicate key will take
precedence.
*/
  envFroms?: Array<cloudrun_getServiceTemplateSpecContainerEnvFrom>;

  // Periodic probe of container liveness. Container will be restarted if the probe fails.
  livenessProbes?: Array<cloudrun_getServiceTemplateSpecContainerLivenessProbe>;

  /*
Volume to mount into the container's filesystem.
Only supports SecretVolumeSources.
*/
  volumeMounts?: Array<cloudrun_getServiceTemplateSpecContainerVolumeMount>;

  /*
Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
*/
  workingDir?: string;

  // List of environment variables to set in the container.
  envs?: Array<cloudrun_getServiceTemplateSpecContainerEnv>;

  /*
Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
*/
  image?: string;

  // List of open ports in the container.
  ports?: Array<cloudrun_getServiceTemplateSpecContainerPort>;

  /*
Startup probe of application within the container.
All other probes are disabled if a startup probe is provided, until it
succeeds. Container will not be added to service endpoints if the probe fails.
*/
  startupProbes?: Array<cloudrun_getServiceTemplateSpecContainerStartupProbe>;
}

export function cloudrun_getServiceTemplateSpecContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "envs",
      "List of environment variables to set in the container.",
      cloudrun_getServiceTemplateSpecContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "Docker image name. This is most often a reference to a container located\nin the container registry, such as gcr.io/cloudrun/hello",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "List of open ports in the container.",
      cloudrun_getServiceTemplateSpecContainerPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "startupProbes",
      "Startup probe of application within the container.\nAll other probes are disabled if a startup probe is provided, until it\nsucceeds. Container will not be added to service endpoints if the probe fails.",
      cloudrun_getServiceTemplateSpecContainerStartupProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Arguments to the entrypoint.\nThe docker image's CMD is used if this is not provided.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envFroms",
      "List of sources to populate environment variables in the container.\nAll invalid keys will be reported as an event when the container is starting.\nWhen a key exists in multiple sources, the value associated with the last source will\ntake precedence. Values defined by an Env with a duplicate key will take\nprecedence.",
      cloudrun_getServiceTemplateSpecContainerEnvFrom_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "livenessProbes",
      "Periodic probe of container liveness. Container will be restarted if the probe fails.",
      cloudrun_getServiceTemplateSpecContainerLivenessProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumeMounts",
      "Volume to mount into the container's filesystem.\nOnly supports SecretVolumeSources.",
      cloudrun_getServiceTemplateSpecContainerVolumeMount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "Compute Resources required by this container. Used to set values such as max memory",
      cloudrun_getServiceTemplateSpecContainerResource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "Entrypoint array. Not executed within a shell.\nThe docker image's ENTRYPOINT is used if this is not provided.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workingDir",
      "Container's working directory.\nIf not specified, the container runtime's default will be used, which\nmight be configured in the container image.",
      [],
      true,
      false,
    ),
  ];
}
