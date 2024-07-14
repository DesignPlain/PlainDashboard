import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateVpcAccess,
  cloudrunv2_getServiceTemplateVpcAccess_GetTypes,
} from "./cloudrunv2_getServiceTemplateVpcAccess";
import {
  cloudrunv2_getServiceTemplateScaling,
  cloudrunv2_getServiceTemplateScaling_GetTypes,
} from "./cloudrunv2_getServiceTemplateScaling";
import {
  cloudrunv2_getServiceTemplateContainer,
  cloudrunv2_getServiceTemplateContainer_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainer";
import {
  cloudrunv2_getServiceTemplateVolume,
  cloudrunv2_getServiceTemplateVolume_GetTypes,
} from "./cloudrunv2_getServiceTemplateVolume";

export interface cloudrunv2_getServiceTemplate {
  // A list of Volumes to make available to containers.
  volumes?: Array<cloudrunv2_getServiceTemplateVolume>;

  // VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
  vpcAccesses?: Array<cloudrunv2_getServiceTemplateVpcAccess>;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.
*/
  labels?: Map<string, string>;

  // Sets the maximum number of requests that each serving instance can receive.
  maxInstanceRequestConcurrency?: number;

  // Scaling settings for this Revision.
  scalings?: Array<cloudrunv2_getServiceTemplateScaling>;

  // Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity
  sessionAffinity?: boolean;

  /*
Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  timeout?: string;

  // Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
  serviceAccount?: string;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.
*/
  annotations?: Map<string, string>;

  // Holds the containers that define the unit of execution for this Service.
  containers?: Array<cloudrunv2_getServiceTemplateContainer>;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  encryptionKey?: string;

  // The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
  executionEnvironment?: string;

  // The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
  revision?: string;
}

export function cloudrunv2_getServiceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxInstanceRequestConcurrency",
      "Sets the maximum number of requests that each serving instance can receive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scalings",
      "Scaling settings for this Revision.",
      cloudrunv2_getServiceTemplateScaling_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "sessionAffinity",
      "Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "annotations",
      "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\n\nCloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.\nAll system annotations in v1 now have a corresponding field in v2 RevisionTemplate.\n\nThis field follows Kubernetes annotations' namespacing, limits, and rules.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Holds the containers that define the unit of execution for this Service.",
      cloudrunv2_getServiceTemplateContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionEnvironment",
      'The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcAccesses",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.",
      cloudrunv2_getServiceTemplateVpcAccess_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.\nFor more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\n\nCloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 RevisionTemplate.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Max allowed time for an instance to respond to a request.\n\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "A list of Volumes to make available to containers.",
      cloudrunv2_getServiceTemplateVolume_GetTypes(),
      true,
      false,
    ),
  ];
}
