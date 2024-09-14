import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rolesanywhere_TrustAnchorSourceSourceData,
  rolesanywhere_TrustAnchorSourceSourceData_GetTypes,
} from "./rolesanywhere_TrustAnchorSourceSourceData";

export interface rolesanywhere_TrustAnchorSource {
  // The data denoting the source of trust, documented below
  sourceData?: rolesanywhere_TrustAnchorSourceSourceData;

  // The type of the source of trust. Must be either `AWS_ACM_PCA` or `CERTIFICATE_BUNDLE`.
  sourceType?: string;
}

export function rolesanywhere_TrustAnchorSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sourceData",
      "The data denoting the source of trust, documented below",
      () => rolesanywhere_TrustAnchorSourceSourceData_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceType",
      "The type of the source of trust. Must be either `AWS_ACM_PCA` or `CERTIFICATE_BUNDLE`.",
      () => [],
      true,
      false,
    ),
  ];
}
