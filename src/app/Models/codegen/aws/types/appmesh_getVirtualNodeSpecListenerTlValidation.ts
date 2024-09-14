import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName,
  appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName";
import {
  appmesh_getVirtualNodeSpecListenerTlValidationTrust,
  appmesh_getVirtualNodeSpecListenerTlValidationTrust_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlValidationTrust";

export interface appmesh_getVirtualNodeSpecListenerTlValidation {
  //
  subjectAlternativeNames?: Array<appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName>;

  //
  trusts?: Array<appmesh_getVirtualNodeSpecListenerTlValidationTrust>;
}

export function appmesh_getVirtualNodeSpecListenerTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "",
      () =>
        appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "trusts",
      "",
      () => appmesh_getVirtualNodeSpecListenerTlValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
