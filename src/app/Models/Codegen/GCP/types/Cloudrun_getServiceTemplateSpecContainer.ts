import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerPort,
  Cloudrun_getServiceTemplateSpecContainerPort_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerPort";
import {
  Cloudrun_getServiceTemplateSpecContainerResource,
  Cloudrun_getServiceTemplateSpecContainerResource_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerResource";
import {
  Cloudrun_getServiceTemplateSpecContainerVolumeMount,
  Cloudrun_getServiceTemplateSpecContainerVolumeMount_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerVolumeMount";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvFrom,
  Cloudrun_getServiceTemplateSpecContainerEnvFrom_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvFrom";
import {
  Cloudrun_getServiceTemplateSpecContainerLivenessProbe,
  Cloudrun_getServiceTemplateSpecContainerLivenessProbe_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerLivenessProbe";
import {
  Cloudrun_getServiceTemplateSpecContainerStartupProbe,
  Cloudrun_getServiceTemplateSpecContainerStartupProbe_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerStartupProbe";
import {
  Cloudrun_getServiceTemplateSpecContainerEnv,
  Cloudrun_getServiceTemplateSpecContainerEnv_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnv";

export interface Cloudrun_getServiceTemplateSpecContainer {
  /*
List of sources to populate environment variables in the container.
All invalid keys will be reported as an event when the container is starting.
When a key exists in multiple sources, the value associated with the last source will
take precedence. Values defined by an Env with a duplicate key will take
precedence.
*/
  EnvFroms?: Array<Cloudrun_getServiceTemplateSpecContainerEnvFrom>;

  /*
Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
*/
  Image?: string;

  // Periodic probe of container liveness. Container will be restarted if the probe fails.
  LivenessProbes?: Array<Cloudrun_getServiceTemplateSpecContainerLivenessProbe>;

  // The name of the Cloud Run Service.
  Name?: string;

  /*
Startup probe of application within the container.
All other probes are disabled if a startup probe is provided, until it
succeeds. Container will not be added to service endpoints if the probe fails.
*/
  StartupProbes?: Array<Cloudrun_getServiceTemplateSpecContainerStartupProbe>;

  /*
Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
*/
  Args?: Array<string>;

  /*
Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
*/
  Commands?: Array<string>;

  // List of environment variables to set in the container.
  Envs?: Array<Cloudrun_getServiceTemplateSpecContainerEnv>;

  // List of open ports in the container.
  Ports?: Array<Cloudrun_getServiceTemplateSpecContainerPort>;

  // Compute Resources required by this container. Used to set values such as max memory
  Resources?: Array<Cloudrun_getServiceTemplateSpecContainerResource>;

  /*
Volume to mount into the container's filesystem.
Only supports SecretVolumeSources.
*/
  VolumeMounts?: Array<Cloudrun_getServiceTemplateSpecContainerVolumeMount>;

  /*
Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
*/
  WorkingDir?: string;
}

export function Cloudrun_getServiceTemplateSpecContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LivenessProbes",
      "Periodic probe of container liveness. Container will be restarted if the probe fails.",
      Cloudrun_getServiceTemplateSpecContainerLivenessProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Resources",
      "Compute Resources required by this container. Used to set values such as max memory",
      Cloudrun_getServiceTemplateSpecContainerResource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EnvFroms",
      "List of sources to populate environment variables in the container.\nAll invalid keys will be reported as an event when the container is starting.\nWhen a key exists in multiple sources, the value associated with the last source will\ntake precedence. Values defined by an Env with a duplicate key will take\nprecedence.",
      Cloudrun_getServiceTemplateSpecContainerEnvFrom_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Image",
      "Docker image name. This is most often a reference to a container located\nin the container registry, such as gcr.io/cloudrun/hello",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StartupProbes",
      "Startup probe of application within the container.\nAll other probes are disabled if a startup probe is provided, until it\nsucceeds. Container will not be added to service endpoints if the probe fails.",
      Cloudrun_getServiceTemplateSpecContainerStartupProbe_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Args",
      "Arguments to the entrypoint.\nThe docker image's CMD is used if this is not provided.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Commands",
      "Entrypoint array. Not executed within a shell.\nThe docker image's ENTRYPOINT is used if this is not provided.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      "List of environment variables to set in the container.",
      Cloudrun_getServiceTemplateSpecContainerEnv_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of open ports in the container.",
      Cloudrun_getServiceTemplateSpecContainerPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VolumeMounts",
      "Volume to mount into the container's filesystem.\nOnly supports SecretVolumeSources.",
      Cloudrun_getServiceTemplateSpecContainerVolumeMount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkingDir",
      "Container's working directory.\nIf not specified, the container runtime's default will be used, which\nmight be configured in the container image.",
      [],
      true,
      false,
    ),
  ];
}
