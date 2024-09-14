import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface secretsmanager_getSecretVersionsVersion {
  //
  createdTime?: string;

  // Date that this version of the secret was last accessed.
  lastAccessedDate?: string;

  // Unique version identifier of this version of the secret.
  versionId?: string;

  //
  versionStages?: Array<string>;
}

export function secretsmanager_getSecretVersionsVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "versionStages",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createdTime",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastAccessedDate",
      "Date that this version of the secret was last accessed.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "versionId",
      "Unique version identifier of this version of the secret.",
      () => [],
      true,
      false,
    ),
  ];
}
