import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firebase_HostingVersionConfigRewriteRun,
  firebase_HostingVersionConfigRewriteRun_GetTypes,
} from "./firebase_HostingVersionConfigRewriteRun";

export interface firebase_HostingVersionConfigRewrite {
  /*
The request will be forwarded to Cloud Run.
Structure is documented below.
*/
  run?: firebase_HostingVersionConfigRewriteRun;

  // The function to proxy requests to. Must match the exported function name exactly.
  function?: string;

  // The user-supplied glob to match against the request URL path.
  glob?: string;

  // The user-supplied RE2 regular expression to match against the request URL path.
  regex?: string;
}

export function firebase_HostingVersionConfigRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "run",
      "The request will be forwarded to Cloud Run.\nStructure is documented below.",
      () => firebase_HostingVersionConfigRewriteRun_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "function",
      "The function to proxy requests to. Must match the exported function name exactly.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "glob",
      "The user-supplied glob to match against the request URL path.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "regex",
      "The user-supplied RE2 regular expression to match against the request URL path.",
      () => [],
      false,
      true,
    ),
  ];
}
