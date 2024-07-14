import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_SpotInstanceRequestNetworkInterface {
  // Whether or not to delete the network interface on instance termination. Defaults to `false`. Currently, the only valid value is `false`, as this is only supported when creating new network interfaces when launching an instance.
  deleteOnTermination?: boolean;

  // Integer index of the network interface attachment. Limited by instance type.
  deviceIndex?: number;

  // Integer index of the network card. Limited by instance type. The default index is `0`.
  networkCardIndex?: number;

  // ID of the network interface to attach.
  networkInterfaceId?: string;
}

export function ec2_SpotInstanceRequestNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "deviceIndex",
      "Integer index of the network interface attachment. Limited by instance type.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "networkCardIndex",
      "Integer index of the network card. Limited by instance type. The default index is `0`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "ID of the network interface to attach.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteOnTermination",
      "Whether or not to delete the network interface on instance termination. Defaults to `false`. Currently, the only valid value is `false`, as this is only supported when creating new network interfaces when launching an instance.",
      [],
      false,
      true,
    ),
  ];
}
