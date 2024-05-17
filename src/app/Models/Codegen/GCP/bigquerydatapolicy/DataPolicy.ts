import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquerydatapolicy_DataPolicyDataMaskingPolicy,
  Bigquerydatapolicy_DataPolicyDataMaskingPolicy_GetTypes,
} from "../types/Bigquerydatapolicy_DataPolicyDataMaskingPolicy";

export interface DataPolicyArgs {
  // User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  DataPolicyId?: string;

  /*
The enrollment level of the service.
Possible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.


- - -
*/
  DataPolicyType?: string;

  // The name of the location of the data policy.
  Location?: string;

  // Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
  PolicyTag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The data masking policy that specifies the data masking rule to use.
Structure is documented below.
*/
  DataMaskingPolicy?: Bigquerydatapolicy_DataPolicyDataMaskingPolicy;
}
export class DataPolicy extends Resource {
  // The name of the location of the data policy.
  public Location?: string;

  // Resource name of this data policy, in the format of projects/{project_number}/locations/{locationId}/dataPolicies/{dataPolicyId}.
  public Name?: string;

  // Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
  public PolicyTag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The data masking policy that specifies the data masking rule to use.
Structure is documented below.
*/
  public DataMaskingPolicy?: Bigquerydatapolicy_DataPolicyDataMaskingPolicy;

  // User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  public DataPolicyId?: string;

  /*
The enrollment level of the service.
Possible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.


- - -
*/
  public DataPolicyType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location of the data policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyTag",
        "Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DataMaskingPolicy",
        "The data masking policy that specifies the data masking rule to use.\nStructure is documented below.",
        Bigquerydatapolicy_DataPolicyDataMaskingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DataPolicyId",
        "User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DataPolicyType",
        "The enrollment level of the service.\nPossible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
