import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "activeDirectoryId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rootCertificateChainArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "samlProviderArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "selfServiceSamlProviderArn",
      "",
      [],
      true,
      false,
    ),
  ];
}
