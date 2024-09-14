import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_ServiceTemplateSpecContainer,
  cloudrun_ServiceTemplateSpecContainer_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainer";
import {
  cloudrun_ServiceTemplateSpecVolume,
  cloudrun_ServiceTemplateSpecVolume_GetTypes,
} from "./cloudrun_ServiceTemplateSpecVolume";

export interface cloudrun_ServiceTemplateSpec {
  /*
Containers defines the unit of execution for this Revision.
Structure is documented below.
*/
  containers?: Array<cloudrun_ServiceTemplateSpecContainer>;

  /*
Email address of the IAM service account associated with the revision of the
service. The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.
*/
  serviceAccountName?: string;

  /*
(Output, Deprecated)
ServingState holds a value describing the state the resources
are in for this Revision.
It is expected
that the system will manipulate this based on routability and load.

> --Warning:-- `serving_state` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.
*/
  servingState?: string;

  // TimeoutSeconds holds the max duration the instance is allowed for responding to a request.
  timeoutSeconds?: number;

  /*
Volume represents a named volume in a container.
Structure is documented below.
*/
  volumes?: Array<cloudrun_ServiceTemplateSpecVolume>;

  /*
ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
*/
  containerConcurrency?: number;
}

export function cloudrun_ServiceTemplateSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "TimeoutSeconds holds the max duration the instance is allowed for responding to a request.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "Volume represents a named volume in a container.\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "containerConcurrency",
      "ContainerConcurrency specifies the maximum allowed in-flight (concurrent)\nrequests per container of the Revision. Values are:",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Containers defines the unit of execution for this Revision.\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecContainer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountName",
      "Email address of the IAM service account associated with the revision of the\nservice. The service account represents the identity of the running revision,\nand determines what permissions the revision has. If not provided, the revision\nwill use the project's default service account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servingState",
      "(Output, Deprecated)\nServingState holds a value describing the state the resources\nare in for this Revision.\nIt is expected\nthat the system will manipulate this based on routability and load.\n\n> **Warning:** `serving_state` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.",
      () => [],
      false,
      false,
    ),
  ];
}
