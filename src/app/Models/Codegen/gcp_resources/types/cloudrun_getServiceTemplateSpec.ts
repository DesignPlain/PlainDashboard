import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_getServiceTemplateSpecVolume,
  cloudrun_getServiceTemplateSpecVolume_GetTypes,
} from "./cloudrun_getServiceTemplateSpecVolume";
import {
  cloudrun_getServiceTemplateSpecContainer,
  cloudrun_getServiceTemplateSpecContainer_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainer";

export interface cloudrun_getServiceTemplateSpec {
  /*
Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
*/
  serviceAccountName?: string;

  /*
ServingState holds a value describing the state the resources
are in for this Revision.
It is expected
that the system will manipulate this based on routability and load.
*/
  servingState?: string;

  // TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  timeoutSeconds?: number;

  // Volume represents a named volume in a container.
  volumes?: Array<cloudrun_getServiceTemplateSpecVolume>;

  /*
ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
- '0' thread-safe, the system should manage the max concurrency. This is
    the default value.
- '1' not-thread-safe. Single concurrency
- '2-N' thread-safe, max concurrency of N
*/
  containerConcurrency?: number;

  // Containers defines the unit of execution for this Revision.
  containers?: Array<cloudrun_getServiceTemplateSpecContainer>;
}

export function cloudrun_getServiceTemplateSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "containerConcurrency",
      "ContainerConcurrency specifies the maximum allowed in-flight (concurrent)\nrequests per container of the Revision. Values are:\n- '0' thread-safe, the system should manage the max concurrency. This is\n    the default value.\n- '1' not-thread-safe. Single concurrency\n- '2-N' thread-safe, max concurrency of N",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Containers defines the unit of execution for this Revision.",
      cloudrun_getServiceTemplateSpecContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountName",
      "Email address of the IAM service account associated with the revision of the\nservice. The service account represents the identity of the running revision,\nand determines what permissions the revision has. If not provided, the revision\nwill use the project's default service account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servingState",
      "ServingState holds a value describing the state the resources\nare in for this Revision.\nIt is expected\nthat the system will manipulate this based on routability and load.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "TimeoutSeconds holds the max duration the instance is allowed for responding to a request.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "Volume represents a named volume in a container.",
      cloudrun_getServiceTemplateSpecVolume_GetTypes(),
      true,
      false,
    ),
  ];
}
