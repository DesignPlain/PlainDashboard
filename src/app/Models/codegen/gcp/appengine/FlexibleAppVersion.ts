import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appengine_FlexibleAppVersionAutomaticScaling,
  appengine_FlexibleAppVersionAutomaticScaling_GetTypes,
} from "../types/appengine_FlexibleAppVersionAutomaticScaling";
import {
  appengine_FlexibleAppVersionEntrypoint,
  appengine_FlexibleAppVersionEntrypoint_GetTypes,
} from "../types/appengine_FlexibleAppVersionEntrypoint";
import {
  appengine_FlexibleAppVersionManualScaling,
  appengine_FlexibleAppVersionManualScaling_GetTypes,
} from "../types/appengine_FlexibleAppVersionManualScaling";
import {
  appengine_FlexibleAppVersionEndpointsApiService,
  appengine_FlexibleAppVersionEndpointsApiService_GetTypes,
} from "../types/appengine_FlexibleAppVersionEndpointsApiService";
import {
  appengine_FlexibleAppVersionLivenessCheck,
  appengine_FlexibleAppVersionLivenessCheck_GetTypes,
} from "../types/appengine_FlexibleAppVersionLivenessCheck";
import {
  appengine_FlexibleAppVersionHandler,
  appengine_FlexibleAppVersionHandler_GetTypes,
} from "../types/appengine_FlexibleAppVersionHandler";
import {
  appengine_FlexibleAppVersionDeployment,
  appengine_FlexibleAppVersionDeployment_GetTypes,
} from "../types/appengine_FlexibleAppVersionDeployment";
import {
  appengine_FlexibleAppVersionReadinessCheck,
  appengine_FlexibleAppVersionReadinessCheck_GetTypes,
} from "../types/appengine_FlexibleAppVersionReadinessCheck";
import {
  appengine_FlexibleAppVersionResources,
  appengine_FlexibleAppVersionResources_GetTypes,
} from "../types/appengine_FlexibleAppVersionResources";
import {
  appengine_FlexibleAppVersionApiConfig,
  appengine_FlexibleAppVersionApiConfig_GetTypes,
} from "../types/appengine_FlexibleAppVersionApiConfig";
import {
  appengine_FlexibleAppVersionVpcAccessConnector,
  appengine_FlexibleAppVersionVpcAccessConnector_GetTypes,
} from "../types/appengine_FlexibleAppVersionVpcAccessConnector";
import {
  appengine_FlexibleAppVersionNetwork,
  appengine_FlexibleAppVersionNetwork_GetTypes,
} from "../types/appengine_FlexibleAppVersionNetwork";

export interface FlexibleAppVersionArgs {
  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  automaticScaling?: appengine_FlexibleAppVersionAutomaticScaling;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  deployment?: appengine_FlexibleAppVersionDeployment;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  entrypoint?: appengine_FlexibleAppVersionEntrypoint;

  /*
Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
*/
  defaultExpiration?: string;

  /*
Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
Structure is documented below.
*/
  readinessCheck?: appengine_FlexibleAppVersionReadinessCheck;

  // The path or name of the app's main executable.
  runtimeMainExecutablePath?: string;

  // AppEngine service resource. Can contain numbers, letters, and hyphens.
  service?: string;

  /*
The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.
*/
  serviceAccount?: string;

  /*
Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
*/
  versionId?: string;

  // Metadata settings that are supplied to this version to enable beta runtime features.
  betaSettings?: Map<string, string>;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  inboundServices?: Array<string>;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  manualScaling?: appengine_FlexibleAppVersionManualScaling;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The channel of the runtime to use. Only available for some runtimes.
  runtimeChannel?: string;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  endpointsApiService?: appengine_FlexibleAppVersionEndpointsApiService;

  /*
Machine resources for a version.
Structure is documented below.
*/
  resources?: appengine_FlexibleAppVersionResources;

  // Desired runtime. Example python27.
  runtime?: string;

  /*
Serving configuration for Google Cloud Endpoints.
Structure is documented below.
*/
  apiConfig?: appengine_FlexibleAppVersionApiConfig;

  // If set to `true`, the service will be deleted if it is the last version.
  deleteServiceOnDestroy?: boolean;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
*/
  instanceClass?: string;

  /*
Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
Structure is documented below.
*/
  livenessCheck?: appengine_FlexibleAppVersionLivenessCheck;

  // If set to `true`, the application version will not be deleted.
  noopOnDestroy?: boolean;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  runtimeApiVersion?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  vpcAccessConnector?: appengine_FlexibleAppVersionVpcAccessConnector;

  // Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.
  envVariables?: Map<string, string>;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  handlers?: Array<appengine_FlexibleAppVersionHandler>;

  /*
Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.
Default value is `SERVING`.
Possible values are: `SERVING`, `STOPPED`.
*/
  servingStatus?: string;

  /*
Extra network settings
Structure is documented below.
*/
  network?: appengine_FlexibleAppVersionNetwork;

  // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  nobuildFilesRegex?: string;
}
export class FlexibleAppVersion extends DS_Resource {
  // Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.
  public envVariables?: Map<string, string>;

  // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  public nobuildFilesRegex?: string;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public endpointsApiService?: appengine_FlexibleAppVersionEndpointsApiService;

  // The path or name of the app's main executable.
  public runtimeMainExecutablePath?: string;

  /*
Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
Structure is documented below.
*/
  public livenessCheck?: appengine_FlexibleAppVersionLivenessCheck;

  /*
Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
*/
  public defaultExpiration?: string;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public deployment?: appengine_FlexibleAppVersionDeployment;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
*/
  public instanceClass?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // AppEngine service resource. Can contain numbers, letters, and hyphens.
  public service?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  public vpcAccessConnector?: appengine_FlexibleAppVersionVpcAccessConnector;

  /*
Serving configuration for Google Cloud Endpoints.
Structure is documented below.
*/
  public apiConfig?: appengine_FlexibleAppVersionApiConfig;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  public handlers?: Array<appengine_FlexibleAppVersionHandler>;

  /*
Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
Structure is documented below.
*/
  public readinessCheck?: appengine_FlexibleAppVersionReadinessCheck;

  /*
Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.
Default value is `SERVING`.
Possible values are: `SERVING`, `STOPPED`.
*/
  public servingStatus?: string;

  // If set to `true`, the service will be deleted if it is the last version.
  public deleteServiceOnDestroy?: boolean;

  /*
Extra network settings
Structure is documented below.
*/
  public network?: appengine_FlexibleAppVersionNetwork;

  // If set to `true`, the application version will not be deleted.
  public noopOnDestroy?: boolean;

  // Desired runtime. Example python27.
  public runtime?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public manualScaling?: appengine_FlexibleAppVersionManualScaling;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  public entrypoint?: appengine_FlexibleAppVersionEntrypoint;

  /*
Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog"
*/
  public name?: string;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  public automaticScaling?: appengine_FlexibleAppVersionAutomaticScaling;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  public inboundServices?: Array<string>;

  /*
Machine resources for a version.
Structure is documented below.
*/
  public resources?: appengine_FlexibleAppVersionResources;

  /*
Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
*/
  public versionId?: string;

  // Metadata settings that are supplied to this version to enable beta runtime features.
  public betaSettings?: Map<string, string>;

  // The channel of the runtime to use. Only available for some runtimes.
  public runtimeChannel?: string;

  /*
The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.
*/
  public serviceAccount?: string;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  public runtimeApiVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "resources",
        "Machine resources for a version.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionResources_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteServiceOnDestroy",
        "If set to `true`, the service will be deleted if it is the last version.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "envVariables",
        "Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deployment",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionDeployment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "betaSettings",
        "Metadata settings that are supplied to this version to enable beta runtime features.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceClass",
        "Instance class that is used to run this version. Valid values are\nAutomaticScaling: F1, F2, F4, F4_1G\nManualScaling: B1, B2, B4, B8, B4_1G\nDefaults to F1 for AutomaticScaling and B1 for ManualScaling.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "servingStatus",
        "Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.\nDefault value is `SERVING`.\nPossible values are: `SERVING`, `STOPPED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nobuildFilesRegex",
        "Files that match this pattern will not be built into this version. Only applicable for Go runtimes.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "apiConfig",
        "Serving configuration for Google Cloud Endpoints.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionApiConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "readinessCheck",
        "Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionReadinessCheck_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "inboundServices",
        "A list of the types of messages that this application is able to receive.\nEach value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "livenessCheck",
        "Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionLivenessCheck_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "entrypoint",
        "The entrypoint for the application.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionEntrypoint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as\ndefault if this field is neither provided in app.yaml file nor through CLI flag.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noopOnDestroy",
        "If set to `true`, the application version will not be deleted.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtimeChannel",
        "The channel of the runtime to use. Only available for some runtimes.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtime",
        "Desired runtime. Example python27.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "AppEngine service resource. Can contain numbers, letters, and hyphens.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionId",
        'Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.\nReserved names,"default", "latest", and any name with the prefix "ah-".',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "manualScaling",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionManualScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "endpointsApiService",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionEndpointsApiService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtimeApiVersion",
        "The version of the API in the given runtime environment.\nPlease see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\\\nSubstitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcAccessConnector",
        "Enables VPC connectivity for standard apps.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionVpcAccessConnector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "automaticScaling",
        "Automatic scaling is based on request rate, response latencies, and other application metrics.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionAutomaticScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtimeMainExecutablePath",
        "The path or name of the app's main executable.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "handlers",
        "An ordered list of URL-matching patterns that should be applied to incoming requests.\nThe first matching URL handles the request and other request handlers are not attempted.\nStructure is documented below.",
        () => appengine_FlexibleAppVersionHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "network",
        "Extra network settings\nStructure is documented below.",
        () => appengine_FlexibleAppVersionNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultExpiration",
        "Duration that static files should be cached by web proxies and browsers.\nOnly applicable if the corresponding StaticFilesHandler does not specify its own expiration time.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
