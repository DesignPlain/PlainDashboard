import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elb_LoadBalancerPolicyPolicyAttribute {
  //
  value?: string;

  //
  name?: string;
}

export function elb_LoadBalancerPolicyPolicyAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "value", "", () => [], false, false),
    new DynamicUIProps(InputType.String, "name", "", () => [], false, false),
  ];
}
