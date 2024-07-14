import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_ServiceTemplate,
  cloudrunv2_ServiceTemplate_GetTypes,
} from "../types/cloudrunv2_ServiceTemplate";
import {
  cloudrunv2_ServiceTrafficStatus,
  cloudrunv2_ServiceTrafficStatus_GetTypes,
} from "../types/cloudrunv2_ServiceTrafficStatus";
import {
  cloudrunv2_ServiceCondition,
  cloudrunv2_ServiceCondition_GetTypes,
} from "../types/cloudrunv2_ServiceCondition";
import {
  cloudrunv2_ServiceTerminalCondition,
  cloudrunv2_ServiceTerminalCondition_GetTypes,
} from "../types/cloudrunv2_ServiceTerminalCondition";
import {
  cloudrunv2_ServiceBinaryAuthorization,
  cloudrunv2_ServiceBinaryAuthorization_GetTypes,
} from "../types/cloudrunv2_ServiceBinaryAuthorization";
import {
  cloudrunv2_ServiceTraffic,
  cloudrunv2_ServiceTraffic_GetTypes,
} from "../types/cloudrunv2_ServiceTraffic";

export interface ServiceArgs {
  // Arbitrary version identifier for the API client.
  clientVersion?: string;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  binaryAuthorization?: cloudrunv2_ServiceBinaryAuthorization;

  // The location of the cloud run service
  location?: string;

  /*
Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100%!!(MISSING)t(MISSING)raffic to the latest Ready Revision.
Structure is documented below.
*/
  traffics?: Array<cloudrunv2_ServiceTraffic>;

  // Arbitrary identifier for the API client.
  client?: string;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with  `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  launchStage?: string;

  // User-provided description of the Service. This field currently has a 512-character limit.
  description?: string;

  /*
Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
Possible values are: `INGRESS_TRAFFIC_ALL`, `INGRESS_TRAFFIC_INTERNAL_ONLY`, `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`.
*/
  ingress?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The template used to create revisions for this Service.
Structure is documented below.
*/
  template?: cloudrunv2_ServiceTemplate;

  /*
One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
*/
  customAudiences?: Array<string>;

  // Name of the Service.
  name?: string;
}
export class Service extends Resource {
  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  public binaryAuthorization?: cloudrunv2_ServiceBinaryAuthorization;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
Possible values are: `INGRESS_TRAFFIC_ALL`, `INGRESS_TRAFFIC_INTERNAL_ONLY`, `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`.
*/
  public ingress?: string;

  // User-provided description of the Service. This field currently has a 512-character limit.
  public description?: string;

  // Name of the last created revision. See comments in reconciling for additional information on reconciliation process in Cloud Run.
  public latestCreatedRevision?: string;

  // Name of the latest revision that is serving traffic. See comments in reconciling for additional information on reconciliation process in Cloud Run.
  public latestReadyRevision?: string;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  public launchStage?: string;

  /*
Detailed status information for corresponding traffic targets. See comments in reconciling for additional information on reconciliation process in Cloud Run.
Structure is documented below.
*/
  public trafficStatuses?: Array<cloudrunv2_ServiceTrafficStatus>;

  // Arbitrary version identifier for the API client.
  public clientVersion?: string;

  /*
The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in reconciling for additional information on reconciliation process in Cloud Run.
Structure is documented below.
*/
  public conditions?: Array<cloudrunv2_ServiceCondition>;

  // Email address of the last authenticated modifier.
  public lastModifier?: string;

  /*
(Output)
Displays the target URI.
*/
  public uri?: string;

  // Arbitrary identifier for the API client.
  public client?: string;

  // A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a string instead of an integer.
  public generation?: string;

  // The generation of this Service currently serving traffic. See comments in reconciling for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a string instead of an integer.
  public observedGeneration?: string;

  /*
The template used to create revisions for this Service.
Structure is documented below.
*/
  public template?: cloudrunv2_ServiceTemplate;

  /*
The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in reconciling for additional information on reconciliation process in Cloud Run.
Structure is documented below.
*/
  public terminalConditions?: Array<cloudrunv2_ServiceTerminalCondition>;

  // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
  public etag?: string;

  // The location of the cloud run service
  public location?: string;

  /*
Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100%!!(MISSING)t(MISSING)raffic to the latest Ready Revision.
Structure is documented below.
*/
  public traffics?: Array<cloudrunv2_ServiceTraffic>;

  // Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public uid?: string;

  // The last-modified time.
  public updateTime?: string;

  // The creation time.
  public createTime?: string;

  // Email address of the authenticated creator.
  public creator?: string;

  /*
One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
*/
  public customAudiences?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // For a deleted resource, the time after which it will be permamently deleted.
  public expireTime?: string;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with  `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // The deletion time.
  public deleteTime?: string;

  // Name of the Service.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Returns true if the Service is currently being acted upon by the system to bring it into the desired state.
When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, observedGeneration, latest_ready_revison, trafficStatuses, and uri will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in terminalCondition.state.
If reconciliation succeeded, the following fields will match: traffic and trafficStatuses, observedGeneration and generation, latestReadyRevision and latestCreatedRevision.
If reconciliation failed, trafficStatuses, observedGeneration, and latestReadyRevision will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in terminalCondition and conditions.
*/
  public reconciling?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "client",
        "Arbitrary identifier for the API client.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\nCloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources.\nAll system annotations in v1 now have a corresponding field in v2 Service.\nThis field follows Kubernetes annotations' namespacing, limits, and rules.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "binaryAuthorization",
        "Settings for the Binary Authorization feature.\nStructure is documented below.",
        cloudrunv2_ServiceBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "traffics",
        "Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100%!t(MISSING)raffic to the latest Ready Revision.\nStructure is documented below.",
        cloudrunv2_ServiceTraffic_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description of the Service. This field currently has a 512-character limit.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingress",
        "Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.\nPossible values are: `INGRESS_TRAFFIC_ALL`, `INGRESS_TRAFFIC_INTERNAL_ONLY`, `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "template",
        "The template used to create revisions for this Service.\nStructure is documented below.",
        cloudrunv2_ServiceTemplate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Service.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientVersion",
        "Arbitrary version identifier for the API client.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the cloud run service",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "launchStage",
        "The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.\nIf no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.\nFor example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.\nPossible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,\nenvironment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\nCloud Run API v2 does not support labels with  `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 Service.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customAudiences",
        "One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.\nFor more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
