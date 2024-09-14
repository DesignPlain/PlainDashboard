import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ConnectionArgs {
  // The ID of the link for the second device.
  connectedLinkId?: string;

  // A description of the connection.
  description?: string;

  // The ID of the first device in the connection.
  deviceId?: string;

  // The ID of the global network.
  globalNetworkId?: string;

  // The ID of the link for the first device.
  linkId?: string;

  // Key-value tags for the connection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the second device in the connection.
  connectedDeviceId?: string;
}
export class Connection extends DS_Resource {
  // The ID of the first device in the connection.
  public deviceId?: string;

  // The ID of the link for the first device.
  public linkId?: string;

  // Key-value tags for the connection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the connection.
  public arn?: string;

  // A description of the connection.
  public description?: string;

  // The ID of the global network.
  public globalNetworkId?: string;

  // The ID of the second device in the connection.
  public connectedDeviceId?: string;

  // The ID of the link for the second device.
  public connectedLinkId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "linkId",
        "The ID of the link for the first device.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the connection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectedDeviceId",
        "The ID of the second device in the connection.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectedLinkId",
        "The ID of the link for the second device.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the connection.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deviceId",
        "The ID of the first device in the connection.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalNetworkId",
        "The ID of the global network.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
