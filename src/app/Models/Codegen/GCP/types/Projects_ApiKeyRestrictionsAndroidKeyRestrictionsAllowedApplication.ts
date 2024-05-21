import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication {
  // The package name of the application.
  packageName?: string;

  /*
The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

- - -
*/
  sha1Fingerprint?: string;
}

export function projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "packageName",
      "The package name of the application.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Fingerprint",
      "The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
