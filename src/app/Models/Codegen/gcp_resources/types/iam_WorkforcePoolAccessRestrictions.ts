import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iam_WorkforcePoolAccessRestrictionsAllowedService,
  iam_WorkforcePoolAccessRestrictionsAllowedService_GetTypes,
} from "./iam_WorkforcePoolAccessRestrictionsAllowedService";

export interface iam_WorkforcePoolAccessRestrictions {
  /*
Services allowed for web sign-in with the workforce pool.
If not set by default there are no restrictions.
Structure is documented below.
*/
  allowedServices?: Array<iam_WorkforcePoolAccessRestrictionsAllowedService>;

  /*
Disable programmatic sign-in by disabling token issue via the Security Token API endpoint.
See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
*/
  disableProgrammaticSignin?: boolean;
}

export function iam_WorkforcePoolAccessRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedServices",
      "Services allowed for web sign-in with the workforce pool.\nIf not set by default there are no restrictions.\nStructure is documented below.",
      iam_WorkforcePoolAccessRestrictionsAllowedService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableProgrammaticSignin",
      "Disable programmatic sign-in by disabling token issue via the Security Token API endpoint.\nSee [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).",
      [],
      false,
      false,
    ),
  ];
}
