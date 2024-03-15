import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectionNodeConfig } from "../types/ConnectionNodeConfig";
import { ConnectionSslConfig } from "../types/ConnectionSslConfig";
import { ConnectionLockConfig } from "../types/ConnectionLockConfig";
import { ConnectionAuthConfig } from "../types/ConnectionAuthConfig";
import { ConnectionEventingRuntimeData } from "../types/ConnectionEventingRuntimeData";
import { ConnectionLogConfig } from "../types/ConnectionLogConfig";
import { ConnectionConfigVariable } from "../types/ConnectionConfigVariable";
import { ConnectionEventingConfig } from "../types/ConnectionEventingConfig";
import { ConnectionStatus } from "../types/ConnectionStatus";
import { ConnectionConnectorVersionInfraConfig } from "../types/ConnectionConnectorVersionInfraConfig";
import { ConnectionDestinationConfig } from "../types/ConnectionDestinationConfig";

export interface ConnectionArgs {
  // An arbitrary description for the Conection.
  Description?: string;

  /*
Define the Connectors target endpoint.
Structure is documented below.
*/
  DestinationConfigs?: Array<ConnectionDestinationConfig>;

  /*
Eventing enablement type. Will be nil if eventing is not enabled.
Possible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.
*/
  EventingEnablementType?: string;

  /*
Config Variables for the connection.
Structure is documented below.
*/
  ConfigVariables?: Array<ConnectionConfigVariable>;

  /*
Eventing Configuration of a connection
Structure is documented below.
*/
  EventingConfig?: ConnectionEventingConfig;

  /*
Log configuration for the connection.
Structure is documented below.
*/
  LogConfig?: ConnectionLogConfig;

  /*
Node configuration for the connection.
Structure is documented below.
*/
  NodeConfig?: ConnectionNodeConfig;

  /*
SSL Configuration of a connection
Structure is documented below.
*/
  SslConfig?: ConnectionSslConfig;

  // connectorVersion of the Connector.
  ConnectorVersion?: string;

  /*
Determines whether or no a connection is locked. If locked, a reason must be specified.
Structure is documented below.
*/
  LockConfig?: ConnectionLockConfig;

  /*
Name of Connection needs to be created.


- - -
*/
  Name?: string;

  // Service account needed for runtime plane to access Google Cloud resources.
  ServiceAccount?: string;

  // Suspended indicates if a user has suspended a connection or not.
  Suspended?: boolean;

  /*
authConfig for the connection.
Structure is documented below.
*/
  AuthConfig?: ConnectionAuthConfig;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Location in which Connection needs to be created.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Connection extends Resource {
  // Flag to mark the version indicating the launch stage.
  public ConnectorVersionLaunchStage?: string;

  /*
Eventing enablement type. Will be nil if eventing is not enabled.
Possible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.
*/
  public EventingEnablementType?: string;

  /*
Log configuration for the connection.
Structure is documented below.
*/
  public LogConfig?: ConnectionLogConfig;

  /*
SSL Configuration of a connection
Structure is documented below.
*/
  public SslConfig?: ConnectionSslConfig;

  // Time the Namespace was updated in UTC.
  public UpdateTime?: string;

  /*
Define the Connectors target endpoint.
Structure is documented below.
*/
  public DestinationConfigs?: Array<ConnectionDestinationConfig>;

  /*
Name of Connection needs to be created.


- - -
*/
  public Name?: string;

  /*
The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address.
e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"
*/
  public ServiceDirectory?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  public Statuses?: Array<ConnectionStatus>;

  /*
authConfig for the connection.
Structure is documented below.
*/
  public AuthConfig?: ConnectionAuthConfig;

  // Connection revision. This field is only updated when the connection is created or updated by User.
  public ConnectionRevision?: string;

  /*
This configuration provides infra configs like rate limit threshold which need to be configurable for every connector version.
Structure is documented below.
*/
  public ConnectorVersionInfraConfigs?: Array<ConnectionConnectorVersionInfraConfig>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Service account needed for runtime plane to access Google Cloud resources.
  public ServiceAccount?: string;

  /*
Eventing Configuration of a connection
Structure is documented below.
*/
  public EventingConfig?: ConnectionEventingConfig;

  /*
Eventing Runtime Data.
Structure is documented below.
*/
  public EventingRuntimeDatas?: Array<ConnectionEventingRuntimeData>;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Determines whether or no a connection is locked. If locked, a reason must be specified.
Structure is documented below.
*/
  public LockConfig?: ConnectionLockConfig;

  // Location in which Connection needs to be created.
  public Location?: string;

  /*
Node configuration for the connection.
Structure is documented below.
*/
  public NodeConfig?: ConnectionNodeConfig;

  // This subscription type enum states the subscription type of the project.
  public SubscriptionType?: string;

  // Suspended indicates if a user has suspended a connection or not.
  public Suspended?: boolean;

  /*
Config Variables for the connection.
Structure is documented below.
*/
  public ConfigVariables?: Array<ConnectionConfigVariable>;

  // connectorVersion of the Connector.
  public ConnectorVersion?: string;

  // Time the Namespace was created in UTC.
  public CreateTime?: string;

  // An arbitrary description for the Conection.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NodeConfig",
        "Node configuration for the connection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Service account needed for runtime plane to access Google Cloud resources.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthConfig",
        "authConfig for the connection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EventingEnablementType",
        "Eventing enablement type. Will be nil if eventing is not enabled.\nPossible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Suspended",
        "Suspended indicates if a user has suspended a connection or not.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location in which Connection needs to be created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of Connection needs to be created.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "LockConfig",
        "Determines whether or no a connection is locked. If locked, a reason must be specified.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DestinationConfigs",
        "Define the Connectors target endpoint.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ConfigVariables",
        "Config Variables for the connection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EventingConfig",
        "Eventing Configuration of a connection\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LogConfig",
        "Log configuration for the connection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SslConfig",
        "SSL Configuration of a connection\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectorVersion",
        "connectorVersion of the Connector.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An arbitrary description for the Conection.",
      ),
    ];
  }
}
