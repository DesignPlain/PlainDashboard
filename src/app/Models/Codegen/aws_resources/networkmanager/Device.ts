import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkmanager_DeviceAwsLocation,
  networkmanager_DeviceAwsLocation_GetTypes,
} from "../types/networkmanager_DeviceAwsLocation";
import {
  networkmanager_DeviceLocation,
  networkmanager_DeviceLocation_GetTypes,
} from "../types/networkmanager_DeviceLocation";

export interface DeviceArgs {
  // The ID of the global network.
  globalNetworkId?: string;

  // The ID of the site.
  siteId?: string;

  // The type of device.
  type?: string;

  // The AWS location of the device. Documented below.
  awsLocation?: networkmanager_DeviceAwsLocation;

  // The location of the device. Documented below.
  location?: networkmanager_DeviceLocation;

  // The model of device.
  model?: string;

  // The serial number of the device.
  serialNumber?: string;

  // Key-value tags for the device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The vendor of the device.
  vendor?: string;

  // A description of the device.
  description?: string;
}
export class Device extends Resource {
  // The serial number of the device.
  public serialNumber?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of device.
  public type?: string;

  // Key-value tags for the device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the device.
  public arn?: string;

  // The AWS location of the device. Documented below.
  public awsLocation?: networkmanager_DeviceAwsLocation;

  // A description of the device.
  public description?: string;

  // The ID of the global network.
  public globalNetworkId?: string;

  // The location of the device. Documented below.
  public location?: networkmanager_DeviceLocation;

  // The model of device.
  public model?: string;

  // The ID of the site.
  public siteId?: string;

  // The vendor of the device.
  public vendor?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "awsLocation",
        "The AWS location of the device. Documented below.",
        networkmanager_DeviceAwsLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serialNumber",
        "The serial number of the device.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vendor",
        "The vendor of the device.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the device.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalNetworkId",
        "The ID of the global network.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "siteId",
        "The ID of the site.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of device.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "location",
        "The location of the device. Documented below.",
        networkmanager_DeviceLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "model",
        "The model of device.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
