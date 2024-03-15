import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionCommitmentLicenseResource } from "../types/RegionCommitmentLicenseResource";
import { RegionCommitmentResource } from "../types/RegionCommitmentResource";

export interface RegionCommitmentArgs {
  /*
Specifies whether to enable automatic renewal for the commitment.
The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.
*/
  AutoRenew?: boolean;

  /*
The license specification required as part of a license commitment.
Structure is documented below.
*/
  LicenseResource?: RegionCommitmentLicenseResource;

  /*
The plan for this commitment, which determines duration and discount rate.
The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
Possible values are: `TWELVE_MONTH`, `THIRTY_SIX_MONTH`.


- - -
*/
  Plan?: string;

  /*
The type of commitment, which affects the discount rate and the eligible resources.
The type could be one of the following value: `MEMORY_OPTIMIZED`, `ACCELERATOR_OPTIMIZED`,
`GENERAL_PURPOSE_N1`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_E2`,
`GENERAL_PURPOSE_T2D`, `GENERAL_PURPOSE_C3`, `COMPUTE_OPTIMIZED_C2`, `COMPUTE_OPTIMIZED_C2D` and
`GRAPHICS_OPTIMIZED_G2`
*/
  Type?: string;

  /*
The category of the commitment. Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified.
Possible values are: `LICENSE`, `MACHINE`.
*/
  Category?: string;

  // An optional description of this resource.
  Description?: string;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // URL of the region where this commitment may be used.
  Region?: string;

  /*
A list of commitment amounts for particular resources.
Note that VCPU and MEMORY resource commitments must occur together.
Structure is documented below.
*/
  Resources?: Array<RegionCommitmentResource>;
}
export class RegionCommitment extends Resource {
  /*
Specifies whether to enable automatic renewal for the commitment.
The default value is false if not specified.
If the field is set to true, the commitment will be automatically renewed for either
one or three years according to the terms of the existing commitment.
*/
  public AutoRenew?: boolean;

  // Unique identifier for the resource.
  public CommitmentId?: number;

  // An optional description of this resource.
  public Description?: string;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  /*
The plan for this commitment, which determines duration and discount rate.
The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
Possible values are: `TWELVE_MONTH`, `THIRTY_SIX_MONTH`.


- - -
*/
  public Plan?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
A list of commitment amounts for particular resources.
Note that VCPU and MEMORY resource commitments must occur together.
Structure is documented below.
*/
  public Resources?: Array<RegionCommitmentResource>;

  // Commitment start time in RFC3339 text format.
  public StartTimestamp?: string;

  /*
Status of the commitment with regards to eventual expiration
(each commitment has an end date defined).
*/
  public Status?: string;

  // A human-readable explanation of the status.
  public StatusMessage?: string;

  /*
The type of commitment, which affects the discount rate and the eligible resources.
The type could be one of the following value: `MEMORY_OPTIMIZED`, `ACCELERATOR_OPTIMIZED`,
`GENERAL_PURPOSE_N1`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_E2`,
`GENERAL_PURPOSE_T2D`, `GENERAL_PURPOSE_C3`, `COMPUTE_OPTIMIZED_C2`, `COMPUTE_OPTIMIZED_C2D` and
`GRAPHICS_OPTIMIZED_G2`
*/
  public Type?: string;

  /*
The category of the commitment. Category MACHINE specifies commitments composed of
machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE
specifies commitments composed of software licenses, listed in licenseResources.
Note that only MACHINE commitments should have a Type specified.
Possible values are: `LICENSE`, `MACHINE`.
*/
  public Category?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // Commitment end time in RFC3339 text format.
  public EndTimestamp?: string;

  /*
The license specification required as part of a license commitment.
Structure is documented below.
*/
  public LicenseResource?: RegionCommitmentLicenseResource;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // URL of the region where this commitment may be used.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "AutoRenew",
        "Specifies whether to enable automatic renewal for the commitment.\nThe default value is false if not specified.\nIf the field is set to true, the commitment will be automatically renewed for either\none or three years according to the terms of the existing commitment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of commitment, which affects the discount rate and the eligible resources.\nThe type could be one of the following value: `MEMORY_OPTIMIZED`, `ACCELERATOR_OPTIMIZED`,\n`GENERAL_PURPOSE_N1`, `GENERAL_PURPOSE_N2`, `GENERAL_PURPOSE_N2D`, `GENERAL_PURPOSE_E2`,\n`GENERAL_PURPOSE_T2D`, `GENERAL_PURPOSE_C3`, `COMPUTE_OPTIMIZED_C2`, `COMPUTE_OPTIMIZED_C2D` and\n`GRAPHICS_OPTIMIZED_G2`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Category",
        "The category of the commitment. Category MACHINE specifies commitments composed of\nmachine resources such as VCPU or MEMORY, listed in resources. Category LICENSE\nspecifies commitments composed of software licenses, listed in licenseResources.\nNote that only MACHINE commitments should have a Type specified.\nPossible values are: `LICENSE`, `MACHINE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LicenseResource",
        "The license specification required as part of a license commitment.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Plan",
        "The plan for this commitment, which determines duration and discount rate.\nThe currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).\nPossible values are: `TWELVE_MONTH`, `THIRTY_SIX_MONTH`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "URL of the region where this commitment may be used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Resources",
        "A list of commitment amounts for particular resources.\nNote that VCPU and MEMORY resource commitments must occur together.\nStructure is documented below.",
      ),
    ];
  }
}
