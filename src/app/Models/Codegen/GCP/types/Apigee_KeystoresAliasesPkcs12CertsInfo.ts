import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_KeystoresAliasesPkcs12CertsInfoCertInfo,
  Apigee_KeystoresAliasesPkcs12CertsInfoCertInfo_GetTypes,
} from "./Apigee_KeystoresAliasesPkcs12CertsInfoCertInfo";

export interface Apigee_KeystoresAliasesPkcs12CertsInfo {
  /*
(Output)
List of all properties in the object.
Structure is documented below.
*/
  CertInfos?: Array<Apigee_KeystoresAliasesPkcs12CertsInfoCertInfo>;
}

export function Apigee_KeystoresAliasesPkcs12CertsInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CertInfos",
      "(Output)\nList of all properties in the object.\nStructure is documented below.",
      Apigee_KeystoresAliasesPkcs12CertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
