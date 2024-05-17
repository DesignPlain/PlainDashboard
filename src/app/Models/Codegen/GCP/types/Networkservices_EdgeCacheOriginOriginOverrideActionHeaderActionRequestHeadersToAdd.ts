import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
  // The name of the header to add.
  HeaderName?: string;

  // The value of the header to add.
  HeaderValue?: string;

  /*
Whether to replace all existing headers with the same name.
By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.
To overwrite existing values, set `replace` to `true`.
*/
  Replace?: boolean;
}

export function Networkservices_EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The name of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderValue",
      "The value of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Replace",
      "Whether to replace all existing headers with the same name.\nBy default, added header values are appended\nto the response or request headers with the\nsame field names. The added values are\nseparated by commas.\nTo overwrite existing values, set `replace` to `true`.",
      [],
      false,
      false,
    ),
  ];
}
