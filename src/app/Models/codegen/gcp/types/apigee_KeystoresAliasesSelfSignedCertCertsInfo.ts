import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
      () => apigee_KeystoresAliasesSelfSignedCertCertsInfoCertInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
