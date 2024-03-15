import { getServiceTemplateSpecContainerStartupProbe } from "./getServiceTemplateSpecContainerStartupProbe";
import { getServiceTemplateSpecContainerVolumeMount } from "./getServiceTemplateSpecContainerVolumeMount";
import { getServiceTemplateSpecContainerEnv } from "./getServiceTemplateSpecContainerEnv";
import { getServiceTemplateSpecContainerLivenessProbe } from "./getServiceTemplateSpecContainerLivenessProbe";
import { getServiceTemplateSpecContainerResource } from "./getServiceTemplateSpecContainerResource";
import { getServiceTemplateSpecContainerEnvFrom } from "./getServiceTemplateSpecContainerEnvFrom";
import { getServiceTemplateSpecContainerPort } from "./getServiceTemplateSpecContainerPort";

export interface getServiceTemplateSpecContainer {
  /*
Startup probe of application within the container.
All other probes are disabled if a startup probe is provided, until it
succeeds. Container will not be added to service endpoints if the probe fails.
*/
  StartupProbes?: Array<getServiceTemplateSpecContainerStartupProbe>;

  /*
Volume to mount into the container's filesystem.
Only supports SecretVolumeSources.
*/
  VolumeMounts?: Array<getServiceTemplateSpecContainerVolumeMount>;

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
  Envs?: Array<getServiceTemplateSpecContainerEnv>;

  /*
Docker image name. This is most often a reference to a container located
in the container registry, such as gcr.io/cloudrun/hello
*/
  Image?: string;

  // Periodic probe of container liveness. Container will be restarted if the probe fails.
  LivenessProbes?: Array<getServiceTemplateSpecContainerLivenessProbe>;

  // Compute Resources required by this container. Used to set values such as max memory
  Resources?: Array<getServiceTemplateSpecContainerResource>;

  /*
Container's working directory.
If not specified, the container runtime's default will be used, which
might be configured in the container image.
*/
  WorkingDir?: string;

  /*
List of sources to populate environment variables in the container.
All invalid keys will be reported as an event when the container is starting.
When a key exists in multiple sources, the value associated with the last source will
take precedence. Values defined by an Env with a duplicate key will take
precedence.
*/
  EnvFroms?: Array<getServiceTemplateSpecContainerEnvFrom>;

  // The name of the Cloud Run Service.
  Name?: string;

  // List of open ports in the container.
  Ports?: Array<getServiceTemplateSpecContainerPort>;
}
