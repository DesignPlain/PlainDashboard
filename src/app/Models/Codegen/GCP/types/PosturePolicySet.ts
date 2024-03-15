import { PosturePolicySetPolicy } from "./PosturePolicySetPolicy";

export interface PosturePolicySet {
  // Description of the policy set.
  Description?: string;

  /*
List of security policy
Structure is documented below.
*/
  Policies?: Array<PosturePolicySetPolicy>;

  // ID of the policy set.
  PolicySetId?: string;
}
