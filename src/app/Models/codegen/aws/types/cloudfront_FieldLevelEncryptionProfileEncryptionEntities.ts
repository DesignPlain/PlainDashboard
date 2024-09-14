import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
      () =>
        cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem_GetTypes(),
      false,
      false,
    ),
  ];
}
