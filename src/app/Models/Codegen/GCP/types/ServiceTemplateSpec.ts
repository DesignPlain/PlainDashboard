import { ServiceTemplateSpecContainer } from "./ServiceTemplateSpecContainer";
import { ServiceTemplateSpecVolume } from "./ServiceTemplateSpecVolume";

export interface ServiceTemplateSpec {
  /*
ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
*/
  ContainerConcurrency?: number;

  /*
Containers defines the unit of execution for this Revision.
Structure is documented below.
*/
  Containers?: Array<ServiceTemplateSpecContainer>;

  /*
Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
*/
  ServiceAccountName?: string;

  /*
(Output, Deprecated)
ServingState holds a value describing the state the resources
are in for this Revision.
It is expected
that the system will manipulate this based on routability and load.

> --Warning:-- `serving_state` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.
*/
  ServingState?: string;

  // TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  TimeoutSeconds?: number;

  /*
Volume represents a named volume in a container.
Structure is documented below.
*/
  Volumes?: Array<ServiceTemplateSpecVolume>;
}
