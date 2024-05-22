import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface binaryauthorization_PolicyDefaultAdmissionRule {
  /*
The action when a pod creation is denied by the admission rule.
Possible values are: `ENFORCED_BLOCK_AND_AUDIT_LOG`, `DRYRUN_AUDIT_LOG_ONLY`.

- - -
*/
  enforcementMode?: string;

  /*
How this admission rule will be evaluated.
Possible values are: `ALWAYS_ALLOW`, `REQUIRE_ATTESTATION`, `ALWAYS_DENY`.
*/
  evaluationMode?: string;

  /*
The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format `projects/-/attestors/-`.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.
Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.
*/
  requireAttestationsBies?: Array<string>;
}

export function binaryauthorization_PolicyDefaultAdmissionRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requireAttestationsBies",
      "The resource names of the attestors that must attest to a\ncontainer image. If the attestor is in a different project from the\npolicy, it should be specified in the format `projects/*/attestors/*`.\nEach attestor must exist before a policy can reference it. To add an\nattestor to a policy the principal issuing the policy change\nrequest must be able to read the attestor resource.\nNote: this field must be non-empty when the evaluation_mode field\nspecifies REQUIRE_ATTESTATION, otherwise it must be empty.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enforcementMode",
      "The action when a pod creation is denied by the admission rule.\nPossible values are: `ENFORCED_BLOCK_AND_AUDIT_LOG`, `DRYRUN_AUDIT_LOG_ONLY`.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "evaluationMode",
      "How this admission rule will be evaluated.\nPossible values are: `ALWAYS_ALLOW`, `REQUIRE_ATTESTATION`, `ALWAYS_DENY`.",
      [],
      true,
      false,
    ),
  ];
}
