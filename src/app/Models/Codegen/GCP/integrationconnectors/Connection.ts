import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionSslConfig,
  Integrationconnectors_ConnectionSslConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionSslConfig";
import {
  Integrationconnectors_ConnectionNodeConfig,
  Integrationconnectors_ConnectionNodeConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionNodeConfig";
import {
  Integrationconnectors_ConnectionStatus,
  Integrationconnectors_ConnectionStatus_GetTypes,
} from "../types/Integrationconnectors_ConnectionStatus";
import {
  Integrationconnectors_ConnectionConnectorVersionInfraConfig,
  Integrationconnectors_ConnectionConnectorVersionInfraConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionConnectorVersionInfraConfig";
import {
  Integrationconnectors_ConnectionDestinationConfig,
  Integrationconnectors_ConnectionDestinationConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionDestinationConfig";
import {
  Integrationconnectors_ConnectionLogConfig,
  Integrationconnectors_ConnectionLogConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionLogConfig";
import {
  Integrationconnectors_ConnectionEventingRuntimeData,
  Integrationconnectors_ConnectionEventingRuntimeData_GetTypes,
} from "../types/Integrationconnectors_ConnectionEventingRuntimeData";
import {
  Integrationconnectors_ConnectionEventingConfig,
  Integrationconnectors_ConnectionEventingConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionEventingConfig";
import {
  Integrationconnectors_ConnectionLockConfig,
  Integrationconnectors_ConnectionLockConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionLockConfig";
import {
  Integrationconnectors_ConnectionAuthConfig,
  Integrationconnectors_ConnectionAuthConfig_GetTypes,
} from "../types/Integrationconnectors_ConnectionAuthConfig";
import {
  Integrationconnectors_ConnectionConfigVariable,
  Integrationconnectors_ConnectionConfigVariable_GetTypes,
} from "../types/Integrationconnectors_ConnectionConfigVariable";

export interface ConnectionArgs {
  /*
Eventing Configuration of a connection
Structure is documented below.
*/
  EventingConfig?: Integrationconnectors_ConnectionEventingConfig;

  /*
Eventing enablement type. Will be nil if eventing is not enabled.
Possible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.
*/
  EventingEnablementType?: string;

  /*
Determines whether or no a connection is locked. If locked, a reason must be specified.
Structure is documented below.
*/
  LockConfig?: Integrationconnectors_ConnectionLockConfig;

  // Service account needed for runtime plane to access Google Cloud resources.
  ServiceAccount?: string;

  /*
authConfig for the connection.
Structure is documented below.
*/
  AuthConfig?: Integrationconnectors_ConnectionAuthConfig;

  /*
Config Variables for the connection.
Structure is documented below.
*/
  ConfigVariables?: Array<Integrationconnectors_ConnectionConfigVariable>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
SSL Configuration of a connection
Structure is documented below.
*/
  SslConfig?: Integrationconnectors_ConnectionSslConfig;

  // Suspended indicates if a user has suspended a connection or not.
  Suspended?: boolean;

  // connectorVersion of the Connector.
  ConnectorVersion?: string;

  // An arbitrary description for the Conection.
  Description?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Location in which Connection needs to be created.
  Location?: string;

  /*
Name of Connection needs to be created.


- - -
*/
  Name?: string;

  /*
Node configuration for the connection.
Structure is documented below.
*/
  NodeConfig?: Integrationconnectors_ConnectionNodeConfig;

  /*
Define the Connectors target endpoint.
Structure is documented below.
*/
  DestinationConfigs?: Array<Integrationconnectors_ConnectionDestinationConfig>;

  /*
Log configuration for the connection.
Structure is documented below.
*/
  LogConfig?: Integrationconnectors_ConnectionLogConfig;
}
export class Connection extends Resource {
  // An arbitrary description for the Conection.
  public Description?: string;

  /*
Eventing Configuration of a connection
Structure is documented below.
*/
  public EventingConfig?: Integrationconnectors_ConnectionEventingConfig;

  /*
Eventing Runtime Data.
Structure is documented below.
*/
  public EventingRuntimeDatas?: Array<Integrationconnectors_ConnectionEventingRuntimeData>;

  /*
Log configuration for the connection.
Structure is documented below.
*/
  public LogConfig?: Integrationconnectors_ConnectionLogConfig;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  public Statuses?: Array<Integrationconnectors_ConnectionStatus>;

  // Time the Namespace was created in UTC.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Suspended indicates if a user has suspended a connection or not.
  public Suspended?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // This subscription type enum states the subscription type of the project.
  public SubscriptionType?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Location in which Connection needs to be created.
  public Location?: string;

  // Service account needed for runtime plane to access Google Cloud resources.
  public ServiceAccount?: string;

  /*
Name of Connection needs to be created.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
SSL Configuration of a connection
Structure is documented below.
*/
  public SslConfig?: Integrationconnectors_ConnectionSslConfig;

  // Time the Namespace was updated in UTC.
  public UpdateTime?: string;

  /*
authConfig for the connection.
Structure is documented below.
*/
  public AuthConfig?: Integrationconnectors_ConnectionAuthConfig;

  /*
Config Variables for the connection.
Structure is documented below.
*/
  public ConfigVariables?: Array<Integrationconnectors_ConnectionConfigVariable>;

  // Connection revision. This field is only updated when the connection is created or updated by User.
  public ConnectionRevision?: string;

  /*
Node configuration for the connection.
Structure is documented below.
*/
  public NodeConfig?: Integrationconnectors_ConnectionNodeConfig;

  // connectorVersion of the Connector.
  public ConnectorVersion?: string;

  // Flag to mark the version indicating the launch stage.
  public ConnectorVersionLaunchStage?: string;

  /*
Define the Connectors target endpoint.
Structure is documented below.
*/
  public DestinationConfigs?: Array<Integrationconnectors_ConnectionDestinationConfig>;

  /*
Determines whether or no a connection is locked. If locked, a reason must be specified.
Structure is documented below.
*/
  public LockConfig?: Integrationconnectors_ConnectionLockConfig;

  /*
The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address.
e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"
*/
  public ServiceDirectory?: string;

  /*
This configuration provides infra configs like rate limit threshold which need to be configurable for every connector version.
Structure is documented below.
*/
  public ConnectorVersionInfraConfigs?: Array<Integrationconnectors_ConnectionConnectorVersionInfraConfig>;

  /*
Eventing enablement type. Will be nil if eventing is not enabled.
Possible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.
*/
  public EventingEnablementType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EventingEnablementType",
        "Eventing enablement type. Will be nil if eventing is not enabled.\nPossible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectorVersion",
        "connectorVersion of the Connector.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location in which Connection needs to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DestinationConfigs",
        "Define the Connectors target endpoint.\nStructure is documented below.",
        Integrationconnectors_ConnectionDestinationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EventingConfig",
        "Eventing Configuration of a connection\nStructure is documented below.",
        Integrationconnectors_ConnectionEventingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SslConfig",
        "SSL Configuration of a connection\nStructure is documented below.",
        Integrationconnectors_ConnectionSslConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Suspended",
        "Suspended indicates if a user has suspended a connection or not.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AuthConfig",
        "authConfig for the connection.\nStructure is documented below.",
        Integrationconnectors_ConnectionAuthConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LogConfig",
        "Log configuration for the connection.\nStructure is documented below.",
        Integrationconnectors_ConnectionLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LockConfig",
        "Determines whether or no a connection is locked. If locked, a reason must be specified.\nStructure is documented below.",
        Integrationconnectors_ConnectionLockConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Service account needed for runtime plane to access Google Cloud resources.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ConfigVariables",
        "Config Variables for the connection.\nStructure is documented below.",
        Integrationconnectors_ConnectionConfigVariable_GetTypes(),
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
        "Description",
        "An arbitrary description for the Conection.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of Connection needs to be created.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeConfig",
        "Node configuration for the connection.\nStructure is documented below.",
        Integrationconnectors_ConnectionNodeConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
