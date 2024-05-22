import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_ServiceTemplateSpecContainerLivenessProbe,
  cloudrun_ServiceTemplateSpecContainerLivenessProbe_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerLivenessProbe";
import {
  cloudrun_ServiceTemplateSpecContainerResources,
  cloudrun_ServiceTemplateSpecContainerResources_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerResources";
import {
  cloudrun_ServiceTemplateSpecContainerVolumeMount,
  cloudrun_ServiceTemplateSpecContainerVolumeMount_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerVolumeMount";
import {
  cloudrun_ServiceTemplateSpecContainerPort,
  cloudrun_ServiceTemplateSpecContainerPort_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerPort";
import {
  cloudrun_ServiceTemplateSpecContainerStartupProbe,
  cloudrun_ServiceTemplateSpecContainerStartupProbe_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerStartupProbe";
import {
  cloudrun_ServiceTemplateSpecContainerEnv,
  cloudrun_ServiceTemplateSpecContainerEnv_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerEnv";
import {
  cloudrun_ServiceTemplateSpecContainerEnvFrom,
  cloudrun_ServiceTemplateSpecContainerEnvFrom_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerEnvFrom";

export interface cloudrun_ServiceTemplateSpecContainer {
  // Name of the container
  name?: string;

  /*
List of open ports in the container.
Structure is documented below.
*/
  ports?: Array<cloudrun_ServiceTemplateSpecContainerPort>;

  /*
Startup probe of application within the container.
All other probes are disabled if a startup probe is provided, until it
succeeds. Container will not be added to service endpoints if the probe fails.
Structure is documented below.
*/
  startupProbe?: cloudrun_ServiceTemplateSpecContainerStartupProbe;

  /*
(Optional, Deprecated)
Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.

> --Warning:-- `working_dir` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.
*/
  workingDir?: string;

  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  envs?: Array<cloudrun_ServiceTemplateSpecContainerEnv>;

  /*
Entrypoint array. Not executed within a shell.
The docker image's ENTRYPOINT is used if this is not provided.
*/
  commands?: Array<string>;

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
  envFroms?: Array<cloudrun_ServiceTemplateSpecContainerEnvFrom>;

  /*
Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
*/
  image?: string;

  /*
Periodic probe of container liveness. Container will be restarted if the probe fails. More info:
https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  livenessProbe?: cloudrun_ServiceTemplateSpecContainerLivenessProbe;

  /*
Compute Resources required by this container. Used to set values such as max memory
Structure is documented below.
*/
  resources?: cloudrun_ServiceTemplateSpecContainerResources;

  /*
Volume to mount into the container's filesystem.
Only supports SecretVolumeSources.
Structure is documented below.
*/
  volumeMounts?: Array<cloudrun_ServiceTemplateSpecContainerVolumeMount>;

  /*
Arguments to the entrypoint.
The docker image's CMD is used if this is not provided.
*/
  args?: Array<string>;
}

export function cloudrun_ServiceTemplateSpecContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "livenessProbe",
      "Periodic probe of container liveness. Container will be restarted if the probe fails. More info:\nhttps://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerLivenessProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "Arguments to the entrypoint.\nThe docker image's CMD is used if this is not provided.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "startupProbe",
      "Startup probe of application within the container.\nAll other probes are disabled if a startup probe is provided, until it\nsucceeds. Container will not be added to service endpoints if the probe fails.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerStartupProbe_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workingDir",
      "(Optional, Deprecated)\nContainer's working directory.\nIf not specified, the container runtime's default will be used, which\nmight be configured in the container image.\n\n> **Warning:** `working_dir` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envs",
      "List of environment variables to set in the container.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerEnv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "Entrypoint array. Not executed within a shell.\nThe docker image's ENTRYPOINT is used if this is not provided.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "envFroms",
      "(Optional, Deprecated)\nList of sources to populate environment variables in the container.\nAll invalid keys will be reported as an event when the container is starting.\nWhen a key exists in multiple sources, the value associated with the last source will\ntake precedence. Values defined by an Env with a duplicate key will take\nprecedence.\nStructure is documented below.\n\n> **Warning:** `env_from` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.",
      cloudrun_ServiceTemplateSpecContainerEnvFrom_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the container",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "List of open ports in the container.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerPort_GetTypes(),
      false,
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
      InputType.Object,
      "resources",
      "Compute Resources required by this container. Used to set values such as max memory\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumeMounts",
      "Volume to mount into the container's filesystem.\nOnly supports SecretVolumeSources.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerVolumeMount_GetTypes(),
      false,
      false,
    ),
  ];
}
