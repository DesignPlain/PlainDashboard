import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem {
  //
  profileId?: string;

  // Query argument for field-level encryption query argument-profile mapping.
  queryArg?: string;
}

export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "profileId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queryArg",
      "Query argument for field-level encryption query argument-profile mapping.",
      () => [],
      true,
      false,
    ),
  ];
}
