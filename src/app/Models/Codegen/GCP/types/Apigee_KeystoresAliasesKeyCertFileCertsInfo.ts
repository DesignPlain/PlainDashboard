import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo,
  Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo_GetTypes,
} from "./Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo";

export interface Apigee_KeystoresAliasesKeyCertFileCertsInfo {
  /*
(Output)
List of all properties in the object.
Structure is documented below.
*/
  CertInfos?: Array<Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo>;
}

export function Apigee_KeystoresAliasesKeyCertFileCertsInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CertInfos",
      "(Output)\nList of all properties in the object.\nStructure is documented below.",
      Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
