import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_StandardAppVersionVpcAccessConnector,
  Appengine_StandardAppVersionVpcAccessConnector_GetTypes,
} from "../types/Appengine_StandardAppVersionVpcAccessConnector";
import {
  Appengine_StandardAppVersionBasicScaling,
  Appengine_StandardAppVersionBasicScaling_GetTypes,
} from "../types/Appengine_StandardAppVersionBasicScaling";
import {
  Appengine_StandardAppVersionDeployment,
  Appengine_StandardAppVersionDeployment_GetTypes,
} from "../types/Appengine_StandardAppVersionDeployment";
import {
  Appengine_StandardAppVersionEntrypoint,
  Appengine_StandardAppVersionEntrypoint_GetTypes,
} from "../types/Appengine_StandardAppVersionEntrypoint";
import {
  Appengine_StandardAppVersionAutomaticScaling,
  Appengine_StandardAppVersionAutomaticScaling_GetTypes,
} from "../types/Appengine_StandardAppVersionAutomaticScaling";
import {
  Appengine_StandardAppVersionHandler,
  Appengine_StandardAppVersionHandler_GetTypes,
} from "../types/Appengine_StandardAppVersionHandler";
import {
  Appengine_StandardAppVersionManualScaling,
  Appengine_StandardAppVersionManualScaling_GetTypes,
} from "../types/Appengine_StandardAppVersionManualScaling";
import {
  Appengine_StandardAppVersionLibrary,
  Appengine_StandardAppVersionLibrary_GetTypes,
} from "../types/Appengine_StandardAppVersionLibrary";

export interface StandardAppVersionArgs {
  // Allows App Engine second generation runtimes to access the legacy bundled services.
  AppEngineApis?: boolean;

  // If set to `true`, the service will be deleted if it is the last version.
  DeleteServiceOnDestroy?: boolean;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  Entrypoint?: Appengine_StandardAppVersionEntrypoint;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  InboundServices?: Array<string>;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
*/
  InstanceClass?: string;

  // If set to `true`, the application version will not be deleted.
  NoopOnDestroy?: boolean;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  RuntimeApiVersion?: string;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  AutomaticScaling?: Appengine_StandardAppVersionAutomaticScaling;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  Handlers?: Array<Appengine_StandardAppVersionHandler>;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  ManualScaling?: Appengine_StandardAppVersionManualScaling;

  // Desired runtime. Example python27.
  Runtime?: string;

  /*
Configuration for third-party Python runtime libraries that are required by the application.
Structure is documented below.
*/
  Libraries?: Array<Appengine_StandardAppVersionLibrary>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // AppEngine service resource
  Service?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  VpcAccessConnector?: Appengine_StandardAppVersionVpcAccessConnector;

  /*
Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
Structure is documented below.
*/
  BasicScaling?: Appengine_StandardAppVersionBasicScaling;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  Deployment?: Appengine_StandardAppVersionDeployment;

  // Environment variables available to the application.
  EnvVariables?: Map<string, string>;

  // The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  ServiceAccount?: string;

  // Whether multiple requests can be dispatched to this version at once.
  Threadsafe?: boolean;

  // Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  VersionId?: string;
}
export class StandardAppVersion extends Resource {
  // Allows App Engine second generation runtimes to access the legacy bundled services.
  public AppEngineApis?: boolean;

  /*
Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
Structure is documented below.
*/
  public BasicScaling?: Appengine_StandardAppVersionBasicScaling;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public Deployment?: Appengine_StandardAppVersionDeployment;

  // If set to `true`, the application version will not be deleted.
  public NoopOnDestroy?: boolean;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  public Entrypoint?: Appengine_StandardAppVersionEntrypoint;

  // AppEngine service resource
  public Service?: string;

  // The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  public ServiceAccount?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  public VpcAccessConnector?: Appengine_StandardAppVersionVpcAccessConnector;

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
  public AutomaticScaling?: Appengine_StandardAppVersionAutomaticScaling;

  // If set to `true`, the service will be deleted if it is the last version.
  public DeleteServiceOnDestroy?: boolean;

  // Environment variables available to the application.
  public EnvVariables?: Map<string, string>;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  public Handlers?: Array<Appengine_StandardAppVersionHandler>;

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
  public ManualScaling?: Appengine_StandardAppVersionManualScaling;

  // The identifier for this object. Format specified above.
  public Name?: string;

  // Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  public VersionId?: string;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  public InboundServices?: Array<string>;

  /*
Configuration for third-party Python runtime libraries that are required by the application.
Structure is documented below.
*/
  public Libraries?: Array<Appengine_StandardAppVersionLibrary>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Desired runtime. Example python27.
  public Runtime?: string;

  // Whether multiple requests can be dispatched to this version at once.
  public Threadsafe?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "BasicScaling",
        "Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.\nStructure is documented below.",
        Appengine_StandardAppVersionBasicScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Threadsafe",
        "Whether multiple requests can be dispatched to this version at once.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "VersionId",
        'Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AppEngineApis",
        "Allows App Engine second generation runtimes to access the legacy bundled services.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceClass",
        "Instance class that is used to run this version. Valid values are\nAutomaticScaling: F1, F2, F4, F4_1G\nBasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8\nDefaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.",
        [],
        false,
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
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Deployment",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
        Appengine_StandardAppVersionDeployment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "EnvVariables",
        "Environment variables available to the application.",
        InputType_Map_GetTypes(),
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
        InputType.String,
        "RuntimeApiVersion",
        "The version of the API in the given runtime environment.\nPlease see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\\\nSubstitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Handlers",
        "An ordered list of URL-matching patterns that should be applied to incoming requests.\nThe first matching URL handles the request and other request handlers are not attempted.\nStructure is documented below.",
        Appengine_StandardAppVersionHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ManualScaling",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        Appengine_StandardAppVersionManualScaling_GetTypes(),
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
        InputType.Object,
        "AutomaticScaling",
        "Automatic scaling is based on request rate, response latencies, and other application metrics.\nStructure is documented below.",
        Appengine_StandardAppVersionAutomaticScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Libraries",
        "Configuration for third-party Python runtime libraries that are required by the application.\nStructure is documented below.",
        Appengine_StandardAppVersionLibrary_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "AppEngine service resource",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VpcAccessConnector",
        "Enables VPC connectivity for standard apps.\nStructure is documented below.",
        Appengine_StandardAppVersionVpcAccessConnector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Entrypoint",
        "The entrypoint for the application.\nStructure is documented below.",
        Appengine_StandardAppVersionEntrypoint_GetTypes(),
        true,
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
    ];
  }
}
