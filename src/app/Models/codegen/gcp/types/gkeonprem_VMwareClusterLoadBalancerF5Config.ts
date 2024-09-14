import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_VMwareClusterLoadBalancerF5Config {
  /*
(Output)
The vCenter IP address.
*/
  address?: string;

  /*
he preexisting partition to be used by the load balancer. T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.
*/
  partition?: string;

  // The pool name. Only necessary, if using SNAT.
  snatPool?: string;
}

export function gkeonprem_VMwareClusterLoadBalancerF5Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "(Output)\nThe vCenter IP address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "partition",
      "he preexisting partition to be used by the load balancer. T\nhis partition is usually created for the admin cluster for example:\n'my-f5-admin-partition'.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "snatPool",
      "The pool name. Only necessary, if using SNAT.",
      () => [],
      false,
      false,
    ),
  ];
}
