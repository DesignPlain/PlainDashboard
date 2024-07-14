import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elb_LoadBalancerPolicyPolicyAttribute {
  //
  name?: string;

  //
  value?: string;
}

export function elb_LoadBalancerPolicyPolicyAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], false, false),
    new DynamicUIProps(InputType.String, "value", "", [], false, false),
  ];
}
