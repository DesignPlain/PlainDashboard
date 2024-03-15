import { ServiceTemplateSpecContainerPort } from "./ServiceTemplateSpecContainerPort";
import { ServiceTemplateSpecContainerResources } from "./ServiceTemplateSpecContainerResources";
import { ServiceTemplateSpecContainerEnvFrom } from "./ServiceTemplateSpecContainerEnvFrom";
import { ServiceTemplateSpecContainerLivenessProbe } from "./ServiceTemplateSpecContainerLivenessProbe";
import { ServiceTemplateSpecContainerStartupProbe } from "./ServiceTemplateSpecContainerStartupProbe";
import { ServiceTemplateSpecContainerVolumeMount } from "./ServiceTemplateSpecContainerVolumeMount";
import { ServiceTemplateSpecContainerEnv } from "./ServiceTemplateSpecContainerEnv";

export interface ServiceTemplateSpecContainer {
  /*
Volume to mount into the container's filesystem.
Only supports SecretVolumeSources.
Structure is documented below.
*/
  VolumeMounts?: Array<ServiceTemplateSpecContainerVolumeMount>;

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

  /*
List of environment variables to set in the container.
Structure is documented below.
*/
  Envs?: Array<ServiceTemplateSpecContainerEnv>;

  // Name of the container
  Name?: string;

  /*
List of open ports in the container.
Structure is documented below.
*/
  Ports?: Array<ServiceTemplateSpecContainerPort>;

  /*
Compute Resources required by this container. Used to set values such as max memory
Structure is documented below.
*/
  Resources?: ServiceTemplateSpecContainerResources;

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
  EnvFroms?: Array<ServiceTemplateSpecContainerEnvFrom>;

  /*
Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
*/
  Image?: string;

  /*
Periodic probe of container liveness. Container will be restarted if the probe fails. More info:
https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
Structure is documented below.
*/
  LivenessProbe?: ServiceTemplateSpecContainerLivenessProbe;

  /*
Startup probe of application within the container.
All other probes are disabled if a startup probe is provided, until it
succeeds. Container will not be added to service endpoints if the probe fails.
Structure is documented below.
*/
  StartupProbe?: ServiceTemplateSpecContainerStartupProbe;

  /*
(Optional, Deprecated)
Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.

> --Warning:-- `working_dir` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.
*/
  WorkingDir?: string;
}
