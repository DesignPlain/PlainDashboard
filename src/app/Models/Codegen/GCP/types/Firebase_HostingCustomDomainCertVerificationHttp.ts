import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firebase_HostingCustomDomainCertVerificationHttp {
  // The path to the file.
  Path?: string;

  // A text string to serve at the path.
  Desired?: string;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  Discovered?: string;

  /*
(Output)
The last time Hosting systems checked for the file contents.
*/
  LastCheckTime?: string;
}

export function Firebase_HostingCustomDomainCertVerificationHttp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Discovered",
      "Whether Hosting was able to find the required file contents on the\nspecified path during its last check.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastCheckTime",
      "(Output)\nThe last time Hosting systems checked for the file contents.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "The path to the file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Desired",
      "A text string to serve at the path.",
      [],
      false,
      false,
    ),
  ];
}
