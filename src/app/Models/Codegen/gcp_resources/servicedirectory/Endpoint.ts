import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EndpointArgs {
  // IPv4 or IPv6 address of the endpoint.
  address?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  endpointId?: string;

  /*
Metadata for the endpoint. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  metadata?: Map<string, string>;

  // The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.
  network?: string;

  /*
Port that the endpoint is running on, must be in the
range of [0, 65535]. If unspecified, the default is 0.
*/
  port?: number;

  // The resource name of the service that this endpoint provides.
  service?: string;
}
export class Endpoint extends Resource {
  /*
The resource name for the endpoint in the format
`projects/-/locations/-/namespaces/-/services/-/endpoints/-`.
*/
  public name?: string;

  // The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.
  public network?: string;

  /*
Port that the endpoint is running on, must be in the
range of [0, 65535]. If unspecified, the default is 0.
*/
  public port?: number;

  // The resource name of the service that this endpoint provides.
  public service?: string;

  // IPv4 or IPv6 address of the endpoint.
  public address?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  public endpointId?: string;

  /*
Metadata for the endpoint. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  public metadata?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "network",
        "The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port that the endpoint is running on, must be in the\nrange of [0, 65535]. If unspecified, the default is 0.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "service",
        "The resource name of the service that this endpoint provides.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "address",
        "IPv4 or IPv6 address of the endpoint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointId",
        "The Resource ID must be 1-63 characters long, including digits,\nlowercase letters or the hyphen character.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata for the endpoint. This data can be consumed\nby service clients. The entire metadata dictionary may contain\nup to 512 characters, spread across all key-value pairs.\nMetadata that goes beyond any these limits will be rejected.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
