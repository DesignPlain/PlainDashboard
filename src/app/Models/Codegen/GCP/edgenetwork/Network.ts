import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkArgs {
  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  // Labels associated with this resource.
  Labels?: Map<string, string>;

  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  Location?: string;

  // IP (L3) MTU value of the network. Default value is `1500`. Possible values are: `1500`, `9000`.
  Mtu?: number;

  /*
A unique ID that identifies this network.


- - -
*/
  NetworkId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of the target Distributed Cloud Edge zone.
  Zone?: string;
}
export class Network extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The name of the target Distributed Cloud Edge zone.
  public Zone?: string;

  /*
The time when the subnet was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public CreateTime?: string;

  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  public Location?: string;

  // IP (L3) MTU value of the network. Default value is `1500`. Possible values are: `1500`, `9000`.
  public Mtu?: number;

  /*
The canonical name of this resource, with format
`projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`
*/
  public Name?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  // Labels associated with this resource.
  public Labels?: Map<string, string>;

  /*
A unique ID that identifies this network.


- - -
*/
  public NetworkId?: string;

  /*
The time when the subnet was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels associated with this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The Google Cloud region to which the target Distributed Cloud Edge zone belongs.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Mtu",
        "IP (L3) MTU value of the network. Default value is `1500`. Possible values are: `1500`, `9000`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkId",
        "A unique ID that identifies this network.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The name of the target Distributed Cloud Edge zone.",
      ),
    ];
  }
}
