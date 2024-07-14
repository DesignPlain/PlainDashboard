import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_BillingGroupMetadata {
  //
  creationDate?: string;
}

export function iot_BillingGroupMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "creationDate", "", [], false, false),
  ];
}
