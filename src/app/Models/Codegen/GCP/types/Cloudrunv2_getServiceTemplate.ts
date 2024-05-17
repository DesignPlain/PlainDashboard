import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainer,
  Cloudrunv2_getServiceTemplateContainer_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainer";
import {
  Cloudrunv2_getServiceTemplateVolume,
  Cloudrunv2_getServiceTemplateVolume_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolume";
import {
  Cloudrunv2_getServiceTemplateVpcAccess,
  Cloudrunv2_getServiceTemplateVpcAccess_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVpcAccess";
import {
  Cloudrunv2_getServiceTemplateScaling,
  Cloudrunv2_getServiceTemplateScaling_GetTypes,
} from "./Cloudrunv2_getServiceTemplateScaling";

export interface Cloudrunv2_getServiceTemplate {
  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.
*/
  Labels?: Map<string, string>;

  // Sets the maximum number of requests that each serving instance can receive.
  MaxInstanceRequestConcurrency?: number;

  // The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
  Revision?: string;

  // Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity
  SessionAffinity?: boolean;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.
*/
  Annotations?: Map<string, string>;

  // Holds the containers that define the unit of execution for this Service.
  Containers?: Array<Cloudrunv2_getServiceTemplateContainer>;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  EncryptionKey?: string;

  /*
Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  Timeout?: string;

  // A list of Volumes to make available to containers.
  Volumes?: Array<Cloudrunv2_getServiceTemplateVolume>;

  // VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
  VpcAccesses?: Array<Cloudrunv2_getServiceTemplateVpcAccess>;

  // The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
  ExecutionEnvironment?: string;

  // Scaling settings for this Revision.
  Scalings?: Array<Cloudrunv2_getServiceTemplateScaling>;

  // Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
  ServiceAccount?: string;
}

export function Cloudrunv2_getServiceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "SessionAffinity",
      "Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Annotations",
      "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\n\nCloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.\nAll system annotations in v1 now have a corresponding field in v2 RevisionTemplate.\n\nThis field follows Kubernetes annotations' namespacing, limits, and rules.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Containers",
      "Holds the containers that define the unit of execution for this Service.",
      Cloudrunv2_getServiceTemplateContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EncryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VpcAccesses",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.",
      Cloudrunv2_getServiceTemplateVpcAccess_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Scalings",
      "Scaling settings for this Revision.",
      Cloudrunv2_getServiceTemplateScaling_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.\nFor more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\n\nCloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 RevisionTemplate.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxInstanceRequestConcurrency",
      "Sets the maximum number of requests that each serving instance can receive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Revision",
      "The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      "Max allowed time for an instance to respond to a request.\n\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "A list of Volumes to make available to containers.",
      Cloudrunv2_getServiceTemplateVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExecutionEnvironment",
      'The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]',
      [],
      true,
      false,
    ),
  ];
}
