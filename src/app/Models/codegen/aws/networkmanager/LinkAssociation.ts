import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LinkAssociationArgs {
  // The ID of the device.
  deviceId?: string;

  // The ID of the global network.
  globalNetworkId?: string;

  // The ID of the link.
  linkId?: string;
}
export class LinkAssociation extends DS_Resource {
  // The ID of the device.
  public deviceId?: string;

  // The ID of the global network.
  public globalNetworkId?: string;

  // The ID of the link.
  public linkId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        'linkId',
        'The ID of the link.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deviceId',
        'The ID of the device.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
