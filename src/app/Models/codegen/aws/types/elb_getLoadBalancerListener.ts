import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elb_getLoadBalancerListener {
  //
  instancePort?: number;

  //
  instanceProtocol?: string;

  //
  lbPort?: number;

  //
  lbProtocol?: string;

  //
  sslCertificateId?: string;
}

export function elb_getLoadBalancerListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "instancePort",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceProtocol",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "lbPort", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "lbProtocol",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCertificateId",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
