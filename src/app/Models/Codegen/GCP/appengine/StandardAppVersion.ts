import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { StandardAppVersionLibrary } from "../types/StandardAppVersionLibrary";
import { StandardAppVersionBasicScaling } from "../types/StandardAppVersionBasicScaling";
import { StandardAppVersionAutomaticScaling } from "../types/StandardAppVersionAutomaticScaling";
import { StandardAppVersionManualScaling } from "../types/StandardAppVersionManualScaling";
import { StandardAppVersionDeployment } from "../types/StandardAppVersionDeployment";
import { StandardAppVersionEntrypoint } from "../types/StandardAppVersionEntrypoint";
import { StandardAppVersionHandler } from "../types/StandardAppVersionHandler";
import { StandardAppVersionVpcAccessConnector } from "../types/StandardAppVersionVpcAccessConnector";

export interface StandardAppVersionArgs {
  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  ManualScaling?: StandardAppVersionManualScaling;

  // Desired runtime. Example python27.
  Runtime?: string;

  // The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  ServiceAccount?: string;

  // Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  VersionId?: string;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  InboundServices?: Array<string>;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  Deployment?: StandardAppVersionDeployment;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  Entrypoint?: StandardAppVersionEntrypoint;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  Handlers?: Array<StandardAppVersionHandler>;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
*/
  InstanceClass?: string;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  RuntimeApiVersion?: string;

  // Allows App Engine second generation runtimes to access the legacy bundled services.
  AppEngineApis?: boolean;

  // If set to `true`, the application version will not be deleted.
  NoopOnDestroy?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // AppEngine service resource
  Service?: string;

  // Whether multiple requests can be dispatched to this version at once.
  Threadsafe?: boolean;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  VpcAccessConnector?: StandardAppVersionVpcAccessConnector;

  /*
Configuration for third-party Python runtime libraries that are required by the application.
Structure is documented below.
*/
  Libraries?: Array<StandardAppVersionLibrary>;

  /*
Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
Structure is documented below.
*/
  BasicScaling?: StandardAppVersionBasicScaling;

  // If set to `true`, the service will be deleted if it is the last version.
  DeleteServiceOnDestroy?: boolean;

  // Environment variables available to the application.
  EnvVariables?: Map<string, string>;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  AutomaticScaling?: StandardAppVersionAutomaticScaling;
}
export class StandardAppVersion extends Resource {
  // Whether multiple requests can be dispatched to this version at once.
  public Threadsafe?: boolean;

  // Allows App Engine second generation runtimes to access the legacy bundled services.
  public AppEngineApis?: boolean;

  // If set to `true`, the service will be deleted if it is the last version.
  public DeleteServiceOnDestroy?: boolean;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public Deployment?: StandardAppVersionDeployment;

  // Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  public VersionId?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  public VpcAccessConnector?: StandardAppVersionVpcAccessConnector;

  /*
Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
Structure is documented below.
*/
  public BasicScaling?: StandardAppVersionBasicScaling;

  /*
Configuration for third-party Python runtime libraries that are required by the application.
Structure is documented below.
*/
  public Libraries?: Array<StandardAppVersionLibrary>;

  // The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  public ServiceAccount?: string;

  // If set to `true`, the application version will not be deleted.
  public NoopOnDestroy?: boolean;

  // Desired runtime. Example python27.
  public Runtime?: string;

  // AppEngine service resource
  public Service?: string;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  public Entrypoint?: StandardAppVersionEntrypoint;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  public InboundServices?: Array<string>;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
*/
  public InstanceClass?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public ManualScaling?: StandardAppVersionManualScaling;

  // The identifier for this object. Format specified above.
  public Name?: string;

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

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  public AutomaticScaling?: StandardAppVersionAutomaticScaling;

  // Environment variables available to the application.
  public EnvVariables?: Map<string, string>;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  public Handlers?: Array<StandardAppVersionHandler>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Runtime",
        "Desired runtime. Example python27.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceClass",
        "Instance class that is used to run this version. Valid values are\nAutomaticScaling: F1, F2, F4, F4_1G\nBasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8\nDefaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "AppEngine service resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "BasicScaling",
        "Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeleteServiceOnDestroy",
        "If set to `true`, the service will be deleted if it is the last version.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Deployment",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Handlers",
        "An ordered list of URL-matching patterns that should be applied to incoming requests.\nThe first matching URL handles the request and other request handlers are not attempted.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeApiVersion",
        "The version of the API in the given runtime environment.\nPlease see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\\\nSubstitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AppEngineApis",
        "Allows App Engine second generation runtimes to access the legacy bundled services.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Threadsafe",
        "Whether multiple requests can be dispatched to this version at once.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VpcAccessConnector",
        "Enables VPC connectivity for standard apps.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutomaticScaling",
        "Automatic scaling is based on request rate, response latencies, and other application metrics.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VersionId",
        'Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "InboundServices",
        "A list of the types of messages that this application is able to receive.\nEach value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "NoopOnDestroy",
        "If set to `true`, the application version will not be deleted.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ManualScaling",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Entrypoint",
        "The entrypoint for the application.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Libraries",
        "Configuration for third-party Python runtime libraries that are required by the application.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EnvVariables",
        "Environment variables available to the application.",
      ),
    ];
  }
}
