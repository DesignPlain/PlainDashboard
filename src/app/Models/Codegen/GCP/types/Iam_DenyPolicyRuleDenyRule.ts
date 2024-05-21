import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iam_DenyPolicyRuleDenyRuleDenialCondition,
  iam_DenyPolicyRuleDenyRuleDenialCondition_GetTypes,
} from "./iam_DenyPolicyRuleDenyRuleDenialCondition";

export interface iam_DenyPolicyRuleDenyRule {
  /*
Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.
If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.
*/
  exceptionPermissions?: Array<string>;

  /*
The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.
For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.
*/
  exceptionPrincipals?: Array<string>;

  /*
User defined CEVAL expression. A CEVAL expression is used to specify match criteria such as origin.ip, source.region_code and contents in the request header.
Structure is documented below.
*/
  denialCondition?: iam_DenyPolicyRuleDenyRuleDenialCondition;

  /*
The permissions that are explicitly denied by this rule. Each permission uses the format `{service-fqdn}/{resource}.{verb}`,
where `{service-fqdn}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.
*/
  deniedPermissions?: Array<string>;

  // The identities that are prevented from using one or more permissions on Google Cloud resources.
  deniedPrincipals?: Array<string>;
}

export function iam_DenyPolicyRuleDenyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exceptionPermissions",
      "Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.\nIf a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.\nThe excluded permissions can be specified using the same syntax as deniedPermissions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exceptionPrincipals",
      "The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.\nFor example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "denialCondition",
      "User defined CEVAL expression. A CEVAL expression is used to specify match criteria such as origin.ip, source.region_code and contents in the request header.\nStructure is documented below.",
      iam_DenyPolicyRuleDenyRuleDenialCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "deniedPermissions",
      "The permissions that are explicitly denied by this rule. Each permission uses the format `{service-fqdn}/{resource}.{verb}`,\nwhere `{service-fqdn}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "deniedPrincipals",
      "The identities that are prevented from using one or more permissions on Google Cloud resources.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
