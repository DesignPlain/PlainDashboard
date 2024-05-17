import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerEnv,
  Cloudrun_ServiceTemplateSpecContainerEnv_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnv";
import {
  Cloudrun_ServiceTemplateSpecContainerResources,
  Cloudrun_ServiceTemplateSpecContainerResources_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerResources";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvFrom,
  Cloudrun_ServiceTemplateSpecContainerEnvFrom_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvFrom";
import {
  Cloudrun_ServiceTemplateSpecContainerPort,
  Cloudrun_ServiceTemplateSpecContainerPort_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerPort";
import {
  Cloudrun_ServiceTemplateSpecContainerStartupProbe,
  Cloudrun_ServiceTemplateSpecContainerStartupProbe_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerStartupProbe";
import {
  Cloudrun_ServiceTemplateSpecContainerVolumeMount,
  Cloudrun_ServiceTemplateSpecContainerVolumeMount_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerVolumeMount";
import {
  Cloudrun_ServiceTemplateSpecContainerLivenessProbe,
  Cloudrun_ServiceTemplateSpecContainerLivenessProbe_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerLivenessProbe";

export interface Cloudrun_ServiceTemplateSpecContainer {
  /*
List of open ports in the container.
Structure is documented below.
*/
  Ports?: Array<Cloudrun_ServiceTemplateSpecContainerPort>;

  /*
Startup probe of application within the container.
All other probes are disabled if a startup probe is provided, until it
succeeds. Container will not be added to service endpoints if the probe fails.
Structure is documented below.
*/
  StartupProbe?: Cloudrun_ServiceTemplateSpecContainerStartupProbe;

  /*
Volume to mount into the container's filesystem.
Only supports SecretVolumeSources.
Structure is documented below.
*/
  VolumeMounts?: Array<Cloudrun_ServiceTemplateSpecContainerVolumeMount>;

  /*
(Optional, Deprecated)
Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.

> --Warning:-- `working_dir` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.
*/
  WorkingDir?: string;

  /*
Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
*/
  Commands?: Array<string>;

  /*
Periodic probe of container liveness. Container will be restarted if the probe fails. More info:
https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  LivenessProbe?: Cloudrun_ServiceTemplateSpecContainerLivenessProbe;

  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  Envs?: Array<Cloudrun_ServiceTemplateSpecContainerEnv>;

  /*
Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
*/
  Image?: string;

  // Name of the container
  Name?: string;

  /*
Compute Resources required by this container. Used to set values such as max memory
Structure is documented below.
*/
  Resources?: Cloudrun_ServiceTemplateSpecContainerResources;

  /*
Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
*/
  Args?: Array<string>;

  /*
(Optional, Deprecated)
List of sources to populate environment variables in the container.
All invalid keys will be reported as an event when the container is starting.
When a key exists in multiple sources, the value associated with the last source will
take precedence. Values defined by an Env with a duplicate key will take
precedence.
Structure is documented below.

> --Warning:-- `env_from` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.
*/
  EnvFroms?: Array<Cloudrun_ServiceTemplateSpecContainerEnvFrom>;
}

export function Cloudrun_ServiceTemplateSpecContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WorkingDir",
      "(Optional, Deprecated)\nContainer's working directory.\nIf not specified, the container runtime's default will be used, which\nmight be configured in the container image.\n\n> **Warning:** `working_dir` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Commands",
      "Entrypoint array. Not executed within a shell.\nThe docker image's ENTRYPOINT is used if this is not provided.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Envs",
      "List of environment variables to set in the container.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnv_GetTypes(),
      false,
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
      "Args",
      "Arguments to the entrypoint.\nThe docker image's CMD is used if this is not provided.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EnvFroms",
      "(Optional, Deprecated)\nList of sources to populate environment variables in the container.\nAll invalid keys will be reported as an event when the container is starting.\nWhen a key exists in multiple sources, the value associated with the last source will\ntake precedence. Values defined by an Env with a duplicate key will take\nprecedence.\nStructure is documented below.\n\n> **Warning:** `env_from` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.",
      Cloudrun_ServiceTemplateSpecContainerEnvFrom_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of open ports in the container.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerPort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartupProbe",
      "Startup probe of application within the container.\nAll other probes are disabled if a startup probe is provided, until it\nsucceeds. Container will not be added to service endpoints if the probe fails.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerStartupProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VolumeMounts",
      "Volume to mount into the container's filesystem.\nOnly supports SecretVolumeSources.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerVolumeMount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LivenessProbe",
      "Periodic probe of container liveness. Container will be restarted if the probe fails. More info:\nhttps://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerLivenessProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the container",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Resources",
      "Compute Resources required by this container. Used to set values such as max memory\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerResources_GetTypes(),
      false,
      false,
    ),
  ];
}
