import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainer,
  Cloudrun_ServiceTemplateSpecContainer_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainer";
import {
  Cloudrun_ServiceTemplateSpecVolume,
  Cloudrun_ServiceTemplateSpecVolume_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecVolume";

export interface Cloudrun_ServiceTemplateSpec {
  /*
ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
requests per container of the Revision. Values are:
*/
  ContainerConcurrency?: number;

  /*
Containers defines the unit of execution for this Revision.
Structure is documented below.
*/
  Containers?: Array<Cloudrun_ServiceTemplateSpecContainer>;

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
  Volumes?: Array<Cloudrun_ServiceTemplateSpecVolume>;
}

export function Cloudrun_ServiceTemplateSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "Volume represents a named volume in a container.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ContainerConcurrency",
      "ContainerConcurrency specifies the maximum allowed in-flight (concurrent)\nrequests per container of the Revision. Values are:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Containers",
      "Containers defines the unit of execution for this Revision.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountName",
      "Email address of the IAM service account associated with the revision of the\nservice. The service account represents the identity of the running revision,\nand determines what permissions the revision has. If not provided, the revision\nwill use the project's default service account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServingState",
      "(Output, Deprecated)\nServingState holds a value describing the state the resources\nare in for this Revision.\nIt is expected\nthat the system will manipulate this based on routability and load.\n\n> **Warning:** `serving_state` is deprecated and will be removed in a future major release. This field is not supported by the Cloud Run API.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "TimeoutSeconds holds the max duration the instance is allowed for responding to a request.",
      [],
      false,
      false,
    ),
  ];
}
