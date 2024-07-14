import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem,
  cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem_GetTypes,
} from "./cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem";

export interface cloudfront_FieldLevelEncryptionProfileEncryptionEntities {
  //
  items?: Array<cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem>;
}

export function cloudfront_FieldLevelEncryptionProfileEncryptionEntities_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem_GetTypes(),
      false,
      false,
    ),
  ];
}
