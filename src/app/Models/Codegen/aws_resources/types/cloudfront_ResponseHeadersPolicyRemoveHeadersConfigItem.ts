import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem {
  // The HTTP response header name.
  header?: string;
}

export function cloudfront_ResponseHeadersPolicyRemoveHeadersConfigItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "header",
      "The HTTP response header name.",
      [],
      true,
      false,
    ),
  ];
}
