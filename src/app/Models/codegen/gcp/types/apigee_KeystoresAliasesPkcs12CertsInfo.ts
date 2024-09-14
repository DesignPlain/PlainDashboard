import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigee_KeystoresAliasesPkcs12CertsInfoCertInfo,
  apigee_KeystoresAliasesPkcs12CertsInfoCertInfo_GetTypes,
} from "./apigee_KeystoresAliasesPkcs12CertsInfoCertInfo";

export interface apigee_KeystoresAliasesPkcs12CertsInfo {
  /*
(Output)
List of all properties in the object.
Structure is documented below.
*/
  certInfos?: Array<apigee_KeystoresAliasesPkcs12CertsInfoCertInfo>;
}

export function apigee_KeystoresAliasesPkcs12CertsInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certInfos",
      "(Output)\nList of all properties in the object.\nStructure is documented below.",
      () => apigee_KeystoresAliasesPkcs12CertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
