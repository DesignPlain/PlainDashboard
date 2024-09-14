import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface NetworkArgs {
  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  location?: string;

  // IP (L3) MTU value of the network. Default value is `1500`. Possible values are: `1500`, `9000`.
  mtu?: number;

  /*
A unique ID that identifies this network.


- - -
*/
  networkId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The name of the target Distributed Cloud Edge zone.
  zone?: string;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  // Labels associated with this resource.
  labels?: Map<string, string>;
}
export class Network extends DS_Resource {
  // IP (L3) MTU value of the network. Default value is `1500`. Possible values are: `1500`, `9000`.
  public mtu?: number;

  /*
The canonical name of this resource, with format
`projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The name of the target Distributed Cloud Edge zone.
  public zone?: string;

  /*
The time when the subnet was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public createTime?: string;

  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  public location?: string;

  /*
A unique ID that identifies this network.


- - -
*/
  public networkId?: string;

  /*
The time when the subnet was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public updateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  // Labels associated with this resource.
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "mtu",
        "IP (L3) MTU value of the network. Default value is `1500`. Possible values are: `1500`, `9000`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkId",
        "A unique ID that identifies this network.\n\n\n- - -",
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
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The name of the target Distributed Cloud Edge zone.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels associated with this resource.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The Google Cloud region to which the target Distributed Cloud Edge zone belongs.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
