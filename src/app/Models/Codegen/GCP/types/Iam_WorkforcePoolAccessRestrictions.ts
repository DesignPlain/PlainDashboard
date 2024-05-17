import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_WorkforcePoolAccessRestrictionsAllowedService,
  Iam_WorkforcePoolAccessRestrictionsAllowedService_GetTypes,
} from "./Iam_WorkforcePoolAccessRestrictionsAllowedService";

export interface Iam_WorkforcePoolAccessRestrictions {
  /*
Services allowed for web sign-in with the workforce pool.
If not set by default there are no restrictions.
Structure is documented below.
*/
  AllowedServices?: Array<Iam_WorkforcePoolAccessRestrictionsAllowedService>;

  /*
Disable programmatic sign-in by disabling token issue via the Security Token API endpoint.
See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
*/
  DisableProgrammaticSignin?: boolean;
}

export function Iam_WorkforcePoolAccessRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedServices",
      "Services allowed for web sign-in with the workforce pool.\nIf not set by default there are no restrictions.\nStructure is documented below.",
      Iam_WorkforcePoolAccessRestrictionsAllowedService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisableProgrammaticSignin",
      "Disable programmatic sign-in by disabling token issue via the Security Token API endpoint.\nSee [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).",
      [],
      false,
      false,
    ),
  ];
}
