import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getInstanceTypeInstanceDisk {
  //
  count?: number;

  //
  size?: number;

  //
  type?: string;
}

export function ec2_getInstanceTypeInstanceDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "count", "", [], true, false),
    new DynamicUIProps(InputType.Number, "size", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
