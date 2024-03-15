import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FlexibleAppVersionVpcAccessConnector } from "../types/FlexibleAppVersionVpcAccessConnector";
import { FlexibleAppVersionApiConfig } from "../types/FlexibleAppVersionApiConfig";
import { FlexibleAppVersionReadinessCheck } from "../types/FlexibleAppVersionReadinessCheck";
import { FlexibleAppVersionDeployment } from "../types/FlexibleAppVersionDeployment";
import { FlexibleAppVersionEntrypoint } from "../types/FlexibleAppVersionEntrypoint";
import { FlexibleAppVersionLivenessCheck } from "../types/FlexibleAppVersionLivenessCheck";
import { FlexibleAppVersionManualScaling } from "../types/FlexibleAppVersionManualScaling";
import { FlexibleAppVersionHandler } from "../types/FlexibleAppVersionHandler";
import { FlexibleAppVersionNetwork } from "../types/FlexibleAppVersionNetwork";
import { FlexibleAppVersionResources } from "../types/FlexibleAppVersionResources";
import { FlexibleAppVersionAutomaticScaling } from "../types/FlexibleAppVersionAutomaticScaling";
import { FlexibleAppVersionEndpointsApiService } from "../types/FlexibleAppVersionEndpointsApiService";

export interface FlexibleAppVersionArgs {
  /*
The entrypoint for the application.
Structure is documented below.
*/
  Entrypoint?: FlexibleAppVersionEntrypoint;

  /*
Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
Structure is documented below.
*/
  LivenessCheck?: FlexibleAppVersionLivenessCheck;

  // The channel of the runtime to use. Only available for some runtimes.
  RuntimeChannel?: string;

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

  // Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.
  EnvVariables?: Map<string, string>;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
*/
  InstanceClass?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  RuntimeApiVersion?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  ManualScaling?: FlexibleAppVersionManualScaling;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  VpcAccessConnector?: FlexibleAppVersionVpcAccessConnector;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  Handlers?: Array<FlexibleAppVersionHandler>;

  /*
Serving configuration for Google Cloud Endpoints.
Structure is documented below.
*/
  ApiConfig?: FlexibleAppVersionApiConfig;

  /*
Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
*/
  DefaultExpiration?: string;

  /*
Extra network settings
Structure is documented below.
*/
  Network?: FlexibleAppVersionNetwork;

  // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  NobuildFilesRegex?: string;

  /*
Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
Structure is documented below.
*/
  ReadinessCheck?: FlexibleAppVersionReadinessCheck;

  /*
Machine resources for a version.
Structure is documented below.
*/
  Resources?: FlexibleAppVersionResources;

  // The path or name of the app's main executable.
  RuntimeMainExecutablePath?: string;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  AutomaticScaling?: FlexibleAppVersionAutomaticScaling;

  // If set to `true`, the service will be deleted if it is the last version.
  DeleteServiceOnDestroy?: boolean;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  Deployment?: FlexibleAppVersionDeployment;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  EndpointsApiService?: FlexibleAppVersionEndpointsApiService;

  // AppEngine service resource. Can contain numbers, letters, and hyphens.
  Service?: string;

  /*
Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.
Default value is `SERVING`.
Possible values are: `SERVING`, `STOPPED`.
*/
  ServingStatus?: string;

  // If set to `true`, the application version will not be deleted.
  NoopOnDestroy?: boolean;

  // Desired runtime. Example python27.
  Runtime?: string;

  // Metadata settings that are supplied to this version to enable beta runtime features.
  BetaSettings?: Map<string, string>;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  InboundServices?: Array<string>;
}
export class FlexibleAppVersion extends Resource {
  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public EndpointsApiService?: FlexibleAppVersionEndpointsApiService;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
*/
  public InstanceClass?: string;

  /*
Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
*/
  public VersionId?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  public VpcAccessConnector?: FlexibleAppVersionVpcAccessConnector;

  /*
Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
Structure is documented below.
*/
  public LivenessCheck?: FlexibleAppVersionLivenessCheck;

  // Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  public NobuildFilesRegex?: string;

  // If set to `true`, the application version will not be deleted.
  public NoopOnDestroy?: boolean;

  /*
Machine resources for a version.
Structure is documented below.
*/
  public Resources?: FlexibleAppVersionResources;

  // If set to `true`, the service will be deleted if it is the last version.
  public DeleteServiceOnDestroy?: boolean;

  // Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.
  public EnvVariables?: Map<string, string>;

  /*
Serving configuration for Google Cloud Endpoints.
Structure is documented below.
*/
  public ApiConfig?: FlexibleAppVersionApiConfig;

  /*
Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog"
*/
  public Name?: string;

  // Desired runtime. Example python27.
  public Runtime?: string;

  // The path or name of the app's main executable.
  public RuntimeMainExecutablePath?: string;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  public InboundServices?: Array<string>;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public ManualScaling?: FlexibleAppVersionManualScaling;

  /*
Extra network settings
Structure is documented below.
*/
  public Network?: FlexibleAppVersionNetwork;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  public AutomaticScaling?: FlexibleAppVersionAutomaticScaling;

  // Metadata settings that are supplied to this version to enable beta runtime features.
  public BetaSettings?: Map<string, string>;

  // The channel of the runtime to use. Only available for some runtimes.
  public RuntimeChannel?: string;

  /*
Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
*/
  public DefaultExpiration?: string;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public Deployment?: FlexibleAppVersionDeployment;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  public Entrypoint?: FlexibleAppVersionEntrypoint;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  public Handlers?: Array<FlexibleAppVersionHandler>;

  /*
Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
Structure is documented below.
*/
  public ReadinessCheck?: FlexibleAppVersionReadinessCheck;

  /*
The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.
*/
  public ServiceAccount?: string;

  /*
Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.
Default value is `SERVING`.
Possible values are: `SERVING`, `STOPPED`.
*/
  public ServingStatus?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  public RuntimeApiVersion?: string;

  // AppEngine service resource. Can contain numbers, letters, and hyphens.
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NobuildFilesRegex",
        "Files that match this pattern will not be built into this version. Only applicable for Go runtimes.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "NoopOnDestroy",
        "If set to `true`, the application version will not be deleted.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EnvVariables",
        "Environment variables available to the application.  As these are not returned in the API request, the provider will not detect any changes made outside of the config.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceClass",
        "Instance class that is used to run this version. Valid values are\nAutomaticScaling: F1, F2, F4, F4_1G\nManualScaling: B1, B2, B4, B8, B4_1G\nDefaults to F1 for AutomaticScaling and B1 for ManualScaling.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Handlers",
        "An ordered list of URL-matching patterns that should be applied to incoming requests.\nThe first matching URL handles the request and other request handlers are not attempted.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "Extra network settings\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Runtime",
        "Desired runtime. Example python27.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReadinessCheck",
        "Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeApiVersion",
        "The version of the API in the given runtime environment.\nPlease see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\\\nSubstitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "InboundServices",
        "A list of the types of messages that this application is able to receive.\nEach value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeChannel",
        "The channel of the runtime to use. Only available for some runtimes.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultExpiration",
        "Duration that static files should be cached by web proxies and browsers.\nOnly applicable if the corresponding StaticFilesHandler does not specify its own expiration time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EndpointsApiService",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Entrypoint",
        "The entrypoint for the application.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Resources",
        "Machine resources for a version.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeMainExecutablePath",
        "The path or name of the app's main executable.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeleteServiceOnDestroy",
        "If set to `true`, the service will be deleted if it is the last version.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "AppEngine service resource. Can contain numbers, letters, and hyphens.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServingStatus",
        "Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.\nDefault value is `SERVING`.\nPossible values are: `SERVING`, `STOPPED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LivenessCheck",
        "Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ManualScaling",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiConfig",
        "Serving configuration for Google Cloud Endpoints.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutomaticScaling",
        "Automatic scaling is based on request rate, response latencies, and other application metrics.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as\ndefault if this field is neither provided in app.yaml file nor through CLI flag.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VersionId",
        'Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens.\nReserved names,"default", "latest", and any name with the prefix "ah-".',
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcAccessConnector",
        "Enables VPC connectivity for standard apps.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Deployment",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BetaSettings",
        "Metadata settings that are supplied to this version to enable beta runtime features.",
      ),
    ];
  }
}
