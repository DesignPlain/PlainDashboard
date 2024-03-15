import { DenyPolicyRuleDenyRuleDenialCondition } from "./DenyPolicyRuleDenyRuleDenialCondition";

export interface DenyPolicyRuleDenyRule {
  /*
User defined CEVAL expression. A CEVAL expression is used to specify match criteria such as origin.ip, source.region_code and contents in the request header.
Structure is documented below.
*/
  DenialCondition?: DenyPolicyRuleDenyRuleDenialCondition;

  /*
The permissions that are explicitly denied by this rule. Each permission uses the format `{service-fqdn}/{resource}.{verb}`,
where `{service-fqdn}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.
*/
  DeniedPermissions?: Array<string>;

  // The identities that are prevented from using one or more permissions on Google Cloud resources.
  DeniedPrincipals?: Array<string>;

  /*
Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.
If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.
*/
  ExceptionPermissions?: Array<string>;

  /*
The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.
For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.
*/
  ExceptionPrincipals?: Array<string>;
}
