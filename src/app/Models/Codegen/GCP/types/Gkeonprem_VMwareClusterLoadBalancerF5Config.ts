import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterLoadBalancerF5Config {
  /*
(Output)
The vCenter IP address.
*/
  Address?: string;

  /*
he preexisting partition to be used by the load balancer. T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.
*/
  Partition?: string;

  // The pool name. Only necessary, if using SNAT.
  SnatPool?: string;
}

export function Gkeonprem_VMwareClusterLoadBalancerF5Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Address",
      "(Output)\nThe vCenter IP address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Partition",
      "he preexisting partition to be used by the load balancer. T\nhis partition is usually created for the admin cluster for example:\n'my-f5-admin-partition'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SnatPool",
      "The pool name. Only necessary, if using SNAT.",
      [],
      false,
      false,
    ),
  ];
}
