import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EndpointArgs {
  // Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.
  ThreatExceptions?: Array<string>;

  // An optional description of the endpoint.
  Description?: string;

  /*
The location for the endpoint.


- - -
*/
  Location?: string;

  // Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.
  Name?: string;

  // Name of the VPC network that is connected to the IDS endpoint. This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The minimum alert severity level that is reported by the endpoint.
Possible values are: `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.
*/
  Severity?: string;
}
export class Endpoint extends Resource {
  // URL of the endpoint's network address to which traffic is to be sent by Packet Mirroring.
  public EndpointForwardingRule?: string;

  /*
The minimum alert severity level that is reported by the endpoint.
Possible values are: `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.
*/
  public Severity?: string;

  // Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.
  public ThreatExceptions?: Array<string>;

  // Last update timestamp in RFC 3339 text format.
  public UpdateTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Creation timestamp in RFC 3339 text format.
  public CreateTime?: string;

  // An optional description of the endpoint.
  public Description?: string;

  // Internal IP address of the endpoint's network entry point.
  public EndpointIp?: string;

  /*
The location for the endpoint.


- - -
*/
  public Location?: string;

  // Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.
  public Name?: string;

  // Name of the VPC network that is connected to the IDS endpoint. This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").
  public Network?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "ThreatExceptions",
        "Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of the endpoint.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the endpoint.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'Name of the VPC network that is connected to the IDS endpoint. This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").',
        [],
        true,
        true,
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
        "Severity",
        "The minimum alert severity level that is reported by the endpoint.\nPossible values are: `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.",
        [],
        true,
        true,
      ),
    ];
  }
}
