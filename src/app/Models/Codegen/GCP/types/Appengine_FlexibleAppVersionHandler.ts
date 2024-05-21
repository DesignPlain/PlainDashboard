import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_FlexibleAppVersionHandlerScript,
  appengine_FlexibleAppVersionHandlerScript_GetTypes,
} from "./appengine_FlexibleAppVersionHandlerScript";
import {
  appengine_FlexibleAppVersionHandlerStaticFiles,
  appengine_FlexibleAppVersionHandlerStaticFiles_GetTypes,
} from "./appengine_FlexibleAppVersionHandlerStaticFiles";

export interface appengine_FlexibleAppVersionHandler {
  /*
Executes a script to handle the requests that match this URL pattern.
Only the auto value is supported for Node.js in the App Engine standard environment, for example "script:" "auto".
Structure is documented below.
*/
  script?: appengine_FlexibleAppVersionHandlerScript;

  /*
Security (HTTPS) enforcement for this URL.
Possible values are: `SECURE_DEFAULT`, `SECURE_NEVER`, `SECURE_OPTIONAL`, `SECURE_ALWAYS`.
*/
  securityLevel?: string;

  /*
Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files.
Static file handlers describe which files in the application directory are static files, and which URLs serve them.
Structure is documented below.
*/
  staticFiles?: appengine_FlexibleAppVersionHandlerStaticFiles;

  /*
URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
*/
  urlRegex?: string;

  /*
Actions to take when the user is not logged in.
Possible values are: `AUTH_FAIL_ACTION_REDIRECT`, `AUTH_FAIL_ACTION_UNAUTHORIZED`.
*/
  authFailAction?: string;

  /*
Methods to restrict access to a URL based on login status.
Possible values are: `LOGIN_OPTIONAL`, `LOGIN_ADMIN`, `LOGIN_REQUIRED`.
*/
  login?: string;

  /*
30x code to use when performing redirects for the secure field.
Possible values are: `REDIRECT_HTTP_RESPONSE_CODE_301`, `REDIRECT_HTTP_RESPONSE_CODE_302`, `REDIRECT_HTTP_RESPONSE_CODE_303`, `REDIRECT_HTTP_RESPONSE_CODE_307`.
*/
  redirectHttpResponseCode?: string;
}

export function appengine_FlexibleAppVersionHandler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "urlRegex",
      "URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.\nAll URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authFailAction",
      "Actions to take when the user is not logged in.\nPossible values are: `AUTH_FAIL_ACTION_REDIRECT`, `AUTH_FAIL_ACTION_UNAUTHORIZED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "login",
      "Methods to restrict access to a URL based on login status.\nPossible values are: `LOGIN_OPTIONAL`, `LOGIN_ADMIN`, `LOGIN_REQUIRED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectHttpResponseCode",
      "30x code to use when performing redirects for the secure field.\nPossible values are: `REDIRECT_HTTP_RESPONSE_CODE_301`, `REDIRECT_HTTP_RESPONSE_CODE_302`, `REDIRECT_HTTP_RESPONSE_CODE_303`, `REDIRECT_HTTP_RESPONSE_CODE_307`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "script",
      'Executes a script to handle the requests that match this URL pattern.\nOnly the auto value is supported for Node.js in the App Engine standard environment, for example "script:" "auto".\nStructure is documented below.',
      appengine_FlexibleAppVersionHandlerScript_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityLevel",
      "Security (HTTPS) enforcement for this URL.\nPossible values are: `SECURE_DEFAULT`, `SECURE_NEVER`, `SECURE_OPTIONAL`, `SECURE_ALWAYS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "staticFiles",
      "Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files.\nStatic file handlers describe which files in the application directory are static files, and which URLs serve them.\nStructure is documented below.",
      appengine_FlexibleAppVersionHandlerStaticFiles_GetTypes(),
      false,
      false,
    ),
  ];
}
