import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
  //
  scram?: boolean;

  //
  iam?: boolean;
}

export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "scram", "", () => [], true, false),
    new DynamicUIProps(InputType.Bool, "iam", "", () => [], true, false),
  ];
}
