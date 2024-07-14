import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_NetworkInterfaceAttachment {
  //
  attachmentId?: string;

  // Integer to define the devices index.
  deviceIndex?: number;

  // ID of the instance to attach to.
  instance?: string;
}

export function ec2_NetworkInterfaceAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "attachmentId", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "deviceIndex",
      "Integer to define the devices index.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instance",
      "ID of the instance to attach to.",
      [],
      true,
      false,
    ),
  ];
}
