import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getAmiProductCode {
  //
  productCodeId?: string;

  //
  productCodeType?: string;
}

export function ec2_getAmiProductCode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "productCodeType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "productCodeId", "", [], true, false),
  ];
}
