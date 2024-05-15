import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingVersionConfigRewriteRun,
  Firebase_HostingVersionConfigRewriteRun_GetTypes,
} from "./Firebase_HostingVersionConfigRewriteRun";

export interface Firebase_HostingVersionConfigRewrite {
  // The function to proxy requests to. Must match the exported function name exactly.
  Function?: string;

  // The user-supplied glob to match against the request URL path.
  Glob?: string;

  // The user-supplied RE2 regular expression to match against the request URL path.
  Regex?: string;

  /*
The request will be forwarded to Cloud Run.
Structure is documented below.
*/
  Run?: Firebase_HostingVersionConfigRewriteRun;
}

export function Firebase_HostingVersionConfigRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Regex",
      "The user-supplied RE2 regular expression to match against the request URL path.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Run",
      "The request will be forwarded to Cloud Run.\nStructure is documented below.",
      Firebase_HostingVersionConfigRewriteRun_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Function",
      "The function to proxy requests to. Must match the exported function name exactly.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Glob",
      "The user-supplied glob to match against the request URL path.",
      [],
      false,
      true,
    ),
  ];
}
