import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  binaryauthorization_PolicyAdmissionWhitelistPattern,
  binaryauthorization_PolicyAdmissionWhitelistPattern_GetTypes,
} from "../types/binaryauthorization_PolicyAdmissionWhitelistPattern";
import {
  binaryauthorization_PolicyClusterAdmissionRule,
  binaryauthorization_PolicyClusterAdmissionRule_GetTypes,
} from "../types/binaryauthorization_PolicyClusterAdmissionRule";
import {
  binaryauthorization_PolicyDefaultAdmissionRule,
  binaryauthorization_PolicyDefaultAdmissionRule_GetTypes,
} from "../types/binaryauthorization_PolicyDefaultAdmissionRule";

export interface PolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A whitelist of image patterns to exclude from admission rules. If an
image's name matches a whitelist pattern, the image's admission
requests will always be permitted regardless of your admission rules.
Structure is documented below.
*/
  admissionWhitelistPatterns?: Array<binaryauthorization_PolicyAdmissionWhitelistPattern>;

  /*
Per-cluster admission rules. An admission rule specifies either that
all container images used in a pod creation request must be attested
to by one or more attestors, that all pod creations will be allowed,
or that all pod creations will be denied. There can be at most one
admission rule per cluster spec.

Identifier format: `{{location}}.{{clusterId}}`.
A location is either a compute zone (e.g. `us-central1-a`) or a region
(e.g. `us-central1`).
Structure is documented below.
*/
  clusterAdmissionRules?: Array<binaryauthorization_PolicyClusterAdmissionRule>;

  /*
Default admission rule for a cluster without a per-cluster admission
rule.
Structure is documented below.
*/
  defaultAdmissionRule?: binaryauthorization_PolicyDefaultAdmissionRule;

  // A descriptive comment.
  description?: string;

  /*
Controls the evaluation of a Google-maintained global admission policy
for common system-level images. Images not covered by the global
policy will be subject to the project admission policy.
Possible values are: `ENABLE`, `DISABLE`.
*/
  globalPolicyEvaluationMode?: string;
}
export class Policy extends Resource {
  /*
Default admission rule for a cluster without a per-cluster admission
rule.
Structure is documented below.
*/
  public defaultAdmissionRule?: binaryauthorization_PolicyDefaultAdmissionRule;

  // A descriptive comment.
  public description?: string;

  /*
Controls the evaluation of a Google-maintained global admission policy
for common system-level images. Images not covered by the global
policy will be subject to the project admission policy.
Possible values are: `ENABLE`, `DISABLE`.
*/
  public globalPolicyEvaluationMode?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
A whitelist of image patterns to exclude from admission rules. If an
image's name matches a whitelist pattern, the image's admission
requests will always be permitted regardless of your admission rules.
Structure is documented below.
*/
  public admissionWhitelistPatterns?: Array<binaryauthorization_PolicyAdmissionWhitelistPattern>;

  /*
Per-cluster admission rules. An admission rule specifies either that
all container images used in a pod creation request must be attested
to by one or more attestors, that all pod creations will be allowed,
or that all pod creations will be denied. There can be at most one
admission rule per cluster spec.

Identifier format: `{{location}}.{{clusterId}}`.
A location is either a compute zone (e.g. `us-central1-a`) or a region
(e.g. `us-central1`).
Structure is documented below.
*/
  public clusterAdmissionRules?: Array<binaryauthorization_PolicyClusterAdmissionRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "admissionWhitelistPatterns",
        "A whitelist of image patterns to exclude from admission rules. If an\nimage's name matches a whitelist pattern, the image's admission\nrequests will always be permitted regardless of your admission rules.\nStructure is documented below.",
        binaryauthorization_PolicyAdmissionWhitelistPattern_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "clusterAdmissionRules",
        "Per-cluster admission rules. An admission rule specifies either that\nall container images used in a pod creation request must be attested\nto by one or more attestors, that all pod creations will be allowed,\nor that all pod creations will be denied. There can be at most one\nadmission rule per cluster spec.\n\nIdentifier format: `{{location}}.{{clusterId}}`.\nA location is either a compute zone (e.g. `us-central1-a`) or a region\n(e.g. `us-central1`).\nStructure is documented below.",
        binaryauthorization_PolicyClusterAdmissionRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultAdmissionRule",
        "Default admission rule for a cluster without a per-cluster admission\nrule.\nStructure is documented below.",
        binaryauthorization_PolicyDefaultAdmissionRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A descriptive comment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalPolicyEvaluationMode",
        "Controls the evaluation of a Google-maintained global admission policy\nfor common system-level images. Images not covered by the global\npolicy will be subject to the project admission policy.\nPossible values are: `ENABLE`, `DISABLE`.",
        [],
        false,
        false,
      ),
    ];
  }
}
