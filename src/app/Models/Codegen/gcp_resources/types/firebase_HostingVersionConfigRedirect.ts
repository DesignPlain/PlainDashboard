import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface firebase_HostingVersionConfigRedirect {
  /*
The value to put in the HTTP location header of the response.
The location can contain capture group values from the pattern using a : prefix to identify
the segment and an optional - to capture the rest of the URL. For example:
*/
  location?: string;

  // The user-supplied RE2 regular expression to match against the request URL path.
  regex?: string;

  // The status HTTP code to return in the response. It must be a valid 3xx status code.
  statusCode?: number;

  // The user-supplied glob to match against the request URL path.
  glob?: string;
}

export function firebase_HostingVersionConfigRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "The value to put in the HTTP location header of the response.\nThe location can contain capture group values from the pattern using a : prefix to identify\nthe segment and an optional * to capture the rest of the URL. For example:",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "regex",
      "The user-supplied RE2 regular expression to match against the request URL path.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "statusCode",
      "The status HTTP code to return in the response. It must be a valid 3xx status code.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "glob",
      "The user-supplied glob to match against the request URL path.",
      [],
      false,
      true,
    ),
  ];
}
