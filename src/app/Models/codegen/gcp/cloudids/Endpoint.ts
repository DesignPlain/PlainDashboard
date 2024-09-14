import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EndpointArgs {
  // An optional description of the endpoint.
  description?: string;

  /*
The location for the endpoint.


- - -
*/
  location?: string;

  // Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.
  name?: string;

  // Name of the VPC network that is connected to the IDS endpoint. This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The minimum alert severity level that is reported by the endpoint.
Possible values are: `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.
*/
  severity?: string;

  // Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.
  threatExceptions?: Array<string>;
}
export class Endpoint extends DS_Resource {
  // An optional description of the endpoint.
  public description?: string;

  // Internal IP address of the endpoint's network entry point.
  public endpointIp?: string;

  /*
The location for the endpoint.


- - -
*/
  public location?: string;

  // Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Last update timestamp in RFC 3339 text format.
  public updateTime?: string;

  // Creation timestamp in RFC 3339 text format.
  public createTime?: string;

  // URL of the endpoint's network address to which traffic is to be sent by Packet Mirroring.
  public endpointForwardingRule?: string;

  // Name of the VPC network that is connected to the IDS endpoint. This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").
  public network?: string;

  /*
The minimum alert severity level that is reported by the endpoint.
Possible values are: `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.
*/
  public severity?: string;

  // Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.
  public threatExceptions?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "severity",
        "The minimum alert severity level that is reported by the endpoint.\nPossible values are: `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "threatExceptions",
        "Configuration for threat IDs excluded from generating alerts. Limit: 99 IDs.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of the endpoint.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the endpoint.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the endpoint in the format projects/{project_id}/locations/{locationId}/endpoints/{endpointId}.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        'Name of the VPC network that is connected to the IDS endpoint. This can either contain the VPC network name itself (like "src-net") or the full URL to the network (like "projects/{project_id}/global/networks/src-net").',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
