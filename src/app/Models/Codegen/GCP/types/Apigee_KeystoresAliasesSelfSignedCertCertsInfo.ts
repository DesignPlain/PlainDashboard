import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo,
  apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo_GetTypes,
} from "./apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo";

export interface apigee_KeystoresAliasesSelfSignedCertCertsInfo {
  /*
(Output)
List of all properties in the object.
Structure is documented below.
*/
  certInfos?: Array<apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo>;
}

export function apigee_KeystoresAliasesSelfSignedCertCertsInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certInfos",
      "(Output)\nList of all properties in the object.\nStructure is documented below.",
      apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
