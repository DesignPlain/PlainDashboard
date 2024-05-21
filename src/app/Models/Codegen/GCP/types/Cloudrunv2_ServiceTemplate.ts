import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_ServiceTemplateScaling,
  cloudrunv2_ServiceTemplateScaling_GetTypes,
} from "./cloudrunv2_ServiceTemplateScaling";
import {
  cloudrunv2_ServiceTemplateVpcAccess,
  cloudrunv2_ServiceTemplateVpcAccess_GetTypes,
} from "./cloudrunv2_ServiceTemplateVpcAccess";
import {
  cloudrunv2_ServiceTemplateContainer,
  cloudrunv2_ServiceTemplateContainer_GetTypes,
} from "./cloudrunv2_ServiceTemplateContainer";
import {
  cloudrunv2_ServiceTemplateVolume,
  cloudrunv2_ServiceTemplateVolume_GetTypes,
} from "./cloudrunv2_ServiceTemplateVolume";

export interface cloudrunv2_ServiceTemplate {
  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.
*/
  labels?: Map<string, string>;

  // The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
  revision?: string;

  /*
Scaling settings for this Revision.
Structure is documented below.
*/
  scaling?: cloudrunv2_ServiceTemplateScaling;

  // Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
  serviceAccount?: string;

  /*
Max allowed time for an instance to respond to a request.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  timeout?: string;

  /*
VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
Structure is documented below.
*/
  vpcAccess?: cloudrunv2_ServiceTemplateVpcAccess;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  encryptionKey?: string;

  /*
Holds the containers that define the unit of execution for this Service.
Structure is documented below.
*/
  containers?: Array<cloudrunv2_ServiceTemplateContainer>;

  /*
The sandbox environment to host this Revision.
Possible values are: `EXECUTION_ENVIRONMENT_GEN1`, `EXECUTION_ENVIRONMENT_GEN2`.
*/
  executionEnvironment?: string;

  // Sets the maximum number of requests that each serving instance can receive.
  maxInstanceRequestConcurrency?: number;

  // Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity
  sessionAffinity?: boolean;

  /*
A list of Volumes to make available to containers.
Structure is documented below.
*/
  volumes?: Array<cloudrunv2_ServiceTemplateVolume>;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.
This field follows Kubernetes annotations' namespacing, limits, and rules.
*/
  annotations?: Map<string, string>;
}

export function cloudrunv2_ServiceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "scaling",
      "Scaling settings for this Revision.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateScaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Max allowed time for an instance to respond to a request.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionEnvironment",
      "The sandbox environment to host this Revision.\nPossible values are: `EXECUTION_ENVIRONMENT_GEN1`, `EXECUTION_ENVIRONMENT_GEN2`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxInstanceRequestConcurrency",
      "Sets the maximum number of requests that each serving instance can receive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "sessionAffinity",
      "Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "A list of Volumes to make available to containers.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.\nFor more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\nCloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 RevisionTemplate.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcAccess",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVpcAccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Holds the containers that define the unit of execution for this Service.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateContainer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "annotations",
      "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\nCloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.\nAll system annotations in v1 now have a corresponding field in v2 RevisionTemplate.\nThis field follows Kubernetes annotations' namespacing, limits, and rules.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revision",
      "The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.",
      [],
      false,
      false,
    ),
  ];
}
