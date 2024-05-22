import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_StandardAppVersionEntrypoint,
  appengine_StandardAppVersionEntrypoint_GetTypes,
} from "../types/appengine_StandardAppVersionEntrypoint";
import {
  appengine_StandardAppVersionLibrary,
  appengine_StandardAppVersionLibrary_GetTypes,
} from "../types/appengine_StandardAppVersionLibrary";
import {
  appengine_StandardAppVersionManualScaling,
  appengine_StandardAppVersionManualScaling_GetTypes,
} from "../types/appengine_StandardAppVersionManualScaling";
import {
  appengine_StandardAppVersionBasicScaling,
  appengine_StandardAppVersionBasicScaling_GetTypes,
} from "../types/appengine_StandardAppVersionBasicScaling";
import {
  appengine_StandardAppVersionHandler,
  appengine_StandardAppVersionHandler_GetTypes,
} from "../types/appengine_StandardAppVersionHandler";
import {
  appengine_StandardAppVersionVpcAccessConnector,
  appengine_StandardAppVersionVpcAccessConnector_GetTypes,
} from "../types/appengine_StandardAppVersionVpcAccessConnector";
import {
  appengine_StandardAppVersionAutomaticScaling,
  appengine_StandardAppVersionAutomaticScaling_GetTypes,
} from "../types/appengine_StandardAppVersionAutomaticScaling";
import {
  appengine_StandardAppVersionDeployment,
  appengine_StandardAppVersionDeployment_GetTypes,
} from "../types/appengine_StandardAppVersionDeployment";

export interface StandardAppVersionArgs {
  /*
Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
Structure is documented below.
*/
  basicScaling?: appengine_StandardAppVersionBasicScaling;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  inboundServices?: Array<string>;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
*/
  instanceClass?: string;

  // If set to `true`, the application version will not be deleted.
  noopOnDestroy?: boolean;

  // The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  serviceAccount?: string;

  // Whether multiple requests can be dispatched to this version at once.
  threadsafe?: boolean;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  handlers?: Array<appengine_StandardAppVersionHandler>;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  vpcAccessConnector?: appengine_StandardAppVersionVpcAccessConnector;

  // Allows App Engine second generation runtimes to access the legacy bundled services.
  appEngineApis?: boolean;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  automaticScaling?: appengine_StandardAppVersionAutomaticScaling;

  // If set to `true`, the service will be deleted if it is the last version.
  deleteServiceOnDestroy?: boolean;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  deployment?: appengine_StandardAppVersionDeployment;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  entrypoint?: appengine_StandardAppVersionEntrypoint;

  // Environment variables available to the application.
  envVariables?: Map<string, string>;

  /*
Configuration for third-party Python runtime libraries that are required by the application.
Structure is documented below.
*/
  libraries?: Array<appengine_StandardAppVersionLibrary>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // AppEngine service resource
  service?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  manualScaling?: appengine_StandardAppVersionManualScaling;

  // Desired runtime. Example python27.
  runtime?: string;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  runtimeApiVersion?: string;

  // Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  versionId?: string;
}
export class StandardAppVersion extends Resource {
  // AppEngine service resource
  public service?: string;

  // Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  public versionId?: string;

  // If set to `true`, the service will be deleted if it is the last version.
  public deleteServiceOnDestroy?: boolean;

  /*
Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
*/
  public instanceClass?: string;

  /*
A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
Structure is documented below.
*/
  public manualScaling?: appengine_StandardAppVersionManualScaling;

  /*
Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
Structure is documented below.
*/
  public basicScaling?: appengine_StandardAppVersionBasicScaling;

  // Desired runtime. Example python27.
  public runtime?: string;

  /*
Enables VPC connectivity for standard apps.
Structure is documented below.
*/
  public vpcAccessConnector?: appengine_StandardAppVersionVpcAccessConnector;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\
Substitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.
*/
  public runtimeApiVersion?: string;

  // The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  public serviceAccount?: string;

  /*
Configuration for third-party Python runtime libraries that are required by the application.
Structure is documented below.
*/
  public libraries?: Array<appengine_StandardAppVersionLibrary>;

  // The identifier for this object. Format specified above.
  public name?: string;

  // If set to `true`, the application version will not be deleted.
  public noopOnDestroy?: boolean;

  /*
The entrypoint for the application.
Structure is documented below.
*/
  public entrypoint?: appengine_StandardAppVersionEntrypoint;

  // Environment variables available to the application.
  public envVariables?: Map<string, string>;

  /*
An ordered list of URL-matching patterns that should be applied to incoming requests.
The first matching URL handles the request and other request handlers are not attempted.
Structure is documented below.
*/
  public handlers?: Array<appengine_StandardAppVersionHandler>;

  /*
A list of the types of messages that this application is able to receive.
Each value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.
*/
  public inboundServices?: Array<string>;

  // Whether multiple requests can be dispatched to this version at once.
  public threadsafe?: boolean;

  // Allows App Engine second generation runtimes to access the legacy bundled services.
  public appEngineApis?: boolean;

  /*
Automatic scaling is based on request rate, response latencies, and other application metrics.
Structure is documented below.
*/
  public automaticScaling?: appengine_StandardAppVersionAutomaticScaling;

  /*
Code and application artifacts that make up this version.
Structure is documented below.
*/
  public deployment?: appengine_StandardAppVersionDeployment;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "basicScaling",
        "Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.\nStructure is documented below.",
        appengine_StandardAppVersionBasicScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteServiceOnDestroy",
        "If set to `true`, the service will be deleted if it is the last version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "manualScaling",
        "A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.\nStructure is documented below.",
        appengine_StandardAppVersionManualScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtimeApiVersion",
        "The version of the API in the given runtime environment.\nPlease see the app.yaml reference for valid values at `https://cloud.google.com/appengine/docs/standard/<language>/config/appref`\\\nSubstitute `<language>` with `python`, `java`, `php`, `ruby`, `go` or `nodejs`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "noopOnDestroy",
        "If set to `true`, the application version will not be deleted.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "libraries",
        "Configuration for third-party Python runtime libraries that are required by the application.\nStructure is documented below.",
        appengine_StandardAppVersionLibrary_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtime",
        "Desired runtime. Example python27.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "appEngineApis",
        "Allows App Engine second generation runtimes to access the legacy bundled services.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "envVariables",
        "Environment variables available to the application.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "AppEngine service resource",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "inboundServices",
        "A list of the types of messages that this application is able to receive.\nEach value may be one of: `INBOUND_SERVICE_MAIL`, `INBOUND_SERVICE_MAIL_BOUNCE`, `INBOUND_SERVICE_XMPP_ERROR`, `INBOUND_SERVICE_XMPP_MESSAGE`, `INBOUND_SERVICE_XMPP_SUBSCRIBE`, `INBOUND_SERVICE_XMPP_PRESENCE`, `INBOUND_SERVICE_CHANNEL_PRESENCE`, `INBOUND_SERVICE_WARMUP`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceClass",
        "Instance class that is used to run this version. Valid values are\nAutomaticScaling: F1, F2, F4, F4_1G\nBasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8\nDefaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "threadsafe",
        "Whether multiple requests can be dispatched to this version at once.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "handlers",
        "An ordered list of URL-matching patterns that should be applied to incoming requests.\nThe first matching URL handles the request and other request handlers are not attempted.\nStructure is documented below.",
        appengine_StandardAppVersionHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionId",
        'Relative name of the version within the service. For example, `v1`. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcAccessConnector",
        "Enables VPC connectivity for standard apps.\nStructure is documented below.",
        appengine_StandardAppVersionVpcAccessConnector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "automaticScaling",
        "Automatic scaling is based on request rate, response latencies, and other application metrics.\nStructure is documented below.",
        appengine_StandardAppVersionAutomaticScaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deployment",
        "Code and application artifacts that make up this version.\nStructure is documented below.",
        appengine_StandardAppVersionDeployment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "entrypoint",
        "The entrypoint for the application.\nStructure is documented below.",
        appengine_StandardAppVersionEntrypoint_GetTypes(),
        true,
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
    ];
  }
}
