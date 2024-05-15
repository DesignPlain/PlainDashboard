import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecVolume,
  Cloudrun_getServiceTemplateSpecVolume_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecVolume";
import {
  Cloudrun_getServiceTemplateSpecContainer,
  Cloudrun_getServiceTemplateSpecContainer_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainer";

export interface Cloudrun_getServiceTemplateSpec {
  /*
ServingState holds a value describing the state the resources
are in for this Revision.
It is expected
that the system will manipulate this based on routability and load.
*/
  ServingState?: string;

  // TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  TimeoutSeconds?: number;

  // Volume represents a named volume in a container.
  Volumes?: Array<Cloudrun_getServiceTemplateSpecVolume>;

  /*
ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
- '0' thread-safe, the system should manage the max concurrency. This is
    the default value.
- '1' not-thread-safe. Single concurrency
- '2-N' thread-safe, max concurrency of N
*/
  ContainerConcurrency?: number;

  // Containers defines the unit of execution for this Revision.
  Containers?: Array<Cloudrun_getServiceTemplateSpecContainer>;

  /*
Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
*/
  ServiceAccountName?: string;
}

export function Cloudrun_getServiceTemplateSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServingState",
      "ServingState holds a value describing the state the resources\nare in for this Revision.\nIt is expected\nthat the system will manipulate this based on routability and load.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "TimeoutSeconds holds the max duration the instance is allowed for responding to a request.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "Volume represents a named volume in a container.",
      Cloudrun_getServiceTemplateSpecVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ContainerConcurrency",
      "ContainerConcurrency specifies the maximum allowed in-flight (concurrent)\nrequests per container of the Revision. Values are:\n- '0' thread-safe, the system should manage the max concurrency. This is\n    the default value.\n- '1' not-thread-safe. Single concurrency\n- '2-N' thread-safe, max concurrency of N",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Containers",
      "Containers defines the unit of execution for this Revision.",
      Cloudrun_getServiceTemplateSpecContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountName",
      "Email address of the IAM service account associated with the revision of the\nservice. The service account represents the identity of the running revision,\nand determines what permissions the revision has. If not provided, the revision\nwill use the project's default service account.",
      [],
      true,
      false,
    ),
  ];
}
