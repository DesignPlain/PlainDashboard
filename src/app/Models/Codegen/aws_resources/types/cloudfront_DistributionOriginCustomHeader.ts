import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_DistributionOriginCustomHeader {
  //
  value?: string;

  //
  name?: string;
}

export function cloudfront_DistributionOriginCustomHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
  ];
}
