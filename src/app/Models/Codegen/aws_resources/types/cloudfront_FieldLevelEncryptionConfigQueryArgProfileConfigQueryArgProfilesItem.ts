import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem {
  // The profile ID for a field-level encryption content type-profile mapping.
  profileId?: string;

  // Query argument for field-level encryption query argument-profile mapping.
  queryArg?: string;
}

export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "profileId",
      "The profile ID for a field-level encryption content type-profile mapping.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queryArg",
      "Query argument for field-level encryption query argument-profile mapping.",
      [],
      true,
      false,
    ),
  ];
}
