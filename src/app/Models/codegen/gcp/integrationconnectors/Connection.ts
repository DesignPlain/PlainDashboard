import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  integrationconnectors_ConnectionSslConfig,
  integrationconnectors_ConnectionSslConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionSslConfig";
import {
  integrationconnectors_ConnectionDestinationConfig,
  integrationconnectors_ConnectionDestinationConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionDestinationConfig";
import {
  integrationconnectors_ConnectionLockConfig,
  integrationconnectors_ConnectionLockConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionLockConfig";
import {
  integrationconnectors_ConnectionLogConfig,
  integrationconnectors_ConnectionLogConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionLogConfig";
import {
  integrationconnectors_ConnectionAuthConfig,
  integrationconnectors_ConnectionAuthConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionAuthConfig";
import {
  integrationconnectors_ConnectionNodeConfig,
  integrationconnectors_ConnectionNodeConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionNodeConfig";
import {
  integrationconnectors_ConnectionEventingConfig,
  integrationconnectors_ConnectionEventingConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionEventingConfig";
import {
  integrationconnectors_ConnectionEventingRuntimeData,
  integrationconnectors_ConnectionEventingRuntimeData_GetTypes,
} from "../types/integrationconnectors_ConnectionEventingRuntimeData";
import {
  integrationconnectors_ConnectionConnectorVersionInfraConfig,
  integrationconnectors_ConnectionConnectorVersionInfraConfig_GetTypes,
} from "../types/integrationconnectors_ConnectionConnectorVersionInfraConfig";
import {
  integrationconnectors_ConnectionStatus,
  integrationconnectors_ConnectionStatus_GetTypes,
} from "../types/integrationconnectors_ConnectionStatus";
import {
  integrationconnectors_ConnectionConfigVariable,
  integrationconnectors_ConnectionConfigVariable_GetTypes,
} from "../types/integrationconnectors_ConnectionConfigVariable";

export interface ConnectionArgs {
  /*
Config Variables for the connection.
Structure is documented below.
*/
  configVariables?: Array<integrationconnectors_ConnectionConfigVariable>;

  // Location in which Connection needs to be created.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
authConfig for the connection.
Structure is documented below.
*/
  authConfig?: integrationconnectors_ConnectionAuthConfig;

  /*
Log configuration for the connection.
Structure is documented below.
*/
  logConfig?: integrationconnectors_ConnectionLogConfig;

  /*
Name of Connection needs to be created.


- - -
*/
  name?: string;

  /*
Node configuration for the connection.
Structure is documented below.
*/
  nodeConfig?: integrationconnectors_ConnectionNodeConfig;

  // Service account needed for runtime plane to access Google Cloud resources.
  serviceAccount?: string;

  // connectorVersion of the Connector.
  connectorVersion?: string;

  // An arbitrary description for the Conection.
  description?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
SSL Configuration of a connection
Structure is documented below.
*/
  sslConfig?: integrationconnectors_ConnectionSslConfig;

  /*
Define the Connectors target endpoint.
Structure is documented below.
*/
  destinationConfigs?: Array<integrationconnectors_ConnectionDestinationConfig>;

  /*
Eventing Configuration of a connection
Structure is documented below.
*/
  eventingConfig?: integrationconnectors_ConnectionEventingConfig;

  /*
Eventing enablement type. Will be nil if eventing is not enabled.
Possible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.
*/
  eventingEnablementType?: string;

  /*
Determines whether or no a connection is locked. If locked, a reason must be specified.
Structure is documented below.
*/
  lockConfig?: integrationconnectors_ConnectionLockConfig;

  // Suspended indicates if a user has suspended a connection or not.
  suspended?: boolean;
}
export class Connection extends DS_Resource {
  /*
Define the Connectors target endpoint.
Structure is documented below.
*/
  public destinationConfigs?: Array<integrationconnectors_ConnectionDestinationConfig>;

  /*
Determines whether or no a connection is locked. If locked, a reason must be specified.
Structure is documented below.
*/
  public lockConfig?: integrationconnectors_ConnectionLockConfig;

  /*
Log configuration for the connection.
Structure is documented below.
*/
  public logConfig?: integrationconnectors_ConnectionLogConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
SSL Configuration of a connection
Structure is documented below.
*/
  public sslConfig?: integrationconnectors_ConnectionSslConfig;

  // Time the Namespace was created in UTC.
  public createTime?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Connection revision. This field is only updated when the connection is created or updated by User.
  public connectionRevision?: string;

  /*
Eventing Configuration of a connection
Structure is documented below.
*/
  public eventingConfig?: integrationconnectors_ConnectionEventingConfig;

  /*
Eventing enablement type. Will be nil if eventing is not enabled.
Possible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.
*/
  public eventingEnablementType?: string;

  /*
Eventing Runtime Data.
Structure is documented below.
*/
  public eventingRuntimeDatas?: Array<integrationconnectors_ConnectionEventingRuntimeData>;

  /*
The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address.
e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"
*/
  public serviceDirectory?: string;

  /*
This configuration provides infra configs like rate limit threshold which need to be configurable for every connector version.
Structure is documented below.
*/
  public connectorVersionInfraConfigs?: Array<integrationconnectors_ConnectionConnectorVersionInfraConfig>;

  // Flag to mark the version indicating the launch stage.
  public connectorVersionLaunchStage?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  public statuses?: Array<integrationconnectors_ConnectionStatus>;

  // This subscription type enum states the subscription type of the project.
  public subscriptionType?: string;

  /*
Config Variables for the connection.
Structure is documented below.
*/
  public configVariables?: Array<integrationconnectors_ConnectionConfigVariable>;

  // connectorVersion of the Connector.
  public connectorVersion?: string;

  // Suspended indicates if a user has suspended a connection or not.
  public suspended?: boolean;

  // Location in which Connection needs to be created.
  public location?: string;

  /*
Node configuration for the connection.
Structure is documented below.
*/
  public nodeConfig?: integrationconnectors_ConnectionNodeConfig;

  // Time the Namespace was updated in UTC.
  public updateTime?: string;

  /*
authConfig for the connection.
Structure is documented below.
*/
  public authConfig?: integrationconnectors_ConnectionAuthConfig;

  // An arbitrary description for the Conection.
  public description?: string;

  /*
Resource labels to represent user provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Name of Connection needs to be created.


- - -
*/
  public name?: string;

  // Service account needed for runtime plane to access Google Cloud resources.
  public serviceAccount?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of Connection needs to be created.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "configVariables",
        "Config Variables for the connection.\nStructure is documented below.",
        () => integrationconnectors_ConnectionConfigVariable_GetTypes(),
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
        InputType.String,
        "connectorVersion",
        "connectorVersion of the Connector.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinationConfigs",
        "Define the Connectors target endpoint.\nStructure is documented below.",
        () => integrationconnectors_ConnectionDestinationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "lockConfig",
        "Determines whether or no a connection is locked. If locked, a reason must be specified.\nStructure is documented below.",
        () => integrationconnectors_ConnectionLockConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "suspended",
        "Suspended indicates if a user has suspended a connection or not.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventingEnablementType",
        "Eventing enablement type. Will be nil if eventing is not enabled.\nPossible values are: `EVENTING_AND_CONNECTION`, `ONLY_EVENTING`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location in which Connection needs to be created.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authConfig",
        "authConfig for the connection.\nStructure is documented below.",
        () => integrationconnectors_ConnectionAuthConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "Node configuration for the connection.\nStructure is documented below.",
        () => integrationconnectors_ConnectionNodeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "Service account needed for runtime plane to access Google Cloud resources.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An arbitrary description for the Conection.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sslConfig",
        "SSL Configuration of a connection\nStructure is documented below.",
        () => integrationconnectors_ConnectionSslConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logConfig",
        "Log configuration for the connection.\nStructure is documented below.",
        () => integrationconnectors_ConnectionLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventingConfig",
        "Eventing Configuration of a connection\nStructure is documented below.",
        () => integrationconnectors_ConnectionEventingConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
