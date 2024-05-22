import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appstream_FleetVpcConfig {
  // Identifiers of the security groups for the fleet or image builder.
  securityGroupIds?: Array<string>;

  // Identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance.
  subnetIds?: Array<string>;
}

export function appstream_FleetVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Identifiers of the security groups for the fleet or image builder.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "Identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
