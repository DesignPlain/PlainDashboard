import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lightsail_InstancePublicPortsPortInfo,
  lightsail_InstancePublicPortsPortInfo_GetTypes,
} from '../types/lightsail_InstancePublicPortsPortInfo';

export interface InstancePublicPortsArgs {
  // Name of the Lightsail Instance.
  instanceName?: string;

  // Configuration block with port information. AWS closes all currently open ports that are not included in the `port_info`. Detailed below.
  portInfos?: Array<lightsail_InstancePublicPortsPortInfo>;
}
export class InstancePublicPorts extends DS_Resource {
  // Name of the Lightsail Instance.
  public instanceName?: string;

  // Configuration block with port information. AWS closes all currently open ports that are not included in the `port_info`. Detailed below.
  public portInfos?: Array<lightsail_InstancePublicPortsPortInfo>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceName',
        'Name of the Lightsail Instance.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'portInfos',
        'Configuration block with port information. AWS closes all currently open ports that are not included in the `port_info`. Detailed below.',
        () => lightsail_InstancePublicPortsPortInfo_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
