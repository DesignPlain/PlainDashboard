import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lightsail_InstancePublicPortsPortInfo,
  lightsail_InstancePublicPortsPortInfo_GetTypes,
} from "../types/lightsail_InstancePublicPortsPortInfo";

export interface InstancePublicPortsArgs {
  // Configuration block with port information. AWS closes all currently open ports that are not included in the `port_info`. Detailed below.
  portInfos?: Array<lightsail_InstancePublicPortsPortInfo>;

  // Name of the Lightsail Instance.
  instanceName?: string;
}
export class InstancePublicPorts extends Resource {
  // Name of the Lightsail Instance.
  public instanceName?: string;

  // Configuration block with port information. AWS closes all currently open ports that are not included in the `port_info`. Detailed below.
  public portInfos?: Array<lightsail_InstancePublicPortsPortInfo>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "portInfos",
        "Configuration block with port information. AWS closes all currently open ports that are not included in the `port_info`. Detailed below.",
        lightsail_InstancePublicPortsPortInfo_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "Name of the Lightsail Instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
