import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DataPolicyDataMaskingPolicy } from "../types/DataPolicyDataMaskingPolicy";

export interface DataPolicyArgs {
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
  DataMaskingPolicy?: DataPolicyDataMaskingPolicy;

  // User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  DataPolicyId?: string;

  /*
The enrollment level of the service.
Possible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.


- - -
*/
  DataPolicyType?: string;
}
export class DataPolicy extends Resource {
  /*
The enrollment level of the service.
Possible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.


- - -
*/
  public DataPolicyType?: string;

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
  public DataMaskingPolicy?: DataPolicyDataMaskingPolicy;

  // User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  public DataPolicyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DataPolicyId",
        "User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataPolicyType",
        "The enrollment level of the service.\nPossible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location of the data policy.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyTag",
        "Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataMaskingPolicy",
        "The data masking policy that specifies the data masking rule to use.\nStructure is documented below.",
      ),
    ];
  }
}
