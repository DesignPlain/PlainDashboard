import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
  // The name of the header to add.
  headerName?: string;

  // The value of the header to add.
  headerValue?: string;

  /*
Whether to replace all existing headers with the same name.
By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.
To overwrite existing values, set `replace` to `true`.
*/
  replace?: boolean;
}

export function networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The name of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerValue",
      "The value of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "replace",
      "Whether to replace all existing headers with the same name.\nBy default, added header values are appended\nto the response or request headers with the\nsame field names. The added values are\nseparated by commas.\nTo overwrite existing values, set `replace` to `true`.",
      [],
      false,
      false,
    ),
  ];
}
