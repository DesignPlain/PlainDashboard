import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_FlexibleAppVersionDeployment,
  Appengine_FlexibleAppVersionDeployment_GetTypes,
} from "../types/Appengine_FlexibleAppVersionDeployment";
import {
  Appengine_FlexibleAppVersionEntrypoint,
  Appengine_FlexibleAppVersionEntrypoint_GetTypes,
} from "../types/Appengine_FlexibleAppVersionEntrypoint";
import {
  Appengine_FlexibleAppVersionNetwork,
  Appengine_FlexibleAppVersionNetwork_GetTypes,
} from "../types/Appengine_FlexibleAppVersionNetwork";
import {
  Appengine_FlexibleAppVersionApiConfig,
  Appengine_FlexibleAppVersionApiConfig_GetTypes,
} from "../types/Appengine_FlexibleAppVersionApiConfig";
import {
  Appengine_FlexibleAppVersionEndpointsApiService,
  Appengine_FlexibleAppVersionEndpointsApiService_GetTypes,
} from "../types/Appengine_FlexibleAppVersionEndpointsApiService";
import {
  Appengine_FlexibleAppVersionHandler,
  Appengine_FlexibleAppVersionHandler_GetTypes,
} from "../types/Appengine_FlexibleAppVersionHandler";
import {
  Appengine_FlexibleAppVersionManualScaling,
  Appengine_FlexibleAppVersionManualScaling_GetTypes,
} from "../types/Appengine_FlexibleAppVersionManualScaling";
import {
  Appengine_FlexibleAppVersionLivenessCheck,
  Appengine_FlexibleAppVersionLivenessCheck_GetTypes,
} from "../types/Appengine_FlexibleAppVersionLivenessCheck";
import {
  Appengine_FlexibleAppVersionReadinessCheck,
  Appengine_FlexibleAppVersionReadinessCheck_GetTypes,
} from "../types/Appengine_FlexibleAppVersionReadinessCheck";
import {
  Appengine_FlexibleAppVersionVpcAccessConnector,
  Appengine_FlexibleAppVersionVpcAccessConnector_GetTypes,
} from "../types/Appengine_FlexibleAppVersionVpcAccessConnector";
import {
  Appengine_FlexibleAppVersionResources,
  Appengine_FlexibleAppVersionResources_GetTypes,
} from "../types/Appengine_FlexibleAppVersionResources";
import {
  Appengine_FlexibleAppVersionAutomaticScaling,
  Appengine_FlexibleAppVersionAutomaticScaling_GetTypes,
} from "../types/Appengine_FlexibleAppVersionAutomaticScaling";

export interface FlexibleAppVersionArgs {
  /*
Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
*/
  DefaultExpiration?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
Structure is documented below.
*/
  ReadinessCheck?: Appengine_FlexibleAppVersionReadinessCheck;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
*/
  InstanceClass?: string;

  // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  NobuildFilesRegex?: string;

  // AppEngine service resource. Can contain numbers, letters, and hyphens.
  Service?: string;

  // If set to `true`, the service will be deleted if it is the last version.
  DeleteServiceOnDestroy?: boolean;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  Deployment?: Appengine_FlexibleAppVersionDeployment;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  Entrypoint?: Appengine_FlexibleAppVersionEntrypoint;

  // Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.
  EnvVariables?: Map<string, string>;

  // The path or name of the app's main executable.
  RuntimeMainExecutablePath?: string;

  // Metadata settings that are supplied to this version to enable beta runtime features.
  BetaSettings?: Map<string, string>;

  // The channel of the runtime to use. Only available for some runtimes.
  RuntimeChannel?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  VpcAccessConnector?: Appengine_FlexibleAppVersionVpcAccessConnector;

  /*
Extra network settings
Structure is documented below.
*/
  Network?: Appengine_FlexibleAppVersionNetwork;

  // Desired runtime. Example python27.
  Runtime?: string;

  /*
The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.
*/
  ServiceAccount?: string;

  /*
Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
*/
  VersionId?: string;

  /*
Serving configuration for Google Cloud Endpoints.
Structure is documented below.
*/
  ApiConfig?: Appengine_FlexibleAppVersionApiConfig;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  EndpointsApiService?: Appengine_FlexibleAppVersionEndpointsApiService;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  Handlers?: Array<Appengine_FlexibleAppVersionHandler>;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  ManualScaling?: Appengine_FlexibleAppVersionManualScaling;

  /*
Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
Structure is documented below.
*/
  LivenessCheck?: Appengine_FlexibleAppVersionLivenessCheck;

  // If set to `true`, the application version will not be deleted.
  NoopOnDestroy?: boolean;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  RuntimeApiVersion?: string;

  /*
Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.
Default value is `SERVING`.
Possible values are: `SERVING`, `STOPPED`.
*/
  ServingStatus?: string;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  InboundServices?: Array<string>;

  /*
Machine resources for a version.
Structure is documented below.
*/
  Resources?: Appengine_FlexibleAppVersionResources;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  AutomaticScaling?: Appengine_FlexibleAppVersionAutomaticScaling;
}
export class FlexibleAppVersion extends Resource {
  /*
The entrypoint for the application.
Structure is documented below.
*/
  public Entrypoint?: Appengine_FlexibleAppVersionEntrypoint;

  // Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.
  public EnvVariables?: Map<string, string>;

  /*
Extra network settings
Structure is documented below.
*/
  public Network?: Appengine_FlexibleAppVersionNetwork;

  // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  public NobuildFilesRegex?: string;

  /*
Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
Structure is documented below.
*/
  public ReadinessCheck?: Appengine_FlexibleAppVersionReadinessCheck;

  // If set to `true`, the service will be deleted if it is the last version.
  public DeleteServiceOnDestroy?: boolean;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public Deployment?: Appengine_FlexibleAppVersionDeployment;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
*/
  public InstanceClass?: string;

  /*
Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
Structure is documented below.
*/
  public LivenessCheck?: Appengine_FlexibleAppVersionLivenessCheck;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  public RuntimeApiVersion?: string;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public EndpointsApiService?: Appengine_FlexibleAppVersionEndpointsApiService;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public ManualScaling?: Appengine_FlexibleAppVersionManualScaling;

  // AppEngine service resource. Can contain numbers, letters, and hyphens.
  public Service?: string;

  /*
Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
*/
  public VersionId?: string;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  public Handlers?: Array<Appengine_FlexibleAppVersionHandler>;

  // If set to `true`, the application version will not be deleted.
  public NoopOnDestroy?: boolean;

  /*
Serving configuration for Google Cloud Endpoints.
Structure is documented below.
*/
  public ApiConfig?: Appengine_FlexibleAppVersionApiConfig;

  // The channel of the runtime to use. Only available for some runtimes.
  public RuntimeChannel?: string;

  // The path or name of the app's main executable.
  public RuntimeMainExecutablePath?: string;

  /*
The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.
*/
  public ServiceAccount?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  public VpcAccessConnector?: Appengine_FlexibleAppVersionVpcAccessConnector;

  /*
Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog"
*/
  public Name?: string;

  // Desired runtime. Example python27.
  public Runtime?: string;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  public InboundServices?: Array<string>;

  /*
Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.
Default value is `SERVING`.
Possible values are: `SERVING`, `STOPPED`.
*/
  public ServingStatus?: string;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  public AutomaticScaling?: Appengine_FlexibleAppVersionAutomaticScaling;

  /*
Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
*/
  public DefaultExpiration?: string;

  // Metadata settings that are supplied to this version to enable beta runtime features.
  public BetaSettings?: Map<string, string>;

  /*
Machine resources for a version.
Structure is documented below.
*/
  public Resources?: Appengine_FlexibleAppVersionResources;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ReadinessCheck",
        "Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.\nStructure is documented below.",
        Appengine_FlexibleAppVersionReadinessCheck_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Deployment",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
        Appengine_FlexibleAppVersionDeployment_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeChannel",
        "The channel of the runtime to use. Only available for some runtimes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as\ndefault if this field is neither provided in app.yaml file nor through CLI flag.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "EnvVariables",
        "Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VpcAccessConnector",
        "Enables VPC connectivity for standard apps.\nStructure is documented below.",
        Appengine_FlexibleAppVersionVpcAccessConnector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EndpointsApiService",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
        Appengine_FlexibleAppVersionEndpointsApiService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LivenessCheck",
        "Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.\nStructure is documented below.",
        Appengine_FlexibleAppVersionLivenessCheck_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Network",
        "Extra network settings\nStructure is documented below.",
        Appengine_FlexibleAppVersionNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Resources",
        "Machine resources for a version.\nStructure is documented below.",
        Appengine_FlexibleAppVersionResources_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "NobuildFilesRegex",
        "Files that match this pattern will not be built into this version. Only applicable for Go runtimes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "NoopOnDestroy",
        "If set to `true`, the application version will not be deleted.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "InboundServices",
        "A list of the types of messages that this application is able to receive.\nEach value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeleteServiceOnDestroy",
        "If set to `true`, the service will be deleted if it is the last version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Entrypoint",
        "The entrypoint for the application.\nStructure is documented below.",
        Appengine_FlexibleAppVersionEntrypoint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeMainExecutablePath",
        "The path or name of the app's main executable.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ManualScaling",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        Appengine_FlexibleAppVersionManualScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "AppEngine service resource. Can contain numbers, letters, and hyphens.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Runtime",
        "Desired runtime. Example python27.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ApiConfig",
        "Serving configuration for Google Cloud Endpoints.\nStructure is documented below.",
        Appengine_FlexibleAppVersionApiConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultExpiration",
        "Duration that static files should be cached by web proxies and browsers.\nOnly applicable if the corresponding StaticFilesHandler does not specify its own expiration time.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceClass",
        "Instance class that is used to run this version. Valid values are\nAutomaticScaling: F1, F2, F4, F4_1G\nManualScaling: B1, B2, B4, B8, B4_1G\nDefaults to F1 for AutomaticScaling and B1 for ManualScaling.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "BetaSettings",
        "Metadata settings that are supplied to this version to enable beta runtime features.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AutomaticScaling",
        "Automatic scaling is based on request rate, response latencies, and other application metrics.\nStructure is documented below.",
        Appengine_FlexibleAppVersionAutomaticScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "VersionId",
        'Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.\nReserved names,"default", "latest", and any name with the prefix "ah-".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Handlers",
        "An ordered list of URL-matching patterns that should be applied to incoming requests.\nThe first matching URL handles the request and other request handlers are not attempted.\nStructure is documented below.",
        Appengine_FlexibleAppVersionHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeApiVersion",
        "The version of the API in the given runtime environment.\nPlease see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\\\nSubstitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServingStatus",
        "Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.\nDefault value is `SERVING`.\nPossible values are: `SERVING`, `STOPPED`.",
        [],
        false,
        false,
      ),
    ];
  }
}
