import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo,
  apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo_GetTypes,
} from "./apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo";

export interface apigee_KeystoresAliasesKeyCertFileCertsInfo {
  /*
(Output)
List of all properties in the object.
Structure is documented below.
*/
  certInfos?: Array<apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo>;
}

export function apigee_KeystoresAliasesKeyCertFileCertsInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certInfos",
      "(Output)\nList of all properties in the object.\nStructure is documented below.",
      apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
