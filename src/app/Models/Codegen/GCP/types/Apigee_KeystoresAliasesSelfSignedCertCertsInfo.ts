import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo,
  Apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo_GetTypes,
} from "./Apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo";

export interface Apigee_KeystoresAliasesSelfSignedCertCertsInfo {
  /*
(Output)
List of all properties in the object.
Structure is documented below.
*/
  CertInfos?: Array<Apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo>;
}

export function Apigee_KeystoresAliasesSelfSignedCertCertsInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CertInfos",
      "(Output)\nList of all properties in the object.\nStructure is documented below.",
      Apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
