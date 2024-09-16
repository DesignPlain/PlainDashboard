import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkmanager_DeviceAwsLocation,
  networkmanager_DeviceAwsLocation_GetTypes,
} from '../types/networkmanager_DeviceAwsLocation';
import {
  networkmanager_DeviceLocation,
  networkmanager_DeviceLocation_GetTypes,
} from '../types/networkmanager_DeviceLocation';

export interface DeviceArgs {
  // The type of device.
  type?: string;

  // The AWS location of the device. Documented below.
  awsLocation?: networkmanager_DeviceAwsLocation;

  // The ID of the global network.
  globalNetworkId?: string;

  // The location of the device. Documented below.
  location?: networkmanager_DeviceLocation;

  // The model of device.
  model?: string;

  // The ID of the site.
  siteId?: string;

  // Key-value tags for the device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A description of the device.
  description?: string;

  // The serial number of the device.
  serialNumber?: string;

  // The vendor of the device.
  vendor?: string;
}
export class Device extends DS_Resource {
  // The ID of the site.
  public siteId?: string;

  // Key-value tags for the device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The vendor of the device.
  public vendor?: string;

  // The Amazon Resource Name (ARN) of the device.
  public arn?: string;

  // A description of the device.
  public description?: string;

  // The ID of the global network.
  public globalNetworkId?: string;

  // The location of the device. Documented below.
  public location?: networkmanager_DeviceLocation;

  // The AWS location of the device. Documented below.
  public awsLocation?: networkmanager_DeviceAwsLocation;

  // The model of device.
  public model?: string;

  // The serial number of the device.
  public serialNumber?: string;

  // The type of device.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'vendor',
        'The vendor of the device.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'awsLocation',
        'The AWS location of the device. Documented below.',
        () => networkmanager_DeviceAwsLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'globalNetworkId',
        'The ID of the global network.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the device.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'siteId',
        'The ID of the site.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the device. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'serialNumber',
        'The serial number of the device.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of device.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'location',
        'The location of the device. Documented below.',
        () => networkmanager_DeviceLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'model',
        'The model of device.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
