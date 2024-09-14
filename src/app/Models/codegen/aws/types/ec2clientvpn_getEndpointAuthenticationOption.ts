import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2clientvpn_getEndpointAuthenticationOption {
  //
  activeDirectoryId?: string;

  //
  rootCertificateChainArn?: string;

  //
  samlProviderArn?: string;

  //
  selfServiceSamlProviderArn?: string;

  //
  type?: string;
}

export function ec2clientvpn_getEndpointAuthenticationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "activeDirectoryId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rootCertificateChainArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "samlProviderArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "selfServiceSamlProviderArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
  ];
}
