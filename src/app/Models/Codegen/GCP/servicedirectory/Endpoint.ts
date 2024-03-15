import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EndpointArgs {
  /*
Metadata for the endpoint. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  Metadata?: Map<string, string>;

  // The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.
  Network?: string;

  /*
Port that the endpoint is running on, must be in the
range of [0, 65535]. If unspecified, the default is 0.
*/
  Port?: number;

  // The resource name of the service that this endpoint provides.
  Service?: string;

  // IPv4 or IPv6 address of the endpoint.
  Address?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  EndpointId?: string;
}
export class Endpoint extends Resource {
  // The resource name of the service that this endpoint provides.
  public Service?: string;

  // IPv4 or IPv6 address of the endpoint.
  public Address?: string;

  /*
The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character.


- - -
*/
  public EndpointId?: string;

  /*
Metadata for the endpoint. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.
*/
  public Metadata?: Map<string, string>;

  /*
The resource name for the endpoint in the format
`projects/-/locations/-/namespaces/-/services/-/endpoints/-`.
*/
  public Name?: string;

  // The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.
  public Network?: string;

  /*
Port that the endpoint is running on, must be in the
range of [0, 65535]. If unspecified, the default is 0.
*/
  public Port?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata for the endpoint. This data can be consumed\nby service clients. The entire metadata dictionary may contain\nup to 512 characters, spread across all key-value pairs.\nMetadata that goes beyond any these limits will be rejected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "Port that the endpoint is running on, must be in the\nrange of [0, 65535]. If unspecified, the default is 0.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The resource name of the service that this endpoint provides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Address",
        "IPv4 or IPv6 address of the endpoint.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EndpointId",
        "The Resource ID must be 1-63 characters long, including digits,\nlowercase letters or the hyphen character.\n\n\n- - -",
      ),
    ];
  }
}
