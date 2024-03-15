import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServiceBinaryAuthorization } from "../types/ServiceBinaryAuthorization";
import { ServiceCondition } from "../types/ServiceCondition";
import { ServiceTerminalCondition } from "../types/ServiceTerminalCondition";
import { ServiceTrafficStatus } from "../types/ServiceTrafficStatus";
import { ServiceTemplate } from "../types/ServiceTemplate";
import { ServiceTraffic } from "../types/ServiceTraffic";

export interface ServiceArgs {
  /*
The template used to create revisions for this Service.
Structure is documented below.
*/
  Template?: ServiceTemplate;

  /*
Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100%!!(MISSING)t(MISSING)raffic to the latest Ready Revision.
Structure is documented below.
*/
  Traffics?: Array<ServiceTraffic>;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Arbitrary identifier for the API client.
  Client?: string;

  /*
One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
*/
  CustomAudiences?: Array<string>;

  /*
Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
Possible values are: `INGRESS_TRAFFIC_ALL`, `INGRESS_TRAFFIC_INTERNAL_ONLY`, `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`.
*/
  Ingress?: string;

  // The location of the cloud run service
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  LaunchStage?: string;

  // Arbitrary version identifier for the API client.
  ClientVersion?: string;

  // User-provided description of the Service. This field currently has a 512-character limit.
  Description?: string;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with  `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the Service.
  Name?: string;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  BinaryAuthorization?: ServiceBinaryAuthorization;
}
export class Service extends Resource {
  // The deletion time.
  public DeleteTime?: string;

  // The generation of this Service currently serving traffic. See comments in reconciling for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a string instead of an integer.
  public ObservedGeneration?: string;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Arbitrary version identifier for the API client.
  public ClientVersion?: string;

  /*
One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
*/
  public CustomAudiences?: Array<string>;

  // The last-modified time.
  public UpdateTime?: string;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  public BinaryAuthorization?: ServiceBinaryAuthorization;

  // The creation time.
  public CreateTime?: string;

  // User-provided description of the Service. This field currently has a 512-character limit.
  public Description?: string;

  // For a deleted resource, the time after which it will be permamently deleted.
  public ExpireTime?: string;

  // A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a string instead of an integer.
  public Generation?: string;

  // The location of the cloud run service
  public Location?: string;

  // Name of the Service.
  public Name?: string;

  /*
The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in reconciling for additional information on reconciliation process in Cloud Run.
Structure is documented below.
*/
  public Conditions?: Array<ServiceCondition>;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with  `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  public LaunchStage?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in reconciling for additional information on reconciliation process in Cloud Run.
Structure is documented below.
*/
  public TerminalConditions?: Array<ServiceTerminalCondition>;

  /*
(Output)
Displays the target URI.
*/
  public Uri?: string;

  // Arbitrary identifier for the API client.
  public Client?: string;

  // Email address of the authenticated creator.
  public Creator?: string;

  // Name of the last created revision. See comments in reconciling for additional information on reconciliation process in Cloud Run.
  public LatestCreatedRevision?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Returns true if the Service is currently being acted upon by the system to bring it into the desired state.
When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, observedGeneration, latest_ready_revison, trafficStatuses, and uri will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in terminalCondition.state.
If reconciliation succeeded, the following fields will match: traffic and trafficStatuses, observedGeneration and generation, latestReadyRevision and latestCreatedRevision.
If reconciliation failed, trafficStatuses, observedGeneration, and latestReadyRevision will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in terminalCondition and conditions.
*/
  public Reconciling?: boolean;

  // Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public Uid?: string;

  /*
The template used to create revisions for this Service.
Structure is documented below.
*/
  public Template?: ServiceTemplate;

  /*
Detailed status information for corresponding traffic targets. See comments in reconciling for additional information on reconciliation process in Cloud Run.
Structure is documented below.
*/
  public TrafficStatuses?: Array<ServiceTrafficStatus>;

  /*
Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100%!!(MISSING)t(MISSING)raffic to the latest Ready Revision.
Structure is documented below.
*/
  public Traffics?: Array<ServiceTraffic>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
  public Etag?: string;

  /*
Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.
Possible values are: `INGRESS_TRAFFIC_ALL`, `INGRESS_TRAFFIC_INTERNAL_ONLY`, `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`.
*/
  public Ingress?: string;

  // Email address of the last authenticated modifier.
  public LastModifier?: string;

  // Name of the latest revision that is serving traffic. See comments in reconciling for additional information on reconciliation process in Cloud Run.
  public LatestReadyRevision?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Name", "Name of the Service."),
      new DynamicUIProps(
        InputType.DropDown,
        "Traffics",
        "Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100%!t(MISSING)raffic to the latest Ready Revision.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LaunchStage",
        "The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.\nIf no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.\nFor example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.\nPossible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientVersion",
        "Arbitrary version identifier for the API client.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of the Service. This field currently has a 512-character limit.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\nCloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources.\nAll system annotations in v1 now have a corresponding field in v2 Service.\nThis field follows Kubernetes annotations' namespacing, limits, and rules.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Ingress",
        "Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active.\nPossible values are: `INGRESS_TRAFFIC_ALL`, `INGRESS_TRAFFIC_INTERNAL_ONLY`, `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the cloud run service",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BinaryAuthorization",
        "Settings for the Binary Authorization feature.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Template",
        "The template used to create revisions for this Service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Client",
        "Arbitrary identifier for the API client.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CustomAudiences",
        "One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.\nFor more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,\nenvironment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\nCloud Run API v2 does not support labels with  `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 Service.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
